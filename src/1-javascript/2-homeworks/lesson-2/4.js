/**
 * Задача 1.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.filter использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода filter (thisArg) имплементировать не нужно.
 */

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];

const filter = (incomingArr, callback) => {
  const isArr = Array.isArray(incomingArr);
  
  if (!isArr) {
    return console.error("ERR: first arg has invalid type!")
  }
  if (typeof callback !== "function") {
    return console.error("ERR: second arg has invalid type!")
  }

  const arr = [];

  for (let i = 0; i < incomingArr.length; i++) {
    const isMatch = callback(incomingArr[i], i, incomingArr);

    if (isMatch) {
      arr.push(incomingArr[i]);
    }
  }
  
  return arr;
}
 
const filteredArray = filter(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);

    return element === 'Добрый вечер!';
});

console.log(filteredArray); // ['Добрый вечер!']