function chunkArray(array, size) {
    const result = [];
    
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    
    return result;
  }
  
  console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 2));
  console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3));
  