function inputArray() {
    event.preventDefault();
    const inputBox = document.getElementById("inputBox").value;
    const inputBoxArray = inputBox.split(" ");
    pigLatin(inputBoxArray);
}

function pigLatin(inputBoxArray) {
    const vowel = ["a", "e", "i", "o", "u"];
    let temporaryString = "";
    let newPhrase = document.createElement("p");
    inputBoxArray.forEach(function (word) {
        if ((word.charAt(0) === "q") && (word.charAt(1) === "u")) {
            temporaryString = word.slice(2) + "qu" + "ay ";
            newPhrase.append(temporaryString);
        } else if (vowel.includes(word.charAt(0).toLowerCase())) {
            temporaryString = word + "way ";
            newPhrase.append(temporaryString);
        } else {
            temporaryString = word.slice(1) + word.slice(0, 1) + "ay ";
            newPhrase.append(temporaryString);
        }
    })
    const resultsDiv = document.getElementById("resultsDiv");
    resultsDiv.append(newPhrase);
    return newPhrase;
}

window.addEventListener("load", function() {
  document.getElementById("formSentences").addEventListener("submit",inputArray);
});