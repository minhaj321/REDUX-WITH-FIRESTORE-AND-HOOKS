import React from 'react';
import {buycake} from './../redux/cakes/index';
import {connect} from 'react-redux';
function Input(props){
    return(
       <div>
<button onClick={props.buyCake}>Click me</button><br/>
<label>Number of Cakes-{props.Cakes}</label>
<label>Message-{props.msg}</label>
       </div> 
    )
}


const mapStateToProps =state=>{
return{
    Cakes:state.Cakes,
    msg:state.msg
}
}


const mapDispatchToProps=dispatch=>{
    return{
        buyCake:()=>dispatch(buycake())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Input)