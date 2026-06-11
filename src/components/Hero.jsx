import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Phone, ShieldCheck, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { value: '+10', label: 'سنوات خبرة' },
    { value: '+450', label: 'مشروع منفذ' },
    { value: '24/7', label: 'تواصل سريع' },
  ];

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 z-0">
        <img
          className="h-full w-full object-cover"
          alt="مشروع شبك معدني ومظلات"
          src="https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/9ba8d6d63a83f0f5d3f120442e0a1df2.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#17382f]/95 via-[#17382f]/78 to-white/30" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur"
            >
              <ShieldCheck size={18} />
              حلول معدنية وميدانية في جميع أنحاء المملكة
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-5 text-4xl font-extrabold leading-tight md:text-6xl"
            >
              شبوق المملكة
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl"
            >
              تنفيذ شبوق، مظلات، حدادة، ومستودعات بجودة واضحة من المعاينة حتى التسليم، مع مواد تتحمل ظروف الاستخدام وأسعار تنافسية.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="tel:0554202751"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#f2b84b] px-7 py-3 font-bold text-[#17382f] shadow-lg transition hover:bg-[#ffd06a] sm:w-auto"
              >
                <Phone size={20} />
                اتصل بنا: 0554202751
              </a>
              <button
                onClick={scrollToServices}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/35 bg-white/10 px-7 py-3 font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#17382f] sm:w-auto"
              >
                <Sparkles size={20} />
                تعرف على خدماتنا
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-10 grid max-w-xl grid-cols-3 gap-3"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-white/15 bg-white/10 p-4 text-center backdrop-blur">
                  <div className="text-2xl font-extrabold text-[#f2b84b]">{stat.value}</div>
                  <div className="mt-1 text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block"
          >
            <button
              onClick={scrollToServices}
              className="mr-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-[#17382f]"
              aria-label="الانتقال إلى الخدمات"
            >
              <ArrowDown size={32} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

