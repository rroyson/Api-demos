//use to see what each request info item is

const http = require('http')
const port = process.env.PORT || 4000

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' })

  response.write('<html>')
  response.write('<body>')
  response.write('<h2>Request Info</h2>')
  response.write('<h3>Method</h3>')
  response.write('<p>' + request.method + '</p>')
  response.write('<h3>Browser Info (user agent)</h3>')
  response.write('<p>' + request.headers['user-agent'] + '</p>')
  response.write('<h3>URL</h3>')
  response.write('<p>' + request.url + '</p>')
  response.write('</body>')
  response.write('</html>')
})

server.listen(port, () => console.log('API IS UP ON PORT', port))
