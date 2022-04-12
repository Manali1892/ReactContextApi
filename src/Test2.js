import { CountContext, ThemeContext } from "./context";

function Test2({count,increment,decrement,reset}){
    
    return(
     <CountContext.Consumer>
        {(context) => {
            return(
                <ThemeContext.Consumer>
                    {( {styles})=> {
                        return(
                            <div style={styles}>
                            <h4>Test2 Component</h4>
                            <p>count-{count}</p>
                            <button className="btn btn-primary" onClick={increment}>Increment</button>{"  "}
                                <button className="btn btn-danger" onClick={decrement}>Decrement</button>{"  "}
                                <button className="btn btn-warning" onClick={reset}>Reset</button>
                        </div>
                    )
                }}
                </ThemeContext.Consumer>
            )
            }}
            </CountContext.Consumer>
    )
        }
export default Test2;