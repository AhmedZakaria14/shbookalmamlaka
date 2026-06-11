import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ZoomIn, X } from 'lucide-react';

const Gallery = ({ onImageClick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [filter, setFilter] = useState('all');

  // Only real, working images — no fake imgur links
  const galleryItems = [
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/9ba8d6d63a83f0f5d3f120442e0a1df2.jpg', alt: 'تركيب شبك أمني حول منشأة صناعية', cat: 'fencing' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/8879b05f7d20fffe3d6dfdd1e22fcb1a.jpg', alt: 'مظلات مواقف سيارات بتصميم حديث', cat: 'shades' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/cc9bbb202f951f23fdcef993de0a5554.jpg', alt: 'هيكل مستودع معدني قيد الإنشاء', cat: 'warehouses' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/357d0e5c255eace8541e084a8cdc924e.jpg', alt: 'باب حديد مشغول بتصميم فني', cat: 'blacksmithing' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/3ba0f8568b677b34a37dc9abcc66472f.jpg', alt: 'شبوك مجلفنة لمزرعة في السعودية', cat: 'fencing' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/1c92271c74e6d475267a9cdf837fbc0d.jpg', alt: 'مظلة قماشية لحديقة منزل', cat: 'shades' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/c8a959b73e2d68816beb51ae61fbfc27.jpg', alt: 'بناء هنجر صناعي كبير', cat: 'warehouses' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/4a8d4918c7ad1e7c57ea763c37869b98.jpg', alt: 'درابزين حديد لدرج داخلي', cat: 'blacksmithing' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/9d336ad839448d5b406531f0fa2a6d0e.jpg', alt: 'شبوك شائكة لأرض صحراوية', cat: 'fencing' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/d1bda47c9312f57842f0a48ac11252f3.jpg', alt: 'مظلة سيارة بتصميم هرمي', cat: 'shades' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/8d365277f453161a663b0ac866dd4f38.jpg', alt: 'مستودع جاهز للتسليم', cat: 'warehouses' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/497f2a5facfdf4ad03aa1a9090e9636e.jpg', alt: 'أعمال حدادة لنوافذ خارجية', cat: 'blacksmithing' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/a5b8edda3c60cf7da398d77b7ed2de94.jpg', alt: 'تركيب شبوك ملاعب رياضية', cat: 'fencing' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/3323bee7c7cd16dccead34fbb9872c82.jpg', alt: 'مظلات مسابح عالية الجودة', cat: 'shades' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/9d29f27935efa113ff0ad2ee1d214152.jpg', alt: 'هيكل حديدي لمبنى تجاري', cat: 'warehouses' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/98648e3b152ecb7ae90b44dd4961bc91.jpg', alt: 'بوابة حديد كهربائية لفيلا', cat: 'blacksmithing' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/086873d82ca0a11f0b6e70999821b9e2.jpg', alt: 'شبوك حماية للمواقع الإنشائية', cat: 'fencing' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/22eabe0f065c71003459ad51ec97bb2d.jpg', alt: 'مظلات خشبية لجلسات خارجية', cat: 'shades' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/66c63e5bcea9fb541a6ef073ce7b67e2.jpg', alt: 'مستودع تخزين معزول حرارياً', cat: 'warehouses' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/a10b50ef976571adbd8aee08652e8701.jpg', alt: 'شبابيك حديد بتصميم عصري', cat: 'blacksmithing' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/bc04f764eb25bc749b457f36f1fc5ebb.jpg', alt: 'شبوك خضراء للمزارع والحدائق', cat: 'fencing' },
    { src: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/f587fa1fae5cdff669492b8fbdc827ee.jpg', alt: 'مظلة مدخل مبنى بتصميم مميز', cat: 'shades' },
  ];

  const filters = [
    { id: 'all', label: 'الكل' },
    { id: 'fencing', label: 'الشبوك' },
    { id: 'shades', label: 'المظلات' },
    { id: 'blacksmithing', label: 'الحدادة' },
    { id: 'warehouses', label: 'المستودعات' },
  ];

  const filtered = filter === 'all' ? galleryItems : galleryItems.filter(i => i.cat === filter);

  return (
    <section id="gallery" ref={ref} className="py-20 md:py-28 bg-[#f4f7f5]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span className="mb-4 inline-block rounded-full bg-[#17382f]/10 px-5 py-2 text-sm font-extrabold text-[#17382f]">
            أعمالنا
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#17382f] mb-4">معرض المشاريع</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            من أبرز مشاريعنا المنجزة في المملكة — اضغط على أي صورة لعرضها
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`rounded-full px-5 py-2 text-sm font-bold transition-all ${
                filter === f.id
                  ? 'bg-[#17382f] text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-[#17382f] hover:text-[#17382f]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item, index) => (
            <motion.div
              key={item.src + index}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.6) }}
              className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer bg-gray-200"
              style={{ aspectRatio: '4/3' }}
              onClick={() => onImageClick(item)}
            >
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={item.src}
                alt={item.alt}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17382f]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
                  <ZoomIn size={22} className="text-white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-xs font-bold text-white truncate">{item.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
