export default class Todo {
  id: number = 0;
  text: string = "test";
  completed: boolean = false;

  constructor(id: number, text: string, completed: boolean) {
    this.id = id;
    this.text = text;
    this.completed = completed;
  }
}
