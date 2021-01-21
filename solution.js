
//Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// Complete the plusMinus function below.
function plusMinus(arr) {

    let positive=0; 
    let negative=0; 
    let zero = 0; 
    
    for (var i =0; i< arr.length; i++){
        if ( arr[i] > 0 ) positive++
        if(arr[i] === 0 )zero ++
        if (arr[i] < 0 )negative ++
        
    }
    positive = positive / arr.length
    negative = negative / arr.length
    zero = zero / arr.length
    console.log(positive)
    console.log(negative)
    console.log(zero)
}

plusMinus([-4, 3 ,-9 ,0 ,4 ,1])