'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Heart, Star } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  const features = [
    { icon: Leaf, text: 'Produk Organik' },
    { icon: Heart, text: 'Segar & Sehat' },
    { icon: Star, text: 'Kualitas Terjamin' },
  ];

  const whatsappNumber = '+6285338586207';
  const defaultMessage = 'Halo! Saya tertarik dengan produk hasil bumi Payangan. Bisa minta informasi lebih lanjut?';

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  const scrollToProducts = () => {
    const section = document.getElementById('products');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-lime-100 via-white to-lime-100 pt-10"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-lime-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-lime-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-lime-500 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Heading */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-lime-100 text-lime-800 px-4 py-2 rounded-full text-sm font-medium"
              >
                <Leaf size={16} />
                <span>Langsung dari Petani Lokal</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              >
                <span className="text-lime-600">Bumi Payangan</span>
                <br />
                Segar, Sehat, Alami
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-lg text-gray-600 leading-relaxed max-w-lg"
              >
                Temukan berbagai produk segar dan olahan berkualitas dari petani lokal. Dari buah segar seperti jambu kristal, pepaya, hingga camilan sehat dan kombucha alami.
              </motion.p>
            </div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-6"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-700">
                  <div className="w-8 h-8 bg-lime-100 rounded-full flex items-center justify-center">
                    <feature.icon size={16} className="text-lime-600" />
                  </div>
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsAppClick}
                className="relative z-10 flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-lime-500 to-lime-600 text-white rounded-full font-semibold text-lg hover:from-lime-600 hover:to-lime-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span>Pesan Sekarang</span>
                <ArrowRight size={20} />
              </motion.button>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProducts}
                className="relative z-10 flex items-center justify-center space-x-2 px-8 py-4 border-2 border-lime-600 text-lime-600 rounded-full font-semibold text-lg hover:bg-lime-50 transition-all duration-200 cursor-pointer"
              >
                <span>Lihat Semua Produk</span>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-lime-600">1000+</div>
                <div className="text-sm text-gray-600">Pelanggan Puas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-lime-600">100%</div>
                <div className="text-sm text-gray-600">Produk Alami</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-lime-600">Rp</div>
                <div className="text-sm text-gray-600">Harga Terjangkau</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <Image
                  src="/images/herofix.png"
                  alt="Produk Pawon Payangan"
                  width={600}
                  height={900}
                  className="rounded-3xl shadow-2xl object-cover"
                  priority
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 blur-sm pointer-events-none"
              ></motion.div>

              <motion.div
                animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-lime-400 to-lime-600 rounded-full opacity-70 blur-sm pointer-events-none"
              ></motion.div>

              {/* Quality Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: 'spring' }}
                className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <Star className="text-yellow-500 fill-current" size={20} />
                  <span className="font-bold text-gray-800">Kualitas Terbaik</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
