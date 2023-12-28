import classes from "./BlogCard.module.css";
import blogOpenArrowIcon from "../../Images/blog-open-arrow-icon.svg";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { id, author, title, description, image, categories, publish_date } =
    blog;

  return (
    <li key={id} className={classes["blog-container"]}>
      <img className={classes["blog-pic"]} src={image} alt="blog" />
      <h3 className={classes["blog-author"]}>{author}</h3>
      <h5 className={classes["blog-date"]}>{publish_date}</h5>
      <div className={classes["blog-information"]}>
        <h2 className={classes["blog-title"]}>{title}</h2>
        <ul className={classes["categories-container"]}>
          {categories.map((categ) => {
            return (
              <li
                key={categ.id}
                style={{
                  color: `${categ["text_color"]}`,
                  backgroundColor: `${categ["background_color"]}`,
                }}
                className={classes["category"]}
              >
                {categ.title}
              </li>
            );
          })}
        </ul>
        <p className={classes["blog-description"]}>{description}</p>
        <Link to={`blog/${id}`} className={classes["blog-fully-open"]}>
          სრულად ნახვა
          <img src={blogOpenArrowIcon} alt="arrow icon" />
        </Link>
      </div>
    </li>
  );
};

export default BlogCard;
