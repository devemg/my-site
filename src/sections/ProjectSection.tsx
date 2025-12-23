import { ProjectItem } from "@models/project-item"
import { useTranslation } from 'react-i18next';

interface ProjectSectionProps {
    items: ProjectItem[];
    onElementClick: (id: string) => void;
}
export const ProjectSection: React.FC<ProjectSectionProps> = ({ items, onElementClick }) => {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col gap-5 w-full bg-background p-10 md:p-20">
        <h2 className="text-3xl">{t('projects.title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 pb-20">
        {
            items.map((item)=><div onClick={()=>onElementClick(`/pro/${item.id}`)} key={item.id} className={`p-10 rounded-lg flex justify-center items-center cursor-pointer`} style={{background: item.background ?? item.color}}>
                
                {
                    item.logoSM ? <img src={item.logoSM} alt={item.name} /> : <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                }
            </div>)
        }
    </div>
        {/* <div className="flex justify-end">
            <a href="http://" className="p-5" target="_blank" rel="noopener noreferrer">See More -&gt;</a>
        </div> */}
    </div>
  )
}
