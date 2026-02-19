// machine id  get input value;
function getInputFromValue(id) {
  const input = document.getElementById(id);
  const value = input.value;
  // console.log(id, value);
  return value;
}

// machine get balance
function getBalance() {
  const balanceElement = document.getElementById('balance');
  const balance = balanceElement.innerText;
  console.log('Current Balance :', Number(balance))
  return Number(balance)
}

// machine set balance 
function setBalance(value) {
  const balanceElement = document.getElementById('balance');
  balanceElement.innerText = value;
}


// show only id 
function showOnly(id) {
  const addMoney = document.getElementById('add-money');
  const cashOut = document.getElementById('cash-out');
  // console.log(`Add money div - ${addMoney}, Cashout div - ${cashOut} `)
  // hide all 
  addMoney.classList.add('hidden')
  cashOut.classList.add('hidden');

  const show = document.getElementById(id)
  show.classList.remove('hidden');
}