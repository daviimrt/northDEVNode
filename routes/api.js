const router = require('./routes.js')

router.get('/login', async (req, res) => {
  res.render('login')
})

module.exports = router
