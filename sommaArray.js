var sommaArray = function(arr) {
    //Parameters number
    if((Number.isInteger(arr[0]) && arr[0] >= 0) &&
        (Number.isInteger(arr[1]) && arr[1] >= 0) &&
        (Number.isInteger(arr[2]) && arr[2] >= 0) &&
        (Number.isInteger(arr[3]) && arr[3] >= 0)){
        return (arr[0] + arr[1] + arr[2] + arr[3]);

    }

    else{
        return -1; //in the other cases -1
    }

}

module.exports = sommaArray;