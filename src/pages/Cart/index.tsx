import React, { ChangeEvent, ChangeEventHandler } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, updateItem } from '../../redux/cart/cartActionCreator'
import { ICartProduct } from '../../redux/cart/cartReducer'
import { IRootState } from '../../redux/mainReducer'

const QuantityUpdater = (props: { quantity: number, id: string }) => {
    const { quantity, id } = props
    const dispatch = useDispatch()
    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            dispatch(updateItem(id, quantity - 1))
        }
    }
    const handleIncreaseQuantity = () => {
        dispatch(updateItem(id, quantity + 1))
    }
    return (
        <div className="center-vertical width-100px relative center-horizontal">
            <button className={"absolute left-0 letter-spacing-0 min-height-30px min-width-30px margin-0"} onClick={handleDecreaseQuantity}>-</button>
            <p className='height-30px main-bg round letter-spacing-0 width-100 center-text center-horizontal center-vertical border-none margin-0'>{quantity}</p>
            <button className={"absolute right-p-0 letter-spacing-0 min-height-30px min-width-30px margin-0"} onClick={handleIncreaseQuantity}>+</button>
        </div>
    )
}

const RenderCartProduct = (props: { cartProduct: ICartProduct, width: number }) => {
    const dispatch = useDispatch()
    const { cartProduct, width } = props
    const { quantity, subtotal, product } = cartProduct
    const { images, title, price, id } = product
    const handleRemoveItem = () => {
        dispatch(removeItem(id))
    }
    return (
        <div className={`margin-updown-50px`}>
            {/* <div onClick={handleRemoveItem} className='center-text cut center-vertical center-horizontal contrast-bg font-15 min-width-30px clickable min-height-30px bold round-30 contrast-txt'>&times;</div> */}
            <div className={`round margin-10px center-vertical contrast-txt-bg`}>
                <img
                    className={`width-200px round`}
                    src={images && images[0]}
                    alt={title}
                />
                <div className={`margin-updown-10px width-100 padding-side-50px`}>
                    <p className={"width-100 title width-100 font-25 capitalize margin-0 truncate-text margin-updown-10px"}>{title}</p>
                    <p className={"margin-0 font-15 letter-spacing-0"}>$ {price.toLocaleString()}</p>
                    <div className='center-vertical margin-updown-20px width-100'>
                        <div className='width-50'>
                            <p className={"font-8 line-height-12 margin-0"}>Quantity</p>
                            <div className='margin-updown-5px'>
                                <QuantityUpdater id={product.id} {...{ quantity }} />
                            </div>
                        </div>
                        <div className='flex-right center-vertical width-50'>
                            <div>
                                <p className={"text-right font-8 line-height-12 margin-0"}>Subtotal</p>
                                <p className={"text-right font-20 line-height-30 margin-0 letter-spacing-1"}>$ {subtotal.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Cart = () => {
    const cart = useSelector((state: IRootState) => state.cart)

    return (
        <div className='width-800px max-width-100 margin-side-auto'>
            <h1 className='center-text'>Carrito</h1>
            {cart.products.length === 0 ?
                <div className={"center-vertical center-horizontal height-50"}>
                    <div className={"center-text width-300px width-100"}>
                        <p className={"title"}>Oops!</p>
                        <p>Parce que no has agragado nada a tu carrito</p>
                        <Link to={"/productos"} className={"button center-vertical flex center-horizontal margin-updown-20px"}>Comprar</Link>
                    </div>
                </div>
                :
                <div>
                    {cart.products.map((cartProduct) => (
                        <RenderCartProduct {...{ cartProduct }} width={800} />
                    ))}
                </div>
            }
        </div>
    )
}

export default Cart
