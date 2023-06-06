import React, { useRef } from "react";
import axios from 'axios';
import "./NewTodo.css";
import "./ParentComponent";

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
  onAddList: (list: { id: string; name: string }) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText);

    axios.post(
      'https://jsonplaceholder.typicode.com/users/1/todos',
      {
        id: 'foo',
        name: 'bar',
        
      },
      {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      }
    )
      .then((response) => {
        const json = response.data;
        props.onAddList(json);
      })
      .catch((error) => {
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
    </form>
  );
};

export default NewTodo;
