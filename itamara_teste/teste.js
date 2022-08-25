function dadosForm(){
    let nome = document.getElementById("nome").value;
    console.log(nome);
    let idade = document.getElementById("idade").value;
    let data_nascimento = document.getElementById("dn").value;            
    let telefone = document.getElementById("tel").value; 
    let email = document.getElementById("email").value;

    alert("obrigado por se cadastra " + nome + " mandaresmo um email para o endereco " + email)
}