const mongoose=require('mongoose');
//创建骨架
const designerSchema = new mongoose.Schema({
  desPortait:String,
  desName:String,
  desCity:String,
  desContent:String,
  desPrice:String,
  desFans:String,
  desYuyue:String,
  desShowImg:Array
});
//创建模型 
/**
 * 第一个产生为数据库的集合，第二个为骨架
 * 
 */
const designers = mongoose.model('designers', designerSchema);

module.exports=designers;
