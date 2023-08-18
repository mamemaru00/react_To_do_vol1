// inputファイルとFileファイルろListファイルの中身を表示してください。
import { List, Filter, Input } from "./index";
// import Input from "./Input";
// import Filter from "./Filter";
// import List from "./List";
import React, { useEffect, useState } from 'react'

const Todo = (props) => {
    const [todoItems, setTodoItems] = useState([])

    const addTodoItem = (title) => {
        setTodoItems([...todoItems, { id: todoItems.length + 1, title: title, is_done: false }])
    }

    return (
        <div>
            <h1>Todo</h1>
            <Input addTodoItem={addTodoItem} />
            <Filter />
            <List todoItems={todoItems} />
        </div>
    );
}

export default Todo;