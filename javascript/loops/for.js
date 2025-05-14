let str = "";

for (let i = 0; i < 9; i++) {
    str = str + i;
    console.log(str)
}

console.log(str);

let int = 1;

for (let i = 0; i < 9; i++) {
    int = int + i;
    console.log(int);
}

const array1 =["a", "b", "c"];

for(const element of array1) {
    console.log(element);
}

array1.forEach(
    element => console,log(element)
);
