import {ContactItem} from "@models/contact-item.ts";
import {useMemo} from "react";
import socialsJSON from '@assets/socials.json';

const useSocials = () => {

    const socials: Array<ContactItem> = useMemo(() => {
        const socialsObject = socialsJSON as Record<string, Omit<ContactItem, 'id'>> | undefined;
        if (!socialsObject) {
            return [];
        }

        return Object.entries(socialsObject).map(([id, social]) => ({
            id,
            ...social,
        }));
    }, []);

    const findSocial = (id: string): ContactItem | undefined =>
        socials.find((social) => social.id.toLowerCase() === id.toLowerCase());

    return {
        socials,
        findSocial,
    };
};

export {useSocials};
