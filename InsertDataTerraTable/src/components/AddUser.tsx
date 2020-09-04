import React from "react";
import { connect } from "react-redux";
import { addUser } from "../redux/actions";

const AddUser = ({ dispatch }) => {
  let input;

  return (
    <div>
      <br />
      <br />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>
          User name
          <br />
          <input id="name" type="text" />
        </label>
        <br />
        <label>
          Username
          <br />
          <input id="user" type="text" />
        </label>
        <br />
        <label>
          Email
          <br />
          <input id="email" type="text" />
        </label>
        <br />
        <br />
        <button type="submit">Add New User</button>
      </form>
      <br />
      <br />
    </div>
  );
};

export default connect()(AddUser);
