const {readFile, writeFile} = require('fs').promises

// bisa di skip dan langsung (util module)

// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// function  async utama

const start = async() => {
  try {
    const first = await readFile('./content/first.txt', 'utf8')
    const second = await readFile('./content/second.txt', 'utf8')

    await writeFile(
      './content/result-mind-grenade.txt', 
      `THIS IS AWESOME : ${first}, ${second}`,
      {flag: 'a'}
    )

    console.log(first, second)
  } catch (error) {
    console.log(error)
  }
}

start()

// get text function wit promises (wrapper)

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }

// getText('./content/first.txt')
//   .then(result => console.log(result))
//   .catch((err) => console.log(err))