import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from '../type/UserType';

const initialState = {
  loading: false,
  data: [],
  error: '',
};

export const userReducer = (state = initialState, action) => {
  if (action.type === FETCH_USER_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === FETCH_USER_SUCCESS) {
    return {
      ...state,
      loading: false,
      data: action.payload,
    };
  }
  if (action.type === FETCH_USER_FAILURE) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  return state;
};
