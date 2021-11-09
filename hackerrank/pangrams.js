//Moiz
function pangrams(s) {
    // Write your code here
    const alphabetSet = new Set();

    //A 65
    //Z 90


    const isAlpha = char => {
        const code = char.toUpperCase().charCodeAt();
        return (code >= 65 && code <= 90);
    }

    for (let i = 0; i < s.length; i++) {
        if (isAlpha(s[i])) alphabetSet.add(s[i].toUpperCase())
    }

    return alphabetSet.size === 26 ? 'pangram' : 'not pangram';

}

//Ivy
function pangrams(s) {
    if(s.length < 26) {
        return 'not pangram'
    }

    let examplePangram = 'The quick brown fox jumped over the lazy dog'.toLowerCase()
    let alphabetArray = [...examplePangram]
    let alphabet = new Set(alphabetArray)

    for(let i = 0; i < s.length; i++) {
        s = s.toLowerCase()
        let letter = s[i]
        if(alphabet.has(letter)) {
            alphabet.delete(letter)
        }
    }

    if (alphabet.size === 0) {
        return 'pangram'
    } else {
        return 'not pangram'
    }
}
