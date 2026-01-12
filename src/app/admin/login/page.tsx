'use client';

import { useState } from 'react';
import { Lock, Mail, ArrowRight, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { setAccessToken } from '@/lib/auth';
export default function AdminLoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await fetch('/api/v1/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();

            if (res.ok && data.success) {
                toast.success('Đăng nhập thành công!');
                setAccessToken(data.data.accessToken);
                router.push('/admin/articles');
            } else {
                toast.error(data.error?.message || 'Đăng nhập thất bại');
            }
        } catch (error) {
            toast.error('Lỗi kết nối');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-[100px] -ml-64 -mb-64" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md relative z-10"
            >
                {/* Logo Area */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-digital-blue rounded-[24px] shadow-2xl shadow-blue-500/30 mb-6">
                        <span className="text-white font-black text-3xl">X</span>
                    </div>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight">Admin Login</h1>
                    <p className="text-gray-500 mt-2 font-bold tracking-tight text-sm">Chào mừng bạn đến với hệ thống quản trị Xalo Media</p>
                </div>

                {/* Login Card */}
                <div className="bg-white/80 backdrop-blur-xl rounded-[40px] p-10 shadow-2xl shadow-gray-200/50 border border-white">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Email</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-digital-blue transition-colors" />
                                <input
                                    type="email"
                                    placeholder="admin@xalo.media"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 font-bold text-gray-900 focus:ring-4 focus:ring-blue-500/5 focus:bg-white focus:border-digital-blue/30 outline-none transition-all placeholder:text-gray-400"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between ml-1">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Mật khẩu</label>
                                <button type="button" className="text-[10px] font-black text-digital-blue uppercase tracking-widest hover:underline">Quên mật khẩu?</button>
                            </div>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-digital-blue transition-colors" />
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 font-bold text-gray-900 focus:ring-4 focus:ring-blue-500/5 focus:bg-white focus:border-digital-blue/30 outline-none transition-all placeholder:text-gray-400"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-5 bg-digital-blue text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-600 transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
                        >
                            {isLoading ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                <>
                                    Đăng nhập hệ thống
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                </div>

                <p className="text-center mt-8 text-sm font-bold text-gray-400 uppercase tracking-widest">
                    Build with ❤️ by Xalo Media Team
                </p>
            </motion.div>
        </div>
    );
}
