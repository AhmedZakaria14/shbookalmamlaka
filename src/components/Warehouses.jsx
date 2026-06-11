import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';

const Warehouses = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    'تصميم وبناء مستودعات',
    'هناجر صناعية',
    'مستودعات تخزين',
    'مباني معدنية',
    'عزل حراري ومائي',
    'تسليم مفتاح'
  ];

  return (
    <section id="warehouses" ref={ref} className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <img className="rounded-lg shadow-xl w-full h-[350px] md:h-[500px] object-cover" alt="بناء المستودعات والهناجر الصناعية" src="https://images.unsplash.com/photo-1609293283499-3ab09a958434" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#17382f] mb-6">المستودعات</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              نتخصص في بناء وتجهيز المستودعات والهناجر الصناعية بمواصفات عالمية. نوفر حلول متكاملة من التصميم إلى التسليم النهائي.
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
        </div>
      </div>
    </section>
  );
};

export default Warehouses;
