import * as actionTypes from './actionTypes';

export const increment = () => {
    return {
        type: actionTypes.INCREMENT,
        value: 10
    }
}

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT,
        value: 10
    }
}

export const add = () => {
    return {
        type: actionTypes.ADD,
        value: 5
    }
}

export const subtract = () => {
    return {
        type: actionTypes.SUBTRACT,
        value: 5
    }
}
