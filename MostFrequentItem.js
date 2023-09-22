function MostFrequentItem(arr) {
    if (arr.length === 0) {
      return null;
    }
  
    const freq = {};
let mostFrequentItem = arr[0];
    let maxFreq = 1;
  
for (const item of arr) {
      if (freq[item]) {
        freq[item]++;
      } else {
        freq[item] = 1;
      }
  
      if (freq[item] > maxFreq) {
        mostFrequentItem = item;
        maxFreq = freq[item];
      }
    }
return mostFrequentItem;
  }
  
  const array = [10, 10, 2, 8, 20, 10, 2, 9];
  const mostFreq = MostFrequentItem(array);
  console.log(`The most frequent item is: ${mostFreq}`);
  