const initialState = {
  baby: {},
  babies: [],
};

export default function userReducer(state = initialState, {type, payload}) {
  switch (type) {
    case 'FETCH_BABY_SUCCESS':
      console.log({...state, baby: {...state.baby, [payload.id]: payload}});
      return {...state, baby: {...state.baby, [payload.id]: payload}};
      // console.log('reducer')
    case 'FETCH_BABY_PENDING':
      return {
        ...state,
        baby: {...state.baby, isPending: payload},
      };
    case 'FETCH_BABY_ERROR':
      return {...state, baby: {...state.baby, error: payload}};
    case 'FETCH_BABIES_SUCCESS':
      return {...state, babies: {...state.babies, ...payload}};
    case 'FETCH_BABIES_PENDING':
      return {...state, babies: {...state.babies, isPending: payload}};
    case 'FETCH_BABIES_ERROR':
      return {...state, babies: {...state.babies, error: payload}};
    default:
      return state;
  }
}
