import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts, removeItem, upVote } from "../actions";
import NewsList from "../components/NewsList";
import { useHistory } from "react-router-dom";

const PostsPage = ({ match, dispatch, loading, posts, hasErrors }) => {
  const history = useHistory();

  useEffect(() => {
    const page = match.params.page || 1;

    if (isNaN(page)) {
      history.push("/404");
    }

    if (!isNaN(page) && parseInt(page) !== posts.page) {
      dispatch(fetchPosts(page));
    }
  }, [dispatch, match, posts, history]);

  const hideHandler = (id) => {
    dispatch(removeItem(id));
  };

  const upVoteHandler = (id) => {
    dispatch(upVote(id));
  };

  const renderPosts = () => {
    // if (loading) return <p>Loading news...</p>;
    if (hasErrors) return <p>Unable to display news.</p>;
    return (
      <div className="news-wrapper">

        <h1 className="hidden">Hacker News</h1>
        {loading && <span className="loading"></span>}
        {posts.hits && posts.hits.length && <NewsList hideHandler={hideHandler} upVoteHandler={upVoteHandler} posts={posts} />}
      </div>
    );
  };

  return posts ? <section>{renderPosts()}</section> : null;
};

const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors
});

export default connect(mapStateToProps)(PostsPage);
