const mongoose=require('mongoose');
//创建骨架
const questionSchema = new mongoose.Schema({
  Portait:String,
  name:String,
  title:String,
  see:String,
  reply:String
});
//创建模型 
/**
 * 第一个产生为数据库的集合，第二个为骨架
 * 
 */
const questions = mongoose.model('questions', questionSchema);

module.exports=questions;
