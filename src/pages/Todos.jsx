import React, { Component } from 'react'
import TodoStore from '../stores/TodoStore';

export class Todos extends Component {
    constructor() {
        super();
        this.state = {
            todos: TodoStore.getAll(),
        }
    }
  render() {
    const {todos} = this.state;

    const TodoComponents = todos.map(todo => <Todo key={todo.id} {...todo} />)
    return (
        <React.Fragment>
            <h1>Todos</h1>

            <ul>
                {TodoComponents}
            </ul>
        </React.Fragment>
    )
  }
}

export default Todos