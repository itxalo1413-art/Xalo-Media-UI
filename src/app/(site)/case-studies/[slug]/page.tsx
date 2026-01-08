'use client';

import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import Container from '@/components/common/Container';
import { CASE_STUDIES } from '@/data/caseStudies';

export default function CaseStudyDetail() {
    const params = useParams();
    const slug = params?.slug as string;

    const project = CASE_STUDIES.find(p => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen pb-24 pt-2">
            {/* Header Section with Image Background */}
            <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                
                <div className="absolute inset-0 flex items-end pb-10">
                    <Container>
                        <div className="max-w-4xl">
                            <Link 
                                href="/case-studies"
                                className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors text-sm font-bold uppercase tracking-widest gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Quay lại danh sách
                            </Link>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="px-4 py-1.5 rounded-full bg-digital-blue text-white text-xs font-black uppercase tracking-widest">
                                    {project.category}
                                </span>
                                <span className="text-white/60 font-bold text-sm tracking-widest border-l border-white/20 pl-4">
                                    {project.date}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                                {project.title}
                            </h1>
                            <p className="text-xl text-white/80 font-medium max-w-2xl leading-relaxed">
                                {project.desc}
                            </p>
                        </div>
                    </Container>
                </div>
            </div>

            <Container>
                <div className="max-w-5xl mx-auto -mt-10 relative z-10">
                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Left Column: Challenge & Solution */}
                        <div className="lg:col-span-2 space-y-12">
                            <section className="bg-white rounded-[16px] p-8 md:p-12 shadow-xl border border-gray-100">
                                <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                    </span>
                                    Thách thức đặt ra
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                    {project.challenge}
                                </p>
                            </section>

                            <section className="bg-white rounded-[16px] p-8 md:p-12 shadow-xl border border-gray-100">
                                <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-sm bg-digital-blue/10 text-digital-blue flex items-center justify-center">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.989-2.386l-.548-.547z" /></svg>
                                    </span>
                                    Giải pháp từ Xalo Media
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                    {project.solution}
                                </p>
                            </section>
                        </div>

                        {/* Right Column: Results & Testimonial */}
                        <div className="space-y-8">
                            {/* Key Results */}
                            <div className="bg-digital-blue rounded-[16px] p-8 text-white shadow-2xl shadow-blue-500/30">
                                <h3 className="text-xl font-black mb-8 flex items-center gap-2">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                    Kết quả đạt được
                                </h3>
                                <ul className="space-y-6">
                                    {project.results.map((result, idx) => (
                                        <li key={idx} className="flex gap-4 items-start">
                                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 font-bold text-sm">
                                                {idx + 1}
                                            </div>
                                            <span className="font-medium leading-relaxed">{result}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Client Testimonial (Optional) */}
                            {project.testimonial && (
                                <div className="bg-white rounded-[16px] p-8 border border-gray-100 shadow-lg">
                                    <div className="mb-6 text-digital-blue">
                                        <svg className="w-10 h-10 opacity-30" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.054 15.346 14.417 17.135 13.923C16.657 14.032 16.166 14.089 15.66 14.089C13.298 14.089 11.383 12.174 11.383 9.812C11.383 7.45 13.298 5.535 15.66 5.535C18.022 5.535 19.937 7.45 19.937 9.812L19.937 21L14.017 21ZM5 21L5 18C5 16.054 6.329 14.417 8.118 13.923C7.64 14.032 7.149 14.089 6.643 14.089C4.281 14.089 2.366 12.174 2.366 9.812C2.366 7.45 4.281 5.535 6.643 5.535C9.006 5.535 10.92 7.45 10.92 9.812L10.92 21L5 21Z" /></svg>
                                    </div>
                                    <p className="text-gray-600 font-medium italic mb-6 leading-relaxed">
                                        "{project.testimonial.quote}"
                                    </p>
                                    <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500">
                                            {project.testimonial.author.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900 text-sm">{project.testimonial.author}</p>
                                            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">{project.testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
