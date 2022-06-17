"use strict";
const updateButton = document.getElementById('update-balance');
const clearButton = document.getElementById('clear-balance');
const sum = document.getElementById('sum');
const balanceField = document.getElementById('balance-field');
let totalBalance = 0;
clearBalance();
function addToBalance(sum) {
    if (balanceField) {
        totalBalance += sum;
        balanceField.innerHTML = totalBalance.toString();
        clearSumField();
    }
}
function clearSumField() {
    sum.value = '';
}
function clearBalance() {
    if (balanceField) {
        totalBalance = 0;
        balanceField.innerHTML = totalBalance.toString();
    }
}
updateButton === null || updateButton === void 0 ? void 0 : updateButton.addEventListener('click', () => {
    addToBalance(Number(sum.value));
});
clearButton === null || clearButton === void 0 ? void 0 : clearButton.addEventListener('click', () => {
    clearBalance();
});
