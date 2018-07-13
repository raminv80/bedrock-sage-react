import ActionTypes from "../constants/action-types";

const postActions = {
  request: post_id => ({type: ActionTypes.POST_REQUEST, payload: post_id}),
  success: post => ({type: ActionTypes.POST_REQUEST_SUCCESS, payload: post}),
  error: error => ({type: ActionTypes.POST_REQUEST_ERROR, payload: error}),
};

export default postActions;
