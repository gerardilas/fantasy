import { CHANGE_LOADING, LoaderAction } from "./loaderActionTypes"

const initialState = false

export const loaderReducer = (state: boolean = initialState, action: LoaderAction) => {
    const { type, payload } = action
    switch (type) {
        case (CHANGE_LOADING):
            return payload
        default:
            return state
    }
}