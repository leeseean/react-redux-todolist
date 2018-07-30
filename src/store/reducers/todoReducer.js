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

const initialState = {
    lists: [],
    valueToAdd: '',
    finishTime: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE_STATUS:
            action.item.finished = !action.item.finished;
            state
                .lists
                .splice(action.index, 1, action.item);
            return {
                ...state,
                lists: [...state.lists]
            };
        case DELETE_ITEM:
            state
                .lists
                .splice(action.index, 1);
            return {
                ...state,
                lists: [...state.lists]
            };
        case ADD_ITEM:
            state
                .lists
                .push({
                    name: action.value,
                    finished: false,
                    finishTime: action.finishTime,
                    createTime: new Date().toLocaleString()
                });
            return {
                ...state,
                lists: [...state.lists]
            };
        case SET_VALUE:
            return {
                ...state,
                valueToAdd: action.event.target.value
            };
        case SET_FINISH_TIME:
            return {
                ...state,
                finishTime: action.event.target.value
            };
        case AJAX_SUCCEEDED:
            return {
                ...state,
                lists: [...state.lists, ...action.data]
            };
        case AJAX_FAILED:
            return {
                ...state,
                errMsg: action.errMsg
            };
        case AJAX_REQUESTED:
            return {
                ...state,
                data: action.data
            };
        default:
            return state;
    }
}