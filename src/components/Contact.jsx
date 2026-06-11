import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    submissions.push({
      ...formData,
      date: new Date().toISOString()
    });
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

    toast({
      title: "تم إرسال رسالتك بنجاح!",
      description: "سنتواصل معك في أقرب وقت ممكن",
    });

    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" ref={ref} className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#17382f] mb-4">اتصل بنا</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            نحن هنا للإجابة على جميع استفساراتكم وتقديم أفضل الحلول
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#17382f] rounded-full p-3 flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#17382f] mb-1">الهاتف</h3>
                  <a href="tel:0554202751" className="text-lg text-gray-700 hover:text-[#17382f] transition-colors">
                    0554202751
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#17382f] rounded-full p-3 flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#17382f] mb-1">الموقع</h3>
                  <p className="text-lg text-gray-700">المملكة العربية السعودية</p>
                </div>
              </div>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mt-8 lg:mt-0"
          >
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">الاسم</label>
                  <input
                    type="text" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#17382f] focus:ring-2 focus:ring-[#17382f]/20 outline-none transition-all text-gray-900"
                    placeholder="أدخل اسمك"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">رقم الهاتف</label>
                  <input
                    type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#17382f] focus:ring-2 focus:ring-[#17382f]/20 outline-none transition-all text-gray-900"
                    placeholder="05xxxxxxxx"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">البريد الإلكتروني (اختياري)</label>
                  <input
                    type="email" name="email" value={formData.email} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#17382f] focus:ring-2 focus:ring-[#17382f]/20 outline-none transition-all text-gray-900"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">الخدمة المطلوبة</label>
                  <select
                    name="service" value={formData.service} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#17382f] focus:ring-2 focus:ring-[#17382f]/20 outline-none transition-all appearance-none bg-white bg-no-repeat text-gray-900"
                    style={{backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'left 0.5rem center', backgroundSize: '1.5em 1.5em'}}
                  >
                    <option value="">اختر الخدمة</option>
                    <option value="fencing">الشبوك</option>
                    <option value="shades">المظلات</option>
                    <option value="blacksmithing">الحدادة</option>
                    <option value="warehouses">المستودعات</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">الرسالة</label>
                  <textarea
                    name="message" value={formData.message} onChange={handleChange} required rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#17382f] focus:ring-2 focus:ring-[#17382f]/20 outline-none transition-all resize-none text-gray-900"
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#17382f] text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#0f2a24] transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  إرسال الرسالة
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
