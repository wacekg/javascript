function capitalize(text) {
  var text = text.split();
  for (var i = 0; i <text.length; i++) {
    text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
  }
  return text.toString()
}
