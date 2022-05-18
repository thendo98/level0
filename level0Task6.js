function maximum(){
    let max = arguments[0];
    for(let i=1; i< arguments.length; i++){
        if (arguments[i]>max){
            max = arguments[i]
        }
    }
    return max;
}
console.log(maximum(1,2,3) );
console.log(maximum(1,22,3,2) );    
