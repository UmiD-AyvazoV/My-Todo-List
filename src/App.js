import { useState , useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [ input , setInput ] = useState('');
  const [ todos , setTodos ] = useState([]);
  const [ id , setId ] = useState(1); 
  const [ status , setStatus ] = useState("All");
  const [ filteredTodos , setFilteredTodos ] = useState([]);


  useEffect(() => {
    getLocalTodos();
  }, [])

  useEffect(() => {
    filerStatus();
    saveLocalTodos();
  }, [todos,status]) // eslint-disable-line

  const handlerClick = () => {
    if(input.trim()){
      setTodos([...todos, {
        text: input,
        isCompleted: false,
        status: false,
        editMode: false,
        id: id,
      }]);
      setId(id+1);
    }
    setInput('');
  }

  const handlerCheck = (id) => {
    let check = todos.find( a => a.id === id );
    check.status = !check.status;
    check.isCompleted = !check.isCompleted;
    setTodos([...todos]);
  }

  const handlerDelete = (id) => {
    setTodos([...todos.filter( a => a.id !== id )]);
  }

  const handlerEdit = (id) => {
    let edit = todos.find( a  => a.id === id );
    edit.editMode = !edit.editMode;
    setTodos([...todos]);
  }

  const handlerSave = (id) => {
    let edit = todos.find( a  => a.id === id );
    edit.editMode = !edit.editMode;
    setTodos([...todos]);
  }

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]))
    } else {
      setTodos(JSON.parse(localStorage.getItem("todos")));
      setTodos(savedTodos);
      setId(savedTodos.length + 1);
    }
  }

  const filerStatus = () => {
    switch(status){ // eslint-disable-line

      case "Completed":
        setFilteredTodos(todos.filter( a => a.isCompleted === true ));
        break;

      case "Uncompleted":
        setFilteredTodos(todos.filter( a => a.isCompleted === false ));
        break;
      
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  return (
    <div className="App center">
      <div className="col-6">
        <h1>My Todo List</h1>
        <Form  setInput={setInput} handlerClick={handlerClick} input={input} />
        <TodoList todos={todos} handlerCheck={handlerCheck} handlerDelete={handlerDelete} handlerEdit={handlerEdit} handlerSave={handlerSave} setTodos={setTodos} filteredTodos={filteredTodos} />
        <Footer setTodos={setTodos} todos={todos} setStatus={setStatus} filteredTodos={filteredTodos} />
      </div>
    </div>
  );
}

export default App;
