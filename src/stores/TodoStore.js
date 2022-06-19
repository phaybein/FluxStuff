import {EventEmitter} from 'events';

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

    getAll() {
        return this.todos;
    }
}

// CREATE A NEW TODO STORE
const todoStore = new TodoStore;

// EXPORT TODO STORE
export default todoStore;