import * as Types from './../constants/ActionTypes';
var initialState = [];

const brands = (state = initialState, action) => {
    switch(action.type) {
        case Types.FETCH_BRANDS:
             state = action.brands;
             return [...state];
        default: return [...state];
    }
}

export default brands;