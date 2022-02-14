import { CHANGE_LANGUAGE } from "./languageActionTypes";
import { LanguageString } from "./languageReducer";

export const changeLanguage = (language: LanguageString) => ({
    type: CHANGE_LANGUAGE,
    payload: language
});