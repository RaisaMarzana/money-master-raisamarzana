
const incomeAmount = document.getElementById('income-amount');
const foodExpense = document.getElementById('food-amount');
const rentExpense = document.getElementById('rent-amount');
const clothesExpense = document.getElementById('clothes-amount');
const balance = document.getElementById('balance');
const totalExpenses = document.getElementById('total-expenses')
const remainingBalance = document.getElementById('remaining-balance');
const totalSaving = document.getElementById('total-saving');
const savingPercentage = document.getElementById('saving-amount');

function totalBalance() {
    let totalSpent = parseFloat(foodExpense.value) + parseFloat(rentExpense.value) + parseFloat(clothesExpense.value);
    totalExpenses.innerText = totalSpent;
    balance.innerText = parseFloat(incomeAmount.value) - parseFloat(totalSpent);

}
function totalSaved() {
    totalBalance();
    totalSaving.innerText = (parseFloat(incomeAmount.value / 100)) * parseFloat(savingPercentage.value);
    remainingBalance.innerText = parseFloat(balance.innerText) - parseFloat(totalSaving.innerText);

}

document.getElementById('calculate-btn').addEventListener('click', function () {
    totalBalance();
})

document.getElementById('save-button').addEventListener('click', function () {
    totalSaved();
})