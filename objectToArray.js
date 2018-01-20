function objectToArray(obj) {
  var array = Object.keys(obj);
  var array1 = [];
  var array2 = [];
  for (var i = 0; i < array.length; i++) {
    var a = array[i];
    var b = obj[array[i]];
    array1 = [a, b];
    array2.push(array1);
 }
 return array2;
}
