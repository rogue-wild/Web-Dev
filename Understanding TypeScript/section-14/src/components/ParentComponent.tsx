import React, { useState } from "react";
import NewTodo from "./NewTodo";
import TodoList from "./TodoList";

interface Todo {
  id: string;
  text: string;
}

const ParentComponent: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    const newTodo: Todo = {
      id: Math.random().toString(),
      text: text,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const addListHandler = (list: { id: string; name: string }) => {
    const newTodo: Todo = {
      id: list.id,
      text: list.name,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodoHandler = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} onAddList={addListHandler} />
      <TodoList items={todos} onDeleteTodo={deleteTodoHandler} />
    </div>
  );
};

export default ParentComponent;
