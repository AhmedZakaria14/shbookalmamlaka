import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Fencing from '@/components/Fencing';
import Shades from '@/components/Shades';
import Blacksmithing from '@/components/Blacksmithing';
import Warehouses from '@/components/Warehouses';
import Pricing from '@/components/Pricing';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { Toaster } from '@/components/ui/toaster';
import Lightbox from '@/components/Lightbox';

function App() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'شبوق المملكة',
    image: 'https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/978e96d447f333fb6c82d1604ba65c1c.png',
    '@id': 'https://www.shbookalmamlaka.com/',
    url: 'https://www.shbookalmamlaka.com/',
    telephone: '+966554202751',
    priceRange: '$$',
    address: { '@type': 'PostalAddress', addressCountry: 'SA' },
    description: 'شركة سعودية متخصصة في تركيب الشبوك الأمنية والزراعية، المظلات، أعمال الحدادة، وبناء المستودعات والهناجر في المملكة العربية السعودية.',
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Saturday','Sunday'], opens: '08:00', closes: '18:00' },
    ],
    contactPoint: { '@type': 'ContactPoint', telephone: '+966554202751', contactType: 'customer service', areaServed: 'SA', availableLanguage: 'ar' },
  };

  return (
    <>
      <Helmet>
        <title>شبوق المملكة | تركيب شبوك ومظلات وحدادة ومستودعات في السعودية</title>
        <meta name="description" content="شبوق المملكة تقدم تنفيذ الشبوك، المظلات، أعمال الحدادة، وبناء المستودعات والهناجر بجودة عالية وأسعار تنافسية في السعودية." />
        <meta name="keywords" content="شبوك, مظلات, حدادة, مستودعات, هناجر, تركيب شبوك, شبوك أمنية, شبوك زراعية, مظلات سيارات, أبواب حديد" />
        <link rel="canonical" href="https://www.shbookalmamlaka.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shbookalmamlaka.com/" />
        <meta property="og:title" content="شبوق المملكة | حلول الشبوك والمظلات والحدادة" />
        <meta property="og:description" content="تنفيذ احترافي للشبوك، المظلات، الحدادة، والمستودعات في المملكة العربية السعودية." />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/1a971ee1-a4c7-462d-b383-44f66c89ead2/9ba8d6d63a83f0f5d3f120442e0a1df2.jpg" />
        <meta property="og:site_name" content="شبوق المملكة" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-white" dir="rtl">
        <Header />
        <main className="overflow-x-hidden">
          <Hero />
          <Services />
          <Fencing />
          <Shades />
          <Blacksmithing />
          <Warehouses />
          <Pricing />
          <Gallery onImageClick={setLightboxImage} />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <FloatingButtons />
        <Toaster />
        {lightboxImage && <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />}
      </div>
    </>
  );
}

export default App;
