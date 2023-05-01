const popup = document.createElement("div");
popup.setAttribute("id", "popup");
popup.style.display = "none";
popup.style.padding = "10px";
popup.style.fontSize = "16px";
popup.style.borderRadius = "5px";
popup.style.position = "absolute";
popup.style.color = "hsl(212, 23%, 69%)";
popup.style.background = "hsl(217, 19%, 35%)";
popup.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.3)";
document.body.appendChild(popup);

function showOptions(event) {
  popup.innerHTML =
    "<button onclick='option1()'>Opção 1</button><button onclick='option2()'>Opção 2</button><button onclick='option3()'>Opção 3</button>";
  popup.style.top = event.clientY + "px";
  popup.style.left = event.clientX + "px";
  popup.style.display = "block";
}

function option1() {
  console.log("Opção 1 selecionada");
}

function option2() {
  console.log("Opção 2 selecionada");
}

function option3() {
  console.log("Opção 3 selecionada");
}

popup.addEventListener("mouseleave", function () {
  popup.style.display = "none";
});
