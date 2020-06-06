import React from "react";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";
import Chart from "./Chart";

const tableHeader = () => (
  <thead>
    <tr>
      <th>Comments</th>
      <th>Vote Count</th>
      <th>UpVote</th>
      <th className="left-align-text">News Details</th>
    </tr>
  </thead>
);

const NewsList = (props) => {
  const { posts, hideHandler, upVoteHandler } = props;
  return (
    <div>
      <table className="news-table">
        {tableHeader()}
        <tbody>{posts.hits ? posts.hits.map((post) => <ListItem hideHandler={hideHandler} upVoteHandler={upVoteHandler} key={post.objectID} post={post} />) : null}</tbody>
      </table>
      <div className="pagination">

        {posts.page > 1 && (
          <Link to={`/news/${posts.page - 1}`} className="button">
            Previous
          </Link>
        )}
        {posts.nbPages > posts.page + 1 && (
          <Link to={`/news/${posts.page + 1}`} className="button">
            Next
          </Link>
        )}
      </div>

      {posts.hits && <Chart {...posts} />}
    </div>
  );
};

export default NewsList;
