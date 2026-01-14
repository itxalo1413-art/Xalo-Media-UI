'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface PopupProps {
    active: boolean;
    imageUrl: string;
    linkUrl?: string;
}

export default function Popup({ active, imageUrl, linkUrl }: PopupProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check session storage to see if popup has been shown
        const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');
        
        if (active && imageUrl && !hasSeenPopup) {
            // Delay slightly for better UX
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [active, imageUrl]);

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem('hasSeenPopup', 'true');
    };

    if (!isVisible) return null;

    const Content = (
        <div className="relative group cursor-pointer">
             <button
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleClose();
                }}
                className="absolute -top-4 -right-4 z-50 bg-white text-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            >
                <X className="w-5 h-5" />
            </button>
            <img 
                src={imageUrl} 
                alt="Promotional Popup" 
                className="max-w-[90vw] max-h-[80vh] w-auto h-auto rounded-xl shadow-2xl object-cover"
            />
        </div>
    );

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    onClick={handleClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {linkUrl ? (
                            <Link href={linkUrl} target="_blank">
                                {Content}
                            </Link>
                        ) : (
                            Content
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
