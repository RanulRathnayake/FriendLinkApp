export const initialState = null

export const reducer = (state, action) => {
    if (action.type === 'USER') {
        return action.payload
    }
    if (action.type === 'CLEAR') {
        return null
    }
    return state
  
}

/* switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    default:
      return state;
  } */