import { useEffect } from 'react';
import image from '../assets/images/landing-image.png'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
interface LandingSectionProps {
    name: string;
    role: string;
    phrase: string;
}

export const LandingSection: React.FC<LandingSectionProps> = ({ name, role, phrase }) => {

  useEffect(() => {
    // Limpiar el texto anterior
    const textElement = document.querySelector('#text');
    if (textElement) {
      textElement.textContent = '';
    }

    gsap.timeline()
    .fromTo('#name', {y: -100, opacity: 0, duration: 2 }, { y: 0, opacity: 1 } )
    .fromTo('#role', {y: -100, opacity: 0, duration: 2 }, { y: 0, opacity: 1 } );
    
    const textAnimation = gsap.to("#text", {text: {value: phrase }, duration: 5, delay: 1, ease: "none", yoyo: true, repeat: -1, scrollTrigger: {
      trigger: '#landing',
      toggleActions: 'play pause resume reset',
    } });

    return () => {
      textAnimation.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
      if (textElement) {
        textElement.textContent = '';
      }
    };
  }, [phrase]);
  

  return (
    <div className="flex flex-col-reverse items-center gap-1 w-full p-10 justify-center md:flex-row md:p-20 h-full">
        <div id='landing' className='w-full md:max-w-1/2'>
          <h1 id='name' className='text-6xl text-center md:text-left'>{name}</h1>
          <h2 id='role' className='text-2xl text-center md:text-left'>{role}</h2>
          <p id='text' className='pt-20 text-center md:text-left'></p>
        </div>
          <div className='w-3/4 md:w-1/4 relative pb-10'>
            <img className='w-full' src={image} alt="Emely Garcia" />
          </div>
    </div>
  )
}
