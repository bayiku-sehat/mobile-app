const initialState = {
  babies: [],
  baby: {},
};

export default function babyReducer(state = initialState, {type, payload}) {
  switch (type) {
    case 'SET_BABIES':
      return {...state, babies: payload};
    case 'SET_BABY':
      return {...state, baby: payload};
    default:
      return state;
  }
}
