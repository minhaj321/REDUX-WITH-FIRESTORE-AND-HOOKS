import React,{useState,useEffect} from 'react';
import firebase from './firebase';


export default function ErrorTesting(){

const [data,setData]=useState([{val:'good'},{val:'best'},{val:'better'}]);
const [firebasedata,setFirebaseData]=useState([]);



useEffect(()=>{
    firebase.database().ref('/data').on('child_added',function(dat){
    console.log('data.val=>',dat.val())
    
    setFirebaseData(firebasedata.push(dat.val()))
    console.log('firebasedata=>',firebasedata)
})
},[])

return(
    <div>
        ErrorTesting
</div> 

)

}