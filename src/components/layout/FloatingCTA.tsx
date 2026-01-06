'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, X, Facebook } from 'lucide-react';
import { toast } from 'sonner';

const FloatingCTA = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);
    const handleHotlineClick = () => {
        toast.success('Đang kết nối tới hotline: 078 668 8149', {
            description: 'Chuyên viên tư vấn sẽ hỗ trợ bạn ngay.',
        });
    };

    const ctaLinks = [
        {
            icon: <Phone className="w-5 h-5" />,
            label: 'Hotline',
            href: 'tel:+84786688149',
            color: 'bg-green-500',
        },
        {
            icon: <Facebook className="w-5 h-5" />,
            label: 'Facebook',
            href: 'https://www.facebook.com/xalomedia.vn',
            color: 'bg-blue-600',
        },

    ];

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="flex flex-col items-end gap-3 mb-2"
                    >
                        {ctaLinks.map((link, idx) => (
                            <motion.a
                                key={idx}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                onClick={link.label === 'Hotline' ? handleHotlineClick : undefined}
                                className="flex items-center gap-3 group"
                            >
                                <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-black text-gray-900 shadow-xl border border-white/50 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    {link.label}
                                </span>
                                <div className={`${link.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-gray-400/20 hover:scale-110 transition-transform active:scale-95`}>
                                    {link.icon}
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={toggleOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-16 h-16 rounded-[24px] flex items-center justify-center text-white shadow-2xl transition-all duration-300 ${isOpen
                    ? 'bg-gray-900 rotate-90'
                    : 'bg-digital-blue shadow-blue-500/40 hover:shadow-blue-500/60'
                    }`}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                        >
                            <X className="w-8 h-8" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ opacity: 0, rotate: 90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: -90 }}
                        >
                            <MessageCircle className="w-8 h-8" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
};

export default FloatingCTA;
