import React from 'react';
import { connect } from "react-redux";
import Action from '../../actions';

class Post extends React.Component {
  render(){
    const { post, fetching, error, onRequestPost } = this.props;
    if(!post) return <div><a href="#" onClick={onRequestPost}>Get Post</a></div>
    if(fetching) return <div>Loading the post</div>
    if(error) return <div>Error fetching the post!</div>

    return (<div className="post" id={'post-'+post.id}>
        <strong>{post.title}</strong>
        <p>{post.body}</p>
      </div>
    )
  }

  componentDidMount() {
    const { onRequestPost } = this.props;
    onRequestPost();
  }
}

const mapStateToProps = state => {
  return {
    post: state.postBranch.post,
    error: state.postBranch.post.error,
    fetching: state.postBranch.post.fetching,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRequestPost: () => dispatch(Action.post.request(ownProps.id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);

