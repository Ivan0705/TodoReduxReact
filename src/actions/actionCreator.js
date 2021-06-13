import {ADD_TASK, REMOVE_TASK} from "../constants/constants";

export const addTask = (id, text,) => {
    return ({
            type: ADD_TASK,
            id: ++id,
            text,
        }
    )
};

export const removeTask = (id) => {
    return {
        type: REMOVE_TASK,
        id: id
    }
};


