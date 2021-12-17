export const selectedName = (name) => {
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