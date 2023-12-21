import classes from "./BlogCreatePage.module.css";
import redberryLogo from "../../Images/redberry-logo.png";
import UploaderInput from "../Inputs/UploaderInput";
import Input from "../Inputs/Input";
import Textarea from "../Inputs/Textarea";

const BlogCreatePage = () => {
  return (
    <>
      <header>
        <div className={classes["header-container"]}>
          <img
            src={redberryLogo}
            alt="redberry logo"
            className={classes["main-header-logo"]}
          />
        </div>
      </header>

      <section className={classes["blog-create-section"]}>
        <div className={classes["blog-create-container"]}>
          <h1 className={classes["blog-create-title"]}>ბლოგის დამატება</h1>
          <form className={classes["blog-create-form"]}>
            <UploaderInput />
            <Input
              labelTaxt="ავტორი *"
              inputType="text"
              validationList={["მინიმუმ 4 სიმბოლო", "მინიმუმ ორი სიტყვა", "მხოლოდ ქართული სიმბოლოები"]}
              placeholder="შეიყვნეთ ავტორი"
            />
            <Input
              labelTaxt="სათური *"
              inputType="text"
              validationList={["მინიმუმ 4 სიმბოლო"]}
              placeholder="შეიყვნეთ სათაური"
            />
            <Textarea
              labelTaxt="აღწერა *"
              validationList={["მინიმუმ 2 სიმბოლო"]}
              placeholder="შეიყვნეთ აღწერა"
            />
            <Input
              labelTaxt="გამოქვეყნების თარიღი *"
              inputType="date"
              validationList={[]}
              placeholder="შეიყვნეთ სათაური"
            />

            <Input
              labelTaxt="კატეგორია *"
              inputType="text"
              validationList={[]}
              placeholder="აირჩიეთ კატეგორია"
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default BlogCreatePage;
