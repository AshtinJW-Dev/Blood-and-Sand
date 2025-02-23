import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto text-center">
                <div className="mb-4">
                    <Link href="/" className="text-white hover:text-gray-400 mx-2">Home</Link>
                    <Link href="/about" className="text-white hover:text-gray-400 mx-2">About</Link>
                    <Link href="/pages/profile" className="text-white hover:text-gray-400 mx-2">Profile</Link>
                    <Link href="/contact" className="text-white hover:text-gray-400 mx-2">Contact</Link>
                </div>
                <div className="mb-4">
                    <Link href="https://www.facebook.com" className="text-white hover:text-gray-400 mx-2" aria-label="Facebook">
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link href="https://www.twitter.com" className="text-white hover:text-gray-400 mx-2" aria-label="Twitter">
                        <i className="fab fa-twitter"></i>
                    </Link>
                    <Link href="https://www.instagram.com" className="text-white hover:text-gray-400 mx-2" aria-label="Instagram">
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <Link href="https://www.linkedin.com" className="text-white hover:text-gray-400 mx-2" aria-label="LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                    </Link>
                </div>
                <p>&copy; 2025 Blood and Sand. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;