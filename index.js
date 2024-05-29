// Write your code below.

// Function using a while loop
function findItemIndex(items, itemToFind) {
    let index = 0;
    while (index < items.length) {
        if (items[index].name === itemToFind.name && items[index].color === itemToFind.color) {
            return index;
        }
        index++;
    }
    return -1;
}

// Function using a for loop
function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            sum += numbers[i];
        }
    }
    return sum;
}

// Function using a for...of loop
function filterByLength(strings, maxLength) {
    const filteredStrings = [];
    for (const str of strings) {
        if (str.length <= maxLength) {
            filteredStrings.push(str);
        }
    }
    return filteredStrings;
}
