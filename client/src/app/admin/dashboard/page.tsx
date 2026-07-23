'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState<{ email: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('adminToken');
      
      if (!token) {
        router.push('/admin/login');
        return;
      }

      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
        const { data } = await axios.get(`${apiUrl}/auth/profile`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setAdmin(data);
        setLoading(false);
      } catch (err) {
        console.error('Auth failed', err);
        localStorage.removeItem('adminToken');
        router.push('/admin/login');
      }
    };

    fetchProfile();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-xl font-semibold text-green-700 animate-pulse">Loading secure dashboard...</div>
      </div>
    );
  }

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Top Navbar */}
      <nav className="bg-green-800 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-green-800 font-bold text-sm">
                PT
              </div>
              <span className="font-semibold text-lg tracking-wide">Admin Portal</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-green-200 hidden sm:block">Logged in as {admin?.email}</span>
              <button 
                onClick={handleLogout}
                className="bg-green-700 hover:bg-green-600 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-10">
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        </header>
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Dashboard Stats Grid Placeholder */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg border-t-4 border-green-500">
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Products</dt>
                  <dd className="mt-1 text-3xl font-semibold text-gray-900">0</dd>
                </dl>
              </div>
            </div>
            
            <div className="bg-white overflow-hidden shadow rounded-lg border-t-4 border-blue-500">
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Categories</dt>
                  <dd className="mt-1 text-3xl font-semibold text-gray-900">0</dd>
                </dl>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg border-t-4 border-purple-500">
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">New Inquiries</dt>
                  <dd className="mt-1 text-3xl font-semibold text-gray-900">0</dd>
                </dl>
              </div>
            </div>
          </div>

          {/* Quick Actions Placeholder */}
          <div className="mt-8">
            <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">Inventory Management</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <button onClick={() => router.push('/admin/dashboard/categories')} className="bg-white shadow rounded-lg p-6 text-center hover:bg-green-50 border-2 border-transparent hover:border-green-500 transition-all cursor-pointer">
                <span className="block text-xl font-bold text-green-700 mb-2">Manage Categories</span>
                <span className="text-sm text-gray-500">Create, edit, and delete product categories.</span>
              </button>
              
              <button onClick={() => router.push('/admin/dashboard/products')} className="bg-white shadow rounded-lg p-6 text-center hover:bg-blue-50 border-2 border-transparent hover:border-blue-500 transition-all cursor-pointer">
                <span className="block text-xl font-bold text-blue-700 mb-2">Manage Products</span>
                <span className="text-sm text-gray-500">Upload product images, set pricing and stock.</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
