import React from "react";
import Footer from "./Footer";
import AddTodo from "./AddTodo";
import VisibleTodoList from "./VisibleTodoList";

const App = () => (
  <div>
    <p>Insert your todo task in te box bellow:</p>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
