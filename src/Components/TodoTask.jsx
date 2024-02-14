import { MdEdit } from "react-icons/md"
import { CiCircleRemove } from "react-icons/ci"
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
          <div>
            <input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            ></input>
            <button onClick={() => handleEditButton(newMessage)}>Conf</button>
          </div>
        ) : (
          <h2>{text}</h2>
        )}

        <div className='actions'>
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

/*
() => handleEdit("lalala")*/
