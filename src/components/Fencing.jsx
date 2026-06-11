import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Phone } from 'lucide-react';

const Fencing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const features = [
    'شبوك حديدية عالية الجودة',
    'شبوك مجلفنة مقاومة للصدأ',
    'شبوك زراعية ومزارع',
    'شبوك أمنية للمنشآت',
    'تركيب احترافي وسريع',
    'ضمان على جميع الأعمال',
  ];

  return (
    <section id="fencing" ref={ref} className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-4 inline-block rounded-full bg-[#17382f]/10 px-5 py-2 text-sm font-extrabold text-[#17382f]">الشبوك</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#17382f] mb-5 leading-tight">
              شبوك متينة لكل موقع
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              نوفر جميع أنواع الشبوك بأعلى معايير الجودة. سواء كنت تبحث عن شبوك للمزارع أو المنشآت الصناعية أو الأمنية، نحن نقدم الحل الأمثل مع التركيب الاحترافي.
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
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#17382f]">
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

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-[#17382f]/8 -z-10" />
            <img
              className="rounded-2xl shadow-2xl w-full h-[420px] md:h-[520px] object-cover"
              alt="تركيب الشبوك الحديدية"
              src="https://images.unsplash.com/photo-1692909253271-c106dd5905e4?w=800&q=80"
            />
            <div className="absolute -bottom-5 -right-5 rounded-2xl bg-[#f2b84b] px-6 py-4 shadow-xl">
              <p className="text-xs font-bold text-[#17382f]/70">تبدأ من</p>
              <p className="text-2xl font-extrabold text-[#17382f]">45 ريال/م</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Fencing;
