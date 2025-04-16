const form = document.getElementById('tipForm');
const billTotal = document.getElementById('billTotal');
const tipRange = document.getElementById('tipRange');
const tipPercentage = document.getElementById('tipPercentage');
const tipAmount = document.getElementById('tipAmount');
const totalWithTip = document.getElementById('totalWithTip');
const billWithTax = document.getElementById('billWithTax');
const error = document.getElementById('error');

function updateValues() {
  let bill = parseFloat(billTotal.value);
  let tipPercent = parseInt(tipRange.value);

  // Validating the input
  if (isNaN(bill) || bill < 0) {
    error.textContent = "Please enter a valid, positive number for Bill Total.";
    tipAmount.value = '';
    totalWithTip.value = '';
    billWithTax.value = '';
    tipPercentage.value = '';
    return;
  }

  error.textContent = "";

  tipPercentage.value = `${tipPercent}%`;
  let calculatedTip = bill * (tipPercent / 100);
  let total = bill + calculatedTip;
  let tax = bill > 0 ? bill * 0.11 : 0;

  tipAmount.value = `$${calculatedTip.toFixed(2)}`;
  totalWithTip.value = `$${total.toFixed(2)}`;
  billWithTax.value = `$${(bill + tax).toFixed(2)}`;
}

form.addEventListener('input', updateValues);
form.addEventListener('change', updateValues);
