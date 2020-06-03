export const GET_POSTS = "GET POSTS";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const UP_VOTE = "UP_VOTE";

export const getPosts = () => ({ type: GET_POSTS });

export const getPostsSuccess = (data) => ({
  type: GET_POSTS_SUCCESS,
  payload: data
});

export const getPostsFailure = () => ({ type: GET_POSTS_FAILURE });

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  value: item
});

export const upVote = (item) => ({
  type: UP_VOTE,
  value: item
});

export function fetchPosts(page) {
  return async (dispatch) => {
    dispatch(getPosts());

    try {
      const response = await fetch(`http://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page || 1}`);
      const data = await response.json();

      dispatch(getPostsSuccess(data));
    } catch (error) {
      dispatch(getPostsFailure());
    }
  };
}
