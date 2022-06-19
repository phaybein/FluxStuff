import {EventEmitter} from 'events';
import {v4 as uuid} from 'uuid'

import dispatcher from '../dispatcher';

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

    // GET ALL TODOS
    getAll()
    {
        return this.todos;
    }

    // CREATE TODO
    createTodo(text) 
    {
        this.todos.push({
            text,
            complete: false,
            id: uuid(),
        });

        this.emit("change");
    }

    // HANDLE ALL ACTIONS
    handleActions(action)
    {
        switch (action.type) {
            case "CREATE_TODO":
                this.createTodo(action.text);
                break;
        
            default:
                break;
        }
    }
}

// CREATE A NEW TODO STORE
const todoStore = new TodoStore;

// !TESTING: TEMPORARILY EXPOSE TODO STORE
// window.todoStore = todoStore;

// REGISTER TODO STORE AND BIND THIS
dispatcher.register(todoStore.handleActions.bind(todoStore));

// !TESTING: TEMPORARILY EXPOSE DISPATCHER
window.dispatcher = dispatcher;

// EXPORT TODO STORE
export default todoStore;