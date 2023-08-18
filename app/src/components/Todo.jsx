// inputファイルとFileファイルろListファイルの中身を表示してください。
import { List, Filter, Input } from "./index";
import React, { useEffect, useState } from 'react'

const Todo = (props) => {
    const [todoItems, setTodoItems] = useState([])
    // 0：すべて　1：完了　2：未完了
    const [filterStatus, setFilterStatus] = useState(0)
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

    // inputで入力した値をログに表示する
    useEffect(() => {
        console.log(todoItems)
    }, [todoItems])

    return (
        <div>
            <h1>Todo</h1>
            <Input addTodoItem={addTodoItem} />
            <Filter setFilterStatus={setFilterStatus} />
            <List todoItems={todoItems} updateStatusTodoItem={updateStatusTodoItem} removeTodoItem={removeTodoItem} filterStatus={filterStatus} />
        </div>
    );
}

export default Todo;