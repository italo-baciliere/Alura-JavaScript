/*-------------------
|   Calculo do IMC
---------------------
*/

function CalculoImc(peso, altura) {

    var imc = (peso / (altura * 2)).toFixed(2); // toFixed(2) -> Reduz as casas decimais de um valor
    return imc;
}

var pacientes = document.querySelectorAll(".paciente"); // Select a list of elements with same css class

for (var i = 0; i < pacientes.length; i++) {

    var peso = pacientes[i].querySelector(".info-peso").textContent;
    var altura = pacientes[i].querySelector(".info-altura").textContent;

    var imc = CalculoImc(peso, altura);

    pacientes[i].querySelector(".info-imc").textContent = imc;

    pacientes[i].querySelector(".info-imc").classList.add("paciente-imc"); // Insert or increment a css class on the element
}


/*--------------------------
|   Validação da altura e do peso
|---------------------------
*/
function ValidateWeight(paciente){
    if(paciente.peso < 200 && paciente.peso > 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function ValidateHeight(paciente){
    if(paciente.altura < 3 && paciente.altura > 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}