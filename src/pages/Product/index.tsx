import axios, { AxiosResponse } from 'axios'
import { getDocs, collection } from 'firebase/firestore/lite'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { IProduct } from '../../data/products'
import { db } from '../../firestore/config'
import { Heart } from '../../media/icons'
import { addItem } from '../../redux/cart/cartActionCreator'
import { setIsLoading } from '../../redux/loader/loaderActionCreator'
import { apiURL } from '../Products'

const Product = () => {
    const { productName } = useParams()
    const [product, setProduct] = useState<IProduct>();
    const [liked, setLiked] = useState<boolean>(false);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setIsLoading(true))
        axios.get(`${apiURL}/api/products/${productName}`)
            .then((response) => {
                setProduct(response.data)
                dispatch(setIsLoading(false))
            })
            .catch((error) => {
                dispatch(setIsLoading(false))
            })
    }, [dispatch])
    const toggleLike = () => {
        setLiked(!liked)
    }
    const handleAddProduct = () => {
        product && productName && dispatch(addItem({ ...product, id: productName }, 1))
    }
    return (
        <div>
            {product &&
                <div className={"padding-updown-20px width-1200px max-width-80 margin-side-auto"}>
                    <div className={"flex"}>
                        <div className={"width-50"}>
                            <img className={"width-100 round"} src={product.images && product.images[0]} alt={product.title} />
                            <div className={"center-vertical padding-updown-20px"}>
                                <div className={"center-horizontal width-100"}>
                                    <img className={"round width-30 margin-side-2"} src={product.images && product.images[0]} alt={product.title} />
                                    <img className={"round width-30 margin-side-2"} src={product.images && product.images[0]} alt={product.title} />
                                    <img className={"round width-30 margin-side-2"} src={product.images && product.images[0]} alt={product.title} />
                                </div>
                            </div>
                        </div>
                        <div className={"width-50 padding-side-100px padding-updown-50px"}>
                            <div>
                                <div className={"margin-updown-10px"}>
                                    <p className={"title margin-0 width-100 capitalize padding-updown-10px"}>{product.title}</p>
                                    <p className={"margin-0 font-20 letter-spacing-1"}>$ {product.price.toLocaleString()}</p>
                                </div>
                                <div className={"padding-updown-10px center-vertical"}>
                                    <div className={"margin-side-5px width-15px height-15px round-20 product-color-1"}></div>
                                    <div className={"margin-side-5px width-15px height-15px round-20 product-color-2"}></div>
                                    <div className={"margin-side-5px width-15px height-15px round-20 product-color-3"}></div>
                                </div>
                                <div className={"center-vertical margin-updown-20px"}>
                                    <button onClick={handleAddProduct} className={"margin-0 padding-side-50px margin-right-20px"}>Comprar</button>
                                    <button className={"min-width-50px margin-0"} onClick={toggleLike}>
                                        <Heart className={`width-10px heart${liked ? "-active" : ""}`} strokeWidth={50} strokeMiterlimit={10} />
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className={"padding-updown-20px"}>
                        <p className={"bold"}>tags</p>
                        <div className={"center-vertical"}>
                            <p className={"margin-0 round contrast-txt-bg padding-updown-5px padding-side-20px margin-right-10px"}>bolsos</p>
                            <p className={"margin-0 round contrast-txt-bg padding-updown-5px padding-side-20px margin-right-10px"}>carteras</p>
                            <p className={"margin-0 round contrast-txt-bg padding-updown-5px padding-side-20px margin-right-10px"}>rosa</p>
                        </div>
                        <p className={"bold"}>Descripci&oacute;n</p>
                        <p>{product.description}</p>
                    </div>
                </div>
            }
        </div >
    )
}

export default Product
