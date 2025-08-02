'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Leaf } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Produk', href: '#products' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Testimoni', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontak', href: '#contact' },
  ];

  const products = [
    { name: 'Jambu Kristal', href: '#products' },
    { name: 'Pepaya', href: '#products' },
    { name: 'Kelapa', href: '#products' },
    { name: 'Bunga Gemitir dan Pacah', href: '#products' },
  ];

  return (
    <footer className="bg-gradient-to-br from-lime-800 to-lime-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src="images/logo-light.png" alt="Bumi Payangan Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Bumi Payangan</h3>
                <p className="text-lime-300 text-sm">Langsung dari Petani Payangan, Bali.</p>
              </div>
            </div>
            
            <p className="text-lime-100 leading-relaxed text-justify">
              Kami adalah komunitas petani Payangan yang menyediakan hasil bumi organik seperti 
              jambu kristal, pepaya, kelapa muda, bunga gemitir dan bunga pacah, langsung dari 
              kebun untuk menjaga kelezatan dan kesegaran.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold">Navigasi</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-lime-100 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold">Produk Kami</h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.name}>
                  <a
                    href={product.href}
                    className="text-lime-100 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold">Hubungi Kami</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-lime-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lime-100">+62 853-3858-6207</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-lime-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lime-100">Desa Payangan, Kec. Marga, Kabupaten Tabanan</p>
                  <p className="text-lime-100">Bali, Indonesia</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-lime-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-lime-300 text-sm">
              © 2025 Bumi Payangan. Semua hak dilindungi.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-lime-300 hover:text-white transition-colors duration-200">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-lime-300 hover:text-white transition-colors duration-200">
                Syarat & Ketentuan
              </a>
              <a href="#" className="text-lime-300 hover:text-white transition-colors duration-200">
                FAQ
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;