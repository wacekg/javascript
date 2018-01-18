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
    var flattened = this.flatten()
    var uniqArray = [flattened[0]];
    for (var i=1; i < flattened.length; i++) {
      var save = true;
      for (var j = 0; j < uniqArray.length; j++){
        if (flattened[i] === uniqArray[j]) {
          save = false;
          break;
        }
      }
      if (save === true) {
        uniqArray.push(flattened[i]);
      }
    }
    return uniqArray;
  }
}
