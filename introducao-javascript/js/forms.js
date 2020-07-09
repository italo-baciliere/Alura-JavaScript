/*-----------------------
|   Evento adicionar paciente no botão do form
|------------------------
*/
var adicionar_paciente = document.querySelector("#btn_adicionar_paciente");

adicionar_paciente.addEventListener("click", function(event) { //Função no evento click do botão

    event.preventDefault(); // Prevenir os comportamentos padrões do browser

    var form = document.querySelector("#form_meus_pacientes"); // Get Form Object

    var paciente = getPatientForm(form); // get Form Input Values
    
    if(ValidateHeight(paciente) && ValidateWeight(paciente)) // Validar os dados do paciente
    {
        var tbody = document.querySelector("#tabela-pacientes"); // Criando a linha (tr)
        tbody.appendChild(TrConstruct(paciente));
    
        form.reset(); // Resetar os campos do form
    }
    else
    {
        alert("Dados inseridos são inválidos. Por favor insira valores válidos");
    }
});



/*--------------------------
|   Pegar o dados do paciente do formulário
|---------------------------
*/
function getPatientForm(form) {

    var paciente = {
        nome: form.paciente_nome.value,
        peso: form.paciente_peso.value,
        altura: form.paciente_altura.value,
        gordura: form.paciente_gordura.value,
        imc: CalculoImc(form.paciente_peso.value, form.paciente_altura.value) // Calc IMC
    }

    return paciente;
}



/*--------------------------
|   construir os dados da linha
|---------------------------
*/
function TrConstruct(paciente) {

    // Criando o elemento pai
    var tabelaTr = document.createElement("tr");
    tabelaTr.classList.add("paciente");

    // Adicionando elemento HTML como filho de outro elemento
    // Nesse caso estamos adicionando as td dentro de uma tr
    tabelaTr.appendChild(CreatTdWithCssClass(paciente.nome, "info-nome"));
    tabelaTr.appendChild(CreatTdWithCssClass(paciente.peso, "info-peso"));
    tabelaTr.appendChild(CreatTdWithCssClass(paciente.altura, "info-altura"));
    tabelaTr.appendChild(CreatTdWithCssClass(paciente.gordura, "info-gordura"));
    tabelaTr.appendChild(CreatTdWithCssClass(paciente.imc, "info-imc"));

    return tabelaTr;
}



/*--------------------------
|   Criando dos dados da linha/tabela
|---------------------------
|
|   Criação dos elemento HTML <td>
|   Setando o valor pelo objeto paciente{}
|   Adicionando a classe passada por parâmetro
|
*/
function CreatTdWithCssClass(value, cssClass) {

    var td = document.createElement("td");

    td.classList.add(cssClass);

    if (cssClass == "info-imc") {
        td.classList.add("paciente-imc");
    }

    td.textContent = value;

    return td;
}