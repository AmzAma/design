const mongoose=require('mongoose');
//创建骨架
const indexcaseSchema = new mongoose.Schema({
    gridimgs:Array,
    gridname:Array
});
//创建模型 
/**
 * 第一个产生为数据库的集合，第二个为骨架
 * 
 */
const indexcases = mongoose.model('indexcases', indexcaseSchema);

module.exports=indexcases;
