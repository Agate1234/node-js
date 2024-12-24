// path separate (\)
const path = require('path')
console.log(path.sep)

// path file yang ada (hasil: \content\subfolder\test.txt)
const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)

// basename atau nama file nya di filePath (test.txt)
const base = path.basename(filePath)
console.log(base)

// absolute path atau keseluruhan path (C:\Users\62896\Desktop\node\content\subfolder\test.txt)
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)