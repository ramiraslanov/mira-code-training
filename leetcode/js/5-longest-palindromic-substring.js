/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function (s) {
    var SPECIAL_CHAR = "#";
    var transformedStr = `${SPECIAL_CHAR}${s.split("").join(SPECIAL_CHAR)}${SPECIAL_CHAR}`;
    var palindromeRadii = new Array(transformedStr.length);
    var center = 0;
    var radius = 0;

    for (var i = 1; i < transformedStr.length - 1; i++) {
        palindromeRadii[i] = radius > i ? Math.min(radius - i, palindromeRadii[2 * center - i]) : 0;

        while (
            i - 1 - palindromeRadii[i] >= 0 &&
            i + 1 + palindromeRadii[i] < transformedStr.length &&
            transformedStr[i + 1 + palindromeRadii[i]] ===
                transformedStr[i - 1 - palindromeRadii[i]]
        ) {
            palindromeRadii[i] += 1;
        }

        if (i + palindromeRadii[i] > radius) {
            center = i;
            radius = i + palindromeRadii[i];
        }
    }

    var maxLen = 0;
    var centerIndex = -1;

    for (var i = 0; i < palindromeRadii.length; i++) {
        if (palindromeRadii[i] > maxLen) {
            maxLen = palindromeRadii[i];
            centerIndex = i;
        }
    }

    return s.slice(Math.floor((centerIndex - maxLen) / 2), Math.floor((centerIndex + maxLen) / 2));
};
