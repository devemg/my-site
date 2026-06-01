import {ReactNode, useState} from "react";
import {ConsoleLogContext} from "@components/home/ConsoleLog/context";

type ConsoleLogContextType = {
    children?: ReactNode;
}

export const ConsoleLogProvider = ({children}: ConsoleLogContextType) => {
    const [optimizerValue, setOptimizerValue] = useState(96.2);
    const [clickedStack, setClickedStack] = useState<string | null>(null);
    const [terminalLogs, setTerminalLogs] = useState<string[]>([
        'SYSTEM: READY_FOR_DEPLOYMENT',
        'AGENT: devemg v_2026 initialized successfully.',
    ]);

    const addTerminalLog = (msg: string) => {
        setTerminalLogs((prev) => [msg, ...prev.slice(0, 4)]);
    };

    const handleOptimiseClick = () => {
        if (optimizerValue < 99.8) {
            const newVal = parseFloat((optimizerValue + 0.4).toFixed(1));
            setOptimizerValue(newVal);
            addTerminalLog(`COMMAND: RUN optimize_infrastructure --level=max -> Current efficiency: ${newVal}%`);
        } else {
            addTerminalLog('STATUS: Infrastructure is already at peak structural performance (99.8%).');
        }
    };


    const handleTechClick = (tech: string) => {
        setClickedStack(tech);
        addTerminalLog(`INSPECT_MODULE: Loaded metadata for [${tech}] successfully.`);
    };

    return (
        <ConsoleLogContext.Provider
            value={{
                terminalLogs,
                addTerminalLog,
                handleOptimiseClick,
                setClickedStack,
                clickedStack,
                handleTechClick,
                optimizerValue,
            }}
        >
            {children}
        </ConsoleLogContext.Provider>
    );
};
