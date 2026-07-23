import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold tracking-wider">
              Pandey Traders
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-green-200 transition-colors">Home</Link>
            <Link href="/products" className="hover:text-green-200 transition-colors">Products</Link>
            <Link href="/#about" className="hover:text-green-200 transition-colors">About Us</Link>
            <Link href="/#contact" className="hover:text-green-200 transition-colors">Contact</Link>
          </div>
          <div className="md:hidden flex items-center">
            {/* Mobile menu button could go here */}
            <span className="text-sm">Menu</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
