import * as actionTypes from '../actions/actionTypes'

const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {
    // eslint-disable-next-line
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - action.value
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            }
    }

    return state;
}

export default counterReducer;