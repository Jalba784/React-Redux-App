import axios from 'axios';

export const FETCH_STAR_START = 'FETCH_STAR_START';
export const FETCH_STAR_SUCCESS = 'FETCH_STAR_SUCCESS';
export const FETCH_STAR_ERROR = 'FETCH_STAR_ERROR';

export const fetchStars = () => {
    return dispatch => {
        axios.get('https://swapi.co/api/people')
            .then(res => {
                dispatch({ type: FETCH_STAR_SUCCESS, payload: res.data.results })
            })
            .catch(err => {
                dispatch({ type: FETCH_STAR_ERROR, payload: err })
            })
    }
};