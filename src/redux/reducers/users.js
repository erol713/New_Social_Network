function addUser(state = [], action){
    const i = action.index;

    switch(action.type){
        case 'ADD_USER':
        return [...state,{
            firstName: action.firstName,
            lastName: action.lastName ,
            username: action.username, 
            email: action.email,
            userId:String (Math.floor(Math.random() * 1000))
        }];
        case 'EDIT_USER':
        return [
            
            
                ...state.slice(0,i), 
                {...state[i],   firstName: action.firstName,
                                lastName: action.lastName ,
                                username: action.username, 
                                email: action.email},
                ...state.slice(i + 1),
                
                
        ];
        case 'DELETE_USER':
        return [
            ...state.slice(0, i),
                ...state.slice(i+1)
                
        ];
            
        default:
            return state;
    }

}

export default addUser;