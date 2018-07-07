import {SHEARCH_FIELED_CHANGED} from './constants';


const initalState = {
    searchField: '',
}

export const RobotsSearch = (state = initalState, action = {}) => {
    switch(action.type) {
        case SHEARCH_FIELED_CHANGED:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}