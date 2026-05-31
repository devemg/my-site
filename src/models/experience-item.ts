export interface ExperienceItem {
    id: number;
    role: string;
    company: string;
    location: string;
    interval: string;
    description: string;
    highlights: string[];
    secondaryRoles?: string[];
    isCurrent?: boolean;
}