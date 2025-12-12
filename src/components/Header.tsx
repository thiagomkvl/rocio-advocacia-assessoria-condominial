import { useEffect } from 'react';
import logoRocio from '@/assets/logo-rocio.png';

export const Header = () => {
  const HEADER_HEIGHT_CLASS = 'h-[80px]';

  useEffect(() => {
    if ((window as any).fbq) return;

    (window as any).fbq = function () {
      (window as any).fbq.callMethod
        ? (window as any).fbq.callMethod.apply((window as any).fbq, arguments)
        : (window as any).fbq.queue.push(arguments);
    };

    if (!(window as any)._fbq) (window as any)._fbq = [];
    (window as any).fbq.push = (window as any).fbq;
    (window as any).fbq.loaded = true;
    (window as any).fbq.version = '2.0';
    (window as any).fbq.queue = [];

    (window as any).fbq('init', '1118093889969900');
    (window as any).fbq('track', 'PageView');

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);
  }, []);

  return (
    <>
      <header className={`fixed top-0 w-full ${HEADER_HEIGHT_CLASS} z-50 bg-primary border-b border-border`}>
        <div className="flex items-center justify-center h-full px-6">
          <img 
            src={logoRocio} 
            alt="Rocio Advocacia" 
            className="h-12 md:h-14 object-contain"
          />
        </div>
      </header>

      <div className={HEADER_HEIGHT_CLASS}></div>
    </>
  );
};