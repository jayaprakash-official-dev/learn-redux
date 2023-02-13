import {FETCH_POST_SUCCESS} from '../type/PostType';

const initialState = {
  data: {},
};

export const PostReducer = (state = initialState, action) => {
  if (action.type === FETCH_POST_SUCCESS) {
    return {
      ...state,
      data: action.payload,
    };
  }
  return state;
};
