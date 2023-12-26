import { useContext, useState } from "react";
import { CategoriesContext } from "../Providers/CategoriesProvider";
import classes from "./DropDown.module.css";
import ArrowDown from "../../Images/arrow-down.svg";
import closeBtnIcon from "../../Images/arrow-form.svg";
import { useRef, useEffect } from "react";

const DropDown = ({ setInputDatatest, inputDatatest, validationData }) => {
  const categoriesCtx = useContext(CategoriesContext);
  const [selectedCategoryIds, setSelectedCategoryIds] = useState([]);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropDownRef = useRef();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownRef.current.contains(e.target)) {
        setIsDropDownOpen(false);
      }
    };
    const pageContainer = document.querySelector(".blog-create-page");

    pageContainer.addEventListener("mousedown", closeDropDown);
  }, []);

  const addOrRemoveSelectedCategory = (id) => {
    let updatedSelectedCategories = [...selectedCategoryIds];
    if (!selectedCategoryIds.includes(id)) {
      updatedSelectedCategories.push(id);
    } else {
      updatedSelectedCategories = updatedSelectedCategories.filter(
        (cur) => cur !== id
      );
    }
    setSelectedCategoryIds(updatedSelectedCategories);
  };

  useEffect(() => {
    setInputDatatest({ ...inputDatatest, category: selectedCategoryIds });
  }, [selectedCategoryIds]);

  const validUpdateClass = () => {
    if (validationData.categoryValidation[0] === true) {
      return classes.validBackground;
    } else if (validationData.categoryValidation[0] === false) {
      return classes.invalidBackground;
    }
  };

  return (
    <div ref={dropDownRef}>
      <label className={classes["blog-form-label"]}>კატეგორია *</label>
      <div className={classes["blog-form-text-input-container"]}>
        <div
          className={`${classes["blog-form-text-input"]} ${validUpdateClass()}`}
          onClick={() => (!isDropDownOpen ? setIsDropDownOpen(true) : "")}
        >
          {selectedCategoryIds.length === 0 ? "კატეგორია" : ""}
          <div className={classes["blog-form-text-input-inner"]}>
            {categoriesCtx.categoriesData
              .filter((cur) => selectedCategoryIds.includes(cur.id))
              .map((categ) => {
                return (
                  <li
                    key={categ.id}
                    style={{
                      color: `${categ["text_color"]}`,
                      backgroundColor: `${categ["background_color"]}`,
                    }}
                    className={classes["category"]}
                  >
                    <div>{categ.title}</div>
                    <img
                      onClick={() => addOrRemoveSelectedCategory(categ.id)}
                      className={classes["form-element-close-btn"]}
                      src={closeBtnIcon}
                      alt="close-btn"
                    />
                  </li>
                );
              })}
          </div>
          <img
            className={classes["blog-form-text-input-arrow"]}
            src={ArrowDown}
            alt="arrow"
            onClick={() => setIsDropDownOpen(!isDropDownOpen)}
          />
        </div>

        {isDropDownOpen ? (
          <ul className={classes["categories-container"]}>
            {categoriesCtx.categoriesData
              .filter((cur) => !selectedCategoryIds.includes(cur.id))
              .map((categ) => {
                return (
                  <li
                    onClick={() => addOrRemoveSelectedCategory(categ.id)}
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
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default DropDown;
