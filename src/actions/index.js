export const selectedName = name => {
    return {
        type: 'SELECTED_NAME',
        payload: name
    };
};


export const temp = (tempVal) => {
    return {
        type: 'TEMP',
        payload: tempVal
    };
};

export const clickedName = (name) => {
    return {
        type: 'CLICKED_NAME',
        payload: name
    }
}