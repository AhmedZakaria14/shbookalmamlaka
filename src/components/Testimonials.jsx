import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: 'أحمد السعيد',
      role: 'صاحب مزرعة',
      text: 'خدمة ممتازة وجودة عالية في تركيب الشبوك. فريق محترف والتزام بالمواعيد. أنصح بالتعامل معهم.',
      rating: 5
    },
    {
      name: 'محمد العتيبي',
      role: 'مدير منشأة',
      text: 'قاموا بتركيب مظلات السيارات بشكل رائع. التصميم عصري والتنفيذ احترافي. شكراً لكم.',
      rating: 5
    },
    {
      name: 'خالد الدوسري',
      role: 'صاحب مصنع',
      text: 'بنوا لنا مستودع بمواصفات عالية وبسعر مناسب. العمل نظيف والفريق متعاون جداً.',
      rating: 5
    },
    {
      name: 'عبدالله القحطاني',
      role: 'صاحب فيلا',
      text: 'أعمال الحدادة والأبواب الحديدية كانت فوق التوقعات. دقة في العمل وجودة ممتازة.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" ref={ref} className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#17382f] mb-4">آراء عملائنا</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            نفخر بثقة عملائنا ورضاهم عن خدماتنا
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <p className="font-bold text-[#17382f]">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
