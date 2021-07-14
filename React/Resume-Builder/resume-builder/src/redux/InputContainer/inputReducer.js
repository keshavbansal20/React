let intitialState={
    taskList:[{"id":1,"task":"helloWorld"}],
    
    
}
function InputReducer(state = intitialState , action){
   
    switch(action.type){
        case "input_item":
            
            let tempArr = [...state.taskList ,{id:state.taskList.length+1 , task:action.payload}]
                let obj = {taskList:tempArr}
                // console.log(taskList);
                return obj;
        default:
            return state;              
            
    }
}

export default InputReducer;