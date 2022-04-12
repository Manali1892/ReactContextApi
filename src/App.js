import React, { useState } from "react";
import { CountContext, ThemeContext, ThemeProvider } from "./context";
import Test1 from "./Test1";

function App() {
    const [count, setCount] = useState(0);

    const increment = _ => setCount(count + 1);
    const decrement = _ => setCount(count - 1);
    const reset = _ => setCount(0);

    
    return (
          <ThemeProvider>
           <ThemeContext.Consumer>
               {({styles,toggleTheme})=>{
                return(
                    <>
                <button className="btn" onClick={toggleTheme}>Toggle Theme</button>
                <div style={styles}>
                     <h4>Guvi Zen</h4>
                <h4>App Component</h4>
                <p>Count - {count}</p>
                <button className="btn btn-primary" onClick={increment}>Increment</button>{"  "}
                <button className="btn btn-danger" onClick={decrement}>Decrement</button>{"  "}
                <button className="btn btn-warning" onClick={reset}>Reset</button>
                </div>
                </>
                )
               }}
              
                </ThemeContext.Consumer>
            <br />
             <CountContext.Provider value={{
                count, 
                increment,
                decrement,
                reset
             }}>
                 <Test1 />
                 </CountContext.Provider>
                 </ThemeProvider>
                )
            }
export default App;
