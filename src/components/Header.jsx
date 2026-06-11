import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'services', label: 'الخدمات' },
    { id: 'gallery', label: 'الأعمال' },
    { id: 'testimonials', label: 'آراء العملاء' },
    { id: 'contact', label: 'تواصل معنا' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-lg backdrop-blur' : 'bg-[#17382f]/35 backdrop-blur-md'
      }`}
    >
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 text-right">
            <img
              src="https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/978e96d447f333fb6c82d1604ba65c1c.png"
              alt="شعار شركة شبوق المملكة"
              className="h-11 w-11 rounded-lg bg-white object-contain p-1"
            />
            <div>
              <h2 className={`text-lg font-extrabold md:text-xl ${isScrolled ? 'text-[#17382f]' : 'text-white'}`}>
                شبوق المملكة
              </h2>
              <p className={`hidden text-xs md:block ${isScrolled ? 'text-gray-500' : 'text-white/70'}`}>
                شبوق | مظلات | حدادة | مستودعات
              </p>
            </div>
          </button>

          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-bold transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-[#17382f]' : 'text-white/88 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <a
            href="tel:0554202751"
            className="hidden items-center gap-2 rounded-lg bg-[#f2b84b] px-4 py-2 font-bold text-[#17382f] transition hover:bg-[#ffd06a] md:inline-flex"
          >
            <Phone size={18} />
            0554202751
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`rounded-lg p-2 lg:hidden ${isScrolled ? 'text-[#17382f]' : 'text-white'}`}
            aria-label="فتح القائمة"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-4 rounded-lg border border-gray-100 bg-white p-2 shadow-xl lg:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full rounded-lg px-4 py-3 text-right font-bold text-gray-700 transition hover:bg-[#edf5f2] hover:text-[#17382f]"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;

