import dispatcher from '../dispatcher';

export function createTodo(text)
{
    dispatcher.dispatch({
        type: "CREATE_TODO",
        text,
    });
}

export function deleteTodo(id)
{
    dispatcher.dispatch({
        type: "DELETE_TODO",
        id,
    });
}

export function reloadTodos()
{
    // axios("http://some-url")
    //     .then(data => {
    //         console.log("got data", data);
    //     })

    dispatcher.dispatch({ type: "FETCH_TODOS", });

    // MOCK AJAX CALL
    setTimeout(() => {
        dispatcher.dispatch({
            type: "RECEIVE_TODOS",
            todos: [
                {
                    id: 74855,
                    text: "Find stuff",
                    complete: false,
                },
                {
                    id: 1545523,
                    text: "Do stuff",
                    complete: true,
                },
            ],
        })
    }, 1000);
}