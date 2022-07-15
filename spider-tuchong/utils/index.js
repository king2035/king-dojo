const https = require('https')
const bl = require('bl')

module.exports = function request(url) {
  return new Promise(resolve => {
    resolve(
      https.get(url, (res) => {
        let jsonStr = ''
        res.on('data', (chunk) => {
          jsonStr += chunk
        })
      
        res.on('end', () => {
          cb(JSON.parse(jsonStr))
        })

        res.pipe()
      }).on('error', (err) => {
        console.log(err)
      })
    )
  })
}
