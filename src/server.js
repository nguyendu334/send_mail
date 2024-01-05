const express = require('express')
const app = express()
const initRoutes = require('./routes/web')

// Cho phép lý dữ liệu từ form method POST
app.use(express.urlencoded({extended: true}))

// Khởi tạo các routes cho ứng dụng
initRoutes(app)

const port = 8017
app.listen(port, () => {
  console.log(`I'm running at localhost:${port}/`)
})
