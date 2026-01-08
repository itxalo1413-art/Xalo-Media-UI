import Container from '@/components/common/Container';
import { CASE_STUDIES } from '@/data/caseStudies';
import Link from 'next/link';

export default function CaseStudies() {
    return (
        <div className="py-24 min-h-screen">
            <Container>
                <div className="text-center mb-20 space-y-6">
                    <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight">Case Studies</h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
                        Khám phá những câu chuyện thành công của chúng tôi với các đối tác trong hành trình chinh phục thị trường.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {CASE_STUDIES.map((project, idx) => (
                        <Link 
                            key={idx} 
                            href={`/case-studies/${project.slug}`}
                            className="group flex flex-col h-full bg-white/60 backdrop-blur-md rounded-[20px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden cursor-pointer"
                        >
                            {/* Image Section */}
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            {/* Content Section */}
                            <div className="flex flex-col flex-grow p-8">
                                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-digital-blue/10 text-digital-blue text-xs font-black uppercase tracking-widest mb-6 self-start border border-digital-blue/5">
                                    {project.category}
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 leading-tight mb-4 group-hover:text-digital-blue transition-colors line-clamp-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-500 font-medium leading-relaxed line-clamp-3 mb-8">
                                    {project.desc}
                                </p>

                                {/* Meta Section */}
                                <div className="mt-auto pt-8 border-t border-gray-50 flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-gray-400 font-bold text-xs uppercase tracking-widest">
                                        <svg className="w-4 h-4 text-digital-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {project.date}
                                    </div>
                                    <div className="text-digital-blue font-black text-sm flex items-center group/link">
                                        Xem chi tiết
                                        <svg className="ml-1.5 w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </div>
    );
}