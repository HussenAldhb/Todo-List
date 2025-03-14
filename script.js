function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");
    li.innerHTML = taskText + ' <span class="delete-btn" onclick="this.parentElement.remove()">Delete</span>';
    taskList.appendChild(li);

    taskInput.value = ""; // تفريغ الحقل بعد الإضافة
}