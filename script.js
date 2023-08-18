var input = document.querySelector("#input");
var listContainer = document.querySelector("#listContainer");

function Addtask() {
  if (input.value === "") {
    alert("please write something");
  } else {
    var li = document.createElement("li");
    li.innerHTML = input.value;
    listContainer.appendChild(li);
    let img = document.createElement("img");
    img.src = "wrong1.png";
    li.appendChild(img);
    // img.innerHTML = "\u00d7"
  }
  input.value = "";
  save()
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        save()
    }
    else if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        save()
  }
},false);

function save(){
    localStorage.setItem("data",listContainer.innerHTML)
}
function showdata(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showdata()