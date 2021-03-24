const initialstate={
    Cakes:10,
    msg:'first'
}

const reducer=(state=initialstate,action)=>{
switch(action.type){
    case 'buycake':
        return{
            ...state,
            Cakes:state.Cakes-1,
            msg:'Google'
        }
        default:
            return{
                ...state
            }
}
}


export default reducer;