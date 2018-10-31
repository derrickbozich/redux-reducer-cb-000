export function manageFriends(state, action){
  switch (action.type){
    case 'ADD_FRIEND':
      return {...state, friends: [...state.freinds, friend]}
    default:
      return state;
  }
}
