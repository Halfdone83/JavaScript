function circle(input){

let circleArea = 0;

let inputType = typeof(input);

if (inputType === "number"){
    circleArea = Math.pow(input,2) * Math.PI;
    console.log(circleArea.toFixed(2));
}

else{

    console.log(`We can not calculate the circle area, because we received a ${inputType}.`)
}


}

circle(`name`);