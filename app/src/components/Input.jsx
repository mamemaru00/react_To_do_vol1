import React, { useState } from 'react';
// saveボタンをカウントして表示させる

const Input = (props) => {

    const [title, setTitle] = useState('')
    const [count, setCount] = useState(0)

    // テキストのonChange用の処理
    const changeTitle = (e) => {
        setTitle(e.target.value)
    }

    // 保存ボタンのonClick用のメソッド
    const save = (e) => {
        e.preventDefault()
        props.addTodoItem(title)
        setTitle('')
        setCount(count + 1)
    }

    return (
        <div>
            <form>
                <input className='inputSave' type="text" placeholder="タイトル" value={title} onChange={changeTitle} />
                <button className='saveButton' onClick={save}>保存</button>
            </form>
            <div className='taskCount'>タスク数: {count}</div>
        </div>
    )
};

export default Input;