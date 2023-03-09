const express =  require('express')
const router = express.Router()
const {generatequestion} = require('../controllers/openaiController')

router.post('/generatequestion', generatequestion)




module.exports = router