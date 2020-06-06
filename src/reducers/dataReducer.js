
import * as actions from '../actions'

export const initialState = {
  loading: true,
  hasErrors: false,
  posts: {},
}

export default function data(state = initialState, action) {
  switch (action.type) {
    case actions.GET_POSTS:
      return { ...state, loading: true };
    case actions.GET_POSTS_SUCCESS:
      return { posts: action.payload, loading: false, hasErrors: false };
    case actions.GET_POSTS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    case actions.REMOVE_ITEM:
      return {
        ...state,
        posts: { ...state.posts, hits: state.posts.hits.filter(item => item.objectID !== action.value), },
      };
    case actions.UP_VOTE:
      return {
        ...state,
        posts: { ...state.posts, hits: state.posts.hits.map(item => item.objectID === action.value ? { ...item, points: item.points + 1 } : item) },
      };
    default:
      return state
  }
}
