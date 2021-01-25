
//Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// Complete the plusMinus function below.
// function plusMinus(arr) {

//     let positive=0; 
//     let negative=0; 
//     let zero = 0; 
    
//     for (var i =0; i< arr.length; i++){
//         if ( arr[i] > 0 ) positive++
//         if(arr[i] === 0 )zero ++
//         if (arr[i] < 0 )negative ++
        
//     }
//     positive = positive / arr.length
//     negative = negative / arr.length
//     zero = zero / arr.length
//     console.log(positive)
//     console.log(negative)
//     console.log(zero)
// }

//plusMinus([-4, 3 ,-9 ,0 ,4 ,1])


//Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.
//Write a program that prints a staircase of size .


// function staircase(n) {
//         var x ='' ; 
//         var Sym = '';
//         var space= '';
//         for (var j =1 ; j<=n ; j++) {

//             for(let f =1; f <= j ; f++){
//                 Sym = Sym +'#';
                
//             }
//             for (var i=n-j; i > 0 ; i-- ){
//                 space= space + '-';

//                 }
          
//             x = space +Sym
//             console.log(x);
//             space='';
//             Sym=''
           
//         } 
     
        
        
//     }
//     staircase(6)

