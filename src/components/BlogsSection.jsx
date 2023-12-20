import classes from "./BlogsSection.module.css";
import BlogCard from "./Cards/BlogCard";
import { getBlogs } from "../API";
import { useEffect, useState } from "react";

const BlogsSection = () => {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    getBlogs().then((res) => res.json().then((res) => setBlogList(res.data)));
  }, []);

  return (
    <ul className={classes["blogs-container"]}>
      {blogList.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
        />
      ))}
    </ul>
  );
};

export default BlogsSection;
