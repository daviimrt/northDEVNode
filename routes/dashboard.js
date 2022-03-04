const router = require('./routes.js')

router.get('/dashboard', async (req, res) => {
  res.render('dashboard')
})

module.exports = router
