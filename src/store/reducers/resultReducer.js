import * as actionTypes from '../actions/actionTypes'
import {
    updateObject
} from '../utility';

const initialState = {
    results: []
}

const deleteResult = (state, action) => {
    const filteredArray = state.results.filter(res => {
        return res.id !== action.id
    })
    return updateObject(state, {
        results: filteredArray
    })
}
const resultReducer = (state = initialState, action) => {
    // eslint-disable-next-line
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, {
                results: state.results.concat({
                    value: action.counter * 2,
                    id: new Date()
                })
            })

        case actionTypes.DELETE_RESULT:
            return deleteResult(state, action)
    }

    return state;
}

export default resultReducer;