/**
 * Задача 3.
 *
 * Дописать требуемый код что бы код работал правильно.
 * Необходимо проверить длину строки в переменной string.
 * Если она превосходит maxLength – заменяет конец string на ... таким образом, чтобы её длина стала равна maxLength.
 * В консоль должна вывестись (при необходимости) усечённая строка.
 *
 * Условия:
 * - Переменная string должна обладать типом string;
 * - Переменная maxLength должна обладать типом number.
 */

function truncate(incomingString, maxLength) {
  if (typeof incomingString !== "string" || typeof maxLength !== "number") {
    return console.error("ERR: one of the arguments has invalid type!");
  }

  if (incomingString.length > maxLength) {
    const cuttedString = `${incomingString.slice(0, maxLength - 3)}...`;  // `maxLength - 3` saves 3 chars for suspension points 
    return console.log(cuttedString);
  } else {
    return console.log(incomingString);
  }
}

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 21)); // 'Вот, что мне хотел...'
