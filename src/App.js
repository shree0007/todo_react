import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';

function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    setListTodo([...listTodo, inputText])
  }
  return (
    <div className="main-container bg-slate-500 h-screen text-center text-white font-semibold">
      TODO APP
      <div className='center-container'>
        <TodoInput addList={addList} />
      </div>
    </div>
  );
}

export default App;
