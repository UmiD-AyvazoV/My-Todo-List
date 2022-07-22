import React from 'react'
import Todo from './Todo'

const TodoList = ( { todos , handlerCheck , handlerDelete , handlerEdit , handlerSave , setTodos , filteredTodos } ) => {
  return (
    <ul className='p-0 mt-3 items'>
       {
         filteredTodos.map( ( a , b ) => (
          <Todo key={b} text={a.text} id={a.id} handlerCheck={handlerCheck} status={a.status} handlerDelete={handlerDelete} handlerEdit={handlerEdit} editMode={a.editMode} handlerSave={handlerSave} todos={todos} setTodos={setTodos} index={b} />
        ) )
       }
    </ul>
  )
}

export default TodoList