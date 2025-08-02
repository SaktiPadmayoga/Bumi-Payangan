'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      id: 1,
      question: 'Apa saja produk yang ditawarkan oleh petani Payangan?',
      answer: 'Kami menawarkan berbagai hasil bumi organik seperti jambu kristal, pepaya, kelapa, bunga gemitir dan pacah, semua ditanam dan diproses secara alami oleh petani lokal Payangan.'
    },
    {
      id: 2,
      question: 'Apakah semua produk dari Payangan benar-benar organik?',
      answer: 'Ya, semua produk kami 100% organik. Petani Payangan menggunakan metode pertanian alami tanpa pestisida atau bahan kimia sintetis untuk memastikan kualitas dan kesehatan.'
    },
    {
      id: 3,
      question: 'Bagaimana cara petani Payangan memastikan kualitas produk?',
      answer: 'Petani kami bekerja sama dalam kelompok untuk memantau proses penanaman, panen, dan pengolahan. Setiap produk diperiksa secara ketat untuk memenuhi standar kualitas organik.'
    },
    {
      id: 4,
      question: 'Apakah ada minimum pembelian untuk produk dari Payangan?',
      answer: 'Tidak ada minimum pembelian. Anda bisa memesan sesuai kebutuhan, mulai dari satu unit produk hingga grosir.'
    },
    {
      id: 5,
      question: 'Bagaimana cara menghubungi tim petani Payangan untuk pertanyaan lebih lanjut?',
      answer: 'Anda dapat menghubungi kami melalui WhatsApp. Tim kami tersedia 24/7 untuk membantu menjawab pertanyaan tentang produk atau pemesanan.'
    }
  ];

  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-lime-100 text-lime-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HelpCircle size={16} />
            <span>Frequently Asked Questions</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Pertanyaan yang 
            <span className="text-lime-600"> Sering Ditanyakan</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Temukan jawaban untuk pertanyaan umum tentang hasil bumi organik dari petani Payangan.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openItems.includes(faq.id) ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    {openItems.includes(faq.id) ? (
                      <Minus size={24} className="text-lime-600" />
                    ) : (
                      <Plus size={24} className="text-gray-400" />
                    )}
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openItems.includes(faq.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;