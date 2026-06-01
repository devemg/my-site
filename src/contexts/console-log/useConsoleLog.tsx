import {useContext} from "react";
import {ConsoleLogContext} from "./index.ts";

export const useConsoleLog = () => {
    const context = useContext(ConsoleLogContext);
    if (context === undefined) {
        throw new Error(
            "No context provided for useConsoleLog.",
        );
    }
    return context;
};
