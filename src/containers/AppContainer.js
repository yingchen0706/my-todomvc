import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import TodoStore from '../data/TodoStore';
import TodoActions from '../data/TodoActions';
import TodoDraftStore from '../data/TodoDraftStore';
import TodoEditStore from '../data/TodoEditStore';

function getStores() {
    return [TodoStore, TodoDraftStore, TodoEditStore];
}

function getState() {
    return {
        todos: TodoStore.getState(),
        onDeleteTodo: TodoActions.deleteTodo,
        onToggleTodo: TodoActions.toggleTodo,
        onToggleAllTodo: TodoActions.toggleAllTodo,
        draft: TodoDraftStore.getState(),
        onDraftChange: TodoActions.updateDraft,
        addTodo: TodoActions.addTodo,
        onDeleteCompleted: TodoActions.deleteCompleted,
        onStartEdit: TodoActions.startEditTodo,
        onStopEdit: TodoActions.stopEditTodo,
        editTodoId: TodoEditStore.getState(),
        onEditChange: TodoActions.editChange,
    }
}

export default Container.createFunctional(AppView, getStores, getState);
