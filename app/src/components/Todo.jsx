// inputファイルとFileファイルろListファイルの中身を表示してください。
import { List, Filter, Input } from "./index";
// import Input from "./Input";
// import Filter from "./Filter";
// import List from "./List";

const Todo = (props) => {
    return (
        <div>
            <h1>Todo</h1>
            <Input title={props.title} />
            <Filter content={props.content} />
            <List comment={props.comment} />
        </div>
    );
}

export default Todo;