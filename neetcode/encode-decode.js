class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // Проходим по каждому слову и добавляем перед ним его длину и разделитель '#'
        // Например: ["we", "say", ":", "yes"] -> "2#we3#say1#:3#yes"
        return strs.map(s => `${s.length}#${s}`).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let i = 0;
        
        while (i < str.length) {
            let j = i;
            
            // Ищем символ '#', чтобы понять, где заканчивается число длины
            while (str[j] !== '#') {
                j++;
            }
            
            // Получаем длину следующего слова (вырезаем от i до j)
            const len = parseInt(str.slice(i, j), 10);
            
            // Вырезаем само слово, начиная со следующего символа после '#' и на длину 'len'
            res.push(str.slice(j + 1, j + 1 + len));
            
            // Передвигаем указатель i на начало следующего куска (длина числа + '#' + само слово)
            i = j + 1 + len;
        }
        
        return res;
    }
}

// Пример использования:
// const solution = new Solution();
// const encoded = solution.encode(["hello", "world", "a#b", ""]);
// console.log("Encoded:", encoded); // "5#hello5#world3#a#b0#"
// const decoded = solution.decode(encoded);
// console.log("Decoded:", decoded); // ["hello", "world", "a#b", ""]
