import { CHANGE_LOADING } from "./loaderActionTypes";

export const setIsLoading = (isLoading: boolean) => ({
    type: CHANGE_LOADING,
    payload: isLoading
});