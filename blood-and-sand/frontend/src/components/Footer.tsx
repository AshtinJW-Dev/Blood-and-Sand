import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

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
                <div className="mb-4 flex justify-center space-x-4">
                    <Link href="https://www.facebook.com" aria-label="Facebook" className="text-white hover:text-gray-400">
                        <Facebook />
                    </Link>
                    <Link href="https://www.twitter.com" aria-label="Twitter" className="text-white hover:text-gray-400">
                        <Twitter />
                    </Link>
                    <Link href="https://www.instagram.com" aria-label="Instagram" className="text-white hover:text-gray-400">
                        <Instagram />
                    </Link>
                    <Link href="https://www.linkedin.com" aria-label="LinkedIn" className="text-white hover:text-gray-400">
                        <Linkedin />
                    </Link>
                </div>
                <p>&copy; 2025 Blood and Sand. All rights reserved.</p>
                <p>
                    <Link target='blank' href="https://ajwdev.netlify.app/" className="text-white hover:text-gray-400 mx-2" aria-label="AJW">
                           Ashtin Walter
                        </Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;