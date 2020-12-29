const mongoose=require('mongoose');
//创建骨架
const gongzSchema = new mongoose.Schema({
    gridimgs:Array,
    gridname:Array
});
//创建模型 
/**
 * 第一个产生为数据库的集合，第二个为骨架
 * 
 */
const gongz = mongoose.model('gongzs', gongzSchema);

module.exports=gongz;
