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
        return Immutable.OrderedMap();
    }

    reduce(state, action) {
        switch (action.type) {
            case TodoActionTypes.ADD_TODO:
                if (!action.text) {
                    return state;
                }
                const id = Counter.increment();
                return state.set(id, new Todo({
                    id,
                    text: action.text,
                    complete: false,
                }));
            case TodoActionTypes.DELETE_TODO:
                return state.delete(action.id);
            case TodoActionTypes.TOGGLE_TODO:
                return state.update(action.id,
                    todo => todo.set('complete', !todo.complete),
                );
            case TodoActionTypes.DELETE_COMPLETED:
                return state.filter(todo => !todo.complete);
            case TodoActionTypes.TOGGLE_ALL_TODO:
                let a = state.filter(todo => !todo.complete).size;
                var completed = (a === 0);
                return state.map(todo=> todo.set('complete', !completed));
            case TodoActionTypes.STOP_EDIT_TODO:
                return state.update(action.id, todo =>
                    todo.set('text', action.text),
                );
            case TodoActionTypes.EDIT_CHANGE:
                return state.update(action.id,
                    todo => todo.set('text', action.text),
                );
            default:
                return state;
        }
    }
}

export default new TodoStore();
