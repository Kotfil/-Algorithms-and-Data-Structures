// Решение (O(k²)) — построить построчно:
export const getRow = (rowIndex) => {
    const row = [1];
    for (let i = 1; i <= rowIndex; i++) {
        for (let j = i - 1; j >= 1; j--) {
            row[j] = row[j] + row[j - 1];
        }
        row.push(1);
    }
    return row;
};
console.log(getRow(8))

//
// Input: rowIndex = 3
// Output: [1,3,3,1]
