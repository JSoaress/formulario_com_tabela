function addLinha(){
    let nome = document.getElementById('field-nome').value
    let cpf = document.getElementById('field-cpf').value
    let data_nascimento = document.getElementById('field-nascimento').value
    let email = document.getElementById('field-email').value
    let cidade = document.getElementById('field-cidade').value

    let tabela = document.getElementById('tabela')
    
    let nova_linha = `<tr>
                        <td>${nome}</td>
                        <td>${cpf}</td>
                        <td>${data_nascimento}</td>
                        <td>${email}</td>
                        <td>${cidade}</td>
                    </tr>`

    tabela.innerHTML += nova_linha
}