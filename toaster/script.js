const btn = document.getElementById("btn");
const container = document.getElementById("container");


btn.addEventListener("click", () => {
    getNotification();
});


function getNotification() { 
    const notify = document.createElement("div");
    
    notify.classList.add("toast"); // For add class in anonymous div

    notify.innerHTML= "This is crazy!"; // add innerText or something under div

    container.appendChild(notify);

    setTimeout(() => {
        notify.remove();
    }, 3000);
 }