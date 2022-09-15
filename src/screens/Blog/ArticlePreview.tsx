import React from "react";
import { Link } from "react-router-dom";
const he = require("he");

type ArticlePreviewProps = {
  post: any;
  showPreview?: boolean;
};

const ArticlePreview = (props: ArticlePreviewProps) => {
  const { post, showPreview } = props;
  const removeEncoding = (text: string) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    text = he.decode(text);
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  const formatDate = (date: any) => {
    try {
      let _date = new Date(date);
      if (_date.toDateString() === "Invalid Date") {
        _date = new Date(Number(date));
      }
      return _date.toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch (error) {
      return date;
    }
  };

  return (
    <Link to={`/blog/${post.ID}`}>
      <div className="article-tile pointer" onClick={() => post}>
        <div
          className="article-image"
          style={{
            backgroundImage: `url(${
              post?.featured_image
                ? post?.featured_image
                : "https://picsum.photos/200"
            })`,
          }}
        ></div>
        <div className="tile-copy">
          <div className="article-citation">
            <div className="article-date">{formatDate(post?.date)}</div>
            <div className="article-author">By {post?.author?.name}</div>
          </div>

          <div className="article-title">{post?.title}</div>
          {showPreview && (
            <div className="article-preview">
              {removeEncoding(post?.excerpt.split(" ").slice(0, 30).join(" "))}
              ...
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ArticlePreview;
