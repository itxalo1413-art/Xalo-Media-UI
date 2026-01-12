'use client';

import { useState } from 'react';
import { Upload, X, Image as ImageIcon, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { getAccessToken } from '@/lib/auth';

interface ImageUploadProps {
    value?: string;
    onChange: (url: string) => void;
    folder?: string;
    className?: string;
}

export default function ImageUpload({ value, onChange, folder = 'xalomedia', className = '' }: ImageUploadProps) {
    const [uploading, setUploading] = useState(false);

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Basic validation
        if (!file.type.startsWith('image/')) {
            toast.error('Vui lòng chọn file ảnh (PNG, JPG, WEBP...)');
            return;
        }

        // 5MB limit
        if (file.size > 5 * 1024 * 1024) {
            toast.error('File không được quá 5MB');
            return;
        }

        try {
            setUploading(true);

            // 1. Get signature from backend
            const token = getAccessToken();
            const signRes = await fetch(`/api/v1/media/signature?folder=${folder}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            
            if (!signRes.ok) throw new Error('Failed to get upload signature');
            const signData = await signRes.json();
            const { cloudName, apiKey, timestamp, signature, folder: targetFolder } = signData.data;

            // 2. Upload to Cloudinary
            const formData = new FormData();
            formData.append('file', file);
            formData.append('api_key', apiKey);
            formData.append('timestamp', timestamp);
            formData.append('signature', signature);
            formData.append('folder', targetFolder);

            const uploadRes = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
                method: 'POST',
                body: formData
            });

            if (!uploadRes.ok) throw new Error('Failed to upload image');
            
            const uploadData = await uploadRes.json();
            
            // 3. Update state
            onChange(uploadData.secure_url);
            toast.success('Tải ảnh lên thành công');

        } catch (error) {
            console.error('Upload error:', error);
            toast.error('Lỗi khi tải ảnh lên server');
        } finally {
            setUploading(false);
            // Reset input
            e.target.value = '';
        }
    };

    const handleRemove = () => {
        onChange('');
    };

    return (
        <div className={`space-y-4 ${className}`}>
            {value ? (
                <div className="relative w-full aspect-square md:aspect-video rounded-2xl overflow-hidden border border-gray-100 group">
                    <img 
                        src={value} 
                        alt="Preview" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button
                            type="button"
                            onClick={handleRemove}
                            className="p-3 bg-white/10 hover:bg-red-500 text-white rounded-xl backdrop-blur-md transition-all"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            ) : (
                <div className="w-full aspect-video rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 hover:bg-gray-100 hover:border-digital-blue/50 transition-all flex flex-col items-center justify-center cursor-pointer relative group">
                    <input
                        type="file"
                        accept="image/*"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        onChange={handleUpload}
                        disabled={uploading}
                    />
                    <div className="flex flex-col items-center gap-3 text-gray-400 group-hover:text-digital-blue transition-colors">
                        {uploading ? (
                            <Loader2 className="w-8 h-8 animate-spin" />
                        ) : (
                            <Upload className="w-8 h-8" />
                        )}
                        <span className="font-bold text-sm">
                            {uploading ? 'Đang tải lên...' : 'Bấm để chọn ảnh'}
                        </span>
                        <span className="text-xs text-gray-400 font-medium">
                            PNG, JPG, WEBP (Max 5MB)
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}
