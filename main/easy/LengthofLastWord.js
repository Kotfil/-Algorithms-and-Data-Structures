// 📌 Условие:
// Дана строка s, состоящая из слов и пробелов.
// Верни длину последнего слова.
// Слово — это последовательность не пробельных символов.

const lengthOfLastWord = _ => {
        const res = _.trim().split(' ').pop().length
    console.log(res)
}

 lengthOfLastWord("Hello World") // ➝ 5
lengthOfLastWord("   fly me   to   the moon  ") // ➝ 4