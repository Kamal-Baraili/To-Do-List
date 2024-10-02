const input = document.getElementById('input_data');
const task_list = document.getElementById('task_list');
let count = 0;

function addTask() {
    if (input.value == '') {
        alert("Please enter to do");
    } else {
        window.localStorage.setItem("todos", input.value);
        addData();
    }
}

function addData() { 
    let task = document.createElement('li');
    task.innerHTML = window.localStorage.getItem("todos");
    if (task.innerHTML != '') {
        task_list.appendChild(task);
        let removeBtn = document.createElement('button');
        removeBtn.innerText = "Remove";
        removeBtn.classList.add("task_button");
        removeBtn.style.color = "rgb(200,0 , 0";
        task.appendChild(removeBtn);

        removeBtn.addEventListener("click", () => {
            window.localStorage.removeItem("todos");
            removeBtn.parentElement.remove();
        })
    }
}

window.addEventListener("load", addData)