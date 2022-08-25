/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    var noteArr = ransomNote.split("");
    var magazineArr = magazine.split("");
    return noteArr.every(word => {
        var wordIndex = magazineArr.indexOf(word);
        if (wordIndex > -1) {
            magazineArr.splice(wordIndex, 1);
            return true;
        }
    });
};
