const inputFormulario = document.querySelectorAll(".input-form");
const botaoEnviar = document.querySelector(".btn-form");
const campoObrigatorio = document.querySelectorAll(".campo-obrigatorio");

botaoEnviar.addEventListener("click", (event) => {
    event.preventDefault();
    inputFormulario.forEach((item, indice) => {
        if (item.value !== "") {
            item.classList.add("borda-verde");
            campoObrigatorio[indice].classList.remove("ativo");
        } else {
            item.classList.remove("borda-verde");

            item.classList.add("alerta");
            campoObrigatorio[indice].classList.add("ativo");
        }
    });
});
