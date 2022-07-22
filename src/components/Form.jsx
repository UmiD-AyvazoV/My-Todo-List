import React from 'react'

const Form = ( { setInput , handlerClick , input } ) => {
  return (
    <div className="d-flex">
        <input type="text" value={input} onChange={ (e) => setInput(e.target.value) } className='p-2' />
        <button onClick={handlerClick} className="add">
          <i className="fa-solid fa-face-smile"></i>
        </button>
    </div>
  )
}

export default Form 