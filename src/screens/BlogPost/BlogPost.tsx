import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "screens/_components/Header/Header";
import { Link } from "react-router-dom";
import DOMParserReact from "dom-parser-react";
import ArticlePreview from "screens/Blog/ArticlePreview";
import Contact from "screens/Contact/Contact";
import Footer from "screens/_components/Footer/Footer";
import Intercom from "components/Intercom/Intercom";
import Loader from "components/Loader/Loader";

const BlogPost = () => {
  const [posts, setPosts] = useState<Array<any>>([]);
  const [post, setPost] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const params = useParams();

  useEffect(() => {
    axios
      .get(
        `https://public-api.wordpress.com/rest/v1/sites/khulacoza.wordpress.com/posts/`
      )
      .then((res) => {
        setPosts(res?.data?.posts);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const post = posts.find((it: any) => params.id == it.ID);
    setPost(post);
    window.scrollTo(0, 0);
  }, [posts, params.id]);

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
    <>
      <Intercom />
      <div className="blog-post App roboto k-row-center-items">
        <Header />
        <Link to="/blog">
          <div className="back-btn pointer">
            <span className="fal-long-arrow-left pointer"></span>Back to all
            posts
          </div>
        </Link>
        {loading ? (
          <div style={{ height: "100vh" }}>
            <Loader />
          </div>
        ) : (
          <div className="blog-post-container">
            <div className="blog-author">
              Written by {post?.author?.name} | {formatDate(post?.date)}{" "}
            </div>
            <div className="blog-title">{post?.title} </div>
            <div className="blog-content">
              <DOMParserReact source={post?.content ?? ""} />
            </div>
          </div>
        )}
        <div className="navigation">
          <Link to="/blog">
            <div className="btn pointer">Go back to all posts</div>
          </Link>
          <Link to="/">
            <div className="btn pointer">Go to Home Page</div>
          </Link>
        </div>
        <div className="more-posts">
          <div className="more-posts-heading">You may also like</div>
          <div
            className="article-tiles-container"
            style={{ paddingBottom: 50 }}
          >
            {posts.slice(0, 4).map((post: any) => (
              <ArticlePreview post={post} key={1} />
            ))}
          </div>
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
