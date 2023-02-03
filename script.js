document.getElementById("button").addEventListener("click", submitForm )

function submitForm(e){
    e.preventDefault();
    let items=  document.getElementById("items")
   
    let li = document.createElement("li");
    li.setAttribute("class", "list-group-item");

    let span = document.createElement("span");
    span.innerHTML = document.getElementById("item-text").value;

    let button = document.createElement("button");
    button.innerHTML="x";
    button.setAttribute("class","delete");

    items.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);

    document.getElementById("item-text").value = ""
}

let listWrapper = document.getElementById('items')

listWrapper.addEventListener("click", deleteItem) ;

function deleteItem(e) {
    
        if(e.target.nodeName === 'BUTTON') {
            // console.log(e.target)
            e.target.parentNode.remove()
        }
}

