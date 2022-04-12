import React from "react";

export const CountContext = React.createContext({ count: 100 });
export const ThemeContext = React.createContext({});
export function ThemeProvider(props)
{
const[theme,setTheme]=React.useState("light");
const toggleTheme = _ => setTheme(theme === "dark" ? "light" : "dark");
return(
    <ThemeContext.Provider 
    value={{ 
        styles :{
        backgroundColor: theme=== "dark" ? "black" : "white",
        color : theme==="dark" ? "white" :"black",
         padding:20
        },
        toggleTheme
       }}
>
{props.children}
    </ThemeContext.Provider>
)
}