document.getElementById('login-btn').addEventListener('click',function(event){
event.preventDefault();
const accountNumber= document.getElementById('account-number').value;

const pin= document.getElementById('pin').value;
const validPin =parseInt(pin);

if(accountNumber.length===11){
if(validPin === 1234){
    
    window.location.href="./main.html"
}
else{
   alert('Write the password correctly')
}
}
else{
    console.log('need valid account number')
}

})