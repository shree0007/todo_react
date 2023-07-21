import React, { useState } from 'react';

const TodoInput = (props) => {
    const [inputText, setInputText] = useState('');
    return (
        <div className='input-container w-72 m-auto flex space-x-3'>
            <input
                type="text"
                className='flex m-auto p-2 my-12 rounded-lg w-72 text-black'
                placeholder='Enter your todo'
                value={inputText}
                onChange={e => { setInputText(e.target.value) }} />

            <button
                className='bg-green-700 text-white w-12 h-12 rounded-full m-auto'
                onClick={() => {
                    props.addList(inputText)
                    setInputText("")
                }}>+</button>

        </div>
    );
};

export default TodoInput;