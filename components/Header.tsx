/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Menu, X } from "lucide-react";
import CartSidebar from "./CartSidebar";
import { cartStore } from "@/store/cartStore";
import { observer } from "mobx-react-lite";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Why Mitray", href: "/why-mitray" },
    { name: "Export", href: "/export" },
    { name: "Contact", href: "/contact" },

  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCart = () =>{ 
    cartStore.setCartOpen(!cartStore?.isCartOpen);}

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/1000408722.png"
                alt="Mitray Logo"
                className="w-12 h-12 object-contain"
              />
              <span className="text-2xl font-bold text-orange-600">Mitray</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-lg font-medium transition-colors duration-200 hover:text-orange-600 ${
                    pathname === item.href
                      ? "text-orange-600 border-b-2 border-orange-600"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Cart Icon */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleCart}
                className="relative p-2 text-gray-700 hover:text-orange-600 transition-colors"
              >
                <ShoppingCart className="w-6 h-6" />
                {cartStore?.itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                    {cartStore?.itemCount}
                  </span>
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 text-gray-700 hover:text-orange-600"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-2 text-lg font-medium transition-colors duration-200 hover:text-orange-600 hover:bg-orange-50 rounded-md ${
                      pathname === item.href
                        ? "text-orange-600 bg-orange-50"
                        : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
          
      <CartSidebar isOpen={cartStore?.isCartOpen} onClose={() => cartStore.setCartOpen(false)} />
    </>
  );
};

export default observer(Header);
