import React from "react";
import TaskInterface from '../interfaces/TaskInterface';

interface HeaderPropsInterface {
    addTask: (addedTask: TaskInterface)=> void,
    markAllAsDone: () => void,
    deleteAllDone: () => void
}

export default HeaderPropsInterface;