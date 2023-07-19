import React from 'react';

const TodoInput = () => {
    return (
        <div className='input-container w-80 m-auto flex space-x-3'>
            <input type="text" className='flex m-auto p-2 my-12 rounded-lg w-72' placeholder='Enter your todo' />
            <button className='bg-green-700 text-white w-12 h-12 rounded-full m-auto'>+</button>
        </div>
    );
};

export default TodoInput;