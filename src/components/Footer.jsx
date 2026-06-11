import React from 'react';
import { Phone, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0d2620] text-white pt-14 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/978e96d447f333fb6c82d1604ba65c1c.png"
                alt="شعار شبوق المملكة"
                className="h-13 w-13 object-contain bg-white rounded-xl p-1.5"
              />
              <div>
                <span className="text-xl font-extrabold">شبوق المملكة</span>
                <p className="text-xs text-white/50 mt-0.5">شبوك · مظلات · حدادة · مستودعات</p>
              </div>
            </div>
            <p className="text-white/65 text-sm leading-relaxed mb-5">
              شركة سعودية رائدة متخصصة في تركيب الشبوك، المظلات، الحدادة، والمستودعات — خبرة تتجاوز 10 سنوات في خدمة عملائنا.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <span className="text-sm font-extrabold text-white/90 mb-5 block uppercase tracking-widest">روابط سريعة</span>
            <div className="space-y-2.5">
              {['home','services','pricing','gallery','contact'].map((id) => {
                const labels = { home: 'الرئيسية', services: 'خدماتنا', pricing: 'أسعارنا', gallery: 'معرض الأعمال', contact: 'اتصل بنا' };
                return (
                  <button key={id} onClick={() => scrollToSection(id)} className="block text-white/60 hover:text-white transition-colors text-sm">
                    {labels[id]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <span className="text-sm font-extrabold text-white/90 mb-5 block uppercase tracking-widest">خدماتنا</span>
            <div className="space-y-2.5">
              {['fencing','shades','blacksmithing','warehouses'].map((id) => {
                const labels = { fencing: 'الشبوك', shades: 'المظلات', blacksmithing: 'الحدادة', warehouses: 'المستودعات' };
                return (
                  <button key={id} onClick={() => scrollToSection(id)} className="block text-white/60 hover:text-white transition-colors text-sm">
                    {labels[id]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Contact */}
          <div>
            <span className="text-sm font-extrabold text-white/90 mb-5 block uppercase tracking-widest">تواصل معنا</span>
            <div className="space-y-3">
              <a href="tel:0554202751" className="flex items-center gap-3 text-white/65 hover:text-white transition-colors group">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 group-hover:bg-[#f2b84b] group-hover:text-[#17382f] transition-all">
                  <Phone size={16} />
                </div>
                <span className="text-sm">0554202751</span>
              </a>
              <a href="https://wa.me/966554202751" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/65 hover:text-white transition-colors group">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 group-hover:bg-green-500 transition-all">
                  <MessageCircle size={16} />
                </div>
                <span className="text-sm">واتساب</span>
              </a>
              <div className="flex items-center gap-3 text-white/65">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                  <MapPin size={16} />
                </div>
                <span className="text-sm">المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-sm mb-4">
            © 2025 شبوق المملكة. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center justify-center gap-3">
            <span className="text-white/35 text-xs">تصميم وتطوير</span>
            <a href="https://www.nasharhub.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img
                src="https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/070f08edd083b36d695e12464237c51c.png"
                alt="NasharHub"
                className="h-7 w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
