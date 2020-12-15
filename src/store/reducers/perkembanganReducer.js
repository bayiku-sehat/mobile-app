const initialState = {
  perkembangan: [],
};

export default function perkembanganReducer(
  state = initialState,
  {type, payload},
) {
  switch (type) {
    case 'SET_PERKEMBANGAN':
      return {...state, perkembangan: payload};
    default:
      return state;
  }
}
