// Створіть масив і внесіть до нього 10 випадкових значень.
// Для створення випадкового значення використовуйте наступний код:
// let randomValue = Math.floor(Math.random() * 101); // випадкове значення від 0 до 100 буде записано у змінну randomValue
// Виведіть всі значення, внесені в масив, на екран за допомогою циклу.

let array = [];

for (let i = 0; i < 10; i++) {
    array[i] = Math.floor( Math.random() * 201 - 101);
}

console.log("Масив із 10-ю випадковими значеннями");
for (let i = 0; i < array.length; i++) {
    console.log("array[" + i + "] = " + array[i]);
}