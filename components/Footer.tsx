/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-orange-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <img
                  src="/1000408722.png"
                  alt="Mitray Logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-2xl font-bold">Mitray</span>
            </div>
            <p className="text-orange-100 mb-4 leading-relaxed">
              Pure, traditional, and organic products from our cow shala.
              We believe in maintaining the age-old methods of production
              while ensuring the highest quality standards.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-orange-100">+91 9265571740</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-orange-100 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-orange-100 hover:text-white transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/why-mitray"
                  className="text-orange-100 hover:text-white transition-colors"
                >
                  Why Mitray
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-orange-100 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-orange-100 text-sm">
                  Village Dholara,
                  <br />
                  Dist. Rajkot, Gujrat 241001
                </span>
              </div>
              <a href="tel:+919265571740" className="flex items-center space-x-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-orange-100 text-sm">+91 9265571740</span>
              </a>
              <a href="mailto:mitraygir2025@gmail.com" className="flex items-center space-x-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-orange-100 text-sm">mitraygir2025@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-700 mt-8 pt-8 text-center">
          <p className="text-orange-100 text-sm">
            © {currentYear} Mitray Cow Shala. All rights reserved. Made with
            love for pure dairy products.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
