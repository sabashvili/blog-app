import classes from "./BlogCard.module.css";
import testImg from "../Images/test-img.jpeg";

const BlogCard = () => {
  return (
    <div className={classes["blog-container"]}>
      <img className={classes["blog-pic"]} src={testImg} alt="blog picture" />
      <h3 className={classes["blog-author"]}>ლილე კვარაცხელია</h3>
      <h5 className={classes["blog-date"]}>02.11.2023</h5>
      <div className={classes["blog-information"]}>
        <h2 className={classes["blog-title"]}>EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა</h2>
        <ul className={classes["categories-container"]}>
          <li className={classes["category"]}>მარკეტი</li>
          <li className={classes["category"]}>მარკეტი</li>
          <li className={classes["category"]}>მარკეტი</li>
        </ul>
        <p className={classes["blog-description"]}>
          6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესისიზუსტისთვის,6 თვის შემდეგ ყველის ბრმა დეგუსტაციის
          დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესისიზუსტისთვის,6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს
          პროცესისიზუსტისთვის,
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
