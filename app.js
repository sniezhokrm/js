let num = 15;
switch (num) {
  case num < 15:
    console.log('To match');
    break;
  case num > 15:
    console.log('To small');
    break;
  default:
  console.log('Equal 15');
}
/*while (num < 20) {
  num++;
  console.log(num);
}*/
do {
  console.log(num);
  num++;
} while (num<14);

for (var i = 0; i < 15; i++) {
  if (i == 5) {
    continue;
  }
  else if (i == 8) {
    break;
  }
  console.log(i);
}
