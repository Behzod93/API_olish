let div = document.getElementById("cards")
try{
fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => getDatas(data.products))
}

catch(xato){
    alert(xato)
}


function getDatas(maxsulot){
    
    maxsulot.map(items => {
        console.log(items);
        const child = document.createElement("div")

        child.innerHTML =` <div class="card">
        <img src="${items.images[0]}" alt="">
        <h3>${items.title}</h3>
        <strong>${items.price}</strong>
        <p>${items.rating}</p>
        <b>${items.description}</b><br>
        <small>${items.warrantyInformation}</small>
    </div> `
    div.appendChild(child)
    });
   
};