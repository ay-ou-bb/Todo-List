export const todosReducer = (state , action)=>{
    switch(action.type){
       case "Checked" :
        return state.map(todo=>
            todo.id === action.payload
            ?{...todo,isChecked:!todo.isChecked}
            :todo
        )
        case "Add":
        return  [...state, action.payload]

        case "update":
            return state.map(todo=>
                todo.id===action.payload.id
                ?{...todo,...action.payload.updatedTodo}
                :todo
            )
        case "delete":
        return state.filter(todo=>todo.id!==action.payload)

        default:
            return state
       
}
}