function posts(state = [], action){
    const i = action.index;
    switch(action.type){
        case 'INCREMENT_LIKES' : 
            console.log('Incrementing likes');
            
            return[
                ...state.slice(0,i), //before the one we are updating
                {...state[i], likes: state[i].likes + 1 },
                ...state.slice(i+1), //after the one we are updating

            ]
        case 'INCREMENT_DISLIKES' :  
            console.log('Incrementing dislikes');  

            return[
                ...state.slice(0,i), //before the one we are updating
                {...state[i], dislikes: state[i].dislikes + 1 },
                ...state.slice(i+1), //after the one we are updating
            ]   
        default:

            return state;
    } 
}


export default posts;