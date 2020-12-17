import {clearData} from '../../helpers/asyncStorage';

const initialState = {
  usera: [],
  user: {
    isLoggedIn: false,
    loginPending: false,
    loginError: '',
    access_token: '',
    id: '',
    details: {},
  },
  users: [],
  usersPending: false,
  usersError: '',
  userPending: false,
  userError: '',
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
          access_token: action.payload.access_token,
          loginError: '',
          loginPending: false,
          id: action.payload.id,
        },
      };
    case 'LOGIN_PENDING':
      return {
        ...state,
        user: {
          ...state.user,

          loginPending: true,
        },
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        user: {
          ...state.user,
          loginError: action.payload,
        },
      };

    case 'LOGOUT':
      clearData('user');
      return {
        ...state,
        user: {
          isLoggedIn: false,
          loginPending: false,
          loginError: '',
          access_token: '',
          id: '',
          details: {},
        },
      };

    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        users: action.payload,
        usersError: '',
        userPending: false,
      };
    case 'FETCH_USERS_PENDING':
      return {...state, users: {...state.users, usersPending: action.payload}};
    case 'FETCH_USERS_ERROR':
      return {...state, users: {...state.users, usersError: action.payload}};

    case 'FETCH_USER_SUCCESS':
      return {
        ...state,
        user: {...state.user, details: action.payload},
        userError: '',
        userPending: false,
      };
    case 'FETCH_USER_PENDING':
      return {...state, user: {...state.user, userPending: action.payload}};
    case 'FETCH_USER_ERROR':
      return {...state, user: {...state.user, userError: action.payload}};
    case 'FETCH_USER':
      return {...state, usera: action.payload};
    default:
      return state;
  }
};
