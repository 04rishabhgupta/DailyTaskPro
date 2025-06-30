import { ADD_TASK, DELETE_TASK, TOGGLE_TASK_DONE, UPDATE_TASK } from './actions';

const initialState = {
    tasks: []
};

export default function taskReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, tasks: [...state.tasks, { ...action.payload, done: false }] };
        case DELETE_TASK:
            return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
        case TOGGLE_TASK_DONE:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload ? { ...task, done: !task.done } : task
                )
            };
        case UPDATE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id
                        ? { ...task, title: action.payload.newTitle }
                        : task
                )
            };

    
        default:
            return state;
    }
}
