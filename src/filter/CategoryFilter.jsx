import React, { useEffect, useState } from "react";
import style from "./CategoryFilter.module.css";

function CategoryFilter(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const data = await fetch("https://fakestoreapi.com/products/categories");
      const response = await data.json();
      console.log(response);
      setCategories(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.filter}>
      <h2>Categories</h2>
      <ul>
        {categories.length > 0 &&
          categories.map((cat, index) => {
            return (
              <li className={style.list} key={index}>
                <button
                  onClick={() => props.handleClickCategory(cat)}
                  className={style.cat_button}
                >
                  {cat}
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default CategoryFilter;
