import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "screens/_components/Header/Header";
import ArticlePreview from "./ArticlePreview";

const Blog = () => {
  const [posts, setPosts] = useState<any>();
  useEffect(() => {
    axios
      .get(
        "https://public-api.wordpress.com/rest/v1/sites/khulacoza.wordpress.com/posts/"
      )
      .then((res) => {
        setPosts(res.data.posts);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="blog App roboto k-row-center-items">
      <Header />
      <div className="blog-page-title">Khula Blog</div>
      <div className="blog-page-sub-title">
        We write about agriculture, technology, new KHULA updates and more.
      </div>
      <div className="article-tiles-container">
        {posts &&
          posts.map((post: any, index: any) => (
            <ArticlePreview key={index} post={post} />
          ))}
      </div>
    </div>
  );
};

export default Blog;
