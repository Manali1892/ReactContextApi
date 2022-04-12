import Test2 from "./Test2";
import {CountContext, ThemeContext} from "./context"
function Test1({count,increment,decrement,reset}) {
    
    return(
        <CountContext.Consumer>
            {(context) => {
                return(
                    <ThemeContext.Consumer>         
                        {({ styles })=>{
                            return(
                             <>
                             <div style={styles}>
                <h4>Test1 Component</h4>
                <p>Count - {context.count}</p>
                <button className="btn btn-primary" onClick={increment}>Increment</button>{"  "}
                <button className="btn btn-danger" onClick={decrement}>Decrement</button>{"  "}
                <button className="btn btn-warning" onClick={reset}>Reset</button>
                </div>
                <br />
               <div>
               <Test2 /> 
               
              </div>
                </>
                            )
                        }}
                   </ThemeContext.Consumer>
                )
                    }}
        </CountContext.Consumer>  
    )
}
export default Test1;