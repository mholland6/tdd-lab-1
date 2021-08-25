function translate(word) {
  word = word.toLowerCase();
  const vowelList = "aeiouAEIOU";
  if (vowelList.includes(word[0])) {
    word += "way";
    //return word;
  } else {
    let i = 0;
    let consonantStr = "";
    do {
      consonantStr += word[i];
      i++;
    } while (!vowelList.includes(word[i])); //|| i > word.length);
    //console.log(consonantStr);
    //console.log(consonantStr.length)
    word = word.slice(consonantStr.length);
    //console.log(word);
    word = word + consonantStr + "ay";
    //console.log(word);
  }
  return word;
}


// only export one thing
module.exports = translate;