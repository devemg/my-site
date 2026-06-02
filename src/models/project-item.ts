export interface ProjectDescription {
    en: string;
    es: string;
}

export interface ProjectItem {
    id: string;
    name: string;
    description: ProjectDescription;
    background?: string;
    color: string;
    codeUrl?: string;
    demoUrl?: string;
    logoSM?: string;
    images?: ProjectImage[];
    tags?: string[];
}

export interface ProjectImage {
    id: number;
    src: string;
    alt?: string;
    width: number;
    height: number;
}