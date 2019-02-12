import * as actionTypes from './actionTypes';

export const saveResults = (counter) => {
    // const updatedCounter = counter*2;
    // then pass the updatedCounter and assign it to returned object to manipulate
    return {
        type: actionTypes.STORE_RESULT,
        counter: counter
    }
}
export const storeResult = (counter) => {
    return function (dispatch, getState) {
        // const oldCounter = getState().ctr.counter;
        // console.log(oldCounter);
        setTimeout(() => {
            dispatch(saveResults(counter));
        }, 2000)
    }
}

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        id: id
    }
}