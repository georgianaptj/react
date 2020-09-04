let nextTodoId = 0;
let userid = 0;

export const addUser = (text: string) => ({
  type: "ADD_USER",
  id: userid++,
  text,
});
