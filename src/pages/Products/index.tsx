import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { IProduct } from "../../data/products";
import { Cart } from "../../media/icons";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setIsLoading } from "../../redux/loader/loaderActionCreator";
import { addItem } from "../../redux/cart/cartActionCreator";

export const apiURL = "http://localhost:8083"

const Products = () => {
    const { category } = useParams();
    const [products, setProducts] = useState<IProduct[]>([]);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setIsLoading(true))
        axios.get(`${apiURL}/api/products`).then((response) => {
            setProducts(response.data)
            dispatch(setIsLoading(false))
        }).catch((error) => {
            dispatch(setIsLoading(false))
        })
    }, [dispatch])

    return (
        <div className={"width-1200px max-width-80 margin-side-auto"}>
            <h1 className={"center-text capitalize"}>{category || "Nuestros Productos"}</h1>
            <div className={"flex flex-wrap width-100"}>
                {products &&
                    products.map((product) => {
                        const { title, images, price, id, category } = product;
                        const handleAddProduct = () => {
                            dispatch(addItem(product, 1))
                        }
                        return (
                            <div className={"product-3"}>
                                <div className='round cut margin-10px'>
                                    <div className="aspect-ratio">
                                        <img className={`max-width-100 block margin-side-auto`} src={images && images[0]} alt={title} />
                                    </div>
                                    <div className="contrast-txt-bg relative top-n-10 round padding-30px">
                                        <div className={"margin-updown-10px"}>
                                            <p className={"center-text title font-25 capitalize margin-0 truncate-text margin-updown-10px"}>{title}</p>
                                            <p className={"center-text margin-0 font-15 letter-spacing-1"}>$ {price.toLocaleString()}</p>
                                            <div className={"padding-updown-10px center-vertical center-horizontal"}>
                                                <div className={"margin-side-5px width-15px height-15px round-20 product-color-1"}></div>
                                                <div className={"margin-side-5px width-15px height-15px round-20 product-color-2"}></div>
                                                <div className={"margin-side-5px width-15px height-15px round-20 product-color-3"}></div>
                                            </div>
                                        </div>
                                        <div className={"center-vertical margin-top-20px"}>
                                            <Link to={`/productos/${id}`} className={"button margin-0 min-width-100px width-100 flex-left  center-text flex center-vertical center-horizontal"}>
                                                Detalles
                                            </Link>
                                            <button onClick={handleAddProduct} className={"min-width-50px margin-0 margin-left-20px"}>
                                                <Cart className={`width-10px`} fill={"#fef7fa"} strokeWidth={50} strokeMiterlimit={10} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default Products;
