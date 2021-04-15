/**
 * Задача 5.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

const createArray = (char, count) => {
  if (typeof count !== "number") {
    return console.error("ERR: second arg has invalid type!");
  }
  if (typeof char !== "number" && typeof char !== "string" && typeof char !== "object" && !Array.isArray(char)) {
    return console.error("ERR: first arg has invalid type!");
  }

  const arr = [];
  
  for (let i = 0; i < count; i++) {
    arr.push(char);
  }

  return arr;
}

const result = createArray("x", 5);

console.log(result); // [ x, x, x, x, x ]

exports.createArray = createArray;