const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const db = mongoose.connection;
// 连接数据库
// mongoose.connect('mongodb://42.192.149.116/login', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     console.log('数据库连接成功')
// });

//  创建骨架
const loginSchema = mongoose.Schema({
    name: String,
    password: String
});
// 创建模型
const Login = mongoose.model('webs', loginSchema);
router.post('/login', (req, res, next) => {
    // 查找数据库
    Login.find({}, (err, doc) => {

        if (err) console.log(err);;
        const { tel, password } = req.body
        let flag = false
        doc.forEach((item, index) => {
            if (item.tel === tel && item.password === password) {
                flag = true
            }
        })
        if (flag) {
            console.log(1)
            res.json({
                status: 0,
                msg: '登陆成功',

            })
        } else {
            if (doc.map(item => item.tel === tel)) {
                console.log(2)
                res.json({
                    status: 1,
                    msg: '密码错误'
                })
            } else {
                res.json({
                    status: 2,
                    msg: '用户名不存在'
                })
            }
        }
    });
})

module.exports = router;