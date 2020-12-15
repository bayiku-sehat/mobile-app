const initialState = {
  users: [],
  user: {},
};

export default function userReducer(state = initialState, {type, payload}) {
  switch (type) {
    case 'SET_USERS':
      return {...state, users: payload};
    case 'SET_USER':
      return {...state, user: payload};
    default:
      return state;
  }
}
