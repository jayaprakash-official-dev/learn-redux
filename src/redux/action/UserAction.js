import axios, {Axios} from 'axios';
import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from '../type/UserType';

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = data => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: data,
  };
};

export const fetchUserFailure = error => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

export const fetchUserData = () => {
  return async dispatch => {
    try {
      dispatch(fetchUserRequest());
      const MakeUserRequest = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );
      const user = MakeUserRequest.data;
      dispatch(fetchUserSuccess(user));
    } catch (error) {
      dispatch(fetchUserFailure(error.message));
    }
  };
};
