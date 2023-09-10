import React, { useState, useEffect } from 'react'
import Product_card from '../../components/product-card/Product_card';
import style from './Products.module.css'
import Navbar from '../../components/nav/Navbar';

function Products() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const data = await fetch('https://fakestoreapi.com/products')
            const res = await data.json()
            setProduct(res)
        }
        catch (error) {
            console.log(error);
        }
    }
    console.log(product);
    return (
        <>
        <Navbar/>
        <div className={style.prod_page}>
            {
                product.map((each, index) => {
                    return <Product_card className={style.card} key={index} data={each} />
                })
            }
        </div>
        </>
    )
}

export default Products
