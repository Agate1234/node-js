const {readFileSync, writeFileSync} = require('fs')

console.log('start');

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

// buat file
// flag: a agar menumpuk tidak terganti
writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    {flag: 'a'}
)

console.log('finish')
console.log('next')