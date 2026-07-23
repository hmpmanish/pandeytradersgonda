'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function PublicProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';
        const [prodRes, catRes] = await Promise.all([
          axios.get(`${apiUrl}/products`),
          axios.get(`${apiUrl}/categories`)
        ]);
        setProducts(prodRes.data);
        setCategories(catRes.data);
      } catch (err) {
        console.error('Failed to fetch data', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredProducts = selectedCategory 
    ? products.filter((p: any) => p.category?._id === selectedCategory)
    : products;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Our Products</h1>
        <p className="mt-4 text-xl text-gray-500">Premium agricultural supplies for your farm.</p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button 
          onClick={() => setSelectedCategory('')}
          className={`px-6 py-2 rounded-full font-medium transition-colors ${selectedCategory === '' ? 'bg-green-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'}`}
        >
          All Products
        </button>
        {categories.map((cat: any) => (
          <button
            key={cat._id}
            onClick={() => setSelectedCategory(cat._id)}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${selectedCategory === cat._id ? 'bg-green-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'}`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="text-center text-gray-500 py-12">
          No products found in this category.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product: any) => (
            <div key={product._id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 h-64">
                {product.image?.url ? (
                  <img src={product.image.url} alt={product.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-green-50 text-green-200">
                    No Image
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{product.title}</h3>
                    <p className="text-sm text-green-600 font-medium mb-3">{product.category?.name || 'General'}</p>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-black text-gray-900">₹{product.price}</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium text-sm">
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
