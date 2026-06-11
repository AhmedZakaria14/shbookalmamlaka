import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Tag } from 'lucide-react';

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const servicePrices = [
    {
      name: 'الشبوك',
      price: '45 ريال',
      unit: 'للمتر الطولي',
      description: 'تركيب شبوك مجلفنة عالية الجودة للمزارع والمنشآت.',
    },
    {
      name: 'المظلات',
      price: '90 ريال',
      unit: 'للمتر المربع',
      description: 'مظلات قماش PVC كوري عازلة للحرارة مع ضمان 10 سنوات.',
    },
    {
      name: 'الحدادة',
      price: '250 ريال',
      unit: 'للمتر المربع',
      description: 'أبواب وشبابيك بتصاميم فنية مخصصة من حديد مشغول.',
    },
    {
      name: 'المستودعات',
      price: '150 ريال',
      unit: 'للمتر المربع',
      description: 'بناء هناجر ومستودعات معتمدة بنظام تسليم مفتاح.',
    },
  ];

  return (
    <section id="pricing" ref={ref} className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#17382f] mb-4">أسعارنا التنافسية</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            نقدم أسعارًا واضحة ومنافسة تبدأ من:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicePrices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex flex-col"
            >
              <div className="flex-grow">
                <Tag className="mx-auto text-[#17382f] mb-4" size={40} />
                <h3 className="text-2xl font-bold text-[#17382f] mb-3">{service.name}</h3>
                <p className="text-gray-500 mb-4">{service.description}</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 mt-auto">
                <p className="text-gray-600 text-sm">تبدأ من</p>
                <p className="text-3xl font-extrabold text-gray-800">{service.price}</p>
                <p className="text-gray-500 text-sm">{service.unit}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-12"
        >
            <p className="text-gray-600 mb-4">الأسعار قابلة للتغيير بناءً على المواصفات والمساحة. للحصول على عرض سعر دقيق، يرجى التواصل معنا.</p>
            <a
              href="tel:0554202751"
              className="inline-block bg-[#17382f] text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#0f2a24] transition-all transform hover:scale-105 shadow-lg"
            >
              اطلب عرض سعر الآن
            </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
