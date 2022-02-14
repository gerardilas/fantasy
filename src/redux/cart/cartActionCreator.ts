import { IProduct } from '../../data/products';
import { ADD_ITEM, CLEAN_CART, REMOVE_ITEM, UPDATE_ITEM } from './cartActionTypes';

export const addItem = (product: IProduct, quantity: number) => ({
    type: ADD_ITEM,
    payload: {
        product,
        quantity,
    }
});

export const removeItem = (id: string) => ({
    type: REMOVE_ITEM,
    payload: {
        id,
    }
});

export const updateItem = (id: string, quantity: number) => ({
    type: UPDATE_ITEM,
    payload: {
        id,
        quantity
    }
});

export const cleanCart = () => ({
    type: CLEAN_CART,
});
