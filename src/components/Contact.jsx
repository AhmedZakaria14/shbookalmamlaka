import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast({ title: 'تم إرسال رسالتك بنجاح!', description: 'سنتواصل معك في أقرب وقت ممكن.' });
      setFormData({ name: '', phone: '', service: '', message: '' });
      setLoading(false);
    }, 800);
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const contactInfo = [
    {
      icon: Phone,
      title: 'اتصل بنا',
      content: '0554202751',
      href: 'tel:0554202751',
      color: 'bg-[#17382f]',
    },
    {
      icon: MessageCircle,
      title: 'واتساب',
      content: 'راسلنا مباشرة',
      href: 'https://wa.me/966554202751',
      color: 'bg-green-600',
    },
    {
      icon: MapPin,
      title: 'نخدم',
      content: 'جميع أنحاء المملكة',
      href: null,
      color: 'bg-[#f2b84b]',
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 md:py-28 bg-[#f4f7f5]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="mb-4 inline-block rounded-full bg-[#17382f]/10 px-5 py-2 text-sm font-extrabold text-[#17382f]">
            تواصل معنا
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#17382f] mb-4">نحن هنا لمساعدتك</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            اتصل بنا أو أرسل رسالة وسنرد عليك في أقرب وقت ممكن
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-5"
          >
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              const content = item.href ? (
                <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-lg font-bold text-[#17382f] hover:underline">
                  {item.content}
                </a>
              ) : (
                <p className="text-lg font-bold text-[#17382f]">{item.content}</p>
              );
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm"
                >
                  <div className={`${item.color} flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-white`}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-0.5">{item.title}</p>
                    {content}
                  </div>
                </motion.div>
              );
            })}

            {/* CTA Banner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="rounded-2xl bg-[#17382f] p-6 text-white"
            >
              <h3 className="text-lg font-extrabold mb-2">هل تريد عرض سعر سريع؟</h3>
              <p className="text-white/75 text-sm mb-4">اتصل بنا مباشرة وسنرسل لك العرض خلال 24 ساعة</p>
              <a
                href="tel:0554202751"
                className="inline-flex items-center gap-2 rounded-xl bg-[#f2b84b] px-5 py-3 font-bold text-[#17382f] text-sm hover:bg-[#ffd06a] transition"
              >
                <Phone size={16} />
                اتصل الآن
              </a>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="text-xl font-extrabold text-[#17382f] mb-6">أرسل رسالتك</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">الاسم *</label>
                  <input
                    type="text" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 outline-none focus:border-[#17382f] focus:ring-2 focus:ring-[#17382f]/15 transition-all"
                    placeholder="اسمك الكريم"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">الهاتف *</label>
                  <input
                    type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 outline-none focus:border-[#17382f] focus:ring-2 focus:ring-[#17382f]/15 transition-all"
                    placeholder="05xxxxxxxx"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-sm font-bold text-gray-700 mb-2">الخدمة المطلوبة *</label>
                <select
                  name="service" value={formData.service} onChange={handleChange} required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 outline-none focus:border-[#17382f] focus:ring-2 focus:ring-[#17382f]/15 transition-all bg-white"
                >
                  <option value="">اختر الخدمة</option>
                  <option value="fencing">الشبوك</option>
                  <option value="shades">المظلات</option>
                  <option value="blacksmithing">الحدادة</option>
                  <option value="warehouses">المستودعات</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2">تفاصيل الطلب *</label>
                <textarea
                  name="message" value={formData.message} onChange={handleChange} required rows="4"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 outline-none focus:border-[#17382f] focus:ring-2 focus:ring-[#17382f]/15 transition-all resize-none"
                  placeholder="اكتب تفاصيل مشروعك..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#17382f] py-4 font-extrabold text-white text-lg hover:bg-[#0f2a24] transition-all disabled:opacity-60"
              >
                {loading ? (
                  <div className="h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                ) : (
                  <>
                    <Send size={20} />
                    إرسال الرسالة
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
