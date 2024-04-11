
document.addEventListener("DOMContentLoaded", function () {

    let table = document.getElementById("show-user-inf");
    let btn = document.getElementById("button-search-person");


    btn.addEventListener("click", (e) => {
        table.style.display = "block";
    })


    const input = document.getElementById("search-person");

    input.addEventListener("input", function () {
        let value = this.value.replace(/\D/g, ''); // Remueve todos los caracteres no numéricos
        if (value.length > 9) {
            value = value.slice(0, 9); // Limita la longitud a 9 caracteres
        }

        // Formatea la cédula según el patrón: xx.xxx.xxx
        value = value.replace(/^(\d{2})(\d{3})(\d{3})$/, "$1.$2.$3");

        this.value = value;
    });
});