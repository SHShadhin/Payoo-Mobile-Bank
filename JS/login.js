// btn-addEventListener
document.getElementById('login-btn').addEventListener('click', function () {
  //step-1 get mobile number input
  const numberInput = document.getElementById('number-input');
  const contactNumber = numberInput.value;
  console.log(contactNumber);
  //step-2 get pin input
  const pinInput = document.getElementById('pin-input');
  const pinNumber = pinInput.value;
  console.log(pinNumber);
  //step-3 match number & pin number
  if (contactNumber == '01234567890' && pinNumber == '1234') {
    //step-3.1 true::>> alert=> homepage
    alert('login seccess');
    // window.location.replace('/home.html')
    window.location.assign('./HTML/home.html');
  } else {
    //step-3.2 false::>> alert=> return
    alert('login failed plz input correct number or pin');
    return;
  }
});
