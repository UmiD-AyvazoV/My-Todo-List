import React from 'react'

const Todo = ( { text , id , handlerCheck , status , handlerDelete , handlerEdit , editMode , handlerSave , todos , setTodos , index } ) => {
  const edited = (e) => {
    let temp = todos;
    let f = temp.find( (a,b) => b === index );
    f.text = e.target.value;
    setTodos([...temp]);
  }
  return (
    <li className='todo'>
    
        {
          editMode ? <>
                          <input type="text" value={text} onChange={ edited } />
                          <button onClick={ () => handlerSave(id) } className="save">
                            <i className="fa-solid fa-floppy-disk"></i>
                          </button>
                    </> : <>
                        <button onClick={ () => handlerCheck(id)} className="check">
                          <i className="fa-solid fa-check"></i>
                        </button>
                        <div style={{ textDecoration: status ? 'line-through' : 'none' }}>{text}</div>
                        <div>
                        <button onClick={ () => handlerDelete(id) } className="delete">
                          <i className="fa-solid fa-trash"></i>
                        </button>
                        <button onClick={ () => handlerEdit(id) } className="edit">
                          <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                        </div>
                    </>
        }
    </li>
  )
}

export default Todo