import { useRef, useState } from "react"
import "./App.css"
import TodoTask from "./Components/TodoTask.jsx"
function App() {
  const [todos, setTodos] = useState([])
  const userInput = useRef("")
  const id = useRef(0)

  const handleAdd = (e) => {
    e.preventDefault()
    const todo = { userInput: userInput.current.value, id: id.current }
    id.current++
    setTodos((prevState) => {
      return [...prevState, todo]
    })
  }
  const handleDelete = (id) => {
    setTodos((prevState) => {
      return prevState.filter((t) => t.id !== id)
    })
  }
  const handleEdit = (id, newText) => {
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, userInput: newText } : todo
      )
    )
  }
  return (
    <main>
      <div className='header'>
        <h1>Todo App</h1>
        <form className='form'>
          <input
            name='query'
            type='text'
            ref={userInput}
            placeholder='Do homework, Clean up... '
            maxLength={15}
          />
          <button type='submit' onClick={handleAdd}>
            Add
          </button>
        </form>
      </div>
      <div className='todo-list'>
        <ul>
          {todos &&
            todos.map((todo) => {
              return (
                <li key={todo.id}>
                  <TodoTask
                    text={todo.userInput}
                    handleDelete={() => handleDelete(todo.id)}
                    handleEdit={(newText) => handleEdit(todo.id, newText)}
                  />
                </li>
              )
            })}
        </ul>
      </div>
    </main>
  )
}

export default App
