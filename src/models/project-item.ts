export interface ProjectItem {
    id: string;
    name: string;
    description: string;
    background?: string;
    color: string;
    codeUrl?: string;
    demoUrl?: string;
    logoSM?: string;
    images?: ProjectImage[];
}

export interface ProjectImage {
    id: number;
    src: string;
    alt?: string;
    width: number;
    height: number;
}