import './App.css';
import Input from './component/input';
import MyTodos from './component/MyTodos';
import { useState,useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {

  const getLocalItems= () => {
    let list = localStorage.getItem('lists');
    // console.log(list);
    if(list){
      return JSON.parse(localStorage.getItem('lists'));
    }
  }
    const [todo,setTodo] = useState(getLocalItems());
    const [todoCopy,setTodoCopy] = useState([]);
    const [allValues,setAllValues] = useState({todoName : "",todoDescription : ""});

    const handleButton = (event) =>{
      event.preventDefault();
      setTodo([...todo, {...allValues}]);
      setTodoCopy([...todoCopy, {...allValues}]);
      setAllValues({todoName : "",todoDescription : ""});
    }
    
    const handleInput = (e) =>{
      // setAllValues({...allValues, [e.target.name] : e.target.value});
      setAllValues(prevValue =>{ 
        return {...prevValue, id : uuidv4(), [e.target.name] : e.target.value , status : "Not Completed"}
      })
    }

    useEffect(() => {
      localStorage.setItem('lists',JSON.stringify(todo))
    }, [todo]);

  return (
    <div>
        <h3 className="title text-center mt-4 mb-4">My Todo</h3>
        <Input value={allValues} handleButton={handleButton} handleInput={handleInput} />
        <MyTodos setTodo={setTodo} todo={todo} setTodoCopy={setTodoCopy} todoCopy={todoCopy} />
    </div>
    
  );
}

export default App;
