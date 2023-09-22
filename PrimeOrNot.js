function Prime(number) {
    if (number <= 1) {
      return false;
    }
    if (number <= 3) {
      return true;
    }
    if (number % 2 === 0 || number % 3 === 0) {
      return false;
    }
    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  }
  
  function FirstElement(arr) {
    if (arr.length === 0) {
      return false; 
    }
    const firstElement = arr[0];
    return Prime(firstElement);
  }
  const myArray = [1, 10, 1, 9, 4];
  const isFirstElementPrimeResult = FirstElement(myArray);
  
  if (isFirstElementPrimeResult) {
    console.log("The first element of the array is prime.");
  } else {
    console.log("The first element of the array is not prime.");
  }
  