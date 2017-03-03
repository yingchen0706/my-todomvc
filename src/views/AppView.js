import React from 'react';

function AppView(props) {
    return (
        <div>
            <Header {...props} />
            <Main {...props} />
            <Footer {...props} />
        </div>
    );
}

function Header(props) {
    return (
        <header id="header">
            <h1>todos</h1>
        </header>
    );
}

function TodoItem(props) {
    return (
        <input type="text" value={props.todo.text}
            onChange={props.aaa.bind(null, props.editTodoId)}
            onBlur={props.onblurblur.bind(null, props.editTodoId)}/>
    )
}

function Main(props) {
    function onAdd() {
        props.addTodo(props.draft);
    }
    return (
        <section id="main">
            <input type="text" value={props.draft} onChange={props.onDraftChange}/>
            <button onClick={props.addTodo.bind(null, props.draft)}>Add</button>
            <ul id="todo-list">
                {[...props.todos.values()].reverse().map(todo => (
                    <li key={todo.id}>
                        <div className="view">
                            <input
                                className="toggle"
                                type="checkbox"
                                checked={todo.complete}
                                onChange={
                                    () => props.onToggleTodo(todo.id)
                                }
                            />
                            { todo.id === props.editTodoId ?
                            (<TodoItem
                                key={todo.id}
                                todo={todo}
                                aaa={props.onEditChange}
                                editTodoId={props.editTodoId}
                                onblurblur={props.onStopEdit}
                             />):
                            (<label onDoubleClick={props.onStartEdit.bind(null, todo.id, todo.text)}>{todo.text}</label>)
                            }
                            <button
                                className="destroy"
                                onClick={
                                    ()=> props.onDeleteTodo(todo.id)
                                }
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

function Footer(props) {
    if (props.todos.size === 0) {
        return null;
    }

    const remaining = props.todos.filter(todo=>!todo.complete).size;
    const phrase = remaining === 1? ' item left':' items left';

    return (
        <footer id="footer">
            <span id="todo-count">
                <strong>
                    {remaining}
                </strong>
                {phrase}
            </span>
            <button onClick={props.onDeleteCompleted}>Delete Completed</button>
            <button onClick={props.onToggleAllTodo}>Toggle</button>
        </footer>
    );
}

export default AppView;
