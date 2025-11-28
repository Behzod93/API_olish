let url = location.search;
let cardId = new URLSearchParams(url).get("card-id");

let img = document.querySelector(".img");
let tit = document.querySelector(".tit");
let text = document.querySelector(".text");
let title = document.querySelector("#title");
let update = document.querySelector(".update");
let modal = document.querySelector(".singleModal");

update.addEventListener("click", () => {
    modal.classList.add("active");
});

try {
    fetch(`https://dummyjson.com/products/${cardId}`)
        .then(res => res.json())
        .then(data => getData(data));
} catch (xato) {
    alert(xato);
}

function getData(data) {
    img.src = data.images[0];
    title.innerHTML = data.title;
    text.innerHTML = data.description;
};
