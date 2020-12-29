const express = require('express');
const router = express.Router();
const Message = require("../model/message");
router.get('/getMessage', (req, res, next) => {
    Message.find({}, function(err, results) {
        res.json({
            status: 0,
            results: results
        });
    });
})

module.exports = router;
// router.post('/login', (req, res, next) => {
//     // 查找数据库
//     console.log(login)
//     Login.find({}, (err, doc) => {
//         if (err) console.log(err);
//         const { tel, password } = req.body
//         let flag = false
//         doc.forEach((item, index) => {
//             if (item.tel === tel && item.password === password) {
//                 flag = true
//             }
//         })
//         if (flag) {
//             console.log(1)
//             res.json({
//                 status: 0,
//                 msg: '登陆成功',

//             })
//         } else {
//             if (doc.some(item => item.tel === tel)) {
//                 console.log(2)
//                 res.json({
//                     status: 1,
//                     msg: '密码错误999',

//                 })
//                 console.log(23)
//             } else {
//                 res.json({
//                     status: 2,
//                     msg: '用户名不存在'
//                 })
//             }
//         }
//     });
// })