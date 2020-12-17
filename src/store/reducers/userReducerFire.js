const initialState = {
  user: [],
};

export default function userReducerFire(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_USER':
      return {...state, user: action.payload};
    default:
      return state;
  }
}
