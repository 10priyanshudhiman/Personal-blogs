import React, {Component} from  'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import map from 'lodash/map';

import { fetchSurveys } from '../../actions';

class SurveyList extends Component {

    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys(){
        return map(this.props.surveys, survey => {
            return (
              <div className="card darken-1 horizontal" key={survey._id}>
                <div className="card-stacked">
                  <div className="card-content">
                    <span className="card-title">{survey.title}</span>
                    <p>{survey.body}</p>
                        <p className = "right">
                            Sent on: {new Date(survey.dateSent).toLocaleDateString()}
                        </p>
                    </div>
                <div className="card-action">
              <Link to={`/surveys/${survey._id}`}>Read</Link>
                </div>
                   
                </div>
                </div>

            );

        });
    }
    render() {
        return (
            <div> {this.renderSurveys()}</div>

        );
    };
}

function mapStateToProps ({surveys}) {
    return { surveys};
}

export default connect(mapStateToProps, {fetchSurveys})(SurveyList);

