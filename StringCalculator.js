export class StringCalculator {
    add(numbers) {
      if (numbers === '') return 0;
  
      let delimiter = /,|\n/; 
  
      // Check for custom delimiter
      if (numbers.startsWith('//')) {
        const parts = numbers.split('\n', 2);
        const customDelimiter = parts[0].substring(2);
  
       
        delimiter = new RegExp(customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')); 
  
        numbers = parts[1]; 
      }
  
      const numArray = numbers.split(delimiter);
      const intArray = [];
      const negatives = [];
  
      numArray.forEach(num => {
        if (num !== '') {
          const n = parseInt(num, 10);
          if (n < 0) {
            negatives.push(n);
          }
          intArray.push(n);
        }
      });
  
      if (negatives.length) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
      }
  
      return intArray.reduce((sum, n) => sum + n, 0);
    }
  }
  