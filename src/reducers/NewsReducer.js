import * as types from './actionsTypes';

const INITIAL_STATE = {
  sourceName: 'ABC News',
  sourceId: 'abc-news',
  page: 1,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_ID:
      return {...state, sourceId: action.payload, page: 1};
      break;
    case types.SET_SOURCE:
      return {...state, sourceName: action.payload, page: 1};
      break;
    case types.ADD_PAGE: {
      return {...state, page: state.page + 1};
    }
    default:
      return state;
      break;
  }
};
