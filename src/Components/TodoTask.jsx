import { MdEdit } from "react-icons/md"
import { CiCircleRemove } from "react-icons/ci"
import { GiConfirmed } from "react-icons/gi"

import "./TodoTask.css"
import { useState } from "react"
function TodoTask({ text, handleDelete, handleEdit }) {
  const [editing, setEditing] = useState(false)
  const [newMessage, setNewMessage] = useState(text)
  const handleEditButton = (newMessage) => {
    setEditing(!editing)
    handleEdit(newMessage)
  }
  return (
    <>
      <div className='todo-task'>
        {editing ? (
          <div className='edit-todo'>
            <input
              maxLength={15}
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            ></input>
          </div>
        ) : (
          <h2>{text}</h2>
        )}

        <div className='actions'>
          {editing ? (
            <button onClick={() => handleEditButton(newMessage)}>
              <GiConfirmed />
            </button>
          ) : (
            <></>
          )}
          <button onClick={() => setEditing(!editing)}>
            <MdEdit></MdEdit>
          </button>
          <button onClick={handleDelete}>
            <CiCircleRemove />
          </button>
        </div>
      </div>
    </>
  )
}

export default TodoTask
