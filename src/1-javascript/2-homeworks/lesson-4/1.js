/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа, переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве аргумента был передан не числовой тип.
 */

const error = "ERR: arg has invalid type!";

const f = numb => {
  if (typeof numb !== "number") {
    return error;
  }

  return numb ** 3;
};

const fShort = numb => typeof numb !== "number" ? error : numb ** 3;

console.log(f(2)); // 8
console.log(fShort(3)); // 27