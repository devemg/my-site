import {ContactItem} from "@models/contact-item";

export const getDevemgContacts = (): ContactItem[] => [
    {
        id: 'linkedin',
        name: "LinkedIn",
        username: "Emely García",
        link: "https://linkedin.com/in/emely-garciam",
        textCol: 'text-[#4cd7f6]',
        color: 'hover:bg-[#4cd7f6]/10',

    },
    {
        id: 'gmail',
        name: "Email",
        username: "garciam.emm@gmail.com",
        link: "mailto:garciam.emm@gmail.com?Subject=Hi Emely!",
        textCol: 'text-[#ffafd3]',
        color: 'hover:bg-[#ffafd3]/10',
    },
    {
        id: 'github',
        name: "Github",
        username: "devemg",
        link: "https://github.com/devemg",
        textCol: 'text-[#d0bcff]',
        color: 'hover:bg-[#d0bcff]/10',
    },
];
  
