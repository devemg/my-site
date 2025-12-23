import { ExperienceItem } from "@models/experience-item";
import i18n from "../i18n/config";

export const getDevemgExperience = (): ExperienceItem[] => {
  const items = i18n.t('experience.items', { returnObjects: true }) as ExperienceItem[];
  return items;
};

// Mantener compatibilidad con código existente
export const devemgExperience: ExperienceItem[] = getDevemgExperience();
