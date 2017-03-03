import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

const Actions = {
    addTodo(text) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.ADD_TODO,
            text,
        });
    },
    deleteTodo(id) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.DELETE_TODO,
            id,
        });
    },
    toggleTodo(id) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.TOGGLE_TODO,
            id,
        });
    },
    toggleAllTodo(id) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.TOGGLE_ALL_TODO,
            id,
        });
    },
    updateDraft(event) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.UPDATE_DRAFT,
            text: event.target.value,
        });
    },
    deleteCompleted() {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.DELETE_COMPLETED,
        })
    },
    startEditTodo(id, text) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.START_EDIT_TODO,
            id: id,
            text: text
        })
    },
    stopEditTodo(id, event) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.STOP_EDIT_TODO,
            id: id,
            text: event.target.value
        });
    },
    editChange(id, event) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.EDIT_CHANGE,
            text: event.target.value,
            id: id,
        });
    }
};

export default Actions;

