function printVowels(word) {
    word = word.toLowerCase();
    const vowels = [];
    for (i = 0; i < word.length; i++){
        const letter = word[i];
        if (isVowel(letter)){
            if (!vowels.includes(letter))
                vowels.push(letter);
        }
    }
    console.log("Vowels: " + vowels.join(", "));

}
function isVowel(letter){
    if (letter == 'a' || letter == 'A' ||
    letter == 'e' || letter == 'E' ||
    letter == 'i' || letter == 'I' ||
    letter == 'o' || letter == 'O' ||
    letter == 'u' || letter == 'U' 
    ){
        return true;
    }else
    return false

}

printVowels("Umuzi");