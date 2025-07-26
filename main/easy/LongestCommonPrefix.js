// 🧩 Условие:
// Дан массив строк strs, нужно найти самый длинный
// общий префикс среди всех строк.
// Если общего префикса нет — вернуть пустую строку "".


// Input:
    let strs = ["flower", "flow", "flight"]
// Output:
//     "fl"

export const longestCommonPrefix = (strs) => {
    if (!strs.length) return "";

    let prefix = strs[0];
    // console.log("Начальный префикс:", prefix);
    // console.log('_______________________');

    for (let i = 1; i < strs.length; i++) {
        // console.log(`\nСравниваем с: "${strs[i]}"`);
        // console.log('_______________________');

        while (strs[i].indexOf(prefix) !== 0) {
            // console.log(`"${strs[i]}" vs prefix "${prefix}" → ${strs[i].indexOf(prefix)}`);

            // console.log(`  "${strs[i]}" не начинается с "${prefix}",
            // обрезаем`);
            // console.log('_______________________');
            prefix = prefix.slice(0, -1);
            // console.log("  Новый префикс:", prefix);
            // console.log('_______________________');
            if (!prefix) {
                // console.log("  Префикс стал пустым — возвращаем ''");
                // console.log('_______________________');
                return "";
            }
        }
        // console.log(`✓ "${strs[i]}" начинается с "${prefix}"`);
    }

    // console.log("\nИтоговый общий префикс:", prefix);
    return prefix;
};


// console.log(); // "fl"
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // ""
// console.log(longestCommonPrefix(["interspecies", "interstellar", "interstate"])); // "inters"
// console.log(longestCommonPrefix(["a"]));                         // "a"
// console.log(longestCommonPrefix(["abc", "abc", "abc"]));         // "abc"
