function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
      sum += arr[i];
      if (arr[i] > max) {
          max = arr[i];
      } else if (arr[i] < min) {
          min = arr[i];
      }
  }
  let avg = +(sum / arr.length).toFixed(2);
  return {
      min: min,
      max: max,
      avg: avg
  };
}

function summElementsWorker(...arr) {
  let summElementsWorker = 0;
  for (let i = 0; i < arr.length; i++) {
      summElementsWorker += arr[i];
  }
  return (summElementsWorker);
}

function differenceMaxMinWorker(...arr) {
  let min = arr[0];
  let max = arr[0];
  if (arr.length < 1) {
      return 0;
  }
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
          max = arr[i];
      } else if (arr[i] < min) {
          min = arr[i];
      }
  }
  let avg = max - min;
  return (avg);

}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length < 1) {
      return 0;
  }
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
          sumEvenElement += arr[i];
      } else if (arr[i] % 2 !== 0) {
          sumOddElement += arr[i];
      }
  }
  return (sumEvenElement - sumOddElement);
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length < 1) {
      return 0;
  }
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
          sumEvenElement += arr[i];
          countEvenElement += 1;
      }
  }
  return (sumEvenElement / countEvenElement);
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);
  for (let i = 1; i < arrOfArr.length; i++) {
      const funcResult = func(...arrOfArr[i]);
      if (funcResult > maxWorkerResult) {
          maxWorkerResult = funcResult;
      }
  }
  return maxWorkerResult;
}
