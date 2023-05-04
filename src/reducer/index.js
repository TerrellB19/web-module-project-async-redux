import { data } from "../components/dogData"
import { FETCH_START, FETCH_SUCCESS } from '../actions/index'

const initialState = {
    dogs: data,
    loading: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_START:
        return{
            ...state,
            loading: true
        }
        case FETCH_SUCCESS:
        return {
            ...state,
            loading: false,
            dogs: action.payload
            }
        default: 
            return(state)
    }
}

export default reducer