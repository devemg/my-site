import { getDevemgProjects } from "@data/projects.data";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProjectItem } from "@models/project-item";
import { faLive } from "./assets/icons/faIcons/faLive";
import { faChevronLeft } from "./assets/icons/faIcons/faChevronLeft";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import 'photoswipe/dist/photoswipe.css'
import { useTranslation } from 'react-i18next';

import { Gallery, Item } from 'react-photoswipe-gallery'

export const ProjectPage = () => {
    const params = useParams();
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const [selected, setSelected] = useState<ProjectItem>();

    useEffect(() => {
        const projects = getDevemgProjects();
        const element = projects.find(el => el.id === params['id']);
        setSelected(element);
    }, [params['id'], i18n.language]);

    const goBack = () => {
        navigate(-1);
    }


    return (
        <div className="p-10 md:p-20">
            {
                selected && <>
                    <div className="flex items-center gap-3 mb-5">
                    <FontAwesomeIcon className="cursor-pointer" icon={faChevronLeft} size="1x" onClick={goBack} /> <img className="w-1/3 md:w-1/6" src={selected.logoSM} alt={selected.name} />
                    </div>
                    {
                        selected.description.split('\n').map((line, index) => <p key={'p-' + index} className="mb-3">{line}</p>)
                    }
                    {selected.codeUrl && <a href={selected.codeUrl} target="_blank" className="flex items-center w-fit gap-2 mb-3"><FontAwesomeIcon icon={faGithub} size="2x" /> {t('projects.sourceCode')}</a>}
                    {selected.demoUrl && <a href={selected.demoUrl} target="_blank" className="flex items-center w-fit gap-2 mb-3"><FontAwesomeIcon icon={faLive} size="2x" /> {t('projects.liveDemo')}</a>}
                    {selected.images && selected.images.length > 0 && <>
                        <h2 className="text-2xl my-2">{t('projects.takeLook')}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 cursor-pointer">
                            <Gallery>
                                {
                                    selected.images.map(item => <Item
                                        key={item.id}
                                        original={item.src}
                                        thumbnail={item.src}
                                        width={item.width}
                                        height={item.height}
                                    >
                                        {({ ref, open }) => (
                                            <img className="aspect-video object-cover object-top w-full" ref={ref} onClick={open} src={item.src} />
                                        )}
                                    </Item>)
                                }
                            </Gallery>
                        </div>

                    </>}
                </>
            }
        </div>
    )
}
