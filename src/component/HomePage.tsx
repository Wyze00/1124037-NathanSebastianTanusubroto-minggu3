import React from 'react';
import { Link } from 'react-router';
import { Button, Container, Typography, Box } from '@mui/material';
import { RocketLaunch, Lightbulb, ArrowForward, EmojiEmotions } from '@mui/icons-material';
import { useAppSelector } from "../hooks/useAppSelector";
import landingImg1 from "../assets/landing1.png"; 
import landingImg2 from "../assets/landing2.png";

export default function HomePage(): React.JSX.Element {
    const { userInfo } = useAppSelector(state => state.auth);
    const isLogin = !!userInfo;

    return (
        <div className="min-h-screen bg-slate-50 overflow-x-hidden">
            {/* Section 1: Hero */}
            <section className="relative min-h-[90vh] flex items-center pt-20 pb-10">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-200/40 rounded-full blur-3xl animate-pulse" />

                <Container maxWidth="lg" className="relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Text Content */}
                        <div className="flex-1 text-center lg:text-left">
                            <Box className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
                                <RocketLaunch fontSize="small" />
                                <span className="text-sm font-semibold tracking-wide uppercase">
                                    Mini Forum
                                </span>
                            </Box>

                            <Typography variant="h1" className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
                                Welcome, <br />
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    {userInfo?.name.toUpperCase() || 'Guest User'}
                                </span>
                                <EmojiEmotions className="ml-2 text-yellow-500 text-4xl lg:text-6xl" />
                            </Typography>

                            <Typography variant="h5" className="text-slate-600 font-normal leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 py-5">
                                Kelola seluruh post dan comment dengan cepat.
                            </Typography>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                {isLogin ? (
                                    <Link to="/post">
                                        <Button 
                                            variant="contained" 
                                            size="large"
                                            endIcon={<ArrowForward />}
                                            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl shadow-lg shadow-blue-200 normal-case text-lg font-bold"
                                        >
                                            Lihat Postingan Terbaru
                                        </Button>
                                    </Link>
                                ) : (
                                    <Link to="/login">
                                        <Button 
                                            variant="contained" 
                                            size="large"
                                            className="bg-gradient-to-r from-blue-600 to-purple-600 px-10 py-4 rounded-2xl shadow-xl normal-case text-lg font-bold"
                                        >
                                            Masuk ke Akun
                                        </Button>
                                    </Link>
                                )}
                            </div>
                        </div>

                        {/* Image Content */}
                        <div className="flex-1 animate-float">
                            <img 
                                src={landingImg1} 
                                alt="Modern Illustration" 
                                className="w-full max-w-[500px] mx-auto drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            {/* Section 2: Features */}
            <section className="py-20 bg-white">
                <Container maxWidth="lg">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                        <div className="flex-1">
                            <Box className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-6">
                                <Lightbulb fontSize="small" />
                                <span className="text-sm font-semibold uppercase">Teknologi Mutakhir</span>
                            </Box>
                            <Typography variant="h2" className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                                Pengalaman Digital <br />
                                <span className="text-blue-600">Lebih Responsif</span>
                            </Typography>
                            <Typography className="text-lg text-slate-600 mb-8">
                                Kami menggunakan teknologi terbaru untuk memastikan akses data super cepat, 
                                keamanan data yang terjamin, serta antarmuka yang sangat mudah digunakan.
                            </Typography>
                            
                            <ul className="space-y-4">
                                {['Performa Real-time', 'Keamanan Enterprise', 'UI/UX Intuitif'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                        <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">✓</div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex-1">
                            <img 
                                src={landingImg2} 
                                alt="Feature Illustration" 
                                className="w-full max-w-[450px] mx-auto animate-pulse"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <Container maxWidth="md">
                    <div className="bg-gradient-to-br from-blue-700 to-indigo-900 rounded-[2.5rem] p-12 text-center text-white shadow-2xl relative overflow-hidden">
                        {/* Decorative Circle */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl" />
                        
                        <Typography variant="h3" className="font-bold mb-4">
                            Siap memulai perjalanan digital?
                        </Typography>
                        <Typography className="text-blue-100 mb-10 text-lg opacity-80">
                            Nikmati kemudahan akses informasi postingan kapanpun dan dimanapun.
                        </Typography>
                        
                        <div className="flex justify-center gap-4">
                            {isLogin ? (
                                <Link to="/post" className="no-underline">
                                    <Button 
                                        className={`
                                          !bg-yellow-400 !text-blue-900 
                                          hover:!bg-yellow-300 
                                            px-10 py-4 rounded-2xl font-bold text-lg 
                                            
                                            shadow-[0_0_20px_rgba(250,204,21,0.5)] 
                                            hover:shadow-[0_0_30px_rgba(250,204,21,0.8)]
                                            
                                            transform hover:scale-105 active:scale-95 
                                            transition-all duration-300 
                                            
                                            border-none outline-none
                                        `}
                                    >
                                        Mulai Sekarang
                                    </Button>
                                </Link>
                            ) : (
                                <Link to="/login" className="no-underline">
                                    <Button 
                                        className={`
                                          !bg-yellow-400 !text-blue-900 
                                          hover:!bg-yellow-300 
                                            px-10 py-4 rounded-2xl font-bold text-lg 
                                            
                                            shadow-[0_0_20px_rgba(250,204,21,0.5)] 
                                            hover:shadow-[0_0_30px_rgba(250,204,21,0.8)]
                                            
                                            transform hover:scale-105 active:scale-95 
                                            transition-all duration-300 
                                            
                                            border-none outline-none
                                        `}
                                    >
                                        Login Sekarang
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}