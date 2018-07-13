import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

class Articles extends React.Component {
  render(){
    const {articles} = this.props;
    let items = articles.map((article, i) => <li key={i}>{article}</li>);
    if(items.length) {
      return <ul>{items}</ul>
    }else{
      return <p>Nothing to show</p>
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    articles: state.articleBranch.articles,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    //onRequestPost: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};

Articles.propTypes = {
  articles: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);

