// // N-1
// let var1 = "hidden";
// var1 == "hidden" ? var1 = "visible" : var1 = "hidden";

// // N-2
//
// let var2 = 0;
//
// if (var2 == 0) {
//     var2 = 1;
// }
//
// else if (var2 < 0) {
//     var2 = "less then zero";
// }
//
// else if (var2 > 0) {
//     var2 *= 10;
// }

// // N-3
//
// let var3 = prompt("Введите число (Задание 3)");
//
// let var3Total = Number(var3) < 5 ? 0 : 1;

// // N-4
//
// let var3_1 = prompt("Введите число 1 (Задание 4)");
// let var3_2 = prompt("Введите число 2 (Задание 4)");
//
// console.log(var3_1 < var3_2 ? var3_2 : var3_1);

// // N-5
//
// let var5_1 = prompt("Введите число 1 (Задание 5)");
// let var5_2 = prompt("Введите число 2 (Задание 5)");
//
// console.log(var5_1 % var5_2 == 0)

// // N-6
//
// let var6 = prompt("Введите средний балл (Задание 6)");
//
// if (var6 >= 1 && var6 <=4) {
//     console.log("Двоечник, иди учись!");
// }
// else if (var6 >= 5 && var6 <= 8) {
//     console.log("Неплохо, но давай еще поднажмем!");
// }
// else if (var6 >= 9 && var6 <= 10) {
//     console.log("Ого, да ты настоящий отличник!");
// }

// // N-7
//
// let var7_1 = Number(prompt("Балл за экзамен (от 0 до 100, Задание 7)"));
// let var7_2 = Number(prompt("Количество выполненных проектов (от 0 и больше, Задание 7)"));
//
// if (var7_1 >= 90 && var7_2 >= 10) {
//     var7_total = 100;
// } else if (var7_1 >= 75 && var7_2 >= 5) {
//     var7_total = 90;
// }
// else if(var7_1 >= 50 && var7_2 >= 2) {
//     var7_total = 75;
// }
// else {
//     var7_total = 0;
// }
//
// console.log(var7_total);

// // N-8
//
// let var8_1 = Number(prompt("Введите количество дней аренды (Задание 8)"));
//
// let pricePerDay = 40;
// let costNormal = pricePerDay * var8_1;
//
// var8_1 >= 7 ? costTotal = costNormal - 50 : costTotal = costNormal;
// var8_1 >= 3 && var8_1 < 7 ? costTotal = costNormal - 20 : costTotal = costNormal;
//
// console.log(costTotal);

// // N-9
//
// let var9_1 = Number(prompt("Введите число (Задание 9)"));
//
// for(let i = 1 ; i <= 10 ; i++) {
//     var9_1++;
// }
//
// console.log(var9_1);

// // N-10
//
// for (let i  = 1 ; i <= 10 ; i += 2) {
//     let var10_1 = Number(prompt("Введите число (Задание 10)"));
//     var10_1 == 10 ? console.log("Равно 10") : console.log("Не равно 10");
// }

// // N-11
//
// let var11_1 = Number(prompt("Введите число (Задание 11)"));
//
// for (let i = 0 ; i <= var11_1; i++) {
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