const mongoose=require('mongoose');
//创建骨架
const homeSchema = new mongoose.Schema({
    homeimg:Array
});
//创建模型 
/**
 * 第一个产生为数据库的集合，第二个为骨架
 * 
 */
const homes = mongoose.model('homes', homeSchema);

module.exports=homes;
