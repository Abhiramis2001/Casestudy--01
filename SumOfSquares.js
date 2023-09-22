function sumOfSquares(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i] * arr[i]; 
    }
  
    return sum;
  }
  const numbers = [5, 10, 15, 20, 25];
  const result = sumOfSquares(numbers);
  console.log(`The sum of squares is: ${result}`);
  