import classes from "./SectionHeader.module.css";
import mainPagePic from "../Images/main-page-pic.png";

const SectionHeader = () => {
  return (
    <div className={classes["section-header-container"]}>
      <h1 className={classes["section-header-text"]}>ბლოგი</h1>
      <img src={mainPagePic} alt="main page picture" />
    </div>
  );
};

export default SectionHeader;
