import {useState, useEffect} from 'react';
import {TopAppBar} from './components/TopAppBar';

import {FooterView} from './components/FooterView';
import {Outlet, ScrollRestoration} from "react-router";

export default function App() {
    const [cursorPos, setCursorPos] = useState({x: 0, y: 0});
    const [showGlow, setShowGlow] = useState(false);

    // Monitor mouse cursor coordinates for custom interactive indicator trace
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setShowGlow(true);
            // Offset coords by half of glow dimension (ellipse width is 500px)
            setCursorPos({x: e.clientX - 250, y: e.clientY - 250});
        };

        const handleMouseLeave = () => {
            setShowGlow(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div
            className="bg-[#0b1326] text-[#dae2fd] font-sans antialiased selection:bg-[#d0bcff]/30 selection:text-white min-h-screen relative overflow-x-hidden flex flex-col justify-between">

            {/* 1. Atmospheric Gradient Animated Mesh Background Layer */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="mesh-bg">
                    {/* Pulsating colorful layout blobs */}
                    <div className="mesh-blob bg-[#3c0091] w-[80vw] h-[80vw] -top-[10%] -left-[10%] opacity-35"/>
                    <div
                        className="mesh-blob bg-[#004e5c] w-[60vw] h-[60vw] top-[30%] -right-[5%] [animation-delay:-6s] opacity-25"/>
                    <div
                        className="mesh-blob bg-[#620040] w-[75vw] h-[75vw] -bottom-[10%] left-[15%] [animation-delay:-12s] opacity-25"/>
                </div>
            </div>

            {/* 2. Custom Interactive Cursor Glow Track */}
            <div
                className="fixed top-0 left-0 w-[500px] h-[500px] bg-[#d0bcff]/15 rounded-full blur-[140px] pointer-events-none z-10 transition-opacity duration-500 mix-blend-screen"
                style={{
                    transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`,
                    opacity: showGlow ? 1 : 0
                }}
            />

            {/* 3. Global Sticky Navigation App Bar */}
            <TopAppBar/>
            {/* 4. Core Rendered Viewport Content (with smooth fade entrance) */}
            <main
                className="flex-grow pt-32 pb-24 relative z-20 max-w-7xl w-full mx-auto px-6 md:px-16 animate-fade-in-up">
                <ScrollRestoration />
                <Outlet/>
            </main>
            {/* 5. Custom Status Bar overlay indicator for design depth */}
            {/*<div*/}
            {/*    className="fixed bottom-3 left-6 z-30 pointer-events-none hidden sm:flex items-center gap-2 font-mono text-[9px] text-[#4cd7f6]/60 bg-[#060e20]/60 px-2.5 py-1 rounded border border-[#494454]/20 backdrop-blur-sm">*/}
            {/*    <span className="w-1.5 h-1.5 bg-[#4cd7f6] rounded-full animate-pulse"/>*/}
            {/*    <span>CYBER_SYS_STATE: SECURE // INDEXED</span>*/}
            {/*</div>*/}

            {/* 6. Footer Layout */}
            <FooterView/>
        </div>
    );
}
