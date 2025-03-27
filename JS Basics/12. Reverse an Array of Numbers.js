function reverseArray(n, elements){

let array = [];

for(let i = 0; i < n; i++){

array.push(elements[i]);

}

array.reverse();

console.log(array.join(" "));

}

reverseArray(3, [10, 20, 30, 40, 50]);