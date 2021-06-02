let filterOptions = document.querySelectorAll(".filter-colors__container");
let modalFilters = document.querySelectorAll(".modal_filters");
let mainContainer = document.querySelector(".main-container");
let modalContainer = document.querySelector(".modal_container");
let addBtn= document.querySelector(".add");
let removeBtn = document.querySelector(".remove");
let descBox = document.querySelector(".desc-box");
let colors = ["lightpink" ,"lightblue" , "lightgreen", "black"]
let flag = false;
let deleteState = false;
let cColor = colors[colors.length-1];

addBtn.addEventListener("click" , function(){
    if(flag == false){
        modalContainer.style.display = "flex"
    } else {
        modalContainer.style.display = "none";
    }
    flag =!flag;
})

for(let i =0 ; i<modalFilters.length;i++){
    modalFilters[i].addEventListener("click" , function(){
        modalFilters.forEach(function(modalFilter){
            modalFilter.classList.remove("border");
        })
        modalFilters[i].classList.remove("border");
    })
    modalFilters[i].classList.add("border");
    cColor = modalFilters[i].classList[i];
}

for (let i = 0; i < filterOptions.length; i++) {
    filterOptions[i].addEventListener("click", function () {
        let arr = filterOptions[i].children;
        // present classes
        // console.log(arr[1]);
        let chclassesArr = arr[0].classList;
        // console.log(classesArr[1]);
        mainContainer.style.backgroundColor = chclassesArr[0];


    });
}

addBtn.addEventListener("click" , function(){
    if(flag == false){
        modalContainer.style.display = "flex";
    }else{
        modalContainer.style.display = "none";
    }
    flag!=flag
})
for(let i= 0 ; i< modalFilters.length;i++){
    modalFilters[i].addEventListener("click" , function(){
    modalFilters.forEach(function(modalFilter){
        modalFilter.classList.remove("border");
    })
    modalFilters[i].classList.add("border");
    cColor = modalFilters[i].classList[1];
    })

}

//textarea
descBox.addEventListener("keydown" , function(e){
    if(e.key=="Enter"){
        let task = descBox.value;
         console.log("task is ", task, "cColor ", cColor);
        // tiket create
        createTicket(task , cColor); 
    
        //  clean up 
        cColor = colors[colors.length-1];
        modalContainer.style.display = "none";
        flag = false;
        descBox.value = "";
    }
})


function createTicket(task , cColor){
  //      <div class="ticket-container">
    //     <div class="ticket-color"></div>
    //     <div class="ticket_sub-container">
    //         <h3 class="ticket-id">#sampleId</h3>
    //         <p class="ticket-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, aspernatur.</p>
    //     </div>
    // </div>
    let ticketContainer = document.createElement("div");
    ticketContainer.setAttribute("class" , "ticket-container");
    let id = uid();
    ticketContainer.innerHTML =` <div class="ticket-color ${cColor}"></div>
    <div class="ticket_sub-container">
          <h3 class="ticket-id">#${id}</h3>
          <div class="ticket-desc">${task}</div>
      </div>`;
     
    mainContainer.appendChild(ticketContainer);
    let colorStripeElement = ticketContainer.querySelector(".ticket-color");
    handleColorChange(colorStripeElement);
    handleDeleteContainer(ticketContainer);
}



function handleColorChange(colorStripeElement){
    colorStripeElement.addEventListener("click", function(){
        let classes = colorStripeElement.classList;
        let initColor = classes[1];
        let idx = colors.indexOf(initColor);
        let newidx = (idx+1)%4;
        let newColor = colors[newidx];
        colorStripeElement.classList.remove(initColor);
        colorStripeElement.classList.add(newColor);
    })
}


removeBtn.addEventListener("click" , function(){
    if(deleteState == false){
        removeBtn.style.backgroundColor = "rgb(100, 71, 26)";
    } else {
        removeBtn.style.backgroundColor = "rgb(146, 102, 35)";
    }
    deleteState =!deleteState;
})

function handleDeleteContainer(ticketContainer){
    ticketContainer.addEventListener("click" ,function(){
        if(deleteState == true){
            ticketContainer.remove();
        }
    });
}