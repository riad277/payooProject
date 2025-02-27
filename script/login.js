document.getElementById('login-btn').addEventListener('click',function(event){
event.preventDefault();
const accountNumber= document.getElementById('account-number').value;

const pin= document.getElementById('pin').value;

if(accountNumber.length===11){
    console.log('yes')
}
else{
    console.log('need valid account number')
}

})