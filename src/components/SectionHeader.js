import classes from "./SectionHeader.module.css";
import mainPagePic from "../Images/main-page-pic.png";
import { getCategories, getBlogs } from "../API";
import { useEffect } from "react";

const SectionHeader = () => {
  useEffect(() => {
    getCategories().then((res) => res.json().then((res) => console.log(res)));
  }, []);

  useEffect(() => {
    getBlogs().then((res) => res.json().then((res) => console.log(res)));
  }, []);

  return (
    <div className={classes["section-header-container"]}>
      <h1 className={classes["section-header-text"]}>ბლოგი</h1>
      <img src={mainPagePic} alt="main page picture" />
    </div>
  );
};

export default SectionHeader;
