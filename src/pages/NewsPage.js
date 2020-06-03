import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPosts, removeItem, upVote } from "../actions";

import NewsList from "../components/NewsList";

const PostsPage = ({ match, dispatch, loading, posts, hasErrors }) => {
  useEffect(() => {
    const { page } = match.params;
    if (!page || parseInt(page) !== posts.page) {
      dispatch(fetchPosts(page));
    }
  }, [dispatch, match]);

  const hideHandler = (id) => {
    dispatch(removeItem(id));
  };

  const upVoteHandler = (id) => {
    dispatch(upVote(id));
  };

  const renderPosts = () => {
    if (loading) return <p>Loading news...</p>;
    if (hasErrors) return <p>Unable to display news.</p>;
    return <NewsList hideHandler={hideHandler} upVoteHandler={upVoteHandler} posts={posts} />;
  };

  return <section>{renderPosts()}</section>;
};

const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors
});
export default connect(mapStateToProps)(PostsPage);
