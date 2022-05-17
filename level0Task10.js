function commonLetters(string1, string2){
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();
    let commons = [];
    for (var i=0; i < string2.length; i++){
        for (var j=0; j < string1.length; j++){
            if (string2[i]===string1[j])
                if (!commons.includes(string2[i]))
                    commons.push(string2[i]);
        }
    }
    console.log(`Common letters: ${commons.join(", ")}`)
}

commonLetters("house", "computers");