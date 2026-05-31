import {useMemo, useState} from 'react';
import {ActiveTab} from "@models/types.ts";
import {Link, NavLink} from "react-router";
import {MenuIcon, TerminalIcon, XIcon} from "lucide-react";
import {useTranslation} from "react-i18next";

export const TopAppBar = () => {
    const {i18n, t} = useTranslation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = useMemo(
        () => [
            {id: ActiveTab.Home, label: t('menu.home')},
            {id: ActiveTab.Projects, label: t('menu.projects')},
            {id: ActiveTab.Experience, label: t('menu.experience')},
        ],
        [i18n.resolvedLanguage, t],
    );

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-outline-variant/30 bg-[#0b1326]/75 backdrop-blur-2xl">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-16">
                <Link
                    to={ActiveTab.Home}
                    className="group flex cursor-pointer items-center gap-3"
                >
                    <span
                        className="material-symbols-outlined text-primary glow-primary transition-transform duration-500 group-hover:rotate-45"
                        style={{fontVariationSettings: "'FILL' 1"}}
                    >
                        <TerminalIcon/>
                    </span>
                    <span
                        className="relative overflow-hidden font-mono text-xs font-bold tracking-[0.2em] text-primary">
                        {t('landing.name')}
                    </span>
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.id}
                            to={item.id}
                            className={({isActive}) => `relative cursor-pointer py-1 text-sm tracking-wider transition-all duration-300 hover:text-secondary ${
                                isActive
                                    ? 'border-b-2 border-secondary font-bold text-secondary'
                                    : 'text-on-surface-variant hover:-translate-y-px'
                            }`}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        to={ActiveTab.Contact}
                        className="hidden items-center gap-2 rounded-md border-secondary/40 bg-secondary/10 px-4 py-1.5 font-mono text-xs font-semibold tracking-wider text-secondary glass-card transition-all active:scale-95 hover:bg-secondary/10 sm:flex"
                    >
                        <span className="h-2 w-2 animate-ping rounded-full bg-secondary"/>
                        {t('menu.contact')}
                    </Link>

                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="cursor-pointer rounded-lg p-2 text-on-surface-variant transition-all hover:bg-surface-container-high md:hidden"
                        aria-label={mobileMenuOpen ? t('menu.close') : t('menu.open')}
                        title={mobileMenuOpen ? t('menu.close') : t('menu.open')}
                    >
                        {mobileMenuOpen ? <XIcon/> : <MenuIcon/>}
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div
                    className="absolute left-0 top-16 w-full space-y-4 border-b border-outline-variant/40 bg-[#0b1326] px-6 py-6 shadow-2xl transition-all md:hidden">
                    <div className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.id}
                                to={item.id}
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                }}
                                className={({isActive}) => `text-left font-display text-base py-2 ${
                                    isActive ? 'font-bold text-secondary' : 'text-on-surface-variant'
                                }`}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                        <Link
                            to={ActiveTab.Contact}
                            onClick={() => {
                                setMobileMenuOpen(false);
                            }}
                            className="mt-2 w-full rounded-lg bg-primary-container py-3 text-center text-xs font-bold tracking-widest text-white"
                        >
                            {t('menu.connect_protocol')}
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};
