/**
 * @class Service
 *
 * Manages the data of the application.
 */
 class TodoService {

    todos: any;
    
    constructor() {
      this.todos = (JSON.parse(localStorage.getItem("todos")) || []).map(
          (        todo: { complete: boolean; text: any; }) => new Todo(todo)
      );
    }
  
    bindTodoListChanged(callback: any) {
      this.onTodoListChanged = callback;
    }
  
    _commit(todos: any) {
      this.onTodoListChanged(todos);
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  
    addTodo(text: any) {
      this.todos.push(new Todo({ complete:true, text }));
  
      this._commit(this.todos);
    }
  
    editTodo(id: any, updatedText: any) {
      this.todos = this.todos.map(todo =>
        todo.id === id
          ? new Todo({
              ...todo,
              text: updatedText
            })
          : todo
      );
  
      this._commit(this.todos);
    }
  
    deleteTodo(_id: any) {
      this.todos = this.todos.filter(({ id }) => id !== _id);
  
      this._commit(this.todos);
    }
  
    toggleTodo(_id: any) {
      this.todos = this.todos.map(todo =>
        todo.id === _id ? new Todo({ ...todo, complete: !todo.complete }) : todo
      );
  
      this._commit(this.todos);
    }
  }
  