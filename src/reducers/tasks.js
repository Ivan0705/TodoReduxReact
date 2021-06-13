import {ADD_TASK, REMOVE_TASK} from "../constants/constants";

const TASKS = [
    {
        id: 1,
        text: "Привет, React.js!",
    },
    {
        id: 2,
        text: "Привет, Redux.js!",
    },
];

const tasks = (state = TASKS, action) => {
    switch (action.type) {
        case ADD_TASK :
            return [
                ...state, {
                    id: action.id,
                    text: action.text,
                }
            ];
        case REMOVE_TASK:
            return [...state].filter(task => task.id !== action.id);
        default:
            return state;
    }
};

export default tasks;