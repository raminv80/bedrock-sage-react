import ActionTypes from "../constants/action-types";

const initialState = {
  articles: [],
};

const ArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_ARTICLE:
      return {...state, articles: [...state.articles, action.payload] };
    default:
      return state;
  }
};

export default ArticleReducer;
