const middleware = (req, res, next) => {
  console.log(`type: ${req.method} on url ${req.url}`)

  next()
}

module.exports = middleware