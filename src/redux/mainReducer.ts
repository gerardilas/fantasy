import { combineReducers } from "redux";
import { cartReducer, ICartState } from "./cart/cartReducer";
import { languageReducer, LanguageString } from "./language/languageReducer";
import { loaderReducer } from "./loader/loaderReducer";

export interface IRootState {
  language: LanguageString,
  isLoading: boolean,
  cart: ICartState
}

export const mainReducer = combineReducers({
  language: languageReducer,
  isLoading: loaderReducer,
  cart: cartReducer
});