const initialState = {
  active_user: {},
  users: [],
  user: {},
};

export default function userReducer(state = initialState, {type, payload}) {
  switch (type) {
    case 'LOGIN_SUCCESS':
      return {...state, active_user: {...state.active_user, ...payload}};
    case 'LOGIN_PENDING':
      return {
        ...state,
        active_user: {...state.active_user, isPending: payload},
      };
    case 'LOGIN_ERROR':
      return {...state, active_user: {...state.active_user, error: payload}};
    case 'FETCH_USERS_SUCCESS':
      return {...state, users: {...state.users, ...payload}};
    case 'FETCH_USERS_PENDING':
      return {...state, users: {...state.users, isPending: payload}};
    case 'FETCH_USERS_ERROR':
      return {...state, users: {...state.users, error: payload}};
    default:
      return state;
  }
}
