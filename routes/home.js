const router = require('./routes.js')

router.get('/', async (req, res) => {
  res.render('index')
})

module.exports = router
