let correctWord;

const initGame = () => {
  let randomObg = words[Math.floor(Math.random() * words.length)];
  const wordArray = randomObg.word.split("");
  //   console.log(wordSplit);
  for (let i = wordArray.length - 1; i > 0; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    //   shuffling and swiping wordArray letters randomly
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }

  wordText.innerText = wordArray.join(""); //passing suffled words as word text;
  hintText.innerText = randomObg.hint; //passing random object hint as hint text
  correctWord = randomObg.word.toLowerCase(); // passing random word to correctWord
};

initGame();
