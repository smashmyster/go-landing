import axios from "axios";
import Intercom from "components/Intercom/Intercom";
import Loader from "components/Loader/Loader";
import React, { useEffect, useState } from "react";
import Contact from "screens/MainSite/Contact/Contact";
import Footer from "screens/MainSite/_components/Footer/Footer";
import Header from "screens/MainSite/_components/Header/Header";
import ArticlePreview from "./ArticlePreview";

const Blog = () => {
  const [posts, setPosts] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    axios
      .get(
        "https://public-api.wordpress.com/rest/v1/sites/khulacoza.wordpress.com/posts/"
      )
      .then((res) => {
        setPosts(res?.data?.posts);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Intercom />
      <div className="blog App roboto k-row-center-items">
        <Header />
        <div className="blog-page-title" style={{ fontSize: 40 }}>
          Khula Blog
        </div>
        <div className="blog-page-sub-title" style={{ fontSize: 20 }}>
          We write about agriculture, technology, new KHULA updates and more.
        </div>
        {loading ? (
          <div className="loader">
            <Loader size={100} />
          </div>
        ) : (
          <div className="article-tiles-container">
            {posts &&
              posts.map((post: any, index: any) => (
                <ArticlePreview key={index} post={post} showPreview={true} />
              ))}
          </div>
        )}
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Blog;
