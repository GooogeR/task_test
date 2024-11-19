function debounce(func, delay) {
    let timeoutId;
  
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
  
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  
  const debouncedFunction = debounce(() => {
    console.log('Вызвана функция с задержкой');
  }, 2000);
  
  debouncedFunction();
  debouncedFunction();
  