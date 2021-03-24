import React from 'react';
import UseContext from './usecontext.js';
export const Name=React.createContext()
export const RollNo=React.createContext()

export default function CreateContext(){
    return(
    <div>
<RollNo.Provider value={'D-19-CSE-25'}>
<Name.Provider value={'Minhaj'}>
<UseContext/>
</Name.Provider>
</RollNo.Provider>
    </div>
)

}