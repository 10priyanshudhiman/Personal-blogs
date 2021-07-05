import _  from 'lodash'; 
import React, {Component} from 'react';
// SurveyForm shows a form for a user to add input
import { reduxForm, Field } from 'redux-form';
import  SurveyField  from './SurveyField';
import { Link } from 'react-router-dom';

import formFields from './formField';


class SurveyForm extends Component {
    renderFields() {
        return _.map(formFields, ({label,name}) => {
            return ( <Field key ={name} component = {SurveyField} type = "text" label ={label} name = {name}/>
            );
        }); 


            
                {/* // Email body i am not using cuz mailer is not working // */}
    }
    render(){
        return (
            <div>
                <form onSubmit = {this.props.handleSubmit(this.props.onSurveySubmit)}
                >
                {/* <Field type = "text" name = "surveytitle" component = "input"/> */}
                {this.renderFields()}
                <Link to = "/surveys" className = "red btn-flat white-text">
                    Cancel
                </Link>
                <button type = "submit" className = "teal btn-flat right white-text">
                    Next
                    <i className = "material-icons right">done</i>
                    </button>

                </form>
                
            </div>
        );
    }
}
function validate(values) {
    const errors = {};

    _.each(formFields, ({name}) => {
        if(!values[name]){
            errors[name] = 'You Must Provide a Value';

        }
    });

    return errors;

}


export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);