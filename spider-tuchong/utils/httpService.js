const https = require('https');

module.exports = {
  get(url) {
    return this.createRequest('GET', url);
  },

  createRequest(method, urlString, options) {
    return new Promise((resolve, reject) => {
      // const requstOptions = this.optionsRequest(method, parsedUrl)
      const request = https.get(urlString, res => this.onResponse(res, resolve, reject))
      request.on('error', reject)
      request.end()
    })
  },

  optionsRequest(method, url) {
    return requestOptions = {
      hostname: url.hostname,
      path: url.path,
      port: url.port,
      method
    }
  },

  onResponse(response, resolve, reject) {
    const hasResponseFailed = response.status >= 400
    let responseBody = ''

    if(hasResponseFailed) {
      reject(`Request to ${response.url} failed with HTTP ${response.status}`)
    }

    response.on('data', chunk => responseBody += chunk.toString())
    response.on('end', () => resolve(responseBody))
  }
}
