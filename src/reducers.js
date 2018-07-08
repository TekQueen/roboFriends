import {
    SHEARCH_FIELED_CHANGED,
    REQUEST_ROBOTS_PENDING, 
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';


const initalStateSearch = {
    searchField: ''
}

export const RobotsSearch = (state = initalStateSearch, action = {}) => {
    switch(action.type) {
        case SHEARCH_FIELED_CHANGED:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}

const initalStateRequest = {
    isPending: false, 
    robots: [],
    error: ''
}

export const requestRobots = (state = initalStateRequest, action = {}) => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {isPending: false, robots: action.payload});
        case REQUEST_ROBOTS_FAILED :
            return Object.assign({}, state, {isPending: false, err: action.payload});
        default: 
            return state;
    }
}