const mongoose = require('mongoose');
//创建骨架
const loginSchema = mongoose.Schema({
    tel: Number,
    password: String
});
//创建模型 
/**
 * 第一个产生为数据库的集合，第二个为骨架
 * 
 */
const Login = mongoose.model('logins', loginSchema);
module.exports = Login;