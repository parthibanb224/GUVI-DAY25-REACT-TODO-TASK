import TodoCard from './todoCard';

function MyTodos({ setTodo, todo,todoCopy,setTodoCopy }) {
   
    const handleEdit = (data) => {
        setTodo(todo.map(item => {
            if (item.id === data.id) {
                if (item.status === "Not Completed") {
                    return { ...item, status: "Completed" }
                }
                else {
                    return { ...item, status: "Not Completed" }
                }
            }
            return item;
        }))
        setTodoCopy(todoCopy.map(item => {
            if (item.id === data.id) {
                if (item.status === "Not Completed") {
                    return { ...item, status: "Completed" }
                }
                else {
                    return { ...item, status: "Not Completed" }
                }
            }
            return item;
        }))
    }

    const handleFilter = (val) => {
        if(val === "Completed"){
            setTodo(todoCopy.filter(item => item.status === val));
        }
        else if(val === "Not Completed"){
            setTodo(todoCopy.filter(item => item.status === val));
        }
        else{
            setTodo([...todoCopy]);
        }
    }

    function handleDelete({ id }) {
        setTodo(todo.filter(item => item.id !== id));
        setTodoCopy(todoCopy.filter(item => item.id !== id));
    }

    return (
        <>
            <div className="mt-4 mb-5 ms-5 me-5 d-flex justify-content-between">
                <div>
                    <h4>My Todos</h4>
                </div>
                <div className='d-flex'>
                    <h4>Status Filter : </h4>
                    <select
                        name="category-select-1"
                        className="form-select-sm bg-primary text-white category-select ms-2"
                        id="category-select-1"
                        // value={value}
                        onChange={(e) => handleFilter(e.target.value)}>
                        <option  value={"All"}>All</option>
                        <option value={"Completed"}>Completed</option>
                        <option value={"Not Completed"}>Not Completed</option>
                    </select>

                </div>
            </div>
            <div className="container">
                <div className="row g-5">
                    {
                        todo?.map((item) =>
                            <TodoCard key={item.id} data={item} handleEdit={handleEdit} handleDelete={handleDelete} />
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default MyTodos;