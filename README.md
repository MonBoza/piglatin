
Describe: inputArray()

Test: "It will get the value of the input object with id 'inputBox'."
Code: 
const inputBox = document.getElementById("inputBox").value;
inputArray();
Expected Output: undefined

Test: "It will turn variable "inputBox" into an Array"
Code: 
const inputBoxArray = inputBox.split(" ");
inputArray();
Expected Output: undefined



Describe: pigLatin(inputBoxArray)

Test: "It will create the new p element variable newPhrase with let"
Code: let newPhrase = document.createElement("p");
Expected Output: undefined

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test: "It will add 'ay' to the end of words that begin with a consonant."
Code: pigLatin("b");
Expected Output: "bay"
 
Test: "It will move "qu"  and add "ay" to the words where the first consonants contain "qu".
code: pigLatin("qu");
Expected Output: "quay"

Test: "It will create empty temporaryString variable"
Code: let temporaryString = "";
Expected Output: ""

Test: "It will create a loop through the inputBoxArray"
Code: inputBoxArray.forEach(function(word) {})
Expected Output: undefined

Test: "It will add a branch into the loop"
Code:  inputBoxArray.forEach(function(word)) {
        if (text.charAt(0) = q && text.charAt(1) = u) {
        } else if (text.charAt(0) = vowel) {
        } else {}
          }
Expected Output: null






///////// Pseudocode
variable "result"

["this", "is", "a", "test"]

["t","h","i","s"]  ["i","s"] ["a"]

["q","u","e","r","y"]
["q","u"]



function pigLatin(inputBoxArray) {
  let newPhrase = document.createElement("p");
  inputBoxArray.forEach(function(word))
    let temporaryString = ""
    if text.charAt(0) = q && text.charAt(1) = u
      asdfasdfsdafsdf
    else if text.charAt(0) = vowel
      temporaryString = word + "way";
      newPhrase.append(temporaryString);
    else 
      temporaryString = word + "ay";
      newPhrase.append(temporaryString);
}

///////// END Pseudocode



