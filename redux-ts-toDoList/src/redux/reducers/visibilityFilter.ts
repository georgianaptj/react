import { VisibilityFilters } from "../actions";
import Action from "../../models/action";

const visibilityFilter = (
  state = VisibilityFilters.SHOW_ALL,
  action: Action
) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
