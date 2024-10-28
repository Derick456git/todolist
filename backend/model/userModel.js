const moongose = require("mongoose")
const todoSchema = new moongose.Schema({
    title:{type:String},
    description:{type:String},
    startDate:{type:String},
    startTime:{type:String},
},{timestamps:true});

const todoModel = moongose.model('todo_tbl', todoSchema)

module.exports=todoModel