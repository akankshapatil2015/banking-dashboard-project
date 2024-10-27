// Initial balance
let balance = 1000;

// Selecting elements from DOM
const balanceEl = document.getElementById("balance");
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");
const depositAmountEl = document.getElementById("depositAmount");
const withdrawAmountEl = document.getElementById("withdrawAmount");

// Update balance display
function updateBalanceDisplay() {
  balanceEl.innerText = `$${balance}`;
}

// Handle deposit action
depositBtn.addEventListener("click", () => {
  const depositAmount = parseFloat(depositAmountEl.value);

  if (depositAmount > 0) {
    balance += depositAmount;
    updateBalanceDisplay();
    depositAmountEl.value = ""; // Clear input field
  } else {
    alert("Please enter a valid deposit amount.");
  }
});

// Handle withdraw action
withdrawBtn.addEventListener("click", () => {
  const withdrawAmount = parseFloat(withdrawAmountEl.value);

  if (withdrawAmount > 0) {
    if (withdrawAmount <= balance) {
      balance -= withdrawAmount;
      updateBalanceDisplay();
      withdrawAmountEl.value = ""; // Clear input field
    } else {
      alert("Insufficient funds for this withdrawal.");
    }
  } else {
    alert("Please enter a valid withdrawal amount.");
  }
});
