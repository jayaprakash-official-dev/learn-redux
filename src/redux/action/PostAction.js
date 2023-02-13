import axios from 'axios';
import {FETCH_POST_SUCCESS} from '../type/PostType';

const fetchPostData = data => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: data,
  };
};

export const getPostData = postId => {
  return async dispatch => {
    try {
      console.log('Started', postId);
      const MakePostRequest = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
      );
      const post = MakePostRequest.data;
      console.log(post);
      dispatch(fetchPostData(post));
    } catch (error) {
      console.log(error);
    }
  };
};
