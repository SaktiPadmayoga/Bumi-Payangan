'use client';

import { motion } from 'framer-motion';
import { Phone, MapPin, Leaf } from 'lucide-react';

const ContactSection = () => {
    const farmers = [
        {
            name: 'I WAYAN SUARDIKAYASA/ WAYAN PRADA BALI',
            role: 'Koordinator Petani Bumi Payangan',
            phone: '+62 853-3858-6207',
            location: 'Desa Payangan, Tabanan, Bali',
        },
    ];

    const whatsappNumber = '+6285338586207';
    const defaultMessage = 'Halo! Saya tertarik dengan produk hasil bumi Payangan. Bisa minta informasi lebih lanjut?';

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
        window.open(url, '_blank');
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
                        <span>Hubungi Kami</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Terhubung dengan
                        <span className="text-lime-600"> Petani Payangan</span>
                    </h2>

                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Kami adalah komunitas petani Payangan yang siap menjawab pertanyaan Anda tentang hasil bumi organik kami, seperti jambu kristal, pepaya, kelapa, bunga gemitir, dan bunga pacah.
                    </p>
                </motion.div>

                {/* Content Grid: Contact + CTA */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Kontak Petani */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-6 "
                    >
                        
                        <div className="space-y-6">
                            {farmers.map((farmer, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 * index }}
                                    className="bg-gradient-to-br from-lime-50 to-white rounded-2xl p-8 shadow-lg flex flex-col space-y-4 md:h-72"
                                >
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Kontak Petani Kami</h3>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900">{farmer.name}</h4>
                                        <p className="text-lime-600 text-lg">{farmer.role}</p>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center space-x-3">
                                            <Phone size={18} className="text-lime-500 flex-shrink-0" />
                                            <p className="text-gray-700 ">{farmer.phone}</p>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <MapPin size={18} className="text-lime-500 flex-shrink-0" />
                                            <p className="text-gray-700">{farmer.location}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex items-center"
                    >
                        <div className="bg-gradient-to-r from-lime-500 to-lime-600 rounded-2xl p-8 text-white w-full md:h-72">
                            <h3 className="text-2xl font-bold mb-4">Bergabung dengan Komunitas Petani Payangan</h3>
                            <p className="text-lime-100 mb-6 max-w-2xl">
                                Ingin tahu lebih banyak tentang hasil bumi organik kami atau berminat menjadi mitra?
                                Hubungi kami sekarang untuk informasi lebih lanjut!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleWhatsAppClick}
                                    className="bg-white text-lime-600 px-8 py-3 rounded-full font-semibold hover:bg-lime-50 transition-colors duration-200 flex items-center justify-center space-x-2"
                                >
                                    <span>💬</span>
                                    <span>Chat WhatsApp</span>
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;