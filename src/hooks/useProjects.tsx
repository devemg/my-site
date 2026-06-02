import {useMemo} from "react";
import projectsJSON from "@assets/projects.json";
import {ProjectItem} from "@models/project-item.ts";

const useProjects = () => {
    const projects: Array<ProjectItem> = useMemo(() => {
        const socialsObject = projectsJSON as Record<string, Omit<ProjectItem, 'id'>> | undefined;
        if (!socialsObject) {
            return [];
        }

        return Object.entries(socialsObject).map(([id, social]) => ({
            id,
            ...social,
        }));
    }, []);

    const findProject = (id: string): ProjectItem | undefined =>
        projects.find((p) => p.id.toLowerCase() === id.toLowerCase());

    return {
        projects,
        findProject,
    };
};

export {useProjects};