import axios from 'axios';
import { FETCH_USER } from './types';
import { FETCH_SURVEYS } from './types';
import { FETCH_SURVEY } from './types';
 
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    dispatch({type: FETCH_USER, payload: res.data}); 

    }

export const submitSurvey = (values,history) => async dispatch => {
    const res = await axios.post('/api/surveys', values);

    history.push('/surveys');

    dispatch({type:FETCH_USER, payload: res.data});
    

}; 

export const fetchSurveys = () => async dispatch => {
    const res = await axios.get('/api/surveys');

    dispatch({ type: FETCH_SURVEYS, payload: res.data});

};

export const  fetchSurvey = (id) => async dispatch => {
    console.log(id);
    const res = await axios.get(`/api/surveys/${id}`);

    dispatch({type: FETCH_SURVEY, payload: res.data});
};



