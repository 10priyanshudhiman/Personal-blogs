import { combineReducers } from "redux";
import authReducers from './authReducers';
import { reducer as reduxForm } from 'redux-form';
import surveyReducer from './surveyReducer';

export default combineReducers({
    auth: authReducers,
    form: reduxForm,
    surveys: surveyReducer

});