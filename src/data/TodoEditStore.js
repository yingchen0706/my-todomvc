import Immutable from 'immutable';
import { ReduceStore } from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';
import Counter from '../data/Counter';
import Todo from '../data/Todo';

class TodoStore extends ReduceStore {
    constructor() {
        super(TodoDispatcher);
    }

    getInitialState() {
        return '';
    }

    reduce(state, action) {
        switch (action.type) {
            case TodoActionTypes.START_EDIT_TODO:
                return action.id;
            case TodoActionTypes.STOP_EDIT_TODO:
                return '';
            default:
                return state;
        }
    }
}

export default new TodoStore();

