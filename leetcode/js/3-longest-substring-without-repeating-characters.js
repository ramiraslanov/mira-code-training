/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var max = 0;
    var result = new Map();

    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        if (result.has(char)) {
            i = result.get(char);
            result.clear();
        } else {
            result.set(char, i);
        }

        if (max < result.size) {
            max = result.size;
        }
    }
    return max;
};
