import { IProduct } from "../../data/products"

export enum CartActionTypes {
    ADD_ITEM = 'ADD_ITEM',
    UPDATE_ITEM = 'UPDATE_ITEM',
    REMOVE_ITEM = 'REMOVE_ITEM',
    CLEAN_CART = 'CLEAN_CART',
}

export const { ADD_ITEM, UPDATE_ITEM, REMOVE_ITEM, CLEAN_CART } = CartActionTypes

interface AddItemAction {
    type: CartActionTypes.ADD_ITEM,
    payload: {
        product: IProduct,
        quantity: number
    }
}

interface RemoveItemAction {
    type: CartActionTypes.REMOVE_ITEM,
    payload: {
        id: string
    }
}
interface UpdateItemAction {
    type: CartActionTypes.UPDATE_ITEM,
    payload: {
        id: string,
        quantity: number
    }
}

interface CleanCartAction {
    type: CartActionTypes.CLEAN_CART,
}


export type CartAction = AddItemAction | RemoveItemAction | UpdateItemAction | CleanCartAction