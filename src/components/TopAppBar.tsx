import {useState} from 'react';
import {ActiveTab} from "@models/types.ts";
import {Link, NavLink} from "react-router";
import {MenuIcon, TerminalIcon, XIcon} from "lucide-react";

export const TopAppBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        {id: ActiveTab.Home, label: 'Home'},
        {id: ActiveTab.Projects, label: 'Projects'},
        {id: ActiveTab.Experience, label: 'Experience'},
        {id: ActiveTab.Contact, label: 'Contact',},
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#0b1326]/75 backdrop-blur-2xl border-b border-[#494454]/30">
            <div className="flex items-center justify-between px-6 md:px-16 h-16 max-w-7xl mx-auto">
                {/* Logo */}
                <Link
                    to={ActiveTab.Home}
                    className="flex items-center gap-3 cursor-pointer group"
                >
          <span
              className="material-symbols-outlined text-[#d0bcff] glow-primary transition-transform duration-500 group-hover:rotate-45"
              style={{fontVariationSettings: "'FILL' 1"}}>
            <TerminalIcon/>
          </span>
                    <span
                        className="font-mono text-xs font-bold tracking-[0.2em] text-[#d0bcff] relative overflow-hidden"
                    >
            Emely García
          </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.id}
                            to={item.id}
                            className={({isActive}) => `text-sm tracking-wider transition-all duration-300 relative py-1 cursor-pointer hover:text-[#4cd7f6] ${
                                isActive
                                    ? 'text-[#4cd7f6] font-bold border-b-2 border-[#4cd7f6]'
                                    : 'text-[#cbc3d7] hover:translate-y-[-1px]'
                            }`}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>

                {/* Controls & Mobile menu button */}
                <div className="flex items-center gap-4">
                    {/* Quick Contact Pulse Button */}
                    <Link
                        to={ActiveTab.Contact}
                        className="hidden sm:flex px-4 py-1.5 glass-card rounded-md text-xs font-mono font-semibold tracking-wider text-[#4cd7f6] border-[#4cd7f6]/40 hover:bg-[#4cd7f6]/10 active:scale-95 transition-all gap-2 items-center"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-ping"/>
                        HIRE_ME
                    </Link>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-[#cbc3d7] hover:bg-[#222a3d] transition-all p-2 rounded-lg cursor-pointer hidden"
                    >
                        {mobileMenuOpen ? <XIcon/> : <MenuIcon/>}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            {mobileMenuOpen && (
                <div
                    className="md:hidden absolute top-16 left-0 w-full bg-[#0b1326] border-b border-[#494454]/40 px-6 py-6 space-y-4 shadow-2xl transition-all">
                    <div className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.id}
                                to={item.id}
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                }}
                                className={({isActive}) => `text-left text-base py-2 font-display ${
                                    isActive ? 'text-[#4cd7f6] font-bold' : 'text-[#cbc3d7]'
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
                            className="w-full text-center mt-2 py-3 bg-[#a078ff] text-white font-bold tracking-widest text-xs rounded-lg"
                        >
                            CONNECT PROTOCOL
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
