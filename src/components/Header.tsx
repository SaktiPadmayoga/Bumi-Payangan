'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Beranda', href: '#home' },
    { name: 'Produk', href: '#products' },
    { name: 'Tentang', href: '#about' },
    { name: 'Testimoni', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontak', href: '#contact' },
  ];

  const whatsappNumber = '+6285338586207';
  const defaultMessage = 'Halo! Saya tertarik dengan produk hasil bumi Payangan. Bisa minta informasi lebih lanjut?';

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  // Custom scroll handler for mobile navigation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); // Prevent default anchor behavior
    setIsMenuOpen(false); // Close the mobile menu

    // Extract the section ID from href (e.g., "#home" -> "home")
    const sectionId = href.substring(1);
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      // Calculate offset to account for fixed header (adjust 80px based on header height)
      const headerOffset = 80;
      const sectionPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = sectionPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <img src="images/logo.png" alt="" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-lime-800">Bumi Payangan</h1>
              <p className="text-xs text-lime-600">Fresh from Tabanan, Bali.</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-gray-700 hover:text-lime-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppClick}
              className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-lime-500 to-lime-600 text-white rounded-full hover:from-lime-600 hover:to-lime-700 transition-all duration-200"
            >
              <Phone size={16} />
              <span>Pesan Sekarang</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-lime-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? 'auto' : 0 }}
          className="lg:hidden overflow-hidden bg-white rounded-lg shadow-lg mt-2"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-4 py-2 text-gray-700 hover:text-lime-600 hover:bg-lime-50 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 pt-4 space-y-2">
              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center space-x-2 px-6 py-2 bg-gradient-to-r from-lime-500 to-lime-600 text-white rounded-full hover:from-lime-600 hover:to-lime-700 transition-all duration-200"
              >
                <Phone size={16} />
                <span>Pesan Sekarang</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;