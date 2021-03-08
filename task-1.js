let num = +prompt('Введи значение');

if (typeof num !== 'number' || isNaN(num)) {
    console.log('Упс, кажется, вы ошиблись');
} else if (num % 2 === 0) {
    console.log('Четное');
  } else {
    console.log('Нечетное');
}