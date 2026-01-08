'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Facebook } from 'lucide-react';
import { toast } from 'sonner';

const FloatingCTA = () => {
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
            {ctaLinks.map((link, idx) => (
                <motion.a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
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
        </div>
    );
};

export default FloatingCTA;
