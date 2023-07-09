function compareArrays(arr1, arr2) {
    let b = arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])
    return (b);
  }
  
  function getUsersNamesInAgeRange(user, gender) {
    return user.filter(user => user.gender === gender)
    .map(filteredUser => filteredUser.age)
    .reduce(
      (accumulator, age, index, aserAgesArray) => accumulator + age / aserAgesArray.length, 0
      );
  }
  