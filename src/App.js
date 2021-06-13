import './App.css';
import React from "react";
import Todo from "./containers/todo/todo";
import Title from "./components/title/title";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route} from "react-router-dom"

const App = () => {
    return (
        <Route>
            <Title title="TodoRedux"/>
            <Todo/>
        </Route>
    )
};
export default App;