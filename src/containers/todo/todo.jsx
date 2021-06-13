import React, {Component} from "react";
import Footer from "../../components/footer/footer";
import TodoInput from "../../components/todo-input/todo-input";
import TodoList from "../../components/todo-list/todo-list";
import todoClass from "./todo.module.css"
import {connect} from "react-redux";
import {addTask, removeTask} from "../../actions/actionCreator";


class Todo extends Component {
    state = {
        text: '',
    };
    handleInputChange = ({target: {value}}) => {
        this.setState({text: value})
    };
    addTask = (key) => {
        if (key === 'Enter') {
            this.handleSubmit(key);
        }
    };
    handleSubmit = (key) => {
        key.preventDefault();
        const {text} = this.state;
        if (text.length > 0) {
            const id = (new Date().getTime());
            console.log("Text: " + text + ", id:" + id);
            const {addTask} = this.props;
            addTask(id, text);

            this.setState({
                text: ''
            })
        } else {
            alert("Вы не ввели текстовое сообщение!")
        }
    };

    render() {
        const {text} = this.state;
        const {tasks, removeTask} = this.props;
        return (
            <div className={todoClass["todo-wrapper"]}>
                <form onSubmit={this.handleSubmit}>
                    <TodoInput onKeyPress={this.addTask} onChange={this.handleInputChange} value={text}
                    />
                </form>
                <TodoList taskList={tasks} removeTask={removeTask}/>
                <Footer amount={tasks.length}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
    }
};

const mapDispatchToProps = {
    addTask,
    removeTask
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);