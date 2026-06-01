import {createContext} from 'react';
import {ConsoleLogContextType} from "@contexts/console-log/types.ts";

export const ConsoleLogContext = createContext<
    ConsoleLogContextType | undefined
>(undefined);
