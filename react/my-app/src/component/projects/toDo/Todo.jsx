import React, { useState } from 'react';
import Form from './Form';
import ToDoData from './ToDoData';
import DateAndTime from './DateAndTime';

function Todo() {
    const reactToDo = "reactToDo"
    const [task, setTask] = useState(() => {
        const tododata = localStorage.getItem(reactToDo);
        if (!tododata) return [];
        return JSON.parse(tododata);
    });

    return (
        <div className='bg-zinc-900 min-h-dvh flex flex-col items-center pt-7'>
            <h1 className='text-4xl pb-1 font-bold text-neutral-200'>Task Tracker</h1>
            <DateAndTime />
            <Form task={task} setTask={setTask} />
            <ToDoData task={task} setTask={setTask} />
        </div>
    );
}

export default Todo;
