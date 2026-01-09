const API_URL = "http://localhost:8000";

// AUTH
async function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Placeholder – backend will handle this
    localStorage.setItem("token", "dummy-token");
    window.location.href = "dashboard.html";
}

async function register() {
    window.location.href = "login.html";
}

function logout() {
    localStorage.removeItem("token");
    window.location.href = "login.html";
}

// TASKS (Mocked for now)
function addTask() {
    const input = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (input.value === "") return;

    const li = document.createElement("li");
    li.textContent = input.value;
    taskList.appendChild(li);

    input.value = "";
}