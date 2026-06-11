import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, Hammer, ShieldCheck, Umbrella } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      title: 'الشبوق',
      description: 'شبوق أمنية وزراعية وملاعب، بتثبيت متين وتشطيبات مناسبة لطبيعة الموقع.',
      Icon: ShieldCheck,
      link: 'fencing',
    },
    {
      title: 'المظلات',
      description: 'مظلات سيارات وحدائق ومرافق بتصاميم عملية وخامات تتحمل الشمس والرياح.',
      Icon: Umbrella,
      link: 'shades',
    },
    {
      title: 'الحدادة',
      description: 'أبواب، شبابيك، درابزين، وبوابات بتفصيل دقيق ومقاسات مخصصة.',
      Icon: Hammer,
      link: 'blacksmithing',
    },
    {
      title: 'المستودعات',
      description: 'هناجر ومستودعات معدنية من التصميم وحتى التسليم النهائي.',
      Icon: Building2,
      link: 'warehouses',
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" ref={ref} className="bg-[#f6f8f6] py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
        >
          <span className="mb-3 inline-block rounded-full bg-[#e4f0eb] px-4 py-2 text-sm font-extrabold text-[#17382f]">
            خدماتنا
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-[#17382f] md:text-5xl">حلول تنفيذ متكاملة للموقع</h2>
          <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
            نرتب المعاينة، المقاسات، المواد، والتنفيذ في مسار واضح، حتى تصل إلى نتيجة متينة ومظهر محترف.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.Icon;

            return (
              <motion.button
                key={service.title}
                type="button"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => scrollToSection(service.link)}
                className="group rounded-lg border border-[#dce7e1] bg-white p-6 text-right shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#f2b84b] hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-[#17382f] text-white transition group-hover:bg-[#f2b84b] group-hover:text-[#17382f]">
                  <Icon size={28} />
                </div>
                <h3 className="mb-3 text-2xl font-extrabold text-[#17382f]">{service.title}</h3>
                <p className="leading-relaxed text-gray-600">{service.description}</p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

