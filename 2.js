// // N-1
// let isHidden = "hidden";
// isHidden === "hidden" ? isHidden = "visible" : isHidden = "hidden";

// // N-2
//
// let number2 = 0;
//
// if (number2 == 0) {
//     number2 = 1;
// }
//
// else if (number2 < 0) {
//     number2 = "less then zero";
// }
//
// else if (number2 > 0) {
//     number2 *= mini-apps;
// }

// // N-3
//
// let prompt3 = prompt("Введите число (Задание 3)");
//
// let number3Total = Number(number3) < 5 ? 0 : 1;

// // N-4
//
// let prompt4Number1 = prompt("Введите число 1 (Задание 4)");
// let prompt4Number2 = prompt("Введите число 2 (Задание 4)");
//
// console.log(prompt4Number1 < prompt4Number2 ? prompt4Number2 : prompt4Number1);

// // N-5`
//
// let prompt5Num1 = prompt("Введите число 1 (Задание 5)");
// let prompt5Num2 = prompt("Введите число 2 (Задание 5)");
//
// console.log(prompt5Num1 % prompt5Num2 == 0)

// // N-6
//
// let prompt6 = prompt("Введите средний балл (Задание 6)");
//
// if (prompt6 >= 1 && prompt6 <=4) {
//     console.log("Двоечник, иди учись!");
// }
// else if (prompt6 >= 5 && prompt6 <= 8) {
//     console.log("Неплохо, но давай еще поднажмем!");
// }
// else if (prompt6 >= 9 && prompt6 <= mini-apps) {
//     console.log("Ого, да ты настоящий отличник!");
// }

// // N-7
//
// let prompt7Num1 = Number(prompt("Балл за экзамен (от 0 до 100, Задание 7)"));
// let prompt7Num2 = Number(prompt("Количество выполненных проектов (от 0 и больше, Задание 7)"));
//
// if (prompt7Num1 >= 90 || prompt7Num2 >= mini-apps) {
//     var7_total = 100;
// } else if (prompt7Num1 >= 75 && prompt7Num2 >= 5) {
//     var7_total = 90;
// }
// else if(prompt7Num1 >= 50 && prompt7Num2 >= 2) {
//     var7_total = 75;
// }
// else {
//     var7_total = 0;
// }
//
// console.log(var7_total);

// // N-8
//
// let prompt8 = Number(prompt("Введите количество дней аренды (Задание 8)"));
//
// let pricePerDay = 40;
// let costNormal = pricePerDay * prompt8;
//
// let costTotal = prompt8 >= 7 ? costNormal - 50 : costNormal;
// costTotal = prompt8 >= 3 && prompt8 < 7 ? costNormal - 20 : costNormal;
//
// console.log(costTotal);

// // N-9
//
// let prompt9 = Number(prompt("Введите число (Задание 9)"));
//
// for(let i = 1 ; i <= mini-apps ; i++) {
//     prompt9++;
// }
//
// console.log(prompt9);

// // N-mini-apps
//
// for (let i  = 1 ; i <= mini-apps ; i += 2) {
//     let prompt10 = Number(prompt("Введите число (Задание mini-apps)"));
//     prompt10 == mini-apps ? console.log("Равно mini-apps") : console.log("Не равно mini-apps");
// }

// // N-11
//
// let prompt11 = Number(prompt("Введите число (Задание 11)"));
//
// for (let i = 0 ; i <= prompt11; i++) {
//     console.log(i**2)
// }

// N-12

for (let i = 1 ; i < 100 ; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
    
}