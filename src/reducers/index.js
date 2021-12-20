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
        return action.payload
    } else {
        return tempNames
    }
}

const clickedNameReducer = (clickedName = '', action) => {
    if(action.type === 'CLICKED_NAME'){
        return action.payload
    } else {
        return clickedName
    }

}

export default combineReducers({
    selectedNames: selectedNameReducer,
    tempReducer: tempReducer,
    clickedName: clickedNameReducer
})