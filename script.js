function hideAll() {
    document.querySelectorAll(".page").forEach(sec => {
        sec.classList.add("hidden");
    });
}

function goToCategory() {
    hideAll();
    document.getElementById("category-section").classList.remove("hidden");
}

function showAcademic() {
    hideAll();
    document.getElementById("academic-section").classList.remove("hidden");
}

function showLiving() {
    hideAll();
    document.getElementById("living-section").classList.remove("hidden");
}

let academicSubjects = [];
let livingTasks = [];

function addAcademic() {
    let name = document.getElementById("acad-subject").value;
    let hours = document.getElementById("acad-hours").value;

    if(name && hours) {
        academicSubjects.push({name, hours});
        displayAcademic();
    }
}

function displayAcademic() {
    let list = document.getElementById("acad-list");
    list.innerHTML = "";

    academicSubjects.forEach((sub, index) => {
        list.innerHTML += `
            <p>
                <input type="checkbox"> 
                ${sub.name} - ${sub.hours} hrs
                <button onclick="deleteAcademic(${index})">Delete</button>
            </p>
        `;
    });
}

function deleteAcademic(index) {
    academicSubjects.splice(index, 1);
    displayAcademic();
}

function addLiving() {
    let task = document.getElementById("live-task").value;
    let hours = document.getElementById("live-hours").value;

    if(task && hours) {
        livingTasks.push({task, hours});
        displayLiving();
    }
}

function displayLiving() {
    let list = document.getElementById("live-list");
    list.innerHTML = "";

    livingTasks.forEach((task, index) => {
        list.innerHTML += `
            <p>
                ${task.task} - ${task.hours} hrs
                <button onclick="deleteLiving(${index})">Delete</button>
            </p>
        `;
    });
}

function deleteLiving(index) {
    livingTasks.splice(index, 1);
    displayLiving();
}
