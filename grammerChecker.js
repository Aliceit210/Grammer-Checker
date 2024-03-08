// Step 1: Split the story into an array
let story = "Once upon a time in a land far away, there lived a beautiful princess named Alice.";
let storyWords = story.split(' ');

// Step 2: Join the storyWords array back into a string
console.log(storyWords.join(' '));

// Step 3: Iterate over the storyWords array and count the words
let count = 0;
storyWords.forEach(function(word) {
  count++;
});
console.log(count);

// Step 5: Filter out instances of the word "literally"
storyWords = storyWords.filter(function(word) {
  return word !== "literally";
});

// Step 6: Filter out the unnecessaryWord from the story
let unnecessaryWord = "literally";
storyWords = storyWords.filter(function(word) {
  return word !== unnecessaryWord;
});

// Step 7: Spell check the words in the story
let misspelledWord = "beutiful";
storyWords = storyWords.map(function(word) {
  if (word === misspelledWord) {
    return "beautiful";
  } else {
    return word;
  }
});

// Step 8: Find the index of the bad word
let badWord = "bad";
let badWordIndex = storyWords.findIndex(function(word) {
  return word === badWord;
});
console.log(badWordIndex);

// Step 9: Replace the bad word with a more appropriate word
storyWords[badWordIndex] = "really";

// Step 10: Check if every word has 10 characters or less
let lengthCheck = storyWords.every(function(word) {
  return word.length <= 10;
});
console.log(lengthCheck);

// Step 11: Manually replace a word longer than 10 characters
let longWordIndex = storyWords.findIndex(function(word) {
  return word.length > 10;
});
storyWords[longWordIndex] = "short";

// Step 12: Log the final story
console.log(storyWords.join(' '));