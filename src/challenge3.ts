const updateButton = document.getElementById('update-balance')
const clearButton = document.getElementById('clear-balance')
const sum = document.getElementById('sum') as HTMLInputElement
const balanceField = document.getElementById('balance-field')

let totalBalance = 0

clearBalance()

function addToBalance(sum:number) {
  if (balanceField) {
    totalBalance += sum
    balanceField.innerHTML = totalBalance.toString()
    clearSumField()
  }
}

function clearSumField() {
  sum.value = ''
}

function clearBalance() {
  if (balanceField) {
    totalBalance = 0
    balanceField.innerHTML = totalBalance.toString()
  }
}

updateButton?.addEventListener('click', () => {
  addToBalance(Number(sum.value))
})

clearButton?.addEventListener('click', () => {
  clearBalance()
})
