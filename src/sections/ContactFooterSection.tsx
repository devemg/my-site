import { ContactItem } from '@models/contact-item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useTranslation } from 'react-i18next';

interface ContactFooterSectionProps {
  items: ContactItem[];
}

export const ContactFooterSection: React.FC<ContactFooterSectionProps> = ({ items }) => {
  const footerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    // Limpiar el texto anterior
    const messageElement = document.querySelector('#footer-message');
    if (messageElement) {
      messageElement.textContent = '';
    }

    const messageAnimation = gsap.to("#footer-message", {text: {value: t('contact.message') }, duration: 2, ease: "none",
    scrollTrigger: {
      trigger: '#footer',
      start: 'top 50%',
      toggleActions: 'play none none reset',
      }});
    return () => {
      messageAnimation.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
      if (messageElement) {
        messageElement.textContent = '';
      }
  };
  }, [t]);
  

  return (
    <div className="h-dvh w-full bg-warn flex flex-col justify-end">
      <div className='m-auto p-5'>
        <h2 id='footer'  className='text-center text-2xl pb-5'>{t('contact.title')}</h2>
        <p className='text-center pb-2'>{t('contact.subtitle1')}</p>
        <p className='text-center pb-2'>{t('contact.subtitle2')}</p>
        <p id='footer-message' className='text-center pb-2'></p>
      </div>
      <footer id='footer' className={`p-5 bg-background extended`} ref={footerRef}>
        <div className='flex gap-4 w-fit justify-center md:justify-start'>
          { 
            items.map(item => <a key={item.id} className='flex gap-2 items-center' target='_blank' href={item.link}>
              <FontAwesomeIcon size="2x" icon={item.icon} ></FontAwesomeIcon>
              <p className='hidden'>{item.username}</p>
            </a>)
          }
        </div>
        <p className='opacity-20 w-full text-center pt-5'> &copy; {t('contact.copyright')}</p>
      </footer>
    </div>
  )
}
