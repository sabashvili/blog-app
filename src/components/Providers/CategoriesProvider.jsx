import React from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";
import { getCategories } from "../../API";

const CategoriesProvider = (props) => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => res.json().then((res) => setCategoriesData(res.data)));
  }, []);

  return (
    <CategoriesContext.Provider value={{ categoriesData, setCategoriesData, filteredCategories, setFilteredCategories }}>
      {props.children}
    </CategoriesContext.Provider>
  );
};

export const CategoriesContext = createContext();
export default CategoriesProvider;
