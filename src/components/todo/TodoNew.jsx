import { useState } from "react";

const TodoNew = (props) => {
    const [valueInput, setValueInput] = useState("Enter To Do");
    const { addNewTodo } = props;
    const handleOnChange = (name) => {
        setValueInput(name);
    }
    const handleOnClick = () => {
        addNewTodo(valueInput);
        setValueInput("")
    }
    return (
        <div className='todo-input' >
            <input type="text" className='input-box'
                onChange={(event) => { handleOnChange(event.target.value) }}
                value={valueInput}
            />
            <button className='input-btn'
                onClick={handleOnClick}
            >Add</button>
        </div>
    )

}
export default TodoNew;