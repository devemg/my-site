import {useConsoleLog} from "@components/home/ConsoleLog/context";

const ConsoleLog = () => {
    const { terminalLogs } = useConsoleLog();

    return (
        <div
            className="hidden sm:block max-w-lg p-3 bg-surface-container-lowest/80 rounded-lg border border-outline-variant/40 font-mono text-[10px] text-secondary/80 space-y-1">
            <div
                className="flex items-center justify-between text-white/40 border-b border-outline-variant/20 pb-1 mb-2">
                <span>SYS_MONITOR Logs</span>
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"/>
            </div>
            {terminalLogs.map((log, idx) => (
                <div key={idx} className="truncate">
                    &gt; {log}
                </div>
            ))}
        </div>
    );
};

export {ConsoleLog};