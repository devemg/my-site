import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SkillItem } from "@models/skill-category-item"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';

interface SkillsSectionProps {
  items: SkillItem[];
}
export const SkillsSection: React.FC<SkillsSectionProps> = ({ items  }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const skillsAnimation = gsap.fromTo('.skillset', { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, scrollTrigger: {
      trigger: '#skills',
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: 1,
      toggleActions: 'play reverse play reverse'
    }});
    return () => {
      skillsAnimation.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
  };
  }, [items]);
  

  return (
    <div className="w-full h-full bg-background p-10 md:p-20">
        <h2 className="text-3xl mb-10">{t('skills.title')}</h2>
        <div id="skills" className="flex gap-2 flex-col pb-10">
        {
          items.map(skillSet=><div key={skillSet.id} className="skillset grow-0 shrink-0 mb-10">
            <h3 className="pb-5 text-xl">{skillSet.title}</h3>
            <div className="flex gap-10 flex-wrap">
              {
                skillSet.tools.map((item)=><div key={item.id}>
                  <FontAwesomeIcon size="5x" icon={item.icon} ></FontAwesomeIcon>
                  <p className="text-center">{item.title}</p>
                </div>)
              }
            </div>
          </div>)
        }
        </div>
    </div>
  )
}
