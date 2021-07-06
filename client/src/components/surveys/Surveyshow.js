import React , {Component} from 'react';
import { connect } from 'react-redux';

import { fetchSurvey } from '../../actions';

class Surveyshow extends Component {

    componentDidMount(){
        this.props.fetchSurvey(this.props.match._id);
    }


    render() {
        if(!this.props.survey){
            return '';
        }

        const {title, body}  =this.props.survey;

        return (
            <div>
            <h3>{title}</h3>
            <p>{body}</p>

            </div>
        );

    }

}

function mapStateToProps({surveys},ownProps){
    return {survey: surveys[ownProps.match.params._id]};

}

export default connect(mapStateToProps,{fetchSurvey})(Surveyshow);