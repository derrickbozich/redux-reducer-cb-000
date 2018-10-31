export function manageFriends(state, action){
  const merge = ( ...objects ) => ( { ...objects } );
  switch (action.type){
    case 'ADD_FRIEND':
      return merge(state.friends, [action.friend])
    default:
      return state;
  }
}
