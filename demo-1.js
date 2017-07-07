const http = require('http')
const port = process.env.PORT || 4000

const server = http.createServer(function(request, response) {
  const reqMethod = request.method
  const reqUrl = request.url
  const reqHeaders = request.headers
  const responseBody = {
    method: reqMethod,
    url: reqUrl,
    headers: reqHeaders
  }
  if (reqMethod === 'GET') {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.write(JSON.stringify(responseBody, null, 2))
    console.log(
      "here's what were sending back to the client (web browser):",
      JSON.stringify(responseBody, null, 2)
    )
  }
  response.end()
})
server.listen(port, function() {
  console.log('api server up!', server.address(), 'port: ', port)
})
