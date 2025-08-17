// Условие
// Дан массив строк emails.
// Каждый email состоит из localname@domainname.
// Правила обработки:
// Все символы после '+' в localname игнорируются.
// Точки '.' в localname игнорируются.
// domainname остаётся без изменений.
// Нужно вернуть количество уникальных email после обработки.
// Вход: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
// Выход: 2

export const numUniqueEmails = (emails) => {
    const unique = new Set();

    for (let email of emails) {
        let [local, domain] = email.split('@');
        local = local.split('+')[0]     // убираем всё после +
        console.log(local)
        local = local.split('.').join('');    // убираем точки без регулярок

        unique.add(`${local}@${domain}`);
    }

    return unique.size;
};

const emails = [
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com"
];

console.log(numUniqueEmails(emails)); // 2