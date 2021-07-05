import React from 'react';
import {connect } from 'react-redux';
import formField from './formField';
import _ from 'lodash';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

const SurveyReview = ({onCancel, formValues, submitSurvey,history}) => {

    const reviewFields = _.map(formField, ({name,label}) => {
         return (
             <div key = {name}>
                 <label>{label}</label>
                 <div>
                     {formValues[name]}
                 </div>
             </div>

         );

    });

    return (
        <div>
            <h5> Please Confirm your entries</h5>
            {reviewFields}
            <button
            className = "orange darken-3 btn-flat"
            onClick = {onCancel}
            >
                Back
            </button>
            <button
            onClick = {() => submitSurvey(formValues,history)}

             className = "black btn-flat right white-text">
                Send Survey
                <i className = "material-icons right">email</i>
            </button>

            
        </div>
    );
};
function mapStateToProps(state) {
    console.log(state);
    return {
        formValues: state.form.surveyForm.values

    };

}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));