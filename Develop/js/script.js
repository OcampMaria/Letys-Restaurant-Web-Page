var saveButton = document.querySelector(".button");

saveButton.addEventListener("click", function() {
    var inputEmail = document.querySelector(".input");
    localStorage.setItem(".input", inputEmail.value);   
}
)
