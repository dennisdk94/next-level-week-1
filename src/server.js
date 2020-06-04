const express = require('express')
const server = express()

//configurar pasta públic
server.use(express.static("public"))

//Utilizando nunjecks - template enginier
const nunjecks = require('nunjucks')
nunjecks.configure('src/views', {
  express: server,
  noCache: true
})


//Configurar rotas da aplicação
//Página inicial
server.get('/', (req, res) => {
  return res.render("index.html")
})

server.get('/create-point', (req, res) => {
  return res.render("create-point.html")
})

server.get('/search', (req, res) => {
  return res.render("search-results.html")
})

server.listen(3000)