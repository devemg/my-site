import { devemgContacts } from '@data/contact.data';
import { getDevemgExperience } from '@data/experience.data';
import { getDevemgProjects } from '@data/projects.data';
import { getDevemgSkills } from '@data/skills.data';
import { useStack } from '@hooks/useStack';
import { ContactFooterSection } from '@sections/ContactFooterSection';
import { ExperienceSection } from '@sections/ExperienceSection';
import { LandingSection } from '@sections/LandingSection';
import { ProjectSection } from '@sections/ProjectSection';
import { QuoteSection } from '@sections/QuoteSection';
import { SkillsSection } from '@sections/SkillsSection';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '@components/LanguageSwitcher';
import { useMemo } from 'react';

export default function App() {
  const { StackSection, clearTriggers } = useStack();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  // Recalcular datos cuando cambia el idioma
  const experienceItems = useMemo(() => getDevemgExperience(), [i18n.language]);
  const skillsItems = useMemo(() => getDevemgSkills(), [i18n.language]);
  const projectsItems = useMemo(() => getDevemgProjects(), [i18n.language]);

  const manageRedirection = (path: string) => {
    clearTriggers();
    navigate(path);
  }

  return (
    <>
      <LanguageSwitcher />
      <StackSection>
        <LandingSection name={t('landing.name')} role={t('landing.role')} phrase={t('landing.phrase')} />
      </StackSection>
      <StackSection><ExperienceSection items={experienceItems} description={t('experience.description')} /></StackSection>
      <StackSection><SkillsSection items={skillsItems} /></StackSection>
      <StackSection><QuoteSection author={t('quote.author')} text={t('quote.text')}/></StackSection>
      <StackSection><ProjectSection onElementClick={manageRedirection} items={projectsItems} /></StackSection>
      <StackSection><ContactFooterSection items={devemgContacts} /></StackSection>
    </>
  );
}