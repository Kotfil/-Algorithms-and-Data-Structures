const romanToInt = (s) => {
    const map = {
        I: 1, V: 5, X: 10,
        L: 50, C: 100,
        D: 500, M: 1000
    };

    let total = 0;
    console.log(`Входная строка: ${s}\n`);

    for (let i = 0; i < s.length; i++) {
        const current = map[s[i]];
        const next = map[s[i + 1]];

        console.log(`Символ: ${s[i]} (${current})`);
        if (s[i + 1]) {
            console.log(`  Следующий символ: ${s[i + 1]} (${next})`);
        } else {
            console.log(`  Следующего символа нет`);
        }

        if (next > current) {
            console.log(`  ${current} < ${next} → вычитаем: -${current}`);
            total -= current;
        } else {
            console.log(`  ${current} >= ${next || 0} → прибавляем: +${current}`);
            total += current;
        }

        console.log(`  Текущая сумма: ${total}\n`);
    }

    console.log(`Итог: ${total}`);
    return total;
};



// 🧪 Примеры:
console.log(romanToInt('III'))       // 3
console.log(romanToInt('IV'))        // 4
console.log(romanToInt('IX'))        // 9
console.log(romanToInt('LVIII'))     // 58
console.log(romanToInt('MCMXCIV'))   // 1994