import React from "react"
import PropsTypes from "prop-types"
import todoItemClass from"./todo-item.module.css"
import {Button} from "react-bootstrap";


const TodoItem = ({text, removeTask, id}) => (
    <div className={todoItemClass["todo-item"]}>
        <span >{text}</span>
            <Button onClick={() => removeTask(id)} className={"btn-danger"}>Х</Button>
    </div>);

TodoItem.propTypes = {
    text: PropsTypes.string,
    removeTask: PropsTypes.func,
    id: PropsTypes.number,
};
TodoItem.defaultProps = {
    text: '',
    isCompleted: false,
    removeTask: () => {
    },
    id: '',
};
export default TodoItem;