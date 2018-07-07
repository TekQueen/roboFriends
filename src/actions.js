import {SHEARCH_FIELED_CHANGED} from './constants';

export const setSearchField = text => {
    console.log(text);
    return {
        type: SHEARCH_FIELED_CHANGED,
        payload: text
    }
}