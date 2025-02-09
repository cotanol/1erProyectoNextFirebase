"use client";

import {
  ShoppingCart,
  GraduationCap,
  Search,
  User,
  X,
  Menu,
} from "lucide-react";
import { useState } from "react";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { usePathname } from "next/navigation";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { setModalCart, countItems } = useShoppingCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setModalLogin, user, logout } = useAuth();

  const pathname = usePathname();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log("Searching for:", searchQuery);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/courses", label: "Courses" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden mr-4 text-gray-500 hover:text-gray-700"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            <Link href="/" className="flex items-center flex-shrink-0">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                EduTech
              </span>
            </Link>
          </div>

          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearch} className="w-full relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for courses..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>
          </div>

          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-8">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  href={path}
                  className={`text-gray-700 hover:text-blue-600 ${
                    pathname === path ? "text-blue-600" : ""
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            <button
              onClick={() => setModalCart(true)}
              className="relative p-2 text-gray-700 hover:text-blue-600"
            >
              <ShoppingCart className="h-6 w-6" />
              {countItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {countItems}
                </span>
              )}
            </button>

            <button
              onClick={() => setModalLogin(true)}
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
            >
              {user ? (
                <span onClick={logout}>Logout</span> // Llamamos a la función de logout cuando el usuario hace clic
              ) : (
                <>
                  <User className="h-6 w-6" />
                  <span className="hidden md:inline">Login</span>
                </>
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <form onSubmit={handleSearch} className="mb-4">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for courses..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </form>
              <nav className="hidden md:flex space-x-8">
                {navLinks.map(({ path, label }) => (
                  <Link
                    key={path}
                    href={path}
                    className={`text-gray-700 hover:text-blue-600 ${
                      pathname === path ? "text-blue-600" : ""
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
