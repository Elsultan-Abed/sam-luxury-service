
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type InvoiceLang = 'en' | 'nl' | 'ar';

const AdminInvoice: React.FC = () => {
    const [lang, setLang] = useState<InvoiceLang>('en');

    const i18n = {
        en: {
            dir: 'ltr',
            draft: 'DRAFT',
            workSummary: 'Work Summary',
            prepared: 'Prepared on',
            officialInvoices: 'Official invoice to follow later',
            from: 'From',
            billTo: 'Bill To',
            services: 'Services Rendered',
            desc: 'Description',
            hrs: 'Hrs',
            rate: 'Rate',
            amount: 'Amount',
            total: 'Estimated Total',
            baseRate: '62 hrs × €50 base rate',
            aiTools: 'AI & tooling (at cost)',
            notice: 'Draft Notice',
            noticeText: 'This is a preliminary work summary prepared to outline the scope and estimated cost of the project based on a flat rate of €50/hr. Official invoice will follow separately. No payment is due on this document.',
            project: 'Project: SAM Luxury Service — Premium Chauffeur Website',
            scope: 'Scope: 14 components, 4 languages, full SEO/Schema',
            excellence: 'Excellence in Motion',
            categories: [
                {
                    name: '01 — Design & Brand',
                    items: [
                        { title: 'UI/UX Design & Visual Concept', desc: 'Premium dark-luxury aesthetic; obsidian/gold palette; 9 sections responsive layout.', hrs: '8', rate: '€50', price: '€400' },
                        { title: 'Custom Asset Integration', desc: 'Photography editing & optimization; custom branded overlays for local Antwerp/Brussels slides.', hrs: '4', rate: '€50', price: '€200' }
                    ]
                },
                {
                    name: '02 — Frontend Development',
                    items: [
                        { title: 'Hero Slider & Core Components', desc: 'Framer Motion animations; drag-to-swipe; progress indicators; mobile optimization.', hrs: '9', rate: '€50', price: '€450' },
                        { title: 'Booking & Functional Integration', desc: 'WhatsApp deep-link form; floating CTA; interactive vehicle showcase & FAQ sections.', hrs: '11', rate: '€50', price: '€550' },
                        { title: 'Scroll & Interaction Systems', desc: 'Intersection Observer reveal system; smooth scroll; performance tuning.', hrs: '7', rate: '€50', price: '€350' }
                    ]
                },
                {
                    name: '03 — i18n & Content',
                    items: [
                        { title: '4-Language System', desc: 'Full (NL/EN/FR/ES) dictionary implementation & state management.', hrs: '5', rate: '€50', price: '€250' }
                    ]
                },
                {
                    name: '04 — Technical SEO & Schema',
                    items: [
                        { title: 'Dynamic Meta & JSON-LD', desc: 'Multi-lang Schema.org markup; hreflang implementation; semantic optimization.', hrs: '10', rate: '€50', price: '€500' }
                    ]
                },
                {
                    name: '05 — Deployment',
                    items: [
                        { title: 'QA & Hostinger Setup', desc: 'Cross-device testing; build optimization; live deployment pipeline.', hrs: '8', rate: '€50', price: '€400' }
                    ]
                },
                {
                    name: '06 — AI Tools',
                    items: [
                        { title: 'AI Model Usage', desc: 'Token costs for design assistance & content processing.', hrs: '—', rate: '—', price: '€95' }
                    ]
                }
            ]
        },
        nl: {
            dir: 'ltr',
            draft: 'CONCEPT',
            workSummary: 'Werkoverzicht',
            prepared: 'Opgesteld op',
            officialInvoices: 'Officiële factuur volgt later',
            from: 'Van',
            billTo: 'Factureren aan',
            services: 'Geleverde Diensten',
            desc: 'Beschrijving',
            hrs: 'Uren',
            rate: 'Tarief',
            amount: 'Bedrag',
            total: 'Geschat Totaal',
            baseRate: '62 uur × €50 basistarief',
            aiTools: 'AI & tools (tegen kostprijs)',
            notice: 'Conceptbericht',
            noticeText: 'Dit is een voorlopig werkoverzicht opgesteld om de scope en geschatte kosten van het project te schetsen op basis van een vast tarief van €50/uur. De officiële factuur volgt afzonderlijk. Er is geen betaling verschuldigd op dit document.',
            project: 'Project: SAM Luxury Service — Premium Chauffeur Website',
            scope: 'Scope: 14 componenten, 4 talen, volledige SEO/Schema',
            excellence: 'Uitmuntendheid in Beweging',
            categories: [
                {
                    name: '01 — Ontwerp & Merk',
                    items: [
                        { title: 'UI/UX Design & Visueel Concept', desc: 'Premium dark-luxury esthetiek; obsidiaan/goud palet; 9 secties responsive lay-out.', hrs: '8', rate: '€50', price: '€400' },
                        { title: 'Aangepaste Asset Integratie', desc: 'Fotobewerking & optimalisatie; aangepaste branded overlays voor lokale Antwerpen/Brussel slides.', hrs: '4', rate: '€50', price: '€200' }
                    ]
                },
                {
                    name: '02 — Frontend Ontwikkeling',
                    items: [
                        { title: 'Hero Slider & Kerncomponenten', desc: 'Framer Motion animaties; drag-to-swipe; voortgangsindicatoren; mobiele optimalisatie.', hrs: '9', rate: '€50', price: '€450' },
                        { title: 'Boeking & Functionele Integratie', desc: 'WhatsApp deep-link formulier; zwevende CTA; interactieve voertuig showcase & FAQ secties.', hrs: '11', rate: '€50', price: '€550' },
                        { title: 'Scroll & Interactiesystemen', desc: 'Intersection Observer onthullingssysteem; vloeiende scroll; prestatie-optimalisatie.', hrs: '7', rate: '€50', price: '€350' }
                    ]
                },
                {
                    name: '03 — i18n & Inhoud',
                    items: [
                        { title: '4-Talig Systeem', desc: 'Volledige (NL/EN/FR/ES) woordenboekimplementatie & state management.', hrs: '5', rate: '€50', price: '€250' }
                    ]
                },
                {
                    name: '04 — Technische SEO & Schema',
                    items: [
                        { title: 'Dynamische Meta & JSON-LD', desc: 'Meertalige Schema.org markup; hreflang implementatie; semantische optimalisatie.', hrs: '10', rate: '€50', price: '€500' }
                    ]
                },
                {
                    name: '05 — Implementatie',
                    items: [
                        { title: 'QA & Hostinger Setup', desc: 'Testen op verschillende apparaten; build optimalisatie; live deployment pipeline.', hrs: '8', rate: '€50', price: '€400' }
                    ]
                },
                {
                    name: '06 — AI Tools',
                    items: [
                        { title: 'AI Model Gebruik', desc: 'Tokenkosten voor ontwerpassistentie & inhoudverwerking.', hrs: '—', rate: '—', price: '€95' }
                    ]
                }
            ]
        },
        ar: {
            dir: 'rtl',
            draft: 'مسودة',
            workSummary: 'ملخص العمل',
            prepared: 'تم الإعداد في',
            officialInvoices: 'الفاتورة الرسمية ستتبع لاحقاً',
            from: 'من',
            billTo: 'إلى',
            services: 'الخدمات المقدمة',
            desc: 'الوصف',
            hrs: 'الساعات',
            rate: 'السعر',
            amount: 'المبلغ',
            total: 'الإجمالي التقديري',
            baseRate: '62 ساعة × 50 يورو السعر الأساسي',
            aiTools: 'الذكاء الاصطناعي والأدوات (بالتكلفة)',
            notice: 'ملاحظة المسودة',
            noticeText: 'هذا ملخص عمل أولي تم إعداده لتحديد نطاق المشروع والتكلفة التقديرية بناءً على سعر ثابت قدره 50 يورو للساعة. الفاتورة الرسمية ستتبع بشكل منفصل. لا يلزم الدفع بناءً على هذا المستند.',
            project: 'المشروع: SAM Luxury Service — موقع بواب متميز',
            scope: 'النطاق: 14 مكوناً، 4 لغات، SEO كامل ونظام Schema',
            excellence: 'التميز في الحركة',
            categories: [
                {
                    name: '01 — التصميم والهوية البصرية',
                    items: [
                        { title: 'تصميم UI/UX والمفهوم البصري', desc: 'جمالية الفخامة المظلمة؛ لوحة ألوان الأوبسيديان والذهب؛ تخطيط متجاوب من 9 أقسام.', hrs: '8', rate: '50 يورو', price: '400 يورو' },
                        { title: 'دمج الأصول المخصصة', desc: 'تحرير وتحسين الصور الفوتوغرافية؛ تراكبات مخصصة للعلامة التجارية لشرائح أنتويرب/بروكسل.', hrs: '4', rate: '50 يورو', price: '200 يورو' }
                    ]
                },
                {
                    name: '02 — تطوير الواجهة الأمامية',
                    items: [
                        { title: 'سلايدر السطح والمكونات الأساسية', desc: 'رسوم متحركة Framer Motion؛ خاصية المسح؛ مؤشرات التقدم؛ تحسين الهاتف المحمول.', hrs: '9', rate: '50 يورو', price: '450 يورو' },
                        { title: 'الحجز والدمج الوظيفي', desc: 'نموذج واتساب؛ زر اتصال عائم؛ عرض تفاعلي للمركبة وأقسام الأسئلة الشائعة.', hrs: '11', rate: '50 يورو', price: '550 يورو' },
                        { title: 'أنظمة التمرير والتفاعل', desc: 'نظام الكشف Intersection Observer؛ تمرير سلس؛ ضبط الأداء.', hrs: '7', rate: '50 يورو', price: '350 يورو' }
                    ]
                },
                {
                    name: '03 — الترجمة والمحتوى',
                    items: [
                        { title: 'نظام 4 لغات', desc: 'تنفيذ القواميس الكاملة (NL/EN/FR/ES) وإدارة الحالة.', hrs: '5', rate: '50 يورو', price: '250 يورو' }
                    ]
                },
                {
                    name: '04 — SEO التقني ونظام Schema',
                    items: [
                        { title: 'الميتا الديناميكي و JSON-LD', desc: 'ترميز Schema.org متعدد اللغات؛ تنفيذ hreflang؛ تحسين دلالي.', hrs: '10', rate: '50 يورو', price: '500 يورو' }
                    ]
                },
                {
                    name: '05 — النشر والتشغيل',
                    items: [
                        { title: 'ضمان الجودة وإعداد Hostinger', desc: 'اختبار عبر الأجهزة؛ تحسين البناء؛ خط أنابيب النشر المباشر.', hrs: '8', rate: '50 يورو', price: '400 يورو' }
                    ]
                },
                {
                    name: '06 — أدوات الذكاء الاصطناعي',
                    items: [
                        { title: 'استخدام نماذج الذكاء الاصطناعي', desc: 'تكاليف التوكنز للمساعدة في التصميم ومعالجة المحتوى.', hrs: '—', rate: '—', price: '95 يورو' }
                    ]
                }
            ]
        }
    };

    const t = i18n[lang];
    const isRTL = t.dir === 'rtl';

    return (
        <div className={`min-h-screen bg-[#F9F8F6] text-[#0D0D0D] font-sans p-8 md:p-12 lg:p-24 flex flex-col items-center overflow-auto ${isRTL ? 'font-arabic' : ''}`} dir={t.dir}>

            {/* LANGUAGE TOGGLE */}
            <div className="mb-12 flex bg-black/5 p-1 rounded-full border border-black/10 backdrop-blur-md self-center" dir="ltr">
                {(['en', 'nl', 'ar'] as const).map((l) => (
                    <button
                        key={l}
                        onClick={() => setLang(l)}
                        className={`px-6 py-2 rounded-full text-[10px] font-black uppercase transition-all tracking-widest ${lang === l ? 'bg-black text-white shadow-lg' : 'text-black/40 hover:text-black'}`}
                    >
                        {l}
                    </button>
                ))}
            </div>

            <motion.div
                key={lang}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white w-full max-w-[900px] shadow-2xl relative"
            >
                {/* DRAFT WATERMARK */}
                <div style={{
                    content: '""',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${isRTL ? '35deg' : '-35deg'})`,
                    fontFamily: isRTL ? 'Cairo, serif' : 'serif',
                    fontSize: ' clamp(60px, 15vw, 140px)',
                    fontWeight: 700,
                    color: 'rgba(201, 168, 76, 0.08)',
                    pointerEvents: 'none',
                    zIndex: 20,
                    letterSpacing: '0.1em',
                    whiteSpace: 'nowrap'
                }}>{t.draft}</div>

                {/* HEADER */}
                <header className="bg-[#0D0D0D] p-12 text-white flex flex-col md:flex-row justify-between items-start gap-8 relative z-30" dir="ltr">
                    {/* Brand name block (Always L) */}
                    <div className="text-left">
                        <h1 className="font-serif text-3xl font-bold tracking-wider">Abed El-Sultan</h1>
                        <p className="text-[#C9A84C] text-[10px] uppercase tracking-[0.25em] mt-2">Web Design & Development</p>
                    </div>
                    {/* Draft info block (Always R) */}
                    <div className="text-right self-stretch md:self-auto" dir={t.dir}>
                        <p className="text-[#C9A84C] text-[11px] uppercase tracking-[0.2em] mb-2">{t.draft}</p>
                        <p className="font-serif text-2xl">{t.workSummary}</p>
                        <div className="mt-4 text-[12px] text-white/50 leading-relaxed">
                            <div><strong>{t.prepared}</strong> &nbsp; 7 March 2026</div>
                            <div className="mt-2 text-[11px] text-[#E8C97A]">{t.officialInvoices}</div>
                        </div>
                    </div>
                </header>

                <div className="h-[3px] bg-gradient-to-r from-[#C9A84C] via-[#E8C97A] to-[#C9A84C]"></div>

                {/* PARTIES */}
                <section className="grid grid-cols-1 md:grid-cols-2 border-b border-[#E2E2E2] relative z-30" dir={t.dir}>
                    <div className="p-12 border-[#E2E2E2] md:border-e" dir={t.dir}>
                        <p className="text-[#C9A84C] text-[10px] uppercase tracking-[0.25em] mb-4">{t.from}</p>
                        <p className="text-lg font-semibold mb-2">Abed El-Sultan</p>
                        <p className="text-sm text-[#5A5A5A] leading-relaxed">
                            elsultan.abed@gmail.com<br />
                            +32493724847<br />
                            Edmond de Coussemakerstraat 3<br />
                            2050 Antwerp
                        </p>
                    </div>
                    <div className="p-12" dir={t.dir}>
                        <p className="text-[#C9A84C] text-[10px] uppercase tracking-[0.25em] mb-4">{t.billTo}</p>
                        <p className="text-lg font-semibold mb-2">SAM Luxury Service</p>
                        <p className="text-sm text-[#5A5A5A] leading-relaxed">
                            info@samluxuryservice.be<br />
                            +32 478 61 71 01<br />
                            Antwerp, Belgium<br />
                            www.samluxuryservice.be
                        </p>
                    </div>
                </section>

                {/* LINE ITEMS */}
                <div className="px-12 py-8 relative z-30">
                    <p className="text-[#C9A84C] text-[10px] uppercase tracking-[0.25em] py-4 border-b border-[#E2E2E2]">{t.services}</p>
                    <div className="overflow-x-auto">
                        <table className={`w-full border-collapse ${isRTL ? 'text-right' : 'text-left'}`} dir={t.dir}>
                            <thead>
                                <tr className={`text-[11px] font-semibold uppercase tracking-wider text-[#5A5A5A] border-b border-[#E2E2E2] ${isRTL ? 'text-right' : 'text-left'}`}>
                                    <th className="py-4 w-[55%]">{t.desc}</th>
                                    <th className={`py-4 ${isRTL ? 'text-left px-4' : 'text-right px-4'}`}>{t.hrs}</th>
                                    <th className={`py-4 ${isRTL ? 'text-left px-4' : 'text-right px-4'}`}>{t.rate}</th>
                                    <th className={isRTL ? 'py-4 text-left' : 'py-4 text-right'}>{t.amount}</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {t.categories.map((cat, idx) => (
                                    <React.Fragment key={idx}>
                                        <tr className="uppercase text-[10px] font-bold tracking-widest text-black/40">
                                            <td colSpan={4} className={`pt-8 pb-2 ${isRTL ? 'text-right' : 'text-left'}`}>{cat.name}</td>
                                        </tr>
                                        {cat.items.map((item, iIdx) => (
                                            <tr key={iIdx} className="border-b border-[#E2E2E2] hover:bg-[#FAFAF8] transition-colors">
                                                <td className={`py-5 ${isRTL ? 'text-right' : 'text-left'}`}>
                                                    <div className="font-bold mb-1">{item.title}</div>
                                                    <div className={`text-[12px] text-[#5A5A5A] leading-relaxed max-w-sm ${isRTL ? 'ml-auto text-right' : ''}`}>{item.desc}</div>
                                                </td>
                                                <td className={`px-4 ${isRTL ? 'text-left' : 'text-right'}`}>{item.hrs}</td>
                                                <td className={`px-4 ${isRTL ? 'text-left' : 'text-right'}`}>{item.rate}</td>
                                                <td className={isRTL ? 'text-left' : 'text-right'}>{item.price}</td>
                                            </tr>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* TOTALS */}
                <div className={`p-12 flex relative z-30 ${isRTL ? 'justify-start' : 'justify-end'}`} dir={t.dir}>
                    <div className="w-full max-w-[340px] space-y-4 text-[13px]">
                        <div className="flex justify-between text-[#5A5A5A] pb-2 border-b border-[#E2E2E2]">
                            <span>{t.baseRate}</span>
                            <span>€3,100</span>
                        </div>
                        <div className="flex justify-between text-[#5A5A5A] pb-2 border-b border-[#E2E2E2]">
                            <span>{t.aiTools}</span>
                            <span>€95</span>
                        </div>
                        <div className="flex justify-between pt-4 border-t-2 border-black">
                            <span className="font-bold text-lg">{t.total}</span>
                            <span className="font-serif text-2xl font-bold text-[#C9A84C]">€3,195</span>
                        </div>
                    </div>
                </div>

                {/* DRAFT NOTICE */}
                <section className="bg-[#F4F3F0] p-12 border-t border-[#E2E2E2] relative z-30">
                    <p className="text-[#C9A84C] text-[10px] uppercase tracking-[0.25em] mb-4">{t.notice}</p>
                    <p className="text-sm text-[#5A5A5A] leading-loose italic">
                        {t.noticeText}
                    </p>
                </section>

                <footer className="bg-[#0D0D0D] p-12 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-[11px] relative z-30" dir={t.dir}>
                    <div className={`leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`} dir={t.dir}>
                        {t.project}<br />
                        {t.scope}
                    </div>
                    <div className="text-[#C9A84C] uppercase tracking-[0.22em] font-medium">{t.excellence}</div>
                </footer>
            </motion.div>
        </div>
    );
};

export default AdminInvoice;
