const form = document.getElementById('form-deposito');

function ValidaNome(nomeCompleto) {
    const NomeComoArray = nomeCompleto.split(' ');
    return NomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e){
    let FormEValido = false;
    e.preventDefault();

    const NomeBeneficiario = document.getElementById('nome-beneficiario');
    const NumeroContaBeneficiario = document.getElementById('numero-conta');
    const ValorDeposito = document.getElementById('valor-deposito');
    const MensagemSucesso = `Montante de: ${ValorDeposito.value} depositado para o cliente: ${NomeBeneficiario.value} - conta: ${NumeroContaBeneficiario.value}`;
    FormEValido = ValidaNome(NomeBeneficiario.value)
    if (FormEValido) {
        alert(MensagemSucesso);
        NomeBeneficiario.value = '';
        NumeroContaBeneficiario.value = '';
        ValorDeposito.value = '';
    } else {
        alert('O nome não está completo');
    }
}) 

console.log(form);