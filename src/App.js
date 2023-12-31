import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if (inputText !== '')
      setListTodo([...listTodo, inputText])
  }
  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1)
    setListTodo([...newListTodo])
  }
  return (

    <div className="main-container bg-slate-500 text-center text-white font-semibold h-screen">
      <Header />
      <div className='center-container w-1/3 p-4  m-auto mt-12 min-h-full'>
        <TodoInput addList={addList} />
        <h1>Todo</h1>
        <hr className='mb-8 w-72 m-auto' />
        {listTodo.map((listItem, i) => {
          return (
            <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem} />
          )
        })}

      </div>
      <Footer />
    </div>


  );
}

export default App;
