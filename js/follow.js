document.querySelector('#followBtn').onclick = (e) =>{
    e.preventDefault();

    document.querySelector('.modal-heart').style.display = "flex";
};
document.querySelector('.modal-heart').addEventListener('click', (e) => {
    if (e.target.classList[0] === "modal-heart") {
        document.querySelector('.modal-heart').style.display = "none";
    }
});

document.querySelector('#followBtn1').onclick = (e) =>{
    e.preventDefault();
    document.querySelector('.modal-follow').style.display = "flex";
};
function closeFollow() {
    document.querySelector('.modal-follow').style.display = "none";
}

document.querySelector('.modal-follow').addEventListener('click', (e) => {
    if (e.target.classList[0] === "modal-follow") {
        document.querySelector('.modal-follow').style.display = "none";
    }
});