'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Siti Aminah',
      comment: 'Jambu kristalnya manis dan segar, kualitas terbaik dari kebun Payangan!',
      product: 'Jambu Kristal',
      rating: 5,
    },
    {
      id: 2,
      name: 'Budi Santoso',
      comment: 'Pepayanya manis dan berair, rasanya alami dan sangat memuaskan.',
      product: 'Pepaya',
      rating: 5,
    },
    {
      id: 3,
      name: 'Rina Wulandari',
      comment: 'Kelapa mudanya segar, airnya manis dan dagingnya lembut, luar biasa!',
      product: 'Kelapa Muda',
      rating: 5,
    },
    {
      id: 4,
      name: 'Agus Pratama',
      comment: 'Bunga gemitirnya harum dan indah, cocok untuk dekorasi atau hadiah spesial.',
      product: 'Bunga Gemitir',
      rating: 5,
    },
    {
      id: 5,
      name: 'Lina Marlina',
      comment: 'Bunga pacahnya cantik dan tahan lama, menambah keindahan di setiap kesempatan.',
      product: 'Bunga Pacah',
      rating: 5,
    },
    {
      id: 6,
      name: 'Dewi Lestari',
      comment: 'Jambu kristalnya renyah dan manis, produk alami yang selalu jadi favorit!',
      product: 'Jambu Kristal',
      rating: 5,
    },
  ];

  // WhatsApp handler
  const whatsappNumber = '+6285338586207';
  const defaultMessage =
    'Halo! Saya tertarik dengan produk hasil bumi Payangan. Bisa minta informasi lebih lanjut?';

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star size={16} className="fill-current" />
            <span>Testimoni Pelanggan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Apa Kata <span className="text-lime-600">Pelanggan Kami?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kepuasan pelanggan adalah prioritas utama kami. Berikut testimoni dari pelanggan yang
            telah menikmati hasil bumi organik dari petani Payangan.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-lime-600 mb-2">500+</div>
            <div className="text-gray-600">Pelanggan Puas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-500 mb-2">4.9</div>
            <div className="text-gray-600">Rating Rata-rata</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Repeat Order</div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-lime-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-lime-200">
                <Quote size={32} className="fill-current" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">{renderStars(testimonial.rating)}</div>

              {/* Comment */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">“{testimonial.comment}”</p>

              {/* Product */}
              <div className="bg-lime-100 text-lime-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                {testimonial.product}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-[url('/images/orang.png')] bg-no-repeat bg-center bg-cover rounded-2xl text-white">
            <div className="bg-gradient-to-t from-lime-700/70 to-lime-900/70 rounded-xl p-8 py-24">
              <h3 className="text-2xl font-bold mb-4">Bergabunglah dengan Pelanggan Puas Kami!</h3>
              <p className="text-lime-100 mb-6 max-w-2xl mx-auto">
                Nikmati hasil bumi organik seperti jambu kristal, pepaya, kelapa muda, bunga gemitir, dan bunga pacah dari petani Payangan.
                Dapatkan diskon untuk pembelian secara grosir!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleWhatsAppClick}
                  className="bg-white text-lime-600 px-8 py-3 rounded-full font-semibold hover:bg-lime-50 transition-colors duration-200"
                >
                  Pesan Sekarang
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
