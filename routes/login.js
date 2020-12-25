const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const db = mongoose.connection;
const Login = require("./../model/login");
// 连接数据库 写在了app.js

//  创建骨架 在moudel文件

// 创建模型
router.post('/login', (req, res, next) => {
    // 查找数据库
    Login.find({}, (err, doc) => {
        if (err) console.log(err);;
        const { username, password } = req.body
        let flag = false
        doc.forEach((item, index) => {
            if (item.name === username && item.password === password) {
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
            if (doc.some(item => item.name === username)) {
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