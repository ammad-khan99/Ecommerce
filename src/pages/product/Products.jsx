import React, { useState, useEffect } from "react";
import Product_card from "../../components/product-card/Product_card";
import style from "./Products.module.css";
import Navbar from "../../components/nav/Navbar";
import CategoryFilter from "../../filter/CategoryFilter";
import ClipLoader from "react-spinners/ClipLoader";
import { fetchData } from "../../utils/helper/helper";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/actions/inventoryActions";
import {urlConstants} from '../../utils/constants'
import ErrorPage from "../../components/error/ErrorPage";

function Products() {
  const [product, setProduct] = useState([]);
  const [selectedCategory, setSelectedCategories] = useState("");
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const PRODUCTS_URL = "https://fakestoreapi.com/products";
  // const CATEGORIES_URL = "https://fakestoreapi.com/products/categories";
  const SELECTED_CATEGORY_URL = `https://fakestoreapi.com/products/category/${selectedCategory}`;
  const dispatch = useDispatch();
  const inventory = useSelector(store=> store.inventory)

  const style1 = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  useEffect(() => {
    dispatch(getProducts());
    // fetchData(PRODUCTS_URL, setProduct, setIsLoading);
    fetchData(urlConstants.CATEGORIES_URL, setCategories, setIsLoading);
  }, []);

  useEffect(() => {
    selectedCategory !== "" &&
      fetchData(SELECTED_CATEGORY_URL, setProduct, setIsLoading);
  }, [selectedCategory]);

  const handleClickCategory = (category) => {
    setSelectedCategories(category);
  };

  return (
    <>
      {/* <Navbar /> */}
      {/* <div className={style.body}> */}
        {/* <CategoryFilter
          handleClickCategory={handleClickCategory}
          categoryData={categories}
        /> */}
        <div className={style.product_list}>
          <div className={style.prod_page}>
            {!isLoading && !inventory.error ? (
              inventory.products.map((each, index) => {
                return (
                  <Product_card
                    className={style.card}
                    key={index}
                    data={each}
                  />
                );
              })
            ) : !isLoading && inventory.error ? (
              <ErrorPage/>
            ): (
              <div style={style1}>
                <ClipLoader
                  color="#be6b9b"
                  size={100}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            )}
          </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default Products;
