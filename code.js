document.addEventListener("DOMContentLoaded", () => {
    const texto = document.body.querySelector("#texto");

    texto.addEventListener("click", () => {
        if (texto.textContent === "ola mundo")
            texto.textContent = "hello world";
        else
            texto.textContent = "ola mundo";
    });
}); 