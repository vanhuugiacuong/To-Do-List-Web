const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert('Hãy nhập một hoạt động!');
    }
    else {
        let li = document.createElement('li');
        let currentTime = new Date();
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00D7";
        li.appendChild(span);
        saveData();
    }
    inputBox.value = '';

}

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }

}, false);

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTasks() {
    listContainer.innerHTML = localStorage.getItem('data');
}

showTasks();