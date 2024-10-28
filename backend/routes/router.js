const express=require('express')
const router=express.Router()

const addTodo=require("../control/userCtrl")

router.route("/todo").post(addTodo)


module.exports=router