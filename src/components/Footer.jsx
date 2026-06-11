import React from 'react';
import { Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#17382f] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/978e96d447f333fb6c82d1604ba65c1c.png" 
                alt="شعار شركة شبوك المملكة" 
                className="h-12 w-12 object-contain bg-white rounded-lg p-1"
              />
              <div>
                <span className="text-xl font-bold">شبوك المملكة</span>
              </div>
            </div>
            <p className="text-gray-200 leading-relaxed">
              شركة سعودية رائدة متخصصة في تركيب الشبوك، المظلات، الحدادة، والمستودعات
            </p>
          </div>

          <div>
            <span className="text-lg font-bold mb-4 block">روابط سريعة</span>
            <div className="space-y-2">
              <button onClick={() => scrollToSection('home')} className="block text-gray-200 hover:text-white transition-colors">الرئيسية</button>
              <button onClick={() => scrollToSection('services')} className="block text-gray-200 hover:text-white transition-colors">خدماتنا</button>
              <button onClick={() => scrollToSection('gallery')} className="block text-gray-200 hover:text-white transition-colors">معرض الأعمال</button>
              <button onClick={() => scrollToSection('contact')} className="block text-gray-200 hover:text-white transition-colors">اتصل بنا</button>
            </div>
          </div>

          <div>
            <span className="text-lg font-bold mb-4 block">خدماتنا</span>
            <div className="space-y-2">
              <button onClick={() => scrollToSection('fencing')} className="block text-gray-200 hover:text-white transition-colors">الشبوك</button>
              <button onClick={() => scrollToSection('shades')} className="block text-gray-200 hover:text-white transition-colors">المظلات</button>
              <button onClick={() => scrollToSection('blacksmithing')} className="block text-gray-200 hover:text-white transition-colors">الحدادة</button>
              <button onClick={() => scrollToSection('warehouses')} className="block text-gray-200 hover:text-white transition-colors">المستودعات</button>
            </div>
          </div>

          <div>
            <span className="text-lg font-bold mb-4 block">تواصل معنا</span>
            <div className="space-y-3">
              <a href="tel:0554202751" className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors">
                <Phone size={18} />
                <span>0554202751</span>
              </a>
              <div className="flex items-center gap-2 text-gray-200">
                <MapPin size={18} />
                <span>المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 pb-4 text-center">
          <p className="text-gray-200 mb-4">
            © 2025 شبوك المملكة. جميع الحقوق محفوظة.
          </p>
          
          <div className="flex items-center justify-center gap-3 py-2 border-t border-white/10 mt-4">
            <span className="text-gray-300 text-sm">تم إنشاء الموقع بواسطة</span>
            <a 
              href="https://www.nasharhub.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src="https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/070f08edd083b36d695e12464237c51c.png" 
                alt="NasharHub Logo" 
                className="h-8 md:h-10 w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
