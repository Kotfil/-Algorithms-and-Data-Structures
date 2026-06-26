class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (const word of strs) {
            const key = word.split("").sort().join("");

            if (!map.has(key)) {
                map.set(key, []);
            }

            map.get(key).push(word);
        }

        return Array.from(map.values());
    }
}

const solution = new Solution();

console.log(solution.groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]));
// [["act", "cat"], ["pots", "tops", "stop"], ["hat"]]

console.log(solution.groupAnagrams(["x"]));
// [["x"]]

console.log(solution.groupAnagrams([""]));
// [[""]]