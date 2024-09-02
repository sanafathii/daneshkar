//

let inputValue = document.getElementById("input");
let addBtn = document.getElementById("addBtn");
let itemsContainer = document.getElementById("items");

addBtn.addEventListener("click", addItemHandler);

function addItemHandler() {
    let value = inputValue.value;
    inputValue.value = "";
    if (value.trim() === "") return;
    let item = document.createElement("div");
    item.classList.add("item");

    let p = document.createElement("p");
    p.innerText = value;

    let span = document.createElement("span");
    span.classList.add("delete");

    let icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-trash");

    span.appendChild(icon);
    item.appendChild(p);
    item.appendChild(span);

    span.addEventListener("click", deleteHandler);
    itemsContainer.appendChild(item);
}

function deleteHandler(event) {
    let itemToRemove;

    if (event.target.tagName === "I") {
        itemToRemove = event.target.parentElement.parentElement;
    } else if (event.target.tagName === "SPAN") {
        itemToRemove = event.target.parentElement;
    }

    if (itemToRemove) {
        itemToRemove.remove();
    }
}

function updateTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    document.querySelector(".hours").textContent = `${hours} :`;
    document.querySelector(".min").textContent = `${minutes} :`;
    document.querySelector(".sec").textContent = seconds;
    setTimeout(updateTime, 1000);
}

updateTime();