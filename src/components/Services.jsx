import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, Hammer, ShieldCheck, Umbrella, ArrowLeft } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const services = [
    {
      title: 'الشبوك',
      description: 'شبوك أمنية وزراعية وملاعب، بتثبيت متين وتشطيبات مناسبة لطبيعة الموقع.',
      Icon: ShieldCheck,
      link: 'fencing',
      color: 'from-[#17382f] to-[#22503f]',
      accent: '#4ade80',
    },
    {
      title: 'المظلات',
      description: 'مظلات سيارات وحدائق ومرافق بتصاميم عملية وخامات تتحمل الشمس والرياح.',
      Icon: Umbrella,
      link: 'shades',
      color: 'from-[#1a3a5c] to-[#1e4976]',
      accent: '#60a5fa',
    },
    {
      title: 'الحدادة',
      description: 'أبواب، شبابيك، درابزين، وبوابات بتفصيل دقيق ومقاسات مخصصة.',
      Icon: Hammer,
      link: 'blacksmithing',
      color: 'from-[#3d1f00] to-[#5c3000]',
      accent: '#fb923c',
    },
    {
      title: 'المستودعات',
      description: 'هناجر ومستودعات معدنية من التصميم وحتى التسليم النهائي.',
      Icon: Building2,
      link: 'warehouses',
      color: 'from-[#2d1f3d] to-[#3d2a52]',
      accent: '#c084fc',
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" ref={ref} className="bg-[#f4f7f5] py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-[#17382f]/10 px-5 py-2 text-sm font-extrabold text-[#17382f]">
            خدماتنا
          </span>
          <h2 className="mb-5 text-4xl font-extrabold text-[#17382f] md:text-5xl">حلول تنفيذ متكاملة</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            نرتب المعاينة، المقاسات، المواد، والتنفيذ في مسار واضح حتى تصل إلى نتيجة متينة ومظهر محترف.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.Icon;
            return (
              <motion.button
                key={service.title}
                type="button"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => scrollToSection(service.link)}
                className="group relative overflow-hidden rounded-2xl text-right shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color}`} />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-white" />

                {/* Content */}
                <div className="relative p-7">
                  <div
                    className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl"
                    style={{ background: `${service.accent}22` }}
                  >
                    <Icon size={28} style={{ color: service.accent }} />
                  </div>
                  <h3 className="mb-3 text-2xl font-extrabold text-white">{service.title}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-white/75">{service.description}</p>
                  <div className="flex items-center gap-2 text-sm font-bold" style={{ color: service.accent }}>
                    <span>اعرف أكثر</span>
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
