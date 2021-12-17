import { combineReducers } from "redux"


const selectedNameReducer = (selectedNames = ['tom','sally'], action) => {
    if(action.type === 'SELECTED_NAME'){
        return [...selectedNames, action.payload]
    } else {
        return selectedNames
    }
}

const tempReducer = (tempNames = '', action) => {
    if(action.type === 'TEMP'){
        return tempNames + action
    } else {
        return tempNames
    }
}

export default combineReducers({
    selectedNames: selectedNameReducer,
    temp: tempReducer
})