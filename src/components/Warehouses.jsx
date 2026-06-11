import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Phone } from 'lucide-react';

const Warehouses = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const features = [
    'تصميم وبناء مستودعات',
    'هناجر صناعية',
    'مستودعات تخزين',
    'مباني معدنية',
    'عزل حراري ومائي',
    'تسليم مفتاح',
  ];

  return (
    <section id="warehouses" ref={ref} className="py-20 md:py-28 bg-[#f4f7f5]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -inset-4 rounded-3xl bg-[#2d1f3d]/8 -z-10" />
            <img
              className="rounded-2xl shadow-2xl w-full h-[420px] md:h-[520px] object-cover"
              alt="بناء المستودعات والهناجر الصناعية"
              src="https://images.unsplash.com/photo-1609293283499-3ab09a958434?w=800&q=80"
            />
            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-[#2d1f3d] px-6 py-4 shadow-xl">
              <p className="text-xs font-bold text-white/70">تبدأ من</p>
              <p className="text-2xl font-extrabold text-white">150 ريال/م²</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="mb-4 inline-block rounded-full bg-[#2d1f3d]/10 px-5 py-2 text-sm font-extrabold text-[#2d1f3d]">المستودعات</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#17382f] mb-5 leading-tight">
              مستودعات بمواصفات عالمية
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              نتخصص في بناء وتجهيز المستودعات والهناجر الصناعية بمواصفات عالمية. نوفر حلولاً متكاملة من التصميم الهندسي حتى التسليم النهائي مفتاح باليد.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#2d1f3d]">
                    <Check size={13} className="text-white" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">{f}</span>
                </motion.div>
              ))}
            </div>
            <a href="tel:0554202751" className="inline-flex items-center gap-2 rounded-xl bg-[#17382f] text-white px-8 py-4 font-extrabold text-lg hover:bg-[#0f2a24] transition-all shadow-lg hover:shadow-xl hover:scale-105">
              <Phone size={20} />
              اطلب عرض سعر
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Warehouses;
