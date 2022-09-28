let parent = document.querySelector(".parent");
let inp = document.querySelector("#inp");
let btn = document.querySelector("#btn");
let ul = document.querySelector("#ul");
let divdel = document.querySelector(".del");

btn.addEventListener("click", function (e) {
  if (inp.value !== "") {
    let li = document.createElement("li");
    let span = document.createElement("span");
    li.innerHTML = inp.value;
    span.innerHTML = "Delete";
    ul.appendChild(li);
    ul.appendChild(span);
    inp.value = "";
    span.addEventListener("click", function () {
      span.previousElementSibling.remove();
      span.remove();
    });
  }
  e.preventDefault();
});
