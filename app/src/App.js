import Todo from './components/Todo';
import './App.css';

function App() {
  return (
    <div>
      <Todo
        title={"My Todo List"}
        content={"This is my todo list"}
        comment={"This is my comment"}
      />
    </div>
  );
}

export default App;
