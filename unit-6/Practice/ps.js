
function multiply(a,b){
  return a*b;
}

function a(a){
    return function(b){
      //return a+b;
      return function(c){
      return a+b+c;
    }
    }
  }


//var curriedMultiply = currying(multiply);

console.log(multiply(4, 3)); // Returns 12

console.log(a(4)(3)(5)); // Also returns 12