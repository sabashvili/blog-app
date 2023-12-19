import classes from "./CategoriesSection.module.css";
import { getCategories } from "../API";
import { useEffect, useState } from "react";

const CategoriesSection = () => {
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    getCategories().then((res) => res.json().then((res) => setCategoriesData(res.data)));
  }, []);

  return (
    <section className={classes["categories-section"]}>
      <ul className={classes["categories-container"]}>
        {categoriesData.map((categ) => {
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
