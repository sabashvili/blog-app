import classes from "./CategoriesSection.module.css";
import { CategoriesContext } from "./Providers/CategoriesProvider";
import { useContext } from "react";

const CategoriesSection = () => {
  const categoriesCtx = useContext(CategoriesContext);

  return (
    <section className={classes["categories-section"]}>
      <ul className={classes["categories-container"]}>
        {categoriesCtx.categoriesData.map((categ) => {
          return (
            <li
              key={categ.id}
              style={{ color: `${categ["text_color"]}`, backgroundColor: `${categ["background_color"]}` }}
              className={classes["category"]}
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
