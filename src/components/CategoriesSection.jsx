import classes from "./CategoriesSection.module.css";
import { CategoriesContext } from "./Providers/CategoriesProvider";
import { useContext } from "react";

const CategoriesSection = () => {
  const categoriesCtx = useContext(CategoriesContext);

  const addOrRemoveSelectedCategory = (categoryID) => {
    let updatedSelectedCategories = [...categoriesCtx.filteredCategories];
    if (!updatedSelectedCategories.includes(categoryID)) {
      updatedSelectedCategories.push(categoryID);
    } else {
      updatedSelectedCategories = updatedSelectedCategories.filter((categ) => categ !== categoryID);
    }

    categoriesCtx.setFilteredCategories(updatedSelectedCategories);
  };

  return (
    <section className={classes["categories-section"]}>
      <ul className={classes["categories-container"]}>
        {categoriesCtx.categoriesData.map((categ) => {
          return (
            <li
              onClick={(e) => {
                e.target.classList.toggle(classes["selected-categories-border"]);
                addOrRemoveSelectedCategory(categ.id);
              }}
              key={categ.id}
              style={{ color: `${categ["text_color"]}`, backgroundColor: `${categ["background_color"]}` }}
              className={`${classes["category"]} `}
            >
              {categ.title}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CategoriesSection;
