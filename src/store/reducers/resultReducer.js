import * as actionTypes from '../actions/actionTypes'

const initialState = {
    results: []
}

const resultReducer = (state = initialState, action) => {
    // eslint-disable-next-line
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({
                    value: action.counter * 2,
                    id: new Date()
                })
            }
        case actionTypes.DELETE_RESULT:
            const filteredArray = state.results.filter(res => {
                return res.id !== action.id
            })
            return {
                ...state,
                results: filteredArray
            }
    }

    return state;
}

export default resultReducer;