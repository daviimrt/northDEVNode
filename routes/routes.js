module.exports.run = (router, app) => {
  module.exports = router

  const home = require('./home.js')
  const api = require('./api.js')
  const dashboard = require('./dashboard.js')

  app.use('/', home)
  app.use('/api', api)
  app.use('/dashboard', dashboard)
}
