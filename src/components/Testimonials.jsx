import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const testimonials = [
    {
      name: 'أحمد السعيد',
      role: 'صاحب مزرعة — الرياض',
      text: 'خدمة ممتازة وجودة عالية في تركيب الشبوك. فريق محترف والتزام بالمواعيد. أنصح بشدة بالتعامل معهم.',
      rating: 5,
    },
    {
      name: 'محمد العتيبي',
      role: 'مدير منشأة — جدة',
      text: 'قاموا بتركيب مظلات السيارات بشكل رائع. التصميم عصري والتنفيذ احترافي من البداية للنهاية.',
      rating: 5,
    },
    {
      name: 'خالد الدوسري',
      role: 'صاحب مصنع — الدمام',
      text: 'بنوا لنا مستودع بمواصفات عالية وبسعر مناسب. العمل نظيف والفريق متعاون جداً ومحترف.',
      rating: 5,
    },
    {
      name: 'عبدالله القحطاني',
      role: 'صاحب فيلا — الرياض',
      text: 'أعمال الحدادة والأبواب الحديدية كانت فوق التوقعات. دقة في العمل وجودة ممتازة لا يُنافَس عليها.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" ref={ref} className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="mb-4 inline-block rounded-full bg-[#17382f]/10 px-5 py-2 text-sm font-extrabold text-[#17382f]">
            شهادات العملاء
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#17382f] mb-4">ماذا يقول عملاؤنا</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            ثقة عملائنا هي أهم شهادة على جودة عملنا
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative rounded-2xl border border-gray-100 bg-[#f8fbf9] p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote icon */}
              <div className="absolute top-6 left-6 opacity-10">
                <Quote size={48} className="text-[#17382f] scale-x-[-1]" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-[#f2b84b] text-[#f2b84b]" />
                ))}
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6 relative z-10">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 border-t border-gray-200 pt-5">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-[#17382f] to-[#22503f] flex items-center justify-center text-white font-extrabold text-lg flex-shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-extrabold text-[#17382f]">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
