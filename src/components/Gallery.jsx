import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Gallery = ({ onImageClick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const galleryItems = [
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/9ba8d6d63a83f0f5d3f120442e0a1df2.jpg', alt: 'تركيب شبك أمني حول منشأة صناعية' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/8879b05f7d20fffe3d6dfdd1e22fcb1a.jpg', alt: 'مظلات مواقف سيارات بتصميم حديث' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/cc9bbb202f951f23fdcef993de0a5554.jpg', alt: 'هيكل مستودع معدني قيد الإنشاء' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/357d0e5c255eace8541e084a8cdc924e.jpg', alt: 'باب حديد مشغول بتصميم فني' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/3ba0f8568b677b34a37dc9abcc66472f.jpg', alt: 'شبوك مجلفنة لمزرعة في السعودية' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/1c92271c74e6d475267a9cdf837fbc0d.jpg', alt: 'مظلة قماشية لحديقة منزل' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/c8a959b73e2d68816beb51ae61fbfc27.jpg', alt: 'بناء هنجر صناعي كبير' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/4a8d4918c7ad1e7c57ea763c37869b98.jpg', alt: 'درابزين حديد لدرج داخلي' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/9d336ad839448d5b406531f0fa2a6d0e.jpg', alt: 'شبوك شائكة لأرض صحراوية' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/d1bda47c9312f57842f0a48ac11252f3.jpg', alt: 'مظلة سيارة بتصميم هرمي' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/8d365277f453161a663b0ac866dd4f38.jpg', alt: 'مستودع جاهز للتسليم' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/497f2a5facfdf4ad03aa1a9090e9636e.jpg', alt: 'أعمال حدادة لنوافذ خارجية' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/a5b8edda3c60cf7da398d77b7ed2de94.jpg', alt: 'تركيب شبوك ملاعب رياضية' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/3323bee7c7cd16dccead34fbb9872c82.jpg', alt: 'مظلات مسابح عالية الجودة' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/9d29f27935efa113ff0ad2ee1d214152.jpg', alt: 'هيكل حديدي لمبنى تجاري' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/98648e3b152ecb7ae90b44dd4961bc91.jpg', alt: 'بوابة حديد كهربائية لفيلا' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/086873d82ca0a11f0b6e70999821b9e2.jpg', alt: 'شبوك حماية للمواقع الإنشائية' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/22eabe0f065c71003459ad51ec97bb2d.jpg', alt: 'مظلات خشبية لجلسات خارجية' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/66c63e5bcea9fb541a6ef073ce7b67e2.jpg', alt: 'مستودع تخزين معزول حرارياً' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/a10b50ef976571adbd8aee08652e8701.jpg', alt: 'شبابيك حديد بتصميم عصري' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/bc04f764eb25bc749b457f36f1fc5ebb.jpg', alt: 'شبوك خضراء للمزارع والحدائق' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/f587fa1fae5cdff669492b8fbdc827ee.jpg', alt: 'مظلة مدخل مبنى بتصميم مميز' },
    { src: 'https://i.imgur.com/2V12U0L.jpeg', alt: 'شبوك ملاعب عشبية' },
    { src: 'https://i.imgur.com/5vO4tCf.jpeg', alt: 'سياج معدني لمشروع حكومي' },
    { src: 'https://i.imgur.com/sBq4yWf.jpeg', alt: 'شبوك أمنية مع أسلاك شائكة' },
    { src: 'https://i.imgur.com/9oFUnzL.jpeg', alt: 'تركيب شبوك أمنية في منطقة صحراوية' },
    { src: 'https://i.imgur.com/qJ4B6xR.jpeg', alt: 'تجهيز أعمدة شبوك للتركيب' },
    { src: 'https://i.imgur.com/xG5c0bS.jpeg', alt: 'سياج شبك معزز بأسلاك شائكة' },
    { src: 'https://i.imgur.com/fW8dY6j.jpeg', alt: 'شبوك مجلفنة عالية التحمل' },
    { src: 'https://i.imgur.com/yH3b9oF.jpeg', alt: 'تركيب شبك حول منطقة تخزين' },
    { src: 'https://i.imgur.com/rZ7e5qH.jpeg', alt: 'شبوك أمنية لمزرعة' },
    { src: 'https://i.imgur.com/kL3e4nN.jpeg', alt: 'سياج شبك لمنطقة صناعية' },
    { src: 'https://i.imgur.com/2V12U0L.jpeg', alt: 'شبوك ملاعب كرة قدم' },
    { src: 'https://i.imgur.com/sBq4yWf.jpeg', alt: 'تركيب شبك أمني مع دعامات' },
    { src: 'https://i.imgur.com/9oFUnzL.jpeg', alt: 'زاوية شبك أمني معززة' },
    { src: 'https://i.imgur.com/qJ4B6xR.jpeg', alt: 'شبوك مع دعامات جانبية لمزيد من القوة' },
    { src: 'https://i.imgur.com/xG5c0bS.jpeg', alt: 'مظلة سيارة بتصميم قوسي أنيق' },
    { src: 'https://i.imgur.com/fW8dY6j.jpeg', alt: 'مظلات مواقف سيارات لمبنى تجاري' },
    { src: 'https://i.imgur.com/yH3b9oF.jpeg', alt: 'هيكل مستودع معدني ضخم' },
    { src: 'https://i.imgur.com/rZ7e5qH.jpeg', alt: 'بناء هنجر حديدي' },
    { src: 'https://i.imgur.com/kL3e4nN.jpeg', alt: 'مستودع كبير قيد الإنشاء' },
    { src: 'https://i.imgur.com/2V12U0L.jpeg', alt: 'مظلة فناء خلفي بتغطية شفافة' },
    { src: 'https://i.imgur.com/5vO4tCf.jpeg', alt: 'مظلة بيضاء لجلسة خارجية' },
    { src: 'https://i.imgur.com/sBq4yWf.jpeg', alt: 'مظلة سيارات بتغطية زجاجية' },
  ];

  return (
    <section id="gallery" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#17382f] mb-4">معرض أعمالنا</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            تصفح مجموعة من أفضل مشاريعنا المنجزة بأعلى معايير الجودة
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => onImageClick(item)}
            >
              <img 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
                src={item.src}
                alt={item.alt}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
