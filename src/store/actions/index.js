import {
    CHANGE_STATUS,
    DELETE_ITEM,
    ADD_ITEM,
    SET_VALUE,
    SET_FINISH_TIME,
    AJAX_SUCCEEDED,
    AJAX_FAILED,
    AJAX_REQUESTED
} from '../types';

export const changeStatus = (item, index) => {
    return {
        type: CHANGE_STATUS,
        item,
        index
    };
};

export const deleteItem = index => {
    return {
        type: DELETE_ITEM,
        index
    };
};

export const addItem = (value, finishTime) => {
    return {
        type: ADD_ITEM,
        value,
        finishTime
    };
};

export const setValue = (event) => {
    return {
        type: SET_VALUE,
        event
    };
};

export const setFinshTime = (event) => {
    return {
        type: SET_FINISH_TIME,
        event
    };
};

export const ajaxSucceeded = (data) => {
    return {
        type: AJAX_SUCCEEDED,
        data
    };
};

export const ajaxFailed = (errMsg) => {
    return {
        type: AJAX_FAILED,
        errMsg
    };
};

export const ajaxRequested = (data) => {
    return {
        type: AJAX_REQUESTED,
        data
    };
};