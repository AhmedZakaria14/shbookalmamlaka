import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';

const Fencing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    'شبوك حديدية عالية الجودة',
    'شبوك مجلفنة ضد الصدأ',
    'شبوك زراعية ومزارع',
    'شبوك أمنية للمنشآت',
    'تركيب احترافي وسريع',
    'ضمان على جميع الأعمال'
  ];

  return (
    <section id="fencing" ref={ref} className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#17382f] mb-6">الشبوك</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              نوفر جميع أنواع الشبوك بأعلى معايير الجودة والمتانة. سواء كنت تبحث عن شبوك للمزارع، المنشآت الصناعية، أو الأمنية، نحن نقدم الحل الأمثل.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-[#17382f] rounded-full p-1 flex-shrink-0">
                    <Check className="text-white" size={20} />
                  </div>
                  <span className="text-base md:text-lg text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="tel:0554202751"
              className="w-full sm:w-auto text-center inline-block bg-[#17382f] text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#0f2a24] transition-all transform hover:scale-105 shadow-lg"
            >
              اطلب عرض سعر
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img className="rounded-lg shadow-xl w-full h-[350px] md:h-[500px] object-cover" alt="تركيب الشبوك الحديدية" src="https://images.unsplash.com/photo-1692909253271-c106dd5905e4" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Fencing;
