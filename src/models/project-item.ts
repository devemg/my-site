import {Section} from "@models/section.ts";

export  interface ProjectsSection {
    bottom?: {
        leftCard?: Section;
        rightCard?: Section;
    }
}

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

export interface ProjectCredentials {
    username: string;
    password: string;
    message: string;
}