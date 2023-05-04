import { data } from "../components/dogData"

const initialState = {
    dogs: data,
    loading: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        default: 
            return(state)
    }
}

export default reducer