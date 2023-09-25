import React from "react";
import style from "./CategoryFilter.module.css";
import ClipLoader from "react-spinners/ClipLoader";

function CategoryFilter(props) {
  const { categoryData, handleClickCategory } = props;
  const style1 = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div className={style.filter}>
      <h1>Categories</h1>
      <hr color="black" width="70%" />
      <ul>
        {categoryData && categoryData.length > 0 ? (
          categoryData.map((cat, index) => {
            return (
              <li className={style.list} key={index}>
                <button
                  onClick={() => handleClickCategory(cat)}
                  className={style.cat_button}
                >
                  {cat}
                </button>
              </li>
            );
          })
        ) : (
          <div style={style1}>
            <ClipLoader
              color="#be6b9b"
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )}
      </ul>
    </div>
  );
}

export default CategoryFilter;
