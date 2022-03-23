const express = require('express');
const next = require('next')
const NextjsExpressRouter = require("./router")
const Middleware = require("./middleware")

const httpServer = (express) => {
  return require('http').createServer(express)
}

const httpsServer = (express) => {
  const fs = require('fs')
  const options = {}
  return require('https').createServer(options, express)
}


const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000

class Server {
  constructor(port) {
    this.port = port
    this.express = express()
    this.next = next({ dev, hostname, port })
    this.middleware = new Middleware(this.express)
    this.router = new NextjsExpressRouter(this.express, this.next)
  }

  async start() {
    await this.next.prepare()
    await this.middleware.init()
    await this.router.init()
    this.server = httpServer(this.express)
    this.server.listen(port)
  }
}

module.exports = Server