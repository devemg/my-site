import { faAngular, faAws, faBitbucket, faDartLang, faFlutter, faGit, faGithub, faGithubSquare, faGitlab, faGoogle, faJava, faJenkins, faJira, faJsSquare, faReact, faSquareGitlab, faTrello } from "@fortawesome/free-brands-svg-icons";
import { SkillItem } from "@models/skill-category-item";
import { faTypescript } from "../assets/icons/faIcons/faTypesctipt";
import { faCSharp } from "../assets/icons/faIcons/faCSharp";
import { faTailwind } from "../assets/icons/faIcons/faTailwind";
import { faPreact } from "../assets/icons/faIcons/faPreact";
import { faJquery } from "../assets/icons/faIcons/faJQuery";
import { faIonic } from "../assets/icons/faIcons/faIonic";
import { faExpress } from "../assets/icons/faIcons/faExpress";
import { faMysql } from "../assets/icons/faIcons/faMysql";
import { faMongo } from "../assets/icons/faIcons/faMongo";
import { faDynamo } from "../assets/icons/faIcons/faDynamo";
import { faDotnet } from "../assets/icons/faIcons/faDotnet";
import { faVisualStudio } from "../assets/icons/faIcons/faVisualStudio";
import { faVisualCode } from "../assets/icons/faIcons/faVisualCode";
import { faIntelij } from "../assets/icons/faIcons/faIntelij";
import { faDatagrip } from "../assets/icons/faIcons/faDatagrip";
import { faEclipse } from "../assets/icons/faIcons/faEclipse";
import { faFirebase } from "../assets/icons/faIcons/faFirebase";
import { faGSAP } from "../assets/icons/faIcons/faGSAP";
import i18n from "../i18n/config";

const getSkillsData = () => {
  const categories = i18n.t('skills.categories', { returnObjects: true }) as Array<{ id: number; title: string }>;
  
  return [
    {
      id: 1,
      title: categories[0]?.title || "Programming Languages",
      tools: [
        {
          id: 1,
          title: "Javascript",
          icon: faJsSquare,
        }, 
        {
          id: 2,
          title: "Typescript",
          icon: faTypescript,
        }, 
        {
          id: 3,
          title: "Java",
          icon: faJava,
        }, 
        {
          id: 4,
          title: "C#",
          icon: faCSharp,
        }, 
        {
          id: 5,
          title: "Dart",
          icon: faDartLang,
        }, 
        // {
        //   id: 6,
        //   title: "Python",
        //   icon: faPython,
        // }, 
      ],
    },
    {
      id: 2,
      title: categories[1]?.title || "Frameworks and Libraries",
      tools: [{
        id: 1,
        title: "Angular",
        icon: faAngular,
      }, 
      {
        id: 2,
        title: "React",
        icon: faReact,
      }, 
      {
        id: 3,
        title: 'preact',
        icon: faPreact
      }, 
      {
        id: 4,
        title: 'JQuery',
        icon: faJquery,
      },
      {
        id: 41,
        title: 'Tailwindcss',
        icon: faTailwind,
      },
      {
        id: 42,
        title: 'GSAP',
        icon: faGSAP,
      },
      {
        id: 5,
        title: 'Ionic',
        icon: faIonic,
      },
      {
        id: 5,
        title: 'Flutter',
        icon: faFlutter,
      },
      {
        id: 6,
        title: 'Express',
        icon: faExpress,
      },
      {
        id: 7,
        title: '.NET',
        icon: faDotnet,
      }
    ],
    },
    {
      id: 3,
      title: categories[5]?.title || "Cloud",
      tools: [
        {
          id: 1,
          title: 'AWS',
          icon: faAws,
        },
        {
          id: 2,
          title: 'Google Cloud',
          icon: faGoogle,
        },
        {
          id: 22,
          title: 'Firebase',
          icon: faFirebase
        }
        // {
        //   id: 3,
        //   title: 'Digital Ocean',
        //   icon: faDigitalOcean,
        // },
        // {
        //   id: 4,
        //   title: 'Azure',
        //   icon: faAzure,
        // },
      ]
    },
    {
      id: 4,
      title: categories[2]?.title || "Databases",
      tools: [
        {
          id: 1,
          title: 'MySQL',
          icon: faMysql,
        },
        // {
        //   id: 2,
        //   title: 'SQL Server',
        //   icon: faSqlserver,
        // },
        {
          id: 4,
          title: 'MongoDB',
          icon: faMongo,
        },
        {
          id: 5,
          title: 'DynamoDB',
          icon: faDynamo,
        },
      ]
    },
    {
      id: 5,
      title: categories[4]?.title || 'Project Management',
      tools: [
        {
          id: 4,
          title: 'Jira',
          icon: faJira,
        },
        {
          id: 5,
          title: 'Trello',
          icon: faTrello,
        },
      ]
    },
    {
      id: 6,
      title: 'Version Control',
      tools: [
        {
          id: 3,
          title: 'Git',
          icon: faGit,
        },
        {
          id: 4,
          title: 'GitHub',
          icon: faGithub,
        },
        {
          id: 5,
          title: 'Gitlab',
          icon: faGitlab,
        },
        {
          id: 6,
          title: 'BitBucket',
          icon: faBitbucket,
        },
      ]
    },
    {
      id: 7,
      title: "Automatization",
      tools: [
        {
          id: 1,
          title: 'Gitlab',
          icon: faSquareGitlab,
        },
        {
          id: 2,
          title: 'Github Actions',
          icon: faGithubSquare,
        },
        {
          id: 3,
          title: 'Jenkins',
          icon: faJenkins,
        },
      ]
    },
    {
      id: 8,
      title: categories[3]?.title || "IDEs and tools",
      tools: [
        {
          id: 1,
          title: 'Visual Studio',
          icon: faVisualStudio,
        },
        {
          id: 2,
          title: 'Visual Studio Code',
          icon: faVisualCode,
        },
        {
          id: 3,
          title: 'IntelliJ IDEA',
          icon: faIntelij,
        },
        {
          id: 4,
          title: 'Data Grip',
          icon: faDatagrip,
        },
        {
          id: 5,
          title: 'Eclipse',
          icon: faEclipse,
        },
        // {
        //   id: 6,
        //   title: 'Netbeans',
        //   icon: faNetbeans,
        // },
      ]
    },
  ];
};

export const getDevemgSkills = (): SkillItem[] => getSkillsData();

// Mantener compatibilidad con código existente
export const devemgSkills: SkillItem[] = getDevemgSkills();