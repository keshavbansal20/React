let intitialState={
    taskList:[{"id":1,"task":"helloWorld"},]
    
}

function InputReducer(state = intitialState , action){
    switch(action.type){
        case "input_item":
            
                // let tempArr = []
                let  tempArr = [...this.intitialState.taskList ,{id:this.state.taskList.length+1 , task:action.payload}]
                let obj = {taskList:tempArr}
                return obj;
        default:
            return state;              
            
    }
}

export default InputReducer;