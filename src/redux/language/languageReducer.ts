import { Reducer } from "react";
import { CHANGE_LANGUAGE, LanguageAction } from "./languageActionTypes";

export enum Languages {
    es = "es",
    en = "en"
}
export type LanguageString = `${Languages}`

const initialState = "es"
export const languageReducer = (state: LanguageString = initialState, action: LanguageAction) => {
    const { type, payload } = action
    switch (type) {
        case (CHANGE_LANGUAGE):
            state = payload
            return state
        default:
            return state
    }
}