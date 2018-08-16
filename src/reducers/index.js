import { combineReducers } from 'redux';
import products from './products';
import brands from './brands';
import itemEditing from './itemEditing';

const appReducers = combineReducers({
    products,
    itemEditing,
    brands
});

export default appReducers;