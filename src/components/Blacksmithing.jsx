import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Phone } from 'lucide-react';

const Blacksmithing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const features = [
    'أبواب حديدية مخصصة',
    'شبابيك وحواجز حديدية',
    'درابزين وسلالم معدنية',
    'بوابات كهربائية',
    'أعمال حدادة فنية',
    'صيانة وإصلاح الحديد',
  ];

  return (
    <section id="blacksmithing" ref={ref} className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-4 inline-block rounded-full bg-[#3d1f00]/10 px-5 py-2 text-sm font-extrabold text-[#3d1f00]">الحدادة</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#17382f] mb-5 leading-tight">
              حدادة فنية بدقة عالية
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              نقدم خدمات حدادة احترافية تشمل تصنيع وتركيب جميع الأعمال الحديدية. من الأبواب والشبابيك إلى الدرابزين والبوابات، نضمن دقة التنفيذ والجودة العالية.
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
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#3d1f00]">
                    <Check size={13} className="text-white" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">{f}</span>
                </motion.div>
              ))}
            </div>
            <a href="tel:0554202751" className="inline-flex items-center gap-2 rounded-xl bg-[#17382f] text-white px-8 py-4 font-extrabold text-lg hover:bg-[#0f2a24] transition-all shadow-lg hover:shadow-xl hover:scale-105">
              <Phone size={20} />
              احصل على استشارة
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-[#3d1f00]/8 -z-10" />
            <img
              className="rounded-2xl shadow-2xl w-full h-[420px] md:h-[520px] object-cover"
              alt="أعمال الحدادة والأبواب الحديدية"
              src="https://images.unsplash.com/photo-1597126730092-4b15925ad79e?w=800&q=80"
            />
            <div className="absolute -bottom-5 -right-5 rounded-2xl bg-[#3d1f00] px-6 py-4 shadow-xl">
              <p className="text-xs font-bold text-white/70">تبدأ من</p>
              <p className="text-2xl font-extrabold text-white">250 ريال/م²</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Blacksmithing;
