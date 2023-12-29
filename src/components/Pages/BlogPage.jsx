import React, { useState, useEffect, useRef } from "react";
import classes from "./BlogPage.module.css";
import { useParams } from "react-router-dom";
import BlogCard from "../Cards/BlogCard";
import leftArrow from "../../Images/left-arrow.svg";
import rightArrow from "../../Images/right-arrow.svg";
import { Link } from "react-router-dom";
import backArrowIcon from "../../Images/back-arrow-2.svg";
import { getCurBlog, getBlogs } from "../../API";
import Header from "../Header";

const BlogPage = () => {
  const SCROLL_WIDTH = 440;

  const { id } = useParams();
  const [blogList, setBlogList] = useState([]);
  const [blog, setBlog] = useState("");
  const [blogCategories, setBlogCategories] = useState([]);
  const [filteredBlog, setFilteredBlog] = useState([]);
  const [blogListByDate, setBlogListByDate] = useState([]);

  const categoriesContainerRef = useRef();
  const date = new Date();

  const handleScroll = (direction) => {
    const container = categoriesContainerRef.current;
    const scrollAmount = direction === "left" ? -SCROLL_WIDTH : SCROLL_WIDTH;

    container.scrollTo({
      left: container.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  const blogFilterByYear = () => {
    let updatedBlogList = [];

    for (const blog of blogList) {
      if (date >= new Date(blog["publish_date"])) {
        updatedBlogList.push(blog);
      }
    }

    setBlogListByDate(updatedBlogList);
  };

  const getCategoriesOfCurBlog = (blog) => {
    let updatedCategoriesList = [];

    blog.categories?.map((category) => {
      if (!updatedCategoriesList.includes(category.id)) {
        updatedCategoriesList.push(category.id);
      }
      return null;
    });

    setBlogCategories(updatedCategoriesList);
  };

  const blogFilter = () => {
    let updatedBlogList = [];

    for (const blogItem of blogListByDate) {
      if (blogItem.id !== Number(id)) {
        let blogShouldBeIncluded = false;

        for (const categ of blogItem.categories) {
          if (blogCategories.includes(categ.id)) {
            blogShouldBeIncluded = true;
            break;
          }
        }

        if (blogShouldBeIncluded) {
          updatedBlogList.push(blogItem);
        }
      }
    }

    setFilteredBlog(updatedBlogList);
  };

  useEffect(() => {
    getBlogs().then((res) => res.json().then((res) => setBlogList(res.data)));
  }, [id]);

  useEffect(() => {
    getCurBlog(id).then((res) => res.json().then((res) => setBlog(res)));
  }, [id]);

  useEffect(() => {
    getCategoriesOfCurBlog(blog);
  }, [blog, blogList, id]);

  useEffect(() => blogFilter(), [blogCategories]);

  useEffect(() => blogFilterByYear(), [blogList]);

  return (
    <>
      <Header />
      <section className={classes["blog-section"]}>
        <Link className={classes["back-to-page-btn"]} to="/">
          <img src={backArrowIcon} alt="back arrow" />
        </Link>
        <img className={classes["blog-img"]} src={`${blog.image}`} alt="blog" />
        <h5 className={classes["blog-author"]}>{blog.author}</h5>
        <div className={classes["date-author-container"]}>
          <h6 className={classes["blog-date"]}>{blog["publish_date"]}</h6>
          <h6>•</h6>
          <h6 className={classes["blog-author-email"]}>{blog?.email}</h6>
        </div>
        <h1 className={classes["blog-title"]}>{blog.title}</h1>

        <ul className={classes["categories-container"]}>
          {blog?.categories?.map((categ) => {
            return (
              <li
                key={categ.id}
                style={{
                  color: `${categ["text_color"]}`,
                  backgroundColor: `${categ["background_color"]}`,
                }}
                className={`${classes["category"]} `}
              >
                {categ.title}
              </li>
            );
          })}
        </ul>

        <p className={classes["blog-description"]}>{blog.description}</p>
      </section>
      <section className={classes["suggestion-section"]}>
        <div className={classes["section-first-line"]}>
          <h1 className={classes["suggestion-title"]}>მსგავსი სტატიები</h1>
          <div className={classes["slider-imgs"]}>
            <img
              className={classes["scrolling-btn"]}
              onClick={() => handleScroll("left")}
              src={leftArrow}
              alt="back arrow"
            />
            <img
              className={classes["scrolling-btn"]}
              onClick={() => handleScroll("right")}
              src={rightArrow}
              alt="back arrow"
            />
          </div>
        </div>
        <ul ref={categoriesContainerRef} className={classes["blogs-container"]}>
          {filteredBlog.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default BlogPage;
