document.getElementById('cash-out-btn').addEventListener('click', function () {
  //get cash out number input & validation
  const cashoutNumberInput = document.getElementById('cashout-number');
  const cashOutNumber = cashoutNumberInput.value;
  if (cashOutNumber.length !== 11 || typeof cashOutNumber !== 'number') {
    alert('Invalid Number');
    return;
  }
  // console.log(cashOutNumber);
  //step-2 get cash out amount input
  const cashoutAmountInput = document.getElementById('cashout-amount');
  const cashOutAmount = cashoutAmountInput.value;
  if (cashOutAmount <= 0) {
    alert('Enter valid amount')
    return;
  }
  // console.log(cashOutAmount);

  //step-3 get the current balance 
  let balanceElement = document.getElementById('balance')
  let balance = balanceElement.innerText;
  
  // console.log(balance);

  //step-4 calculate new balance
  const newBalance = Number(balance) - Number(cashOutAmount);
  
  if (newBalance <= 0) {
    alert('Invalid amount');
    return;
  } 

  //step-5 get the pin and validate
  const pinNumber = document.getElementById('pin-input');
  const pin = pinNumber.value;
  if (Number(pin) === 1234) {
    alert('Cashout Successful')
    console.log(newBalance);
    balanceElement.innerText = newBalance;
  } else {
    alert('Invalid Pin')
    return;
  }
});
