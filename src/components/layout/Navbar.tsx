"use client";

import Link from 'next/link';
import { useState } from 'react';
import Container from '../common/Container';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Blog', href: '/blog' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <Container>
                <div className="flex h-20 items-center justify-between">
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                        <div className='w-12 h-12 me-2'>
                            <img src="https://www.xalomedia.vn/_next/image?url=https%3A%2F%2Fnarcrmfhjtzhkasmgfkx.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fsite_assets%2Fpublic%2F0.090484650443861.png&w=96&q=75" alt="" />
                        </div>
                            <span className="text-2xl font-black tracking-tighter text-gray-900">xalo</span>
                            <span className="text-2xl font-black tracking-tighter text-digital-blue">.media</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="flex items-baseline space-x-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="px-4 py-2 text-[15px] font-semibold text-gray-600 hover:text-digital-blue transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <Link
                            href="/contact"
                            className="px-6 py-2.5 bg-digital-blue text-white font-bold rounded-lg text-sm hover:bg-blue-600 transition-all shadow-md shadow-blue-200"
                        >
                            Tư vấn miễn phí
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-200">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
