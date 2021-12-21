import { Reducer } from "redux";
import { IProduct } from "../../data/products";
import { ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM, CLEAN_CART, CartAction } from "./cartActionTypes";

export interface ICartProduct {
    product: IProduct,
    quantity: number,
    subtotal: number,
}

export interface ICartState {
    products: ICartProduct[]
    subtotal: number,
    discount: number,
    total_quantity: number,
    total: number
}

const initialState: ICartState = {
    products: [],
    subtotal: 0,
    discount: 0,
    total_quantity: 0,
    total: 0
}

export const cartReducer = (state: ICartState = initialState, action: CartAction) => {
    let newSubtotal
    let newTotalQuantity
    switch (action.type) {
        case (ADD_ITEM):
            let exists
            const modifiedProducts = state.products.map((element) => {
                if (element.product.id === action.payload.product.id) {
                    exists = true
                    element.quantity += action.payload.quantity;
                    element.subtotal = element.subtotal + element.product.price
                }
                return element
            })
            if (!exists) {
                modifiedProducts.push({
                    product: action.payload.product,
                    quantity: action.payload.quantity,
                    subtotal: action.payload.product.price
                })
            }
            return {
                ...state,
                products: modifiedProducts,
                subtotal: state.subtotal + action.payload.product.price,
                total_quantity: state.total_quantity + action.payload.quantity,
                total: state.discount ? state.subtotal * (100 - state.discount) / 100 : state.subtotal + action.payload.product.price
            }
        case (REMOVE_ITEM):
            const newProducts = state.products.filter((element) => {
                if (element.product.id === action.payload.id) {
                    newSubtotal = state.subtotal - element.subtotal;
                    newTotalQuantity = state.total_quantity - element.quantity
                }
                else {
                    return element
                }
            })
            return {
                ...state,
                products: newProducts || [],
                total: state.discount ? state.subtotal * (100 - state.discount) / 100 : state.subtotal,
                subtotal: newSubtotal,
                total_quantity: newTotalQuantity
            }

        case (UPDATE_ITEM):
            const updatedProducts = state.products.map((element) => {
                if (element.product.id === action.payload.id) {
                    newTotalQuantity = state.total_quantity - element.quantity + action.payload.quantity;
                    element.quantity = action.payload.quantity;
                    element.subtotal = element.product.price * element.quantity
                    newSubtotal = state.subtotal + element.subtotal;
                    return element
                }
            })
            return {
                ...state,
                products: updatedProducts,
                subtotal: newSubtotal,
                total_quantity: newTotalQuantity,
                total: state.discount ? state.subtotal * (100 - state.discount) / 100 : state.subtotal
            }
        case (CLEAN_CART):
            return ({
                products: [],
                subtotal: 0,
                total: 0,
                discount: 0,
                total_quantity: 0,
            })
        default:
            return state
    }
}