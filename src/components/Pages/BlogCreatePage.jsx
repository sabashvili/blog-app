import classes from "./BlogCreatePage.module.css";
import redberryLogo from "../../Images/redberry-logo.png";
import UploaderInput from "../Inputs/UploaderInput";
import Input from "../Inputs/Input";
import Textarea from "../Inputs/Textarea";
import { useState } from "react";
import DropDown from "../Inputs/DropDown";
import "../Inputs/Input.module.css";

const BlogCreatePage = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");

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
              setAuthor={setAuthor}
              labelTaxt="ავტორი *"
              inputType="text"
              validationList={["მინიმუმ 4 სიმბოლო", "მინიმუმ ორი სიტყვა", "მხოლოდ ქართული სიმბოლოები"]}
              placeholder="შეიყვნეთ ავტორი"
            />
            <Input
              setTitle={setTitle}
              labelTaxt="სათური *"
              inputType="text"
              validationList={["მინიმუმ 4 სიმბოლო"]}
              placeholder="შეიყვნეთ სათაური"
            />
            <Textarea
              setDescription={setDescription}
              labelTaxt="აღწერა *"
              validationList={["მინიმუმ 2 სიმბოლო"]}
              placeholder="შეიყვნეთ აღწერა"
            />
            <Input
              setDate={setDate}
              labelTaxt="გამოქვეყნების თარიღი *"
              inputType="date"
              validationList={[]}
              placeholder="შეიყვნეთ სათაური"
            />

            <DropDown />

            <Input
              setAuthorEmail={setAuthorEmail}
              fullLineClass="full-line-input"
              labelTaxt="ელ-ფოსტა"
              inputType="mail"
              validationList={[]}
              placeholder="Example@redberry.ge"
            />

            <button
              className={classes["blog-create-btn"]}
              type="submit"
            >
              გამოქვეყნება
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default BlogCreatePage;
