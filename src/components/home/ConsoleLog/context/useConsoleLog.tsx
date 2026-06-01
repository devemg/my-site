import {useContext} from "react";
import {ConsoleLogContext} from "@components/home/ConsoleLog/context";

export const useConsoleLog = () => {
    const context = useContext(ConsoleLogContext);
    if (context === undefined) {
        throw new Error(
            "No context provided for useConsoleLog.",
        );
    }
    return context;
};
