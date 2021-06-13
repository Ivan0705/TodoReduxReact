import React from "react"
import PropTypes from "prop-types";

const TodoInput = ({value, onChange, onKeyPress}) => (
    <div className="input-group mb-3">
        <div className=" input-group mb-3">
            <input
                placeholder="Введите текст!"
                onChange={onChange}
                value={value}
                onKeyPress={onKeyPress}
                className="form-control"
            />
            <button className="btn btn-success">Добавить</button>
        </div>
    </div>);

TodoInput.propTypes = {
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func,
    value: PropTypes.string,

};
TodoInput.defaultProps = {
    onChange: () => {
    },
    onKeyPress: () => {
    },

};
export default TodoInput;