// increment likes
export function increment(index){
  return{
      type: 'INCREMENT_LIKES',
      index
  }
}

//increment dislikes
export function dislike(index){
  return{
      type: 'INCREMENT_DISLIKES',
      index
  }
}


// add comment
export function addComment(postId, author, comment){
  console.log('dispatching add comment');
  return{
      type: 'ADD_COMMENT',
      postId,
      author,
      comment
  }
}

// remove comment
export function removeComment(postId, i){

  console.log('dispatching remove comment: ');
  return{
      type: 'REMOVE_COMMENT',
      i,
      postId
  }
}


// add user
export function addUser(firstName, lastName, username, email){
  console.log('dispatching add user');
  return{
      type: 'ADD_USER',
      firstName,
      lastName, 
      username, 
      email
  }
}


// edit user
export function editUser(index, firstName, lastName, username, email){
  console.log('dispatching edit user');
  return{
      type: 'EDIT_USER',
      index,
      firstName,
      lastName, 
      username, 
      email
  }
}

// delete user
export function deleteUser(index){
  console.log('dispatching delete user');
  return{
      type: 'DELETE_USER',
      index
  }
}