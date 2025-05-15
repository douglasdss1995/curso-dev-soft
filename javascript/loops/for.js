let str = "";

for (let i = 0; i < 10; i++) {
    // str = str + i;
    str += i;
    console.log(str);
}

console.log(str);

let int = 1;

for (let i = 0; i < 9; i++) {
    int = int + i;
    console.log(int);
}

console.log(int);

// Declara um array com os números de 1 a 5
const array1 = ["1", "2", "3", "4", "5"];

for (const element of array1) {
    console.log(element);
}

array1.forEach(
    element => {
        console.log(element);
        console.log(element);
        console.log(element);
        console.log(element);
    }
);