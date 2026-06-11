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
    { id: 'pricing', label: 'الأسعار' },
    { id: 'gallery', label: 'الأعمال' },
    { id: 'testimonials', label: 'العملاء' },
    { id: 'contact', label: 'تواصل معنا' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/97 shadow-lg backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 text-right">
            <img
              src="https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/978e96d447f333fb6c82d1604ba65c1c.png"
              alt="شعار شبوق المملكة"
              className="h-11 w-11 rounded-xl bg-white object-contain p-1 shadow-sm"
            />
            <div>
              <h2 className={`text-lg font-extrabold md:text-xl transition-colors ${isScrolled ? 'text-[#17382f]' : 'text-white'}`}>
                شبوق المملكة
              </h2>
              <p className={`hidden text-xs md:block transition-colors ${isScrolled ? 'text-gray-400' : 'text-white/65'}`}>
                شبوك · مظلات · حدادة · مستودعات
              </p>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`rounded-lg px-4 py-2 text-sm font-bold transition-all ${
                  isScrolled
                    ? 'text-gray-600 hover:bg-[#f0f7f3] hover:text-[#17382f]'
                    : 'text-white/85 hover:bg-white/15 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <a
            href="tel:0554202751"
            className="hidden items-center gap-2 rounded-xl bg-[#f2b84b] px-5 py-2.5 text-sm font-extrabold text-[#17382f] shadow-lg shadow-[#f2b84b]/25 transition hover:bg-[#ffd06a] md:inline-flex"
          >
            <Phone size={16} />
            0554202751
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`rounded-xl p-2 transition lg:hidden ${isScrolled ? 'text-[#17382f] hover:bg-gray-100' : 'text-white hover:bg-white/15'}`}
            aria-label="القائمة"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 rounded-2xl border border-gray-100 bg-white p-3 shadow-2xl lg:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full rounded-xl px-4 py-3 text-right font-bold text-gray-700 transition hover:bg-[#f0f7f3] hover:text-[#17382f]"
              >
                {item.label}
              </button>
            ))}
            <div className="mt-2 border-t border-gray-100 pt-3">
              <a href="tel:0554202751" className="flex items-center justify-center gap-2 rounded-xl bg-[#f2b84b] py-3 font-extrabold text-[#17382f]">
                <Phone size={18} />
                اتصل الآن: 0554202751
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
