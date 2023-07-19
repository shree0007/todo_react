import './App.css';
import TodoInput from './components/TodoInput';

function App() {
  return (
    <div className="main-container bg-slate-500 h-screen text-center text-white font-semibold">
      TODO APP
      <div className='center-container'>
        <TodoInput />
      </div>
    </div>
  );
}

export default App;
