// input: aaabbcccddddaa
// output: 3a2b3c4d2a

// Write test cases

const x = 'aaabbcccddddaa';

function compressString(str) {
    if (!str) return '';

    let result = '';
    let count = 1;

    for (let i = 1; i <= str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        } else {
            result += count + str[i - 1];
            count = 1;
        }
    }

    return result;
}

console.log(compressString(x))

