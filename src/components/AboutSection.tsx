'use client';

import { motion } from 'framer-motion';
import { Leaf, Target, Eye, Users, Flower2, Home } from 'lucide-react';


const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-lime-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-lime-100 text-lime-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Leaf size={16} />
            <span>Tentang Kami</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Hasil Bumi dari
            <span className="text-lime-600"> Petani Payangan</span>
          </h2>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-lime-50 to-white rounded-3xl p-8 lg:p-12">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Kami adalah kumpulan petani dari Payangan, Tabanan, Bali yang bersatu untuk menghadirkan hasil bumi berkualitas tinggi langsung dari kebun kami. Dengan semangat gotong royong, kami menanam, merawat, dan memanen produk organik yang mencerminkan kekayaan alam Payangan, demi mendukung kehidupan sehat dan lestari.
            </p>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 px-8 md:mx-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center">
                <Target size={24} className="text-lime-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Misi Kami</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-justify">
              Memberdayakan petani Payangan untuk menghasilkan produk pertanian organik berkualitas, mendukung ekonomi lokal, dan mempromosikan gaya hidup sehat melalui hasil bumi yang alami dan berkelanjutan.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center">
                <Eye size={24} className="text-lime-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Visi Kami</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-justify">
              Menjadikan Payangan sebagai pusat hasil bumi organik yang dikenal secara nasional, dengan mempertahankan tradisi pertanian lokal dan meningkatkan kesejahteraan komunitas petani.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nilai-Nilai <span className="text-lime-600">Kami</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: 'Gotong Royong',
                description: 'Kami bekerja bersama sebagai komunitas petani untuk menghasilkan yang terbaik dari bumi Payangan.'
              },
              {
                icon: Leaf,
                title: 'Kualitas Organik',
                description: 'Setiap produk kami ditanam tanpa bahan kimia, menjaga kemurnian dan kesehatan.'
              },
              {
                icon: Flower2,
                title: 'Keberlanjutan',
                description: 'Kami menjaga kelestarian alam Payangan untuk generasi mendatang.'
              },
              {
                icon: Home,
                title: 'Pemberdayaan Lokal',
                description: 'Kami mendukung petani lokal untuk tumbuh dan berkembang bersama.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-gradient-to-br from-lime-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon size={24} className="text-lime-600" />
                  
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;