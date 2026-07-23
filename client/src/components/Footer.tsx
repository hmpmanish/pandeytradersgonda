import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t-4 border-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Pandey Traders</h3>
            <p className="text-gray-400">Sukhdev Pandey Khad Beej Bhandar</p>
            <p className="text-gray-400 mt-2">Serving farmers with pride and authenticity.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400">📍 Gonda, Uttar Pradesh</p>
            <p className="text-gray-400">📞 +91 XXXXXXXXXX</p>
            <p className="text-gray-400">✉️ info@pandeytraders.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/admin/login" className="text-green-500 hover:text-green-400">Admin Login</Link>
              <span className="text-gray-400 cursor-not-allowed">Privacy Policy</span>
              <span className="text-gray-400 cursor-not-allowed">Terms of Service</span>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Pandey Traders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
