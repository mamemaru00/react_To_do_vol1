const List = (props) => {
    return (
        <div className="todo-items">
            <ul>
                <li>
                    <span className="col-title-h">タイトル</span>
                    <span className="col-status-h">ステータス</span>
                    <span className="col-remove-h" />
                </li>
                {props.todoItems.map(todoItem => {
                    if (props.filterStatus === 1 && !todoItem.is_done) {
                        return false
                    }
                    if (props.filterStatus === 2 && todoItem.is_done) {
                        return false
                    }
                    return (
                        <li key={todoItem.id}>
                            <span className="col-title">{todoItem.title}</span>
                            <span className="col-status">
                                <input type="checkbox"
                                    checked={todoItem.is_done}
                                    onChange={e => {
                                        props.updateStatusTodoItem(todoItem.id)
                                    }}
                                />
                            </span>
                            <span className="col-remove-h">
                                <button className="remove"
                                    onClick={e => {
                                        e.preventDefault()
                                        props.removeTodoItem(todoItem.id)
                                    }}
                                >
                                    削除
                                </button>
                            </span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default List;