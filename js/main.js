'use strict';

let startBtn = document.getElementById("start"),
  budgetValue = document.getElementsByClassName('budget-value')[0],
  dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
  levelValue = document.getElementsByClassName('level-value')[0],
  expensesValue = document.getElementsByClassName('expenses-value')[0],
  optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
  incomeValue = document.getElementsByClassName('income-value')[0],
  monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
  yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
  dayBudgetExpenssesValue = document.getElementsByClassName('daybudgetexpensses-value')[0],

  expensesItem = document.getElementsByClassName('expenses-item'),
  expensesBtn = document.getElementsByTagName('button')[0],
  optionalExpensesBtn = document.getElementsByTagName('button')[1],
  countBtn = document.getElementsByTagName('button')[2],
  countBtnExpenses = document.getElementsByTagName('button')[3],
  optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
  incomeItem = document.querySelector('.choose-income'),
  checkSavings = document.querySelector('#savings'),
  sumValue = document.querySelector('.choose-sum'),
  percentValue = document.querySelector('.choose-percent'),
  yearValue = document.querySelector('.year-value'),
  monthValue = document.querySelector('.month-value'),
  dayValue = document.querySelector('.day-value');

let time, money;

startBtn.addEventListener('click', function() {
  time = prompt("Введите дату в формате YYYY-MM-DD", "");
  money = +prompt("Ваш бюджет на месяц?", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();

  startBtn.style.position = 'absolute';
  startBtn.style.right = '57%';
  startBtn.style.top = '112%';
  document.querySelector(".data").style.display = 'block';
  document.querySelector(".result").style.display = 'block';


});

expensesBtn.addEventListener('click', function() {
  let sum = 0;
  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value,
      b = expensesItem[++i].value;

    if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

      console.log("done");

      appData.expenses[a] = b;
    } else {
      console.log("bad result");
      i--;
    }
    sum += +b;
    expensesValue.textContent = sum;
    appData.expensesSum = sum;
  }
});

optionalExpensesBtn.addEventListener('click', function() {
  let opt = 0;
  let sum = 0;
  for (let i = 0; i < optionalExpensesItem.length; i++) {
    let opt = +optionalExpensesItem[i].value;
    sum += opt;
    appData.optionalExpensesSum = sum;
    appData.optionalExpenses[i] = opt;
    optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    console.log(sum);
  }

});

countBtn.addEventListener('click', function() {
  if (budgetValue != undefined) {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;
    if (appData.moneyPerDay < 100) {
      levelValue.textContent = "Это минимальный уровень достатка!";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = "Это средний уровень достатка!";
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = "Это высокий уровень достатка!";
    } else {
      levelValue.textContent = "Ошибка";
    }
  } else {
    dayBudgetValue.textContent = "Ошибка, введите бюджет";
  }
});

incomeItem.addEventListener('input', function() {
  let items = incomeItem.value;
  appData.income = items.split(", ");
  incomeValue.textContent = appData.income;
});
checkSavings.addEventListener('click', function() {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

sumValue.addEventListener('input', function() {
  if (appData.savings == true) {
    let sum = sumValue.value,
      percent = percentValue.value;
    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 / percent;
    monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(2);
  }
});

percentValue.addEventListener('input', function() {
  if (appData.savings == true) {
    let sum = sumValue.value,
      percent = percentValue.value;
    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 / percent;
    monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(2);
  }
});

countBtnExpenses.addEventListener('click', function() {
let exp = appData.optionalExpensesSum + appData.expensesSum,
sum = (appData.budget - exp)/30;
dayBudgetExpenssesValue.textContent = sum.toFixed(1);
});


let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
  chooseExpenses: function() {

  },
  detectDayBudget: function() {},
  detectLevel: function() {},
  checkSavings: function() {},
  chooseOptExpenses: function() {
    for (let i = 1; i <= 3; i++) {
      let questionOptExpenses = prompt("Статья необязательных расходов?");
      appData.optionalExpenses[i] = questionOptExpenses;
      console.log(appData.optionalExpenses);
    }
  },
  chooseIncome: function() {

  },
};
for (let key in appData) {
  console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}
