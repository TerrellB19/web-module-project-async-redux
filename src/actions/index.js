export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
import axios from "axios"

export const getDog = () => {
    return(dispatch => {      
        dispatch(fetchStart());
        axios.get('https://dog.ceo/api/breeds/image/random')
        .then(res => { 
        dispatch(fetchSuccess(res.data));
        }
    )
})
    
}

export const fetchStart = () => {
    return({type: FETCH_START});
}

export const fetchSuccess = dogs => {
    return({type:FETCH_SUCCESS, payload: dogs});
}