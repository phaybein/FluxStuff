import React, { Component } from 'react'

export class Todos extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {
                    id: 234234,
                    text: "Go Shopping",
                    complete: false,
                },
                {
                    id: 123,
                    text: "Take out trash",
                    complete: false,
                },
            ]
        }
    }
  render() {
    const {todos} = this.state;

    const TodoComponents = todo.map(todo => <Todo key={todo.id} {...todo} />)
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