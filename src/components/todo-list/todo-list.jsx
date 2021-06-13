import React from "react";
import PropTypes from "prop-types"
import TodoItem from "../todo-item/todo-item";
import todoList from "./todo-list.module.css"

const TodoList = ({taskList, removeTask}) => (
    <div className={todoList["todo-list"]}>
        <ol>
            {taskList.map(({id, text}) => (
                <li key={id}><TodoItem removeTask={removeTask} id={id} key={id} text={text}/></li>
            ))}
        </ol>
    </div>);

TodoList.propTypes = {
    taskList: PropTypes.array,
    removeTask: PropTypes.func,
};

TodoList.defaultProps = {
    taskList: [],
    removeTask: () => {
    },
};
export default TodoList;