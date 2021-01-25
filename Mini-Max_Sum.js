
    //Mini-Max Sum
//Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
    const mini  = Math.min(...arr)
    const max  = Math.max(...arr)

    if (mini === max && arr[mini+1] === arr [max-1])
    var total_mini=0 ;
     var total_max = 0 ; 
    for( x of arr ){
       
            if (x === mini){
                total_mini = total_mini + x
            }

             if( x === max ){
                total_max = total_max + x
            }

            if(x !== mini & x !== max ){
                total_max = total_max + x
                total_mini = total_mini + x
            }
    }
    if ( mini === max){
        console.log( mini*4 , max*4);
    }else{
            console.log(total_mini, total_max )

    }

}
miniMaxSum([5,5,5,5,5])