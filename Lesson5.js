const names = ["Anna", "Oleg", "Tom"];

const newNames = [];

names.forEach(function (item, index) {
    console.log(`Элемент ${item} имеет индекс ${index}`);
    newNames.push(`${item}! молодец`)
});