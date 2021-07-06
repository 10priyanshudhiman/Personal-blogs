

import { FETCH_SURVEYS, FETCH_SURVEY } from '../actions/types';

import mapKeys from 'lodash/mapKeys';


export default function (state={}, action) {
    switch(action.type){
        case FETCH_SURVEYS:
           return { ...state, ...mapKeys(action.payload, '_id')};
        case FETCH_SURVEY:
            const survey = action.payload;
            return {...state, [survey._id]: survey};
        default:
            return state;

    }

}