import React, { useState } from 'react';

const Input = (props) => {

    const [title, setTitle] = useState('')

    // テキストのonChange用の処理
    const changeTitle = (e) => {
        setTitle(e.target.value)
    }

    // 保存ボタンのonClick用のメソッド
    const save = (e) => {
        e.preventDefault()
        props.addTodoItem(title)
        setTitle('')
    }

    return (
        <form>
            <input type="text" placeholder="タイトル" value={title} onChange={changeTitle} />
            <button onClick={save}>保存</button>
        </form>
    )
};

export default Input;