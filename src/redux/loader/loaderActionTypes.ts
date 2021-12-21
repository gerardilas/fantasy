export enum LoaderActionTypes {
    CHANGE_LOADING = 'CHANGE_LOADING',
}
export const { CHANGE_LOADING } = LoaderActionTypes

export interface LoaderAction {
    type: `${LoaderActionTypes}`,
    payload: boolean
}