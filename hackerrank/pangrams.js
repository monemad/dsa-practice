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
