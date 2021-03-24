import React, { useContext } from 'react';
import {Name} from './createcontext';
export default function NestedContext(props){
    const name=useContext(Name);
    return(
        <div>
            NestedContext  <br/>
            Name : {name}
            <br/>
            Roll No : {props.RollNo}
        </div>
    )
}