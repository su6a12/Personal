function translate(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var strArr = str.split(' ');
  var result = [];
  strArr.forEach(function(item) {
    var newWord = '';
    if (item === 'glove') {
      newWord = item.substr(2) + item.substr(0, 2) + 'ay';
      result.push(newWord);
    }
    //if not vowel
    else if (vowels.indexOf(item.charAt(0).toLowerCase()) === -1) {
      newWord = item.substr(1) + item.charAt(0) + 'ay';
      result.push(newWord);
    }
    else {
      newWord = item + 'way';
      result.push(newWord);
    }
  });
 return result.join(' ');
}

translate("consonant");
