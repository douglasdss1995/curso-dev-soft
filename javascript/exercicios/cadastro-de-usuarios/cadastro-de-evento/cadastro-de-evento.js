const form = document.getElementById("form");
const tableBody = document.getElementById("tableBody");

// Função para adicionar uma nova linha na tabela
function addUser(titulo, data, local) {
  const tableRow = document.createElement("tr");
  tableRow.innerHTML = `<td>${titulo}</td> <td>${data}</td> <td>${local}</td>`;
  tableBody.appendChild(tableRow);
}

/**
 * Função para validar o formulário
 * @param {Event} event - O evento de submit do formulário
 */
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Previne o envio do formulário
  event.stopPropagation(); // Para evitar que o evento de submit se propague e atualize a página

  // Valida o formulário
  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    return;
  }

  // Captura os valores dos inputs
  // Utiliza o método trim() para remover espaços em branco
  const name = form.inputTitulo.value.trim();
  const email = form.inputData.value.trim();
  const phone = form.inputLocal.value.trim();
  // Adiciona à tabela
  addUser(titulo, data, local);
  // Limpa o formulário e feedback visual
  form.reset();
  form.classList.remove("was-validated");
});