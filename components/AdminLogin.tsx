
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface AdminLoginProps {
    onSuccess: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onSuccess }) => {
    const [code, setCode] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // The approved code is 2026
        if (code === '2026') {
            onSuccess();
        } else {
            setError(true);
            setTimeout(() => setError(false), 2000);
        }
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-8">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md bg-[#0a0a0b] border border-white/10 p-12 rounded-sm shadow-2xl"
            >
                <div className="text-center mb-12">
                    <div className="inline-block p-4 rounded-full bg-[#D4AF37]/10 mb-6">
                        <i className="fas fa-lock text-[#D4AF37] text-2xl"></i>
                    </div>
                    <h2 className="text-2xl font-serif text-white mb-2">Admin Portal</h2>
                    <p className="text-white/40 text-xs uppercase tracking-[0.2em]">Secure Access Required</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-[10px] uppercase tracking-widest text-[#D4AF37] mb-3 font-semibold">Secret Access Code</label>
                        <input
                            type="password"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            placeholder="••••"
                            className={`w-full bg-white/5 border ${error ? 'border-red-500' : 'border-white/10'} focus:border-[#D4AF37] text-white px-4 py-4 rounded-none outline-none transition-all text-center text-xl tracking-[0.5em]`}
                            autoFocus
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#D4AF37] hover:bg-[#E8C97A] text-black font-bold py-4 px-8 uppercase tracking-widest text-xs transition-colors duration-300"
                    >
                        Enter Portal
                    </button>

                    {error && (
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-[10px] text-center uppercase tracking-widest font-bold"
                        >
                            Access Denied — Incorrect Code
                        </motion.p>
                    )}
                </form>

                <div className="mt-12 pt-8 border-t border-white/5 text-center">
                    <p className="text-white/20 text-[9px] uppercase tracking-[0.3em]">SAM Luxury Service — Internal Use Only</p>
                </div>
            </motion.div>
        </div>
    );
};

export default AdminLogin;
