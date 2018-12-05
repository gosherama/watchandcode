//Take an array and remove every second element out of that array. 
//Always keep the first element and start removing with the next element.
var arr = ['test1', 'test2', 'test3', 'test4', 'test5'];
var output = [];

function removeEveryOther(arr){
    for(var i = 0; i <= arr.length; i++) {
        if (arr[i] % 2 == 0) {
            arr.shift(i);
            output = ouput + i
        };
    }
    return output;
  }
console.log(removeEveryOther(arr))

