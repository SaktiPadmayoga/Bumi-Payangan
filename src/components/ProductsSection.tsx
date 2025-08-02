'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Star, Leaf } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import contentData from '@/data/content.json';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  unit: string;
  image: string;
  description: string;
  features: string[];
  nutritions: Record<string, string> | null;
  availability: string;
  shipping: string;
  gallery?: { src: string; caption: string }[];
}

const ProductsSection = () => {
  const { products } = contentData as { products: Product[] };
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  // WhatsApp handler
  const whatsappNumber = '+6285338586207';
  const defaultMessage =
    'Halo! Saya tertarik dengan produk hasil bumi Payangan. Bisa minta informasi lebih lanjut?';

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  // Mock gallery data
  const galleryData: Record<number, { src: string; caption: string }[]> = {
    1: [
      { src: '/images/jambu_pohon1.jpeg', caption: 'Jambu Kristal segar dari kebun' },
      { src: '/images/jambu_hero3.jpeg', caption: 'Tekstur renyah dan manis' },
      { src: '/images/kebun_jambu.jpeg', caption: 'Proses pemetikan organik' },
    ],
    2: [
      { src: '/images/pepaya.webp', caption: 'Pepaya matang sempurna' },
      { src: '/images/pepaya_pohon.jpeg', caption: 'Alami tanpa pengawet' },
      { src: '/images/pohon_pepaya2.jpeg', caption: 'Langsung dari petani' },
    ],
    3: [
      { src: '/images/pohon_kelapa.jpeg', caption: 'Langsung dari petani' },
      { src: '/images/kelapa_utuh.jpeg', caption: 'Alami tanpa pengawet' },
      { src: '/images/kelapa_kupas.jpeg', caption: 'Dikupas siap minum' },
    ],
    4: [
      { src: '/images/mitir_banyak.jpeg', caption: 'Bunga Gemitir segar' },
      { src: '/images/pacah_hero.jpeg', caption: 'Segar untuk upacara adat Bali' },
      { src: '/images/pohon_pacah.jpeg', caption: 'Wangi alami' },
    ],
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-lime-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-28">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-lime-100 text-lime-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Leaf size={16} />
            <span>Produk Unggulan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Hasil Bumi <span className="text-lime-600">Unggulan</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kami hadirkan kesegaran alami dari jambu kristal, pepaya, pisang dan kelapa muda, lengkap dengan olahan sehat dari jambu dan pepaya yang sehat dan lezat.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedProduct(product.id)}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer relative group"
            >
              {/* Product Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-lime-700">
                  {product.category === 'buah-segar' ? '🍃 Buah Segar' : product.category === 'bunga' ? '🌸 Segar' : ''}
                </div>
                {/* Premium Badge */}
                <div className="absolute top-4 right-4 bg-yellow-400 rounded-full p-2">
                  <Star size={12} className="text-white fill-current" />
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed text-justify">{product.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {product.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-lime-500 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => {
                      e.stopPropagation(); // jangan close modal
                      handleWhatsAppClick();
                    }}
                    className="w-full bg-gradient-to-r from-lime-500 to-lime-600 text-white py-2 rounded-xl font-semibold hover:from-lime-600 hover:to-lime-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Pesan Sekarang
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full-screen Gallery Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4 sm:px-8"
              onClick={() => setSelectedProduct(null)}
            >
              <div
                className="w-full max-w-4xl mx-auto max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()} // Prevent clicks inside gallery from closing it
              >
                <h3 className="text-white text-xl sm:text-2xl font-bold mb-6 text-center">
                  {products.find((p) => p.id === selectedProduct)?.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {galleryData[selectedProduct].map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative"
                    >
                      <Image
                        src={img.src}
                        alt={img.caption}
                        width={400}
                        height={400}
                        className="object-cover rounded-lg w-full h-[300px] sm:h-[400px]"
                      />
                      <p className="text-white text-xs sm:text-sm mt-2 text-center">{img.caption}</p>
                    </motion.div>
                  ))}
                </div>
                <button
                  className="absolute top-4 right-4 text-white text-xl sm:text-2xl"
                  onClick={() => setSelectedProduct(null)}
                >
                  ✕
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-[url('/images/herofix.png')] bg-no-repeat bg-center bg-cover rounded-2xl text-white">
            <div className="bg-gradient-to-t from-lime-700/70 to-lime-900/70 rounded-xl p-8 py-24">
              <h3 className="text-2xl font-bold mb-4">Butuh Pesanan Dalam Jumlah Besar?</h3>
              <p className="text-lime-100 mb-6 max-w-2xl mx-auto">
                Kami melayani pemesanan grosir dengan harga khusus untuk restoran, hotel, dan kebutuhan acara. Hubungi tim kami untuk penawaran terbaik.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsAppClick}
                className="bg-white text-lime-600 px-8 py-3 rounded-full font-semibold hover:bg-lime-50 transition-colors duration-200"
              >
                Hubungi untuk Grosir
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;