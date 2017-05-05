import _ from 'lodash';
import { FETCH_POSTS, FETCH_APOST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_APOST:
      // ES6 Refactor using key interpolation
      return { ...state, [action.payload.data.id]: action.payload.data };
      // const post = action.payload.data;
      // const newState =  { ...state  };
      // newState[post.id] = post;
      // return newState;
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
