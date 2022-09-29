import axios from "axios";
import Intercom from "components/Intercom/Intercom";
import React, { useEffect, useState } from "react";
import Contact from "screens/Contact/Contact";
import Footer from "screens/_components/Footer/Footer";
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
        setPosts(res?.data?.posts);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Intercom />
      <div className="blog App roboto k-row-center-items">
        <Header />
        <div className="blog-page-title">Khula Blog</div>
        <div className="blog-page-sub-title">
          We write about agriculture, technology, new KHULA updates and more.
        </div>
        <div className="article-tiles-container">
          {posts &&
            posts
              .slice(0, 4)
              .map((post: any, index: any) => (
                <ArticlePreview key={index} post={post} showPreview={true} />
              ))}
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Blog;
