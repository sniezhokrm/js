let money, time;

function enterBudget() {
  money = +prompt("Ваш бюджет на месяц?", '');
  time = prompt('Введите дату в формате YYYY-MM-DD', '');
  while (isNaN(money) || money == '' || money == null) {
    money = +prompt("Ваш бюджет на месяц?", '');
  }

}
enterBudget();

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: true
};


function detectDayBudget() {

  appData.moneyPerDay = (appData.budget / 30).toFixed();
  alert('Бюджет на день: ' + appData.moneyPerDay);
}
detectDayBudget();



/*for (let i = 0; i < 2; i++) {
  var a = prompt("Введите обязательную статью расходов в этом месяце", ''),
    b = +prompt("Во сколько обойдется?", '');
  appData.expenses[a] = b;
}
if ((typeof(a)) === 'string' && (typeof(a)) != null &&
  (typeof(b)) != null && a != '' && b != '') {
  appData.expenses[a] = b;
} else {
  console.log('Bed result');
  i--;
}*/
/*let i = 0;
while (i < 2) {
  var a = prompt("Введите обязательную статью расходов в этом месяце", ''),
    b = +prompt("Во сколько обойдется?", '');
    if ((typeof(a)) === 'string' && (typeof(a)) != null &&
      (typeof(b)) != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
        console.log('done');
      appData.expenses[a] = b;
    } else {
      console.log('Bed result');
      i--;
    }
    i++;
}*/
function enterCosts() {
  let i = 0;
  do {
    var a = prompt("Введите обязательную статью расходов в этом месяце", ''),
      b = +prompt("Во сколько обойдется?", '');
    //    appData.expenses[a] = b;

    if ((typeof(a)) === 'string' && (typeof(a)) != null &&
      (typeof(b)) != null && a != '' && b != '') {
      appData.expenses[a] = b;
    } else {
      console.log('Bed result');
      i--;
    }
    i++;
  }
  while (i < 2);
}
enterCosts();


function detectLevel() {
  if (appData.budget < 2000) {
    console.log('Small budget');
  } else if (appData.budget > 2000 && appData.budget < 12000) {
    console.log('Midle budget');
  } else {
    console.log('High budget');
  }
}
detectLevel();

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt("Какая сумма депозита?", ''),
      percent = +prompt("Какая ставка депозита?", '');
    appData.MarginDepozitPerMonth = (save / 12 / 100 * percent).toFixed(2);
    alert('Процент депозита за месяц: ' + appData.MarginDepozitPerMonth);
    console.log(appData);
  }
}
checkSavings();

function hooseOptExpenses() {
  let i = 0;
  do {
    var a = prompt('Статья необязательных расходов?'),
      b = +prompt("Во сколько обойдется?", '');
    if ((typeof(a)) === 'string' && (typeof(a)) != null &&
      (typeof(b)) != null && a != '' && b != '' && typeof(b) !== NaN) {
        appData.expenses[a] = b;
      }
    else {
      i--;
    }
    i++;
  } while (i < 3);
}
hooseOptExpenses();
