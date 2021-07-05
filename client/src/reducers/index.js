import { combineReducers } from "redux";
import authReducers from './authReducers';
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
    auth: authReducers,
    form: reduxForm

});