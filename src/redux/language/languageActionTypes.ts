import { LanguageString } from "./languageReducer"

export enum LanguageActionTypes {
    CHANGE_LANGUAGE = 'CHANGE_LANGUAGE',
    DELETE_LANGUAGE = 'DELETE_LANGUAGE',
}
export const { CHANGE_LANGUAGE } = LanguageActionTypes

interface ChangeLanguageAction {
    type: LanguageActionTypes.CHANGE_LANGUAGE,
    payload: LanguageString
}

export type LanguageAction = ChangeLanguageAction