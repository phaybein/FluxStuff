import React, { Component } from 'react'
import TodoStore from '../stores/TodoStore';
import * as TodoActions from "../actions/TodoActions";
import Todo from '../components/Todo/Todo';

export class Todos extends Component {
    constructor() {
        super();
        this.state = {
            todos: TodoStore.getAll(),
        }
    }

    componentDidMount() { 
        TodoStore.on("change", this.getTodos);
    }
    
    componentWillUnmount() {
         TodoStore.removeListener("change", this.getTodos);
      }

      getTodos = () => {
        this.setState(({
            todos: TodoStore.getAll(), 
        }));
      }

      createTodo = () => {
        TodoActions.createTodo(Date.now());
      }

      reloadTodos = () => {
        TodoActions.reloadTodos();
      }

  render() {
    const {todos} = this.state;

    const TodoComponents = todos.map(todo => <Todo key={todo.id} {...todo} />)
    return (
        <div className="container">
            <h1>Todos</h1>

            <div>
                <button onClick={this.reloadTodos}>Reload</button>
            </div>

            <div>
                <input />

                <button onClick={this.createTodo}>Click</button>
            </div>

            <ul>
                {TodoComponents}
            </ul>
        </div>
    )
  }
}

export default Todos