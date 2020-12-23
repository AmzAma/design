const mongoose=require('mongoose');
//创建骨架
const designSchema = new mongoose.Schema({
  designimgs:Array,
  designtext:Array,
  designspan:Array
});
//创建模型 
/**
 * 第一个产生为数据库的集合，第二个为骨架
 * 
 */
const designs = mongoose.model('designs', designSchema);

module.exports=designs;
