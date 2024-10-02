const input = document.getElementById('input_data');
const task_list = document.getElementById('task_list');
const addBtn = document.getElementById('add_btn');
let count = -1;
let todos = [];


function addTask() {
    if (input.value == '') {
        alert("Please enter to do");
    } else {
        count++;
        todos[count] = "todo" + count;
        window.localStorage.setItem(todos[count], input.value);
        addData();
    }
}

function addData() { 
    if(addBtn.innerText === "Add") {
    let task = document.createElement('li');
    const taskText = document.createElement('p');
    taskText.style.margin = "0";
    taskText.style.width = "70%";
    task.appendChild(taskText);
    taskText.innerHTML = input.value;

    if (taskText.innerHTML != '') {
        task_list.appendChild(task);
        task.appendChild(taskText);
        input.value = '';

        //edit button
        let editBtn = document.createElement('button');
        editBtn.innerText = "Edit";
        editBtn.classList.add("task_button");
        editBtn.style.color = "white";
        task.appendChild(editBtn);

        //remove button
        let removeBtn = document.createElement('button');
        removeBtn.innerText = "Remove";
        removeBtn.classList.add("task_button");
        removeBtn.style.color = "rgb(200, 0 , 0";
        task.appendChild(removeBtn);

        removeBtn.addEventListener("click", () => {
            for (let i = 0; i < 50; i++) {
            const value = localStorage.getItem(`todo${i}`);
            
            if(value === removeBtn.parentElement.firstChild.innerText){
                window.localStorage.removeItem(`todo${i}`);
                removeBtn.parentElement.remove();
                location.reload();            }
        }
        })

        editBtn.addEventListener("click", () => {
            input.value = editBtn.previousElementSibling.innerText;
            input.focus();
            addBtn.innerText = "Update";
            editBtn.innerText = "Cancel";
            window.localStorage.setItem("todos", input.value)
            editBtn.addEventListener("click", () => location.reload());
            addBtn.addEventListener("click", () => location.reload());
        });
    }
}
}

function showData() {
    for(i=0; i <= localStorage.length; i++) {
    let task = document.createElement('li');
    const taskText = document.createElement('p');
    taskText.style.margin = "0";
    taskText.style.width = "70%";
    task.appendChild(taskText);
    taskText.innerHTML = window.localStorage.getItem(`todo${i}`);
    console.log(taskText);

    if (taskText.innerHTML != '') {
        task_list.appendChild(task);
        task.appendChild(taskText);
        input.value = '';

        //edit button
        let editBtn = document.createElement('button');
        editBtn.innerText = "Edit";
        editBtn.classList.add("task_button");
        editBtn.style.color = "white";
        task.appendChild(editBtn);

        //remove button
        let removeBtn = document.createElement('button');
        removeBtn.innerText = "Remove";
        removeBtn.classList.add("task_button");
        removeBtn.style.color = "rgb(200, 0 , 0";
        task.appendChild(removeBtn);

        removeBtn.addEventListener("click", () => {

        for (let i = 0; i < 50; i++) {
            const value = localStorage.getItem(`todo${i}`);
            
            if(value === removeBtn.parentElement.firstChild.innerText){
                window.localStorage.removeItem(`todo${i}`);
                removeBtn.parentElement.remove();
                location.reload();
            }
        }
        })

        editBtn.addEventListener("click", () => {
            input.value = editBtn.previousElementSibling.innerText;
            input.focus();
            addBtn.innerText = "Update";
            editBtn.innerText = "Cancel";
            window.localStorage.setItem("todos", input.value)
            editBtn.addEventListener("click", () => location.reload());
            addBtn.addEventListener("click", () => location.reload());
        });
    }
    }
}

window.addEventListener("load", showData);