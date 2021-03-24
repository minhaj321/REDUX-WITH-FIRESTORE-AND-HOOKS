import React, { useEffect, useState } from 'react';
import firebase from "./../components/firebase"; 
export default function Firestore(){

    const [Name,setName]=useState('');
    const [RollNo,setRollNo]=useState('');
    const [Data,setData]=useState([]);

useEffect(()=>
{
// get data
        firebase.firestore().collection("Data").orderBy('rollno').onSnapshot(function (querySnapshot) {
            setData(
                querySnapshot.docs.map(doc=>({
                    keyid:doc.id,
                    name:doc.data().name,
                    roll_no:doc.data().rollno
                }))
                )
        })
},[])
    


//add data
const Adddata=()=>{
firebase.firestore().collection('Data').add({name:Name,rollno:RollNo})
console.log("google")
}


//delete data
const deleteThis=(id)=>{
    firebase.firestore().collection('Data').doc(id).delete();

}


//update data
const UpdateData=(id)=>{
    firebase.firestore().collection('Data').doc(id).update({name:Name})
}


//render method
return(
        <div>
            <input value={Name} onChange={e=>setName(e.target.value)}/>
<br/>
            <input value={RollNo} onChange={e=>setRollNo(e.target.value)}/>
<br/>
            <button onClick={()=>Adddata()}>Add Me</button>
<br/>

{
Data.map((data,index)=>{
return(
    <div key={data.keyid}>
        <h1>{data.name}</h1>
        <h1>{data.roll_no}</h1>
        <button onClick={()=>deleteThis(data.keyid)}>Delete</button>
        <button onClick={()=>UpdateData(data.keyid)}>UpdateData</button>    

    </div>
)
})
}
      </div>
    )
}