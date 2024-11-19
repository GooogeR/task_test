function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map(item => deepClone(item));
    }
  
    const clonedObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
    
    return clonedObj;
  }
  
  const original = {
    name: 'John',
    address: {
      city: 'New York',
      country: 'USA'
    }
  };
  
  const copy = deepClone(original);
  copy.address.city = 'Los Angeles';
  
  console.log(original.address.city);
  console.log(copy.address.city);
  