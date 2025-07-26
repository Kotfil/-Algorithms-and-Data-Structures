export const isValid = (s) => {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    console.log("Входная строка:", s);
    console.log("______________________");

    for (const char of s) {
        console.log('CHAR',char)
        if (map[char]) {
            const expected = map[char];
            console.log(`Открывающая "${char}" → ожидаем "${expected}" → пуш в стек`);
            console.log("______________________");
            stack.push(expected);
        } else {
            const lastExpected = stack.pop();
            console.log(`Закрывающая "${char}" → ожидаем сверху в стеке: "${lastExpected}"`);
            console.log("______________________");
            if (char !== lastExpected) {
                console.log("❌ Несовпадение! Строка невалидна.");
                console.log("______________________");
                return false;
            }
        }
        console.log("Текущий стек:", stack);
        console.log("______________________");
    }

    const result = stack.length === 0;
    console.log(result ? "✅ Все скобки закрыты корректно." : "❌ Остались незакрытые скобки!");
    return result;
};
isValid("({[]})");
// или
// isValid("([)]");
