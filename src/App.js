import './App.css';
import TodoList from './components/AddTask';
import AddTodo from './components/TaskList';

function App() {
  return (
    <div className="App">
    <TodoList/>
    <AddTodo/>
    </div>
  );
}

export default App;