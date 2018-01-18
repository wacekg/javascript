function flattenUniq(arrayOfArrays) {
  this.arrayOfArrays = arrayOfArrays
  this.flatten = function() {
    var flattenedArray = [];
    for (var i = 0; i < arrayOfArrays.length; i++) {
      flattenedArray = flattenedArray.concat(arrayOfArrays[i]);
    }
    return flattenedArray;
  }
  this.unique = function() {
    this.flattenedArray = flattenedArray
    var uniqArray = [flattenedArray[i]];
    for (i=1; i < flattenedArray.length; i++) {
      for (j = 0; j < uniqArray.length; j++){
        if (flattenedArray[i] === uniqArray[j]) {
          break;
        }
        uniqArray.push(flattenedArray[i]);
      }
    }
    return uniqArray;
  }
}
