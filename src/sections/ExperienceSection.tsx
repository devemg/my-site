import { ExperienceItem } from "@models/experience-item"
import { useTranslation } from 'react-i18next';

interface ExperienceSection {
  items: ExperienceItem[];
  description: string;
}

export const ExperienceSection: React.FC<ExperienceSection> = ({ items, description }) => {
  const { t } = useTranslation();
  
  return (
    <div className="w-full min-h-dvh bg-primary p-10 md:p-20 flex gap-10 flex-col md:flex-row">
          <div className="grow-0 shrink-0 md:w-1/3">
            <p className="text-justify pt-3">{description}</p>
          </div>
          <div> 
            <h3 className="text-3xl">{t('experience.title')}</h3>
          <ul className="flex flex-col-reverse list-disc">
              {
                items.map((item)=><li key={item.id} className="py-3">
                  <h3 className="font-bold text-lg">{item.interval}</h3>
                  <p className="text-justify">{item.description}</p>
                </li>)
              }
          </ul>
        </div>
    </div>
  )
}
