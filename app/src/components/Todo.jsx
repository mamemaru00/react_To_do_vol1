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

    const updateStatusTodoItem = (id) => {
        setTodoItems(todoItems.map(todoItem => {
            if (todoItem.id === id) {
                todoItem.is_done = !todoItem.is_done
            }
            return todoItem
        }))
    }

    const removeTodoItem = (id) => {
        setTodoItems(todoItems.filter(todoItem => todoItem.id !== id))
    }

    return (
        <div>
            <h1>Todo</h1>
            <Input addTodoItem={addTodoItem} />
            <Filter />
            <List todoItems={todoItems} updateStatusTodoItem={updateStatusTodoItem} removeTodoItem={removeTodoItem} />
        </div>
    );
}

export default Todo;