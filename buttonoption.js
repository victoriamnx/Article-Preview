const popup = document.getElementById("popup");

function showOptions(event) {
  popup.style.display = "flex";
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
