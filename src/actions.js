import { CHANGE_SEARCH_FIELD } from './constants'

export const setSaerchFiekd = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});