const List = (props) => {
    return (
        <div>
            <ul>
                {props.todoItems.map(todoItem =>
                    <li key={todoItem.id}>
                        <span>
                            <input type="checkbox"
                                checked={todoItem.is_done}
                                onChange={e => {
                                    props.updateStatusTodoItem(todoItem.id)
                                }}
                            />
                        </span>
                        <span>
                            <button
                                onClick={e => {
                                    e.preventDefault()
                                    props.removeTodoItem(todoItem.id)
                                }}
                            >
                                削除
                            </button>
                        </span>
                    </li>
                )}
            </ul>
        </div>
    )
};

export default List;