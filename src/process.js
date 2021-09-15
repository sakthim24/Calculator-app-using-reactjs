import React,{useState} from 'react';
import Screen from './screen'
import './calc.css'
function Process(){

  const [input, setInput] = useState("");
   const Calculation = (event) => {
    setInput(input+event.target.value)
   }
    const Clear = () => {
      setInput("")
    }
    const Delete = () => {
      try
      {
      setInput(input.slice(0,input.length-1));
      }
      catch(err)
      {
         setInput("")
      }  
    }
     const Result = () => {
      if (input!=='')
      {
          var res='';
            try
              {
                  res = eval(input);
              }
              catch(err)
              {
                 setInput("Math Error")
              }
              if (res===undefined)
                  setInput("Math Error")
              else
                  setInput(res)
          }
     }
      
 
    return(
      <div>
      
        <div className="container">   
          
          <Screen value={input} />
           <div className="input">
           <button  id="operator" value="(" onClick={Calculation} > (</button>
           <button  id="operator" value=")" onClick={Calculation} > )</button>
           <button  id="operator" value="^" onClick={Calculation} > ^</button>
           <button  id="number" value="1" onClick={Calculation} > 1</button>
           <button  id="number" value="2" onClick={Calculation} > 2</button>
           <button  id="number" value="3" onClick={Calculation} > 3</button>
           <button  id="delete" value="delete" onClick={Delete} > DELETE</button>
           <button  id="number" value="4" onClick={Calculation} > 4</button>
           <button  id="number" value="5" onClick={Calculation} > 5</button>
           <button  id="number" value="6" onClick={Calculation} > 6</button>
           <button  id="operator" value="+" onClick={Calculation} > +</button>        
           <button  id="number" value="7" onClick={Calculation} > 7</button>
           <button  id="number" value="8" onClick={Calculation} > 8</button>
           <button  id="number" value="9" onClick={Calculation} > 9</button>         
           <button  id="operator" value="-" onClick={Calculation} > -</button>
           <button  id="operator" value="/" onClick={Calculation} > /</button> 
           <button  id="number" value="0" onClick={Calculation} > 0</button>            
           <button  id="operator" value="%" onClick={Calculation} > %</button>          
           <button  id="operator" value="*" onClick={Calculation} > *</button>          
           <button  id="decimal" value="." onClick={Calculation} > .</button>        
           <button  id="clear" value="clear" onClick={Clear} > CLEAR</button>
           <button  id="eql" value="=" onClick={Result} > =</button>
            </div>
           </div>  </div>
        
    )
}


export default Process;
