import classes from "./BlogsSection.module.css";
import BlogCard from "./Cards/BlogCard";
import { getBlogs } from "../API";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { CategoriesContext } from "./Providers/CategoriesProvider";

const BlogsSection = () => {
  const [blogList, setBlogList] = useState([]);
  const categoriesCtx = useContext(CategoriesContext);
  const [filteredBlog, setFilteredBlog] = useState([]);

  useEffect(() => {
    getBlogs().then((res) => res.json().then((res) => setBlogList(res.data)));
  }, []);

  const blogFilter = () => {
    let updatedBlogList = [...filteredBlog];

    for (const blog of blogList) {
      for (const categ of blog.categories) {
        if (categoriesCtx.filteredCategories.includes(categ.id)) {
          if (!updatedBlogList.includes(blog)) {
            updatedBlogList.push(blog);
          }
          break;
        } else {
          updatedBlogList = updatedBlogList.filter((categ) => categ !== blog);
        }
      }
    }
    setFilteredBlog(updatedBlogList);
  };

  useEffect(() => blogFilter(), [categoriesCtx.filteredCategories, blogList]);

  const whitchBlogList = categoriesCtx.filteredCategories.length === 0 ? blogList : filteredBlog;

  return (
    <ul className={classes["blogs-container"]}>
      {whitchBlogList.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
        />
      ))}
    </ul>
  );
};

export default BlogsSection;
