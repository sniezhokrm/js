let money = +prompt("Ваш бюджет на месяц?", ''),
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: false
};


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
let i = 0;
do {
  var a = prompt("Введите обязательную статью расходов в этом месяце", ''),
    b = +prompt("Во сколько обойдется?", '');
  appData.expenses[a] = b;

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


appData.moneyPerDay = appData.budget / 30;
alert('Бюджет на день: ' + appData.moneyPerDay);

if (appData.budget < 2000) {
  console.log('Small budget');
} else if (appData.budget > 2000 && appData.budget < 12000) {
  console.log('Midle budget');
} else {
  console.log('High budget');
}
