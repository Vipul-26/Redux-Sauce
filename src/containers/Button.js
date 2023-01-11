import React from 'react';
import { connect } from 'react-redux';
import { Creators as TodoActions } from "../react-redux/redux/news";

let Button = ({ getPosts, channelName, disabled }) => {
  return (
    <button
      onClick={() => getPosts()}
      className={`btn btn-success btn-lg btn-block ${disabled ? 'disable' : ''}`}>
      Top Ten News
    </button>
  )
};

const mapStateToProps = (state) => ({
  channelName: state.news.channelName
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(TodoActions.fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
