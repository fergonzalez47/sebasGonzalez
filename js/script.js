
document.addEventListener("DOMContentLoaded", function () {

    let table = document.getElementById("show-user-inf");
    let btn = document.getElementById("button-search-person");
    let error = document.getElementById("ci-error");
    let input = document.getElementById("search-person");




    btn.addEventListener("click", (e) => {
        if (input.value == "") {
            error.textContent = "";
            error.textContent = "Debe ingresar el numero de Cedula";
        }

        else if (input.value.length < 6) {
            error.textContent = "";
            error.textContent = "Ingrese un numero de cedula correcto";
        
        } else {
            error.textContent = "";
            table.style.display = "block";
        }
        
    })




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