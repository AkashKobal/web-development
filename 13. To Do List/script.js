const inputBox = document.getElementById("inputBox");
    const listContainer = document.getElementById("list-container");

    function addTask(){
        if(inputBox.value === ""){
            alert("Your must add some task!");
        }
        else{
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);

            // add cross icon to delete the task 
            let span = document.createElement("span")
            span.innerHTML = "\u00d7"; // cross icon

            li.appendChild(span);



        }
        inputBox.value = ""
        saveData(); // this function is called when ever we update the task and save the data
    }


    // check and uncheck the task

    listContainer.addEventListener("click",function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            saveData(); // this function is called when ever we update the task and save the data

        } 

        // delete the checked task
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData(); // this function is called when ever we update the task and save the data

            
        }
    }, false);


    // store the task in our browser so that when ever we open the browser task should be there
    function saveData(){
        localStorage.setItem("data",listContainer.innerHTML); //(name, data)
    }

    // display the data when ever we open our website again
    function showData(){
        listContainer.innerHTML = localStorage.getItem("data");
    }
    showData();