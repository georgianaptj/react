import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input ref={(node) => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
      <p>Click on the task you have completed to mark it as complet:</p>
    </div>
  );
};

export default connect()(AddTodo);
