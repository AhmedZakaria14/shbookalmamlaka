import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Phone } from 'lucide-react';

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const servicePrices = [
    {
      name: 'الشبوك',
      price: '45',
      unit: 'ريال / للمتر الطولي',
      description: 'شبوك مجلفنة عالية الجودة للمزارع والمنشآت.',
      features: ['شبوك أمنية وزراعية', 'مجلفن مقاوم للصدأ', 'تركيب احترافي', 'ضمان على العمل'],
      accent: '#17382f',
      bg: '#f0f7f3',
    },
    {
      name: 'المظلات',
      price: '90',
      unit: 'ريال / للمتر المربع',
      description: 'مظلات PVC كوري عازلة للحرارة مع ضمان 10 سنوات.',
      features: ['قماش PVC كوري', 'ضمان 10 سنوات', 'تصاميم متعددة', 'تركيب سريع'],
      accent: '#1a3a5c',
      bg: '#f0f4f9',
      featured: true,
    },
    {
      name: 'الحدادة',
      price: '250',
      unit: 'ريال / للمتر المربع',
      description: 'أبواب وشبابيك بتصاميم فنية مخصصة من حديد مشغول.',
      features: ['تصاميم مخصصة', 'حديد مشغول عالي الجودة', 'دهان بودرة', 'صيانة مجانية'],
      accent: '#3d1f00',
      bg: '#fdf6f0',
    },
    {
      name: 'المستودعات',
      price: '150',
      unit: 'ريال / للمتر المربع',
      description: 'هناجر ومستودعات معتمدة بنظام تسليم مفتاح.',
      features: ['تصميم هندسي', 'عزل حراري ومائي', 'تسليم مفتاح', 'ضمان الهيكل'],
      accent: '#2d1f3d',
      bg: '#f8f4fc',
    },
  ];

  return (
    <section id="pricing" ref={ref} className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="mb-4 inline-block rounded-full bg-[#17382f]/10 px-5 py-2 text-sm font-extrabold text-[#17382f]">
            الأسعار
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#17382f] mb-4">أسعار شفافة وتنافسية</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            أسعار واضحة تبدأ من — للحصول على عرض دقيق يرجى التواصل معنا
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicePrices.map((s, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                s.featured ? 'border-[#1a3a5c] shadow-xl' : 'border-gray-100 shadow-sm'
              }`}
            >
              {s.featured && (
                <div className="bg-[#1a3a5c] text-white text-center text-xs font-extrabold py-2 tracking-wider">
                  الأكثر طلباً
                </div>
              )}
              <div className="p-6" style={{ background: s.bg }}>
                <h3 className="text-xl font-extrabold mb-1" style={{ color: s.accent }}>{s.name}</h3>
                <p className="text-gray-500 text-sm mb-5">{s.description}</p>

                <div className="mb-5">
                  <span className="text-xs text-gray-500">تبدأ من</span>
                  <div className="flex items-end gap-1 mt-1">
                    <span className="text-4xl font-extrabold" style={{ color: s.accent }}>{s.price}</span>
                    <span className="text-sm text-gray-500 mb-1">{s.unit}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {s.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <Check size={15} style={{ color: s.accent }} className="flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="tel:0554202751"
                  className="flex items-center justify-center gap-2 w-full rounded-xl py-3 text-sm font-bold text-white transition hover:opacity-90"
                  style={{ background: s.accent }}
                >
                  <Phone size={16} />
                  اطلب عرض سعر
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center text-gray-500 mt-8 text-sm"
        >
          * الأسعار تقديرية وتختلف بحسب المواصفات والمساحة والموقع
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
