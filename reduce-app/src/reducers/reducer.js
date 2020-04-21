export const initialState = {

    //item array
    toDoItems: [

        { item: 'Clean House', completed: false, id: 0 },
        { item: 'Make Dinner', completed: false, id: 1 },
        { item: 'Feed Pets', completed:false, id: 2}
    ]
};

//reducer adds cases
export const ToDo = (state, action) => {

    switch (action.type) {
        case 'ADD-TODO':

        return {
            ...state,
            toDoItems: [
            ...state.toDoItems,

            {
                item: action.payload,
                completed: false,
                id: Date.now()
            }
            ]
        };
        
        case 'TOGGLE-TODO':
        return {
            ...state,
            toDoItems: state.toDoItems.map(todo => {
            if (todo.id === action.payload.id) {
                return { ...todo, completed: !todo.completed };
            } else {
                return todo;
            }
            })
        };
        
        case 'CLEAR-DONE':
        return {
            ...state,
            toDoItems: state.toDoItems.filter(todo => todo.completed !== true)
        };
        default:
        return state;
    }
};