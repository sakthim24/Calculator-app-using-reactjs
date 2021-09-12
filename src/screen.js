import React from 'react';
import './index.css';
function Screen(props){
    return (
        <div >
          <input className="display" type="text" readOnly value = {props.value}/>
        </div>
      )
    }
      
    
    export default Screen
