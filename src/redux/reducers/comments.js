function postComments(state = [], action){
    const i = action.index;

    switch(action.type){
        case 'ADD_COMMENT':
        return [...state,{
            user: action.author,
            text: action.comment
        }];
        case 'REMOVE_COMMENT':
            return [
                ...state.slice(0, action.i),
                ...state.slice(action.i+1)
            ]
            
        default:
            return state;
    }

}

const types=['ADD_COMMENT','REMOVE_COMMENT' ];

function comments(state = [], action){
    if(types.includes(String(action.type))){
        return{
            ...state,
            [action.postId]: postComments(state[action.postId], action)
        }
    }else        
        return state;

}


export default comments;