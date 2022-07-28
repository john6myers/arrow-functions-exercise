// Question 1
function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }
// es2015
  const doubleEs2015 = (arr) => {
    return arr.map((val) => {
        return val * 2;
    });
  }

// Question 2
function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }
// es2015
const squareAndFindEvensEs2015 = (numbers) => {
    let squares = numbers.map((num) => {
        return num ** 2;
    })
    let evens = squares.filter((square) => {
        return square % 2 === 0;
    })
    return evens;
}