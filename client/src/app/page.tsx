'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';
        const [prodRes, catRes] = await Promise.all([
          axios.get(`${apiUrl}/products`),
          axios.get(`${apiUrl}/categories`)
        ]);
        // Only show first 4 products on homepage
        setFeaturedProducts(prodRes.data.slice(0, 4));
        setCategories(catRes.data);
      } catch (err) {
        console.error('Failed to fetch home data', err);
      } finally {
        setLoading(false);
      }
    };
    fetchHomeData();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-20">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Sukhdev Pandey</span>{' '}
                  <span className="block text-green-600 xl:inline">Khad Beej Bhandar</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Premium quality agricultural supplies, fertilizers, and seeds to ensure your farm yields the highest possible return. Trusted by farmers across the region.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link href="/products" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg">
                      View Products
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-green-50">
          <div className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center text-green-200 text-9xl">
            🌱
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      {!loading && categories.length > 0 && (
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((cat: any) => (
                <div key={cat._id} className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow">
                  {cat.image?.url ? (
                    <img src={cat.image.url} alt={cat.name} className="w-20 h-20 mx-auto rounded-full object-cover mb-4" />
                  ) : (
                    <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center text-green-500 text-2xl mb-4">🌾</div>
                  )}
                  <h3 className="font-bold text-gray-900">{cat.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Featured Products */}
      {!loading && featuredProducts.length > 0 && (
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-8">
              <h2 className="text-3xl font-extrabold text-gray-900">Featured Products</h2>
              <Link href="/products" className="text-green-600 font-medium hover:text-green-800">
                View all &rarr;
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product: any) => (
                <div key={product._id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-200">
                    {product.image?.url && (
                      <img src={product.image.url} alt={product.title} className="w-full h-full object-cover" />
                    )}
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-green-600 font-semibold mb-1">{product.category?.name}</p>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 truncate">{product.title}</h3>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-xl font-black text-gray-900">₹{product.price}</span>
                      <span className="text-sm text-gray-500">{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
