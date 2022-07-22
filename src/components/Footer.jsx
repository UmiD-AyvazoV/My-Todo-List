import React from 'react'

const Footer = ( { setTodos , todos , setStatus , filteredTodos } ) => {
    const clear = () => {
        setTodos([]);
    }

   const handlerStatus = (e) => {
    let status = e.target.innerText;
    setStatus(status);
   }

  return (
    <div className="wrapper">
            <div className="info">
                <div className="left">
                    <span className="count">{filteredTodos.filter( a => a.isCompleted === false ).length}</span> items left
                </div>
                <div className="statuses">
                    <span onClick={handlerStatus} className="active">All</span>
                    <span onClick={handlerStatus}>Completed</span>
                    <span onClick={handlerStatus}>Uncompleted</span>
                </div>
                <div className="clear" onClick={clear}>
                    <span>Clear Completed</span>
                </div>
            </div>
        </div>
  )
}

export default Footer