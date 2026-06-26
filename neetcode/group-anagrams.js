class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};
        
        for (const str of strs) {
            // Сортируем буквы в слове (например 'cat' -> 'act', 'act' -> 'act')
            const key = str.split('').sort().join('');
            
            // Если такого ключа еще нет, создаем пустой массив, и сразу пушим туда оригинальное слово
            (map[key] ??= []).push(str);
        }
        
        // Возвращаем только значения из нашего объекта (массивы с анаграммами)
        return Object.values(map);
    }
}

// Пример использования:
// const solution = new Solution();
// console.log(solution.groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]));
// Вывод: [["act", "cat"], ["pots", "tops", "stop"], ["hat"]]
