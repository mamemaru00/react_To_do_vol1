// inputファイルとFileファイルろListファイルの中身を表示してください。
// import { List, Filter, Input } from "./index";
import Input from "./Input";
import Filter from "./Filter";
import List from "./List";

const Todo = (props) => {
    const save = (title) => {
        console.log("Saving: ", title);
    };

    return (
        <div>
            <h1>Todo</h1>
            <Input save={props.save} />
            <Filter state={props.state} />
            <List comment={props.comment} />
        </div>
    );
}

export default Todo;