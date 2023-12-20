import classes from "./BlogsSection.module.css";
import BlogCard from "../Cards/BlogCard";

const BlogsSection = () => {
  return (
    <div className={classes["blogs-container"]}>
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default BlogsSection;
