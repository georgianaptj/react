import React from "react";
import Footer from "./Footer";
import AddTodo from "./AddTodo";
import VisibleTodoList from "./VisibleTodoList";
import TerraTable from "./TerraTable";

const App = () => (
  <div>
    <p>Insert your todo task in te box bellow:</p>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <br />
    <br />
    <TerraTable />
  </div>
);

export default App;
