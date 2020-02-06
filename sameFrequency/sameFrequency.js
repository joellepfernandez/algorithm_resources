function sameFrequency(string1, string2) {
    if (string1.length !== string2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let letter of string1.split('')) {
        frequencyCounter1[letter] = (frequencyCounter1[letter] || 0) + 1;
    }
    for (let letter of string2.split('')) {
        frequencyCounter2[letter] = (frequencyCounter2[letter] || 0) + 1;
    }
    for (let key in frequencyCounter1){
        if(!(key in frequencyCounter2)){
            return false;
        }
    }
    return true;
}

module.exports = sameFrequency;
