const initialState = [
   
   
];

const contactReducer = (state = initialState, action)=>{
    switch (action.type){
        case "ADD_CONTACT":
            state = [...state, action.payload]
            return state;
        default:
            return state
    }
}

export default contactReducer