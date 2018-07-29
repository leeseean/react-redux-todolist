export const changeStatus = (item, index) => {
    return {
        type: 'CHANGE_STATUS',
        item,
        index
    };
};

export const deleteItem = index => {
    return {
        type: 'DELETE_ITEM',
        index
    };
};

export const addItem = (value, finishTime) => {
    return {
        type: 'ADD_ITEM',
        value,
        finishTime
    };
};

export const setValue = (event) => {
    return {
        type: 'SET_VALUE',
        event
    };
};

export const setFinshTime = (event) => {
    return {
        type: 'SET_FINISH_TIME',
        event
    };
};