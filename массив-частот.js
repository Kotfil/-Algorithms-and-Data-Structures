// Пример 1: Массив частот для чисел от 0 до 100
function buildFreqArray(arr) {

    const freq = new Array(101).fill(0); // если числа от 0 до 100

    for (const num of arr) {
        freq[num]++;
    }

    return freq;
}

const arr = [1, 3, 3, 5, 1, 0];
console.log(buildFreqArray(arr)); // [1, 2, 0, 2, 0, 1, 0, ...]

// Пример 2: Массив частот букв 'a' → 'z'

function letterFreq(str) {
    const freq = new Array(26).fill(0); // 26 букв английского алфавита

    for (const ch of str) {
        const index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
        freq[index]++;
    }

    return freq;
}

console.log(letterFreq("banana")); // [1,1,0,0,...] где b=1, a=3, n=2

// Пример 3: Частоты через Map (если значения произвольные, например строки)

function freqMap(arr) {
    const map = new Map();

    for (const item of arr) {
        map.set(item, (map.get(item) || 0) + 1);
    }

    return map;
}

console.log(freqMap(["apple", "banana", "apple", "kiwi"]));
// Map(3) { 'apple' => 2, 'banana' => 1, 'kiwi' => 1 }

// Анаграммы (areAnagrams)
function areAnagrams(a, b) {
    if (a.length !== b.length) return false;

    const freq = new Array(26).fill(0);

    for (const ch of a) freq[ch.charCodeAt(0) - 97]++;
    for (const ch of b) freq[ch.charCodeAt(0) - 97]--;

    return freq.every(count => count === 0);
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("apple", "papel"));   // true
console.log(areAnagrams("rat", "car"));       // false


// Минимальное количество символов для удаления
function minDeletionsToMakeAnagram(a, b) {
    const freqA = new Array(26).fill(0);
    const freqB = new Array(26).fill(0);

    for (const ch of a) freqA[ch.charCodeAt(0) - 97]++;
    for (const ch of b) freqB[ch.charCodeAt(0) - 97]++;

    let deletions = 0;
    for (let i = 0; i < 26; i++) {
        deletions += Math.abs(freqA[i] - freqB[i]);
    }

    return deletions;
}

console.log(minDeletionsToMakeAnagram("abc", "cde")); // 4 (удалить 'a','b','d','e')


// Сравнение подстрок по составу
function sameComposition(a, b) {
    if (a.length !== b.length) return false;

    const freqA = new Array(26).fill(0);
    const freqB = new Array(26).fill(0);

    for (const ch of a) freqA[ch.charCodeAt(0) - 97]++;
    for (const ch of b) freqB[ch.charCodeAt(0) - 97]++;

    return freqA.join(',') === freqB.join(',');
}

console.log(sameComposition("aabb", "baba")); // true
console.log(sameComposition("abcd", "abcc")); // false
