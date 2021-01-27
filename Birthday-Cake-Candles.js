//You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

//Function Description

// Complete the function birthdayCakeCandles in the editor below.

// birthdayCakeCandles has the following parameter(s):

// int candles[n]: the candle heights
// Returns

// int: the number of candles that are tallest


function birthdayCakeCandles(candles) {
    // Write your code here
    var tallest = Math.max(...candles);
    var count = 0;
    for (var i =0; i < candles.length ; i++) {
            if ( tallest == candles[i] ){
                count++ 
            }
    }
    console.log(count);
}

birthdayCakeCandles([3,1,2,3])