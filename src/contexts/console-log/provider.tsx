import {ReactNode, useState} from "react";
import {ConsoleLogContext} from "./index.ts";

type ConsoleLogContextType = {
    children?: ReactNode;
}

export const ConsoleLogProvider = ({children}: ConsoleLogContextType) => {
    const [terminalLogs, setTerminalLogs] = useState<string[]>([
        'SYSTEM: READY_FOR_DEPLOYMENT',
        'AGENT: devemg v_2026 initialized successfully.',
    ]);

    const addTerminalLog = (msg: string) => {
        setTerminalLogs((prev) => [msg, ...prev.slice(0, 4)]);
    };

    return (
        <ConsoleLogContext.Provider
            value={{
                terminalLogs,
                addTerminalLog,
            }}
        >
            {children}
        </ConsoleLogContext.Provider>
    );
};
