const mongoose=require('mongoose');
//创建骨架
const messageSchema = new mongoose.Schema({
  msgPortait:String,
  msgName:String,
  msgTitle:String,
  create_time:String
});
//创建模型 
/**
 * 第一个产生为数据库的集合，第二个为骨架
 * 
 */
const messages = mongoose.model('messages', messageSchema);

module.exports=messages;
