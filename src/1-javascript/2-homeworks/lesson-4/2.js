/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех переданных числовых аргументов.
 *
 * Условия:
 * - Функция должна принимать любое количество аргументов;
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

const emptyArgError = "ERR: can't add up empty args!";
const invalidArgTypeError = "ERR: one of args has invalid type!";

const f = (...numbers) => {
  if (!numbers.length) {
    return emptyArgError;
  }

  const isNotValid = numbers.some(number => typeof number !== "number");

  if (isNotValid) {
    return invalidArgTypeError;
  } else {
    return numbers.reduce((prev, curr) => prev + curr);
  }
};

console.log(f(1, 1, 1, 2, 1, 1, 1, 1)); // 9