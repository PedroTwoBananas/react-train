import React from 'react';
import TaskInterface from './TaskInterface';

interface PropsAddTaskInterface {
    addTask: (addedTask: TaskInterface)=> void,
}

export default PropsAddTaskInterface;