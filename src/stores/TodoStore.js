import {EventEmitter} from 'events';
import {v4 as uuid} from 'uuid'

// EXTEND EVENTS EMITTER
class TodoStore extends EventEmitter {
    constructor() {
        super()
        this.todos = [
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

    getAll()
    {
        return this.todos;
    }

    createTodo(text) 
    {
        this.todos.push({
            text,
            complete: false,
            id: uuid(),
        });

        this.emit("change");
    }
}

// CREATE A NEW TODO STORE
const todoStore = new TodoStore;

// !TESTING: TEMPORARILY EXPOSE TODO STORE
// window.todoStore = todoStore;

// EXPORT TODO STORE
export default todoStore;