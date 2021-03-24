import React,{useContext} from 'react';
import {RollNo} from './createcontext';
import NestedContext from "./nestedcontext";
export default function UseContext(){
const roll_no=useContext(RollNo);
return(
    <div>
<NestedContext RollNo={roll_no}/>
    </div>
)

}