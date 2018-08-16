import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFetchBrandsRequest = () => {
    return dispatch => {
        return callApi('brands', 'GET', null).then(res => {
            dispatch(actFetchBrands(res.data));
        });
    };
}

export const actFetchBrands = (brands) => {
    return {
        type : Types.FETCH_BRANDS,
        brands
    }
}