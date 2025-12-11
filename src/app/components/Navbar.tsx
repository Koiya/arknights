'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    ['Home', '/']
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden md:flex fixed left-0 top-0 h-screen w-64 bg-neutral-800 border-r border-neutral-700 flex-col z-50 text-white">
        {/* Logo */}
        <div className="p-6 border-b border-neutral-700">
          <Link href="/" className="flex items-center">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold">Placeholder</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 px-4 py-6 space-y-2">
          {navItems.map(([title, url]) => (
            <Link
              href={url}
              className="hover:bg-[#303131] hover:text-white px-4 py-3 rounded-md text-sm font-medium transition-colors block"
              key={title}
            >
              {title}
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-neutral-700">
          <div className="flex gap-4 flex-wrap items-center justify-center">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              <span className="text-sm">X</span>
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/window.svg"
                alt="Window icon"
                width={16}
                height={16}
              />
              <span className="text-sm">X</span>
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/globe.svg"
                alt="Globe icon"
                width={16}
                height={16}
              />
              <span className="text-sm">X</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Top Navbar */}
      <nav className="md:hidden bg-[#11abd8] border-b border-gray-700 sticky top-0 z-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <span className="text-[#303131] text-xl font-bold">Arknights Guide</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div>
              <button
                onClick={toggleMenu}
                className="text-[#303131] hover:bg-[#303131] hover:text-white p-2 rounded-md transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="pb-4">
              <div className="px-2 pt-2 space-y-1">
                {navItems.map(([title, url]) => (
                  <Link
                    href={url}
                    className="text-[#303131] hover:bg-[#303131] hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                    key={title}
                  >
                    {title}
                  </Link>
                ))}
              </div>
              
              {/* Footer in Mobile Menu */}
              <div className="px-2 pt-4 mt-4 border-t border-gray-700">
                <div className="flex gap-4 flex-wrap items-center justify-center">
                  <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Image
                      aria-hidden
                      src="/file.svg"
                      alt="File icon"
                      width={16}
                      height={16}
                    />
                    <span className="text-[#303131] text-sm">X</span>
                  </a>
                  <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Image
                      aria-hidden
                      src="/window.svg"
                      alt="Window icon"
                      width={16}
                      height={16}
                    />
                    <span className="text-[#303131] text-sm">X</span>
                  </a>
                  <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Image
                      aria-hidden
                      src="/globe.svg"
                      alt="Globe icon"
                      width={16}
                      height={16}
                    />
                    <span className="text-[#303131] text-sm">X</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
