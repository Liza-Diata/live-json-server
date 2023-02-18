const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./databse/db.json')
const middleware = jsonServer.defaults();
const port = process.env.PORT || 5000;

server.use(middleware);
server.use(router)
server.listen(port, ()=>{
    console.log('Json Server is now running');
})