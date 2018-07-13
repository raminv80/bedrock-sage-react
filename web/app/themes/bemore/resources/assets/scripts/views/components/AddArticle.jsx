import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Action from '../../actions';

//receives store state and own props
//can injects new props
const mapStateToProps = (state, ownProps) => {
  return {
    //articles: state.articles,
  };
};

//injects dispatch functions into props
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddArticle: () => dispatch(Action.article.add(ownProps.article)),
  };
};

class AddArticle extends React.Component{
  render() {
    const { onAddArticle } = this.props;

    return <div>
      <button className="btn btn-primary" onClick={onAddArticle}>Add Article</button>
    </div>
  }
}

AddArticle.propTypes = {
  onAddArticle: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddArticle);

