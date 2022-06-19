import React, { Component } from 'react'
import TodoStore from '../stores/TodoStore';
import Todo from '../components/Todo/Todo'

export class Todos extends Component {
    constructor() {
        super();
        this.state = {
            todos: TodoStore.getAll(),
        }
    }

    componentDidMount() { 
        TodoStore.on("change", () => {
            this.setState(({
                todos: TodoStore.getAll(), 
            }));
        });
     }

     componentWillUnmount() {

      }

  render() {
    const {todos} = this.state;

    const TodoComponents = todos.map(todo => <Todo key={todo.id} {...todo} />)
    return (
        <div className="container">
            <h1>Todos</h1>

            <ul>
                {TodoComponents}
            </ul>
        </div>
    )
  }
}

export default Todos