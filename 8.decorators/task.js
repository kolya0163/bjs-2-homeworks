//Задача 1:
function cachingDecoratorNew(func) {
  let cache = [];

  return function (...args) {
    const hash = md5(args);
    let objectInCache = cache.find(
      (objectInCache) => objectInCache.hash === hash
    );

    if (objectInCache) {
      console.log("Из кэша: " + objectInCache.result);
      return "Из кэша: " + objectInCache.result;
    }

    let result = func(...args);
    cache.push({ hash, result });

    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  };
}

//Задача № 2
  
  function debounceDecoratorNew(func, delay){
    let timerId = null;
  function resultFunction(...args) {
    resultFunction.allCount++;

    if(!timerId){
      func(...args);
      resultFunction.count++;
    }

    clearTimeout(timerId);
    timerId = setTimeout(() => {
    func(...args);
    resultFunction.count++;
    },delay)
  }
  resultFunction.count = 0;
  resultFunction.allCount = 0;  
  return resultFunction;
}

