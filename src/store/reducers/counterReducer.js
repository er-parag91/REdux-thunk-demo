import * as actionTypes from '../actions/actionTypes'
import {
    updateObject
} from './../utility';

const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {
    // eslint-disable-next-line
    switch (action.type) {
        case actionTypes.INCREMENT:
            return updateObject(state, {
                counter: state.counter + action.value
            })

        case actionTypes.DECREMENT:
            return updateObject(state, {
                counter: state.counter - action.value
            })

        case actionTypes.ADD:
            return updateObject(state, {
                counter: state.counter + action.value
            })

        case actionTypes.SUBTRACT:
            return updateObject(state, {
                counter: state.counter - action.value
            })
    }

    return state;
}

export default counterReducer;