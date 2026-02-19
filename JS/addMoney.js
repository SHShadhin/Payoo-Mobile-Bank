document.getElementById('add-money-btn').addEventListener('click', function () {
  // step-1 get select bank 
  const bankAccount = getInputFromValue('add-money-bank');
  if (bankAccount === 'Select a bank') {
    alert('Please select a bank account')
    return;
  }

  // step-2 get bank account number
  const accountNumber = getInputFromValue('bank-account-number');
  if (accountNumber.length !== 11 || isNaN(accountNumber)) {
    alert('Enter valid bank account number')
    return;
  }
  
  // step-3 get add balance
  const amount = getInputFromValue('add-amount');

  const newBalance = getBalance() + Number(amount)
  // if (newBalance <= 0) {
  //   alert('Enter valid amount')
  //   return;
  // }
  const pin = getInputFromValue('add-money-pin');
  if (pin === '1234') {
    alert(`Add money succesfull ${bankAccount} 
    at ${new Date()}`)
    setBalance(newBalance)
    console.log('New Balance :',newBalance)
  } else {
    alert('Invalid pin')
    return;
  }
});