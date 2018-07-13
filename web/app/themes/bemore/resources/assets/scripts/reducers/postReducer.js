import ActionTypes from "../constants/action-types";

const initialState = {
  post: {},
};

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.POST_REQUEST:
      return Object.assign({}, state, {post: {fetching: true}});
    case ActionTypes.POST_REQUEST_ERROR:
      return Object.assign({}, state, {post: {error: action.payload}});
    case ActionTypes.POST_REQUEST_SUCCESS:
      return Object.assign({}, state, {post: action.payload});
    default:
      return state;
  }
};

export default PostReducer;
