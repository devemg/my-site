export interface SkillItem {
    name: string;
    desc?: string;
}
export interface SkillSection {
    title: string;
    tag?: string;
    tools: SkillItem[] | string[];
}