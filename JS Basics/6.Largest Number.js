function largestNumber(number1, number2, number3){

    let largestNum = 0;

    if(number1 > number2 && number1 > number3){

        largestNum = number1
    }
    else if(number2 > number1 && number2 > number3){
        largestNum = number2
    }
    else if(number3 > number2 & number3 > number1){
        largestNum = number3
    }


    console.log(`The largest number is ${largestNum}.`);
}


largestNumber(5, -3, 16);