document.getElementById('add-money').addEventListener('click',function(event)
{
    event.preventDefault();
    const amount=document.getElementById('amount').value;
    const convertedAmount=parseFloat(amount);
    const pin =document.getElementById('pin').value;
    const convertedPin = parseInt(pin);

    const mainBalance=document.getElementById('balance').innerText;
    const convertedmainBalance = parseFloat(mainBalance);
    if(convertedPin===1234){
      const sum=convertedAmount+convertedmainBalance;
      document.getElementById('balance').innerText=sum;
    }else{
        console.log('pin wrong');
    }

})