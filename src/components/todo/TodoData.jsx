const TodoData = (props) => {

    const { todoList, deleteTodo } = props
    // console.log(todoList)
    const handleOnClick = (id) => {
        deleteTodo(id);
        set
    }
    return (
        <div className='todo-list'>
            {todoList.map((item, index) => {
                // console.log(index, item)
                return (
                    <div className="todo-item" key={item.id}>
                        <div >{item.name}</div>
                        <button
                            onClick={() => { handleOnClick(item.id) }}
                        >Delete</button>
                    </div>
                )
            })}
        </div >
    )


}
export default TodoData;
