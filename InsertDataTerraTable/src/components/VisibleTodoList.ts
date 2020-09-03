import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions";
import TodoList from "./TodoList";
import { VisibilityFilters } from "../redux/actions";
import State from "../models/state";
import Todo from "../models/todo";

//VisibleTodoList needs to calculate todos to pass to the TodoList
const getVisibleTodos = (todos: Todo[], filter: string) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t) => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = (state: State) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch: any) => ({
  toggleTodo: (id: number) => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
