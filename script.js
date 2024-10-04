const input = document.getElementById("input_data");
const task_list = document.getElementById("task_list");
const addBtn = document.getElementById("add_btn");
let count = localStorage.getItem("count")
  ? parseInt(localStorage.getItem("count"))
  : -1;
let todos = [];

if (localStorage.length != 0) {
  let rmvAll = document.createElement("button");
  rmvAll.innerText = "Remove All";
  rmvAll.classList.add("task_button");
  rmvAll.style.color = "red";
  rmvAll.style.float = "right";
  rmvAll.style.marginTop = "-1rem";
  task_list.appendChild(rmvAll);
  rmvAll.addEventListener("click", removeAll);
}

function addTask() {
  if (input.value == "") {
    alert("Please enter to do");
  } else {
    count++;
    localStorage.setItem("count", count);
    let counter = localStorage.getItem("count");
    todos[counter] = "todo" + counter;
    if (addBtn.innerText == "Add") {
      window.localStorage.setItem(todos[counter], input.value);
      addData();
    }
  }
}

function addData() {
  let task = document.createElement("li");
  const taskText = document.createElement("p");
  taskText.style.margin = "0";
  taskText.style.width = "70%";
  task.appendChild(taskText);
  taskText.innerHTML = input.value;

  if (taskText.innerHTML != "") {
    task_list.appendChild(task);
    task.appendChild(taskText);
    input.value = "";

    //edit button
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("task_button");
    editBtn.style.color = "white";
    task.appendChild(editBtn);

    //remove button
    let removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    removeBtn.classList.add("task_button");
    removeBtn.style.color = "rgb(200, 0 , 0";
    task.appendChild(removeBtn);

    removeBtn.addEventListener("click", () => {
      for (let i = 0; i < 50; i++) {
        const value = localStorage.getItem(`todo${i}`);

        if (value === removeBtn.parentElement.firstChild.innerText) {
          window.localStorage.removeItem(`todo${i}`);
          removeBtn.parentElement.remove();
          location.reload();
        }
      }
    });

    editBtn.addEventListener("click", () => {
      input.value = editBtn.previousElementSibling.innerText;
      const temp = input.value;
      input.focus();

      for (let i = 0; i < 50; i++) {
        const val = localStorage.getItem(`todo${i}`);
        if (val === temp) {
          var keyIndex = i;
        }
      }

      addBtn.innerText = "Update";
      editBtn.innerText = "Cancel";

      if (addBtn.innerText == "Update") {
        editBtn.addEventListener("click", () => location.reload());
        addBtn.addEventListener("click", () => {
          localStorage.setItem(`todo${keyIndex}`, input.value);
          location.reload();
        });
      }
    });
  }
}

function showData() {
  for (i = 0; i <= 500; i++) {
    let task = document.createElement("li");
    const taskText = document.createElement("p");
    taskText.style.margin = "0";
    taskText.style.width = "70%";
    task.appendChild(taskText);
    taskText.innerHTML = window.localStorage.getItem(`todo${i}`);

    if (taskText.innerHTML != "") {
      task_list.appendChild(task);
      task.appendChild(taskText);
      input.value = "";

      //edit button
      let editBtn = document.createElement("button");
      editBtn.innerText = "Edit";
      editBtn.classList.add("task_button");
      editBtn.style.color = "white";
      task.appendChild(editBtn);

      //remove button
      let removeBtn = document.createElement("button");
      removeBtn.innerText = "Remove";
      removeBtn.classList.add("task_button");
      removeBtn.style.color = "rgb(200, 0 , 0";
      task.appendChild(removeBtn);

      removeBtn.addEventListener("click", () => {
        for (let i = 0; i < 50; i++) {
          const value = localStorage.getItem(`todo${i}`);

          if (value === removeBtn.parentElement.firstChild.innerText) {
            window.localStorage.removeItem(`todo${i}`);
            removeBtn.parentElement.remove();
          }
        }
      });

      editBtn.addEventListener("click", () => {
        input.value = editBtn.previousElementSibling.innerText;
        const temp = input.value;
        input.focus();

        for (let i = 0; i < 500; i++) {
          const val = localStorage.getItem(`todo${i}`);
          if (val === temp) {
            var keyIndex = i;
          }
        }

        addBtn.innerText = "Update";
        editBtn.innerText = "Cancel";

        if (addBtn.innerText == "Update") {
          editBtn.addEventListener("click", () => location.reload());
          addBtn.addEventListener("click", () => {
            localStorage.setItem(`todo${keyIndex}`, input.value);
            location.reload();
          });
        }
      });
    }
  }
}

function removeAll() {
  localStorage.clear();
  location.reload();
}

window.addEventListener("load", showData);
