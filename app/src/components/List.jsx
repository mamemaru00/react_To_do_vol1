const List = (props) => {
    return (
        <div>
            <ul>
                {props.todoItems.map(todoItem =>
                    <li key={todoItem.id}>
                        <span>{todoItem.title}</span>
                        <span><input type="checkbox" checked={todoItem.is_done} /></span>
                        <span><button>削除</button></span>
                    </li>
                )}
            </ul>
        </div>
    )
};

export default List;