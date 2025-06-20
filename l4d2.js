document.addEventListener('DOMContentLoaded' , () => {
    const login = document.getElementById("login");
    const close = document.getElementById("close");
    const container = document.getElementById("container");

    login.addEventListener('click' , (e) => {
        e.preventDefault();
        container.style.display = 'flex';
    })
    close.addEventListener('click' , (e) => {
        e.preventDefault();
        container.style.display = 'none';
    })
})