import _ from 'lodash';
import { FETCH_POSTS, FETCH_APOST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    
    case DELETE_POST:
    // Return new state object that omits deleted post
    return _.omit(state, action.payload);

    case FETCH_APOST:
      return { ...state, [action.payload.data.id]: action.payload.data };

    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');

    default:
      return state;
  }
}
