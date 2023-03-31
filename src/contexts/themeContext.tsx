import { createContext, ReactNode, useState } from "react";

export type ThemeContextType = {
    theme : "light" | "dark",
    toggleTheme: () => void 
}

type ThemeProviderProps = {
    children: ReactNode
}

const toggleTheme = (theme: string) =>{
    return theme === "light" ? "dark" : "light"
}

export const ThemeContext = createContext<ThemeContextType>({theme: "light", toggleTheme: () => {}})

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}: ThemeProviderProps) => {

    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}