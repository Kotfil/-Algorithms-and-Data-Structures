class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length !== t.length) return false;


        return s.split('').sort().join('') === t.split('').sort().join('');
    }
}

const a = new Solution()
a.isAnagram(s = "racecar", t = "carrace")

console.log(a.isAnagram(s = "racecar", t = "carrace"))
console.log(a.isAnagram(s = "jar", t = "jad"))