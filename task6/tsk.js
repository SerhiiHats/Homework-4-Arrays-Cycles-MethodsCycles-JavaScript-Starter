

  /**
   * За допомогою prompt попросіть користувача ввести пропозицію.
   * Виведіть на екран кількість слів у цій пропозиції.
   * **/

  let arrayOfString;
  let stringMessage = prompt("Будь-ласка зазначте свої пропозиції:");
  arrayOfString = stringMessage.split(" ");


  alert("Кількість слів у пропозиції: " + arrayOfString.length);

  console.log("довжина масиву: " + arrayOfString.length);
  console.log("масив: [" + arrayOfString + "]");

