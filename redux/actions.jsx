export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK_DONE = 'TOGGLE_TASK_DONE';
export const UPDATE_TASK = 'UPDATE_TASK';

export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task
});

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: id
});

export const toggleTaskDone = (id) => ({
    type: TOGGLE_TASK_DONE,
    payload: id
});
export const updateTask = (id, newTitle) => ({
    type: UPDATE_TASK,
    payload: { id, newTitle }
});
