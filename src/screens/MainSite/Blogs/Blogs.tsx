import React, { useEffect, useState } from "react";
import axios from "axios";
import { POSTS_API } from "constants/index";
import ArticlePreview from "screens/Blog/ArticlePreview";

type BlogsProps = {};

const Blogs = (props: BlogsProps) => {
  const [posts, setPosts] = useState<any>();
  // const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    axios
      .get(POSTS_API)
      .then((res) => {
        setPosts((res?.data?.posts || []).slice(0, 3));
        //   setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="screen column-center mt-5">
      <>
        <div className="title">Our Blogs</div>
        <div className="sub-title">
          We write about agriculture, technology, new KHULA updates and more.
        </div>
        <div className="article-tiles-container">
          {posts?.map((post: any, index: any) => (
            <ArticlePreview key={index} post={post} showPreview={true} />
          ))}
        </div>
      </>
    </div>
  );
};

export default Blogs;
