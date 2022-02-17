
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
    if (isNaN(incomeAmount.value) || isNaN(foodExpense.value) || isNaN(rentExpense.value) || isNaN(clothesExpense.value)) {
        alert('Error!!! Please Enter Number');
    }
    else {
        if (incomeAmount.value < 0 || foodExpense.value < 0 || rentExpense.value < 0 || clothesExpense.value < 0) {
            alert('Error!!! Please Enter Positive Number');
        }

        let totalSpent = parseFloat(foodExpense.value) + parseFloat(rentExpense.value) + parseFloat(clothesExpense.value);
        if (totalSpent > incomeAmount.value) {
            alert("Error!!! You can't spent more than your income");
           
        }
        else {
            totalExpenses.innerText = totalSpent;
            balance.innerText = parseFloat(incomeAmount.value) - parseFloat(totalSpent);
        }

    }

}
function totalSaved() {
    totalBalance();
    if (isNaN(savingPercentage.value)) {
        alert('Error!!! Please Enter Number')
    }
    else {
        if (savingPercentage.value < 0) {
            alert('Error!!! Please Enter Positive Number');
        }
        else {
            let totalSaved = (parseFloat(incomeAmount.value / 100)) * parseFloat(savingPercentage.value);
            if (totalSaved > balance.innerText) {
                alert('Error!!! You can not save more than your balance');
                
            }
            else {
                totalSaving.innerText = (parseFloat(incomeAmount.value / 100)) * parseFloat(savingPercentage.value);
                remainingBalance.innerText = parseFloat(balance.innerText) - parseFloat(totalSaving.innerText);
            }
        }
    }
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    totalBalance();
})

document.getElementById('save-button').addEventListener('click', function () {
    totalSaved();
})