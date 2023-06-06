import React, { useRef } from "react";
import axios from 'axios';
import "./NewTodo.css"

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
  onAddList: (list: { id: string, name: string }) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText);

    axios.post('http://localhost:3000/lists', {
      name: enteredText,
      colorId: 3
    })
      .then(function (response) {
        props.onAddList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    // Clear input field after submitting
    if (textInputRef.current) {
      textInputRef.current.value = '';
    }
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <input type="text" name="" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
      {/* <button type="submit">ADD LIST</button> */}
    </form>
  );
};

export default NewTodo;
