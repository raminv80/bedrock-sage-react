import ActionTypes from "../constants/action-types";

const ArticleActions = {
  add: article => ({ type: ActionTypes.ADD_ARTICLE, payload: article }),
};

export default ArticleActions;
