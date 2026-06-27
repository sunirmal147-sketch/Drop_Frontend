'use client';

import Link from 'next/link';
import { useAuthStore } from '../store/authStore';
import { ShoppingCart, User, LogOut } from 'lucide-react';

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuthStore();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold tracking-tighter text-white">
            DROP
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <Link href="/categories" className="hover:text-white transition-colors">Categories</Link>
            <Link href="/deals" className="hover:text-white transition-colors">Deals</Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/cart" className="p-2 text-gray-300 hover:text-white transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </Link>
          
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400 hidden sm:inline-block">
                Hi, {user?.name?.split(' ')[0]}
              </span>
              <button 
                onClick={() => logout()}
                className="p-2 text-gray-300 hover:text-white transition-colors"
                title="Logout"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link 
                href="/login" 
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Log in
              </Link>
              <Link 
                href="/register" 
                className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
