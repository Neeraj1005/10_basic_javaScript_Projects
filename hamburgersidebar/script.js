const btn = document.getElementById("btn");
const nav = document.getElementById("nav");

const val = localStorage.getItem('btnState');

if (val == 'active') {
    nav.classList.add('active');
    btn.classList.toggle("active");
} else {
    nav.classList.remove('active');
}

btn.addEventListener("click", () => {
    nav.classList.toggle("active");
    btn.classList.toggle("active");


    getState = localStorage.getItem('btnState');
    updateState = '';

    if (getState == 'active') {
        updateState = 'false';
    } else {
        updateState = 'active';
    }
    
    localStorage.setItem("btnState", updateState);
});