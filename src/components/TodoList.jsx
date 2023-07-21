import React from 'react';

const TodoList = (props) => {
    return (
        <div className='w-80 m-auto'>
            <li className='border w-72 m-auto text-left list-none p-1 rounded-md '>{props.item}
                <span className='ml-52'><i className="fa-solid fa-trash-can" onClick={e => {
                    props.deleteItem(props.index)
                }}></i></span>
            </li>
        </div>
    );
};

export default TodoList;