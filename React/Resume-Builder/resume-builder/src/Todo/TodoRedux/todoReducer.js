let initialState = {
    taskList: [{id:1 , task:"hello"}] 
    // dummyState:"Hello"
}
function todoReducer(state = initialState , action){
    console.log(state);
    console.log(action.payload);

    switch(action.type){
        case "set_task":
            console.log(action.payload);
            let newObject = {
                // ...state , 
                
                taskList: [...state.taskList , {id:state.taskList+1 , task:action.payload}] ,
            }
            return newObject
        case "delete_task":
            let filteredList = state.taskList.filter(function(task){
                return task.id!=action.payload
            })

            // let nobj= {
            //     taskList: [filteredList]
            // }
            // return nobj
            return (
                {
                    taskList:filteredList
                }
            )
        default:
            return state;
    }
}

export default todoReducer;