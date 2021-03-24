import React from 'react';
import {buycake} from './../redux/cakes/index';
import { useSelector ,useDispatch} from "react-redux";
export default function HooksRedux(){
const cakes = useSelector(state=>state.Cakes);
const dispatch=useDispatch();
    return(
       <div>
<button onClick={()=>dispatch(buycake())}>Click me</button><br/>
<label>Number of Cakes in hooksredux-{cakes}</label><br/>
<label>Message-</label>
       </div> 
    )

}
