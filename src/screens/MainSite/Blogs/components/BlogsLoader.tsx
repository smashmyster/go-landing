import React from "react";
import Skeleton from "react-loading-skeleton";

const BlogsLoader = () => {
  return (
    <div className="article-tile pointer">
      <Skeleton style={{ borderRadius: 5, marginBottom: 12 }} />
    </div>
  );
};

export default BlogsLoader;
