const form = document.getElementById('form-deposito');
const NomeBeneficiario = document.getElementById('nome-beneficiario');
let FormEValido = false;

function ValidaNome(nomeCompleto) {
    const NomeComoArray = nomeCompleto.split(' ');
    return NomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e){

    e.preventDefault();

    const NumeroContaBeneficiario = document.getElementById('numero-conta');
    const ValorDeposito = document.getElementById('valor-deposito');
    const MensagemSucesso = `Montante de: <b>${ValorDeposito.value}</b> depositado para o cliente: <b>${NomeBeneficiario.value}</b> - conta: <b>${NumeroContaBeneficiario.value}</b>`;
    FormEValido = ValidaNome(NomeBeneficiario.value)
    if (FormEValido) {
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso = MensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        NomeBeneficiario.value = '';
        NumeroContaBeneficiario.value = '';
        ValorDeposito.value = '';
    } else {
        NomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.message-error').style.display = 'block';
    }
}) 

NomeBeneficiario.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    FormEValido = ValidaNome(e.target.value);

    if (!FormEValido) {
        NomeBeneficiario.classList.add('error');
        document.querySelector('.message-error').style.display = 'block';
    } else {
        NomeBeneficiario.classList.remove('error');
        document.querySelector('.message-error').style.display = 'none';
    }
});