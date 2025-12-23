import gsap from "gsap";
import { useEffect } from "react";

interface QuoteSectionProps {
    text: string;
    author: string;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ text, author }) => {
  
  useEffect(() => {
    const quoteAnimation = gsap.fromTo('.quote-item', { x: '100%' }, { x:0, duration: 1, scrollTrigger: {
      trigger: '#quote',
      scrub:1
    }});
    
    return () => {
      quoteAnimation.kill();
    };
  }, [text, author]);

  return (
    <div id="quote" className="w-full h-dvh bg-accent p-10 flex flex-col justify-center">
      <blockquote className="quote-item text-center text-2xl text font-bold">"{text}"</blockquote>
      <p className="quote-item text-center text-lg italic">{author}</p>
    </div>
  )
}
