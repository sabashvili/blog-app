import { useContext, useState } from "react";
import { CategoriesContext } from "../Providers/CategoriesProvider";
import classes from "./DropDown.module.css";
import ArrowDown from "../../Images/arrow-down.svg";
import closeBtnIcon from "../../Images/arrow-form.svg";
import { useRef, useEffect } from "react";

const DropDown = () => {
  const categoriesCtx = useContext(CategoriesContext);
  const [selectedCategoryIds, setSelectedCategoryIds] = useState([]);
  const [isDropDownOpen, SetIsDropDownOpen] = useState(false);

  const dropDownRef = useRef();

  useEffect(() => {
    const closeNavBar = (e) => {
      if (!dropDownRef.current.contains(e.target)) {
        SetIsDropDownOpen(false);
      }
    };
    document.addEventListener("mousedown", closeNavBar);
  });

  const addOrRemoveSelectedCategory = (id) => {
    let updatedSelectedCategories = [...selectedCategoryIds];
    if (!selectedCategoryIds.includes(id)) {
      updatedSelectedCategories.push(id);
    } else {
      updatedSelectedCategories = updatedSelectedCategories.filter((cur) => cur !== id);
    }
    setSelectedCategoryIds(updatedSelectedCategories);
  };

  return (
    <div ref={dropDownRef}>
      <label className={classes["blog-form-label"]}>კატეგორია *</label>
      <div className={classes["blog-form-text-input-container"]}>
        <div
          value="აირჩიეთ კატეგორია"
          className={`${classes["blog-form-text-input"]} `}
          onClick={() => (!isDropDownOpen ? SetIsDropDownOpen(true) : "")}
        >
          <div className={classes["blog-form-text-input-inner"]}>
            {categoriesCtx.categoriesData
              .filter((cur) => selectedCategoryIds.includes(cur.id))
              .map((categ) => {
                return (
                  <li
                    key={categ.id}
                    style={{ color: `${categ["text_color"]}`, backgroundColor: `${categ["background_color"]}` }}
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
            onClick={() => SetIsDropDownOpen(!isDropDownOpen)}
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
                    style={{ color: `${categ["text_color"]}`, backgroundColor: `${categ["background_color"]}` }}
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
