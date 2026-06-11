import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ChevronDown, ShieldCheck, Clock, Award } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { value: '+10', label: 'سنوات خبرة', icon: Award },
    { value: '+450', label: 'مشروع منفذ', icon: ShieldCheck },
    { value: '24/7', label: 'دعم فوري', icon: Clock },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          className="h-full w-full object-cover"
          alt="مشروع شبك معدني ومظلات"
          src="https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/9ba8d6d63a83f0f5d3f120442e0a1df2.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0d2620]/97 via-[#17382f]/85 to-[#17382f]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2620]/60 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f2b84b]/40 bg-[#f2b84b]/10 px-5 py-2 text-sm font-bold text-[#f2b84b] backdrop-blur-sm"
          >
            <ShieldCheck size={16} />
            الخبرة والجودة في خدمتك — جميع أنحاء المملكة
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mb-6 text-5xl font-extrabold leading-tight text-white md:text-7xl"
          >
            شبوق المملكة
            <span className="block text-2xl font-bold text-[#f2b84b] mt-2 md:text-3xl">
              شبوك · مظلات · حدادة · مستودعات
            </span>
          </motion.h1>

          {/* Desc */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-10 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl"
          >
            تنفيذ احترافي من المعاينة حتى التسليم. مواد تتحمل الظروف القاسية، وأسعار تنافسية، وفريق متخصص يصل إليك أينما كنت.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="tel:0554202751"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#f2b84b] px-8 py-4 text-lg font-extrabold text-[#17382f] shadow-2xl shadow-[#f2b84b]/30 transition hover:bg-[#ffd06a] hover:scale-105 active:scale-100"
            >
              <Phone size={22} />
              اتصل الآن: 0554202751
            </a>
            <button
              onClick={scrollToServices}
              className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#17382f] hover:scale-105 active:scale-100"
            >
              تعرف على خدماتنا
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-14 grid max-w-lg grid-cols-3 gap-4"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="rounded-2xl border border-white/15 bg-white/8 p-4 text-center backdrop-blur-sm">
                  <Icon size={20} className="mx-auto mb-2 text-[#f2b84b]" />
                  <div className="text-3xl font-extrabold text-white">{stat.value}</div>
                  <div className="mt-1 text-xs font-medium text-white/70">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToServices}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/60 hover:text-white transition"
        aria-label="scroll down"
      >
        <span className="text-xs font-medium tracking-wider">اكتشف المزيد</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
