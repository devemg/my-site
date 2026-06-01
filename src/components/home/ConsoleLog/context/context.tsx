import {createContext} from 'react';
import {ConsoleLogContextType} from "@components/home/ConsoleLog/context";

export const ConsoleLogContext = createContext<
    ConsoleLogContextType | undefined
>(undefined);
