const http = require('http');
const app = require('./app');
const port = process.env.PORT | process.env.PORT_SERV;
app.set(port)


const server = http.createServer(app)


server.listen(port, ()=>console.log('server runing on: http://localhost:'+port))