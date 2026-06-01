export type ConsoleLogContextType = {
    terminalLogs: string[];
    optimizerValue: number;
    clickedStack: string | null;
    addTerminalLog: (message: string) => void;
    handleOptimiseClick: () => void;
    handleTechClick: (tech: string) => void;
    setClickedStack: (stack: string | null) => void;
}
