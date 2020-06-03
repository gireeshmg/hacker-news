import React from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

const getDomainName = (url) => {
  return `(${new URL(url).hostname.replace("www.", "")})`;
};

const ListItem = (props) => {
  const { post, hideHandler, upVoteHandler } = props;
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo();

  return (
    <tr>
      <td className="center-align-text">{post.num_comments}</td>
      <td className="center-align-text">{post.points}</td>
      <td className="center-align-text">
        <button className="btn-upvote" onClick={(e) => upVoteHandler(post.objectID)}>
          Up vote
        </button>
      </td>
      <td>
        {<a className="news-anchor" href={post.url}>{post.title}</a>}
        <span className="domain-name">{post.url && getDomainName(post.url)} by</span> <span className="author">{post.author}</span>
        <span className="time">{timeAgo.format(new Date(post.created_at).getTime())}</span>
        <button className="btn-hide" onClick={() => hideHandler(post.objectID)}>
          [ hide ]
        </button>
      </td>
    </tr>
  );
};

export default ListItem;
