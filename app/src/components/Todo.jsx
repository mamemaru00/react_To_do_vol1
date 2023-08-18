// inputファイルとFileファイルろListファイルの中身を表示してください。
import { List, Filter, Input } from "./index";
// import Input from "./Input";
// import Filter from "./Filter";
// import List from "./List";
import React, { useEffect, useState } from 'react'

const Todo = (props) => {
    const [todoItems, setTodoItems] = useState([])

    useEffect(() => {
        (async () => {
            setTodoItems([
                { id: 1, title: 'あああ', is_done: false },
                { id: 2, title: 'いいい', is_done: true },
                { id: 3, title: 'ううう', is_done: false },
                { id: 4, title: 'えええ', is_done: true },
                { id: 5, title: 'おおお', is_done: false },
            ])
        })()
    }, [])

    return (
        <div>
            <h1>Todo</h1>
            <Input />
            <Filter />
            <List todoItems={todoItems} />
        </div>
    );
}

export default Todo;