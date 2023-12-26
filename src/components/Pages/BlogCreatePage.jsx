import classes from "./BlogCreatePage.module.css";
import redberryLogo from "../../Images/redberry-logo.png";
import UploaderInput from "../Inputs/UploaderInput";
import Input from "../Inputs/Input";
import Textarea from "../Inputs/Textarea";
import { useContext, useEffect, useState } from "react";
import DropDown from "../Inputs/DropDown";
import "../Inputs/Input.module.css";
import backArrowIcon from "../../Images/back-arrow.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import XRegExp from "xregexp";

const BlogCreatePage = () => {
  const authCtx = useContext(AuthContext);

  const [inputData, setInputData] = useState({
    photo: "",
    author: "",
    title: "",
    description: "",
    date: "",
    category: "",
    authorEmail: "",
  });

  const [validationData, setValidationData] = useState({
    photoValidation: [null],
    authorValidation: [null, null, null],
    titleValidation: [null],
    descriptionValidation: [null],
    dateValidation: [null],
    categoryValidation: [null],
    authorEmailValidation: [null],
  });

  const inputChangeHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const atLeastSymbolValidate = (curText, updatedArr, minSymbol, index) => {
    const updatedAuthorValidation = [...updatedArr];
    const text = curText;

    if (text.length >= minSymbol) {
      updatedAuthorValidation[index] = true;
    } else {
      updatedAuthorValidation[index] = false;
    }

    return updatedAuthorValidation;
  };

  const atLeastWordsValidate = (curText, updatedArr, index) => {
    const updatedAuthorValidation = [...updatedArr];
    const text = curText;
    const atLeastTwoWordsPattern = /^[a-zA-Zა-ჰ]+(\s[a-zA-Zა-ჰ]+)+$/;

    const hasAtLeastTwoWords = atLeastTwoWordsPattern.test(text);

    if (hasAtLeastTwoWords) {
      updatedAuthorValidation[index] = true;
    } else {
      updatedAuthorValidation[index] = false;
    }

    return updatedAuthorValidation;
  };

  const isGeorgian = (curText, updatedArr, index) => {
    const updatedAuthorValidation = [...updatedArr];
    const text = curText;
    const georgianRegex = XRegExp("^\\p{Georgian}+( \\p{Georgian}+)*$");

    const hasInGeorgian = georgianRegex.test(text);

    if (hasInGeorgian) {
      updatedAuthorValidation[index] = true;
    } else {
      updatedAuthorValidation[index] = false;
    }

    return updatedAuthorValidation;
  };

  const authorValidate = () => {
    let updatedAuthorValidation = atLeastSymbolValidate(
      inputData.author,
      validationData.authorValidation,
      4,
      0
    );
    updatedAuthorValidation = atLeastWordsValidate(
      inputData.author,
      updatedAuthorValidation,
      1
    );
    updatedAuthorValidation = isGeorgian(
      inputData.author,
      updatedAuthorValidation,
      2
    );

    setValidationData({
      ...validationData,
      authorValidation: updatedAuthorValidation,
    });
  };

  const titleValidate = () => {
    let updatedAuthorValidation = atLeastSymbolValidate(
      inputData.title,
      validationData.titleValidation,
      4,
      0
    );
    setValidationData({
      ...validationData,
      titleValidation: updatedAuthorValidation,
    });
  };

  const descriptionValidate = () => {
    let updatedAuthorValidation = atLeastSymbolValidate(
      inputData.description,
      validationData.descriptionValidation,
      2,
      0
    );
    setValidationData({
      ...validationData,
      descriptionValidation: updatedAuthorValidation,
    });
  };

  const dateValidate = () => {
    let updatedAuthorValidation = [Boolean(inputData.date)];

    setValidationData({
      ...validationData,
      dateValidation: updatedAuthorValidation,
    });
  };

  const photoValidate = () => {
    let updatedPhotoValidation = [Boolean(inputData.photo)];

    setValidationData({
      ...validationData,
      photoValidation: updatedPhotoValidation,
    });
  };

  const authorEmailValidate = () => {
    let updatedAuthorEmailValidation;
    const isValid =
      inputData.authorEmail.endsWith("@redberry.ge") &&
      inputData.authorEmail.length > "@redberry.ge".length;

    if (inputData.authorEmail.length > 0) {
      if (isValid) {
        updatedAuthorEmailValidation = [true];
      } else {
        updatedAuthorEmailValidation = [false];
      }
    } else {
      updatedAuthorEmailValidation = [null];
    }

    setValidationData({
      ...validationData,
      authorEmailValidation: updatedAuthorEmailValidation,
    });
  };

  console.log(validationData);

  useEffect(() => authorValidate(), [inputData.author]);
  useEffect(() => titleValidate(), [inputData.title]);
  useEffect(() => descriptionValidate(), [inputData.description]);
  useEffect(() => dateValidate(), [inputData.date]);
  useEffect(() => authorEmailValidate(), [inputData.authorEmail]);

  useEffect(() => photoValidate(), [inputData.photo]);

  return (
    <div className="blog-create-page">
      <header>
        <div className={classes["header-container"]}>
          <Link to="/">
            <img
              src={redberryLogo}
              alt="redberry logo"
              className={classes["main-header-logo"]}
            />
          </Link>
        </div>
      </header>

      <section className={classes["blog-create-section"]}>
        <Link className={classes["back-to-page-btn"]} to="/">
          <img src={backArrowIcon} alt="back arrow" />
        </Link>
        {authCtx.authorized ? (
          <div className={classes["blog-create-container"]}>
            <h1 className={classes["blog-create-title"]}>ბლოგის დამატება</h1>
            <form className={classes["blog-create-form"]}>
              <UploaderInput
                setInputDatatest={setInputData}
                inputDatatest={inputData}
              />
              <Input
                validationData={validationData}
                name="author"
                onChange={inputChangeHandler}
                labelTaxt="ავტორი *"
                inputType="text"
                validationList={[
                  "მინიმუმ 4 სიმბოლო",
                  "მინიმუმ ორი სიტყვა",
                  "მხოლოდ ქართული სიმბოლოები",
                ]}
                placeholder="შეიყვნეთ ავტორი"
              />
              <Input
                validationData={validationData}
                name="title"
                onChange={inputChangeHandler}
                labelTaxt="სათური *"
                inputType="text"
                validationList={["მინიმუმ 4 სიმბოლო"]}
                placeholder="შეიყვნეთ სათაური"
              />
              <Textarea
                validationData={validationData}
                name="description"
                onChange={inputChangeHandler}
                labelTaxt="აღწერა *"
                validationList={["მინიმუმ 2 სიმბოლო"]}
                placeholder="შეიყვნეთ აღწერა"
              />
              <Input
                validationData={validationData}
                name="date"
                onChange={inputChangeHandler}
                labelTaxt="გამოქვეყნების თარიღი *"
                inputType="date"
                validationList={[]}
                placeholder="შეიყვნეთ სათაური"
              />

              <DropDown
                setInputDatatest={setInputData}
                inputDatatest={inputData}
              />

              <Input
                validationData={validationData}
                name="authorEmail"
                onChange={inputChangeHandler}
                fullLineClass="full-line-input"
                labelTaxt="ელ-ფოსტა"
                inputType="mail"
                validationList={[]}
                placeholder="Example@redberry.ge"
              />

              <button className={classes["blog-create-btn"]} type="submit">
                გამოქვეყნება
              </button>
            </form>
          </div>
        ) : (
          ""
        )}
      </section>
    </div>
  );
};

export default BlogCreatePage;
