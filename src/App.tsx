import React, { useState } from "react"
import styled from "styled-components"

interface TodoProps {
  id: number
  text: string
}

const TodoContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`

const TodoHeader = styled.h1`
  text-align: center;
`

const TodoInput = styled.input`
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;
`

const TodoButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`

const TodoList = styled.ul`
  list-style-type: none;
  padding: 0;
`

const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<TodoProps[]>([])
  const [inputText, setInputText] = useState("")

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value)
  }

  const handleAddTodo = () => {
    if (inputText.trim() === "") return

    const newTodo: TodoProps = {
      id: Date.now(),
      text: inputText,
    }

    setTodos([...todos, newTodo])
    setInputText("")
  }

  const handleRemoveTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <TodoContainer>
      <TodoHeader>My Daily Todo App</TodoHeader>
      <div>
        <TodoInput
          type="text"
          placeholder="Add Todo's here..."
          value={inputText}
          onChange={handleInputChange}
        />
        <TodoButton onClick={handleAddTodo}>Add Todo</TodoButton>
      </div>
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </TodoItem>
        ))}
      </TodoList>
    </TodoContainer>
  )
}

export default Todo
