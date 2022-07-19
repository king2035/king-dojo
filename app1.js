const HttpService = require('./modules/HttpService');

try {
  (async () => {
    const tuchong = await HttpService.get('https://tuchong.com/rest/tags/%E7%A7%81%E6%88%BF%E7%85%A7/posts?page=10&count=100&order=weekly&before_timestamp=');

    console.log(tuchong);

  })()
  
} catch (error) {
  console.log(error.message);
}
