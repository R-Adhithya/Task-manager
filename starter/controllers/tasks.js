const Task = require("../models/Task")
const getAlltasks = async(req,res) => {
    try{
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}

const createTask = async (req,res)=>{
    try{
        const task = await Task.create(req.body)
        res.status(201).json({task})
    }catch(error){
        res.status(500).json({"msg":error});
    }
}
const getTask = async (req, res) => {
    try {
      const { id: taskID } = req.params
      const task = await Task.findOne({ _id: taskID });
  
      if (!task) {
        return res.status(404).json({ msg: `No task with ID : ${taskID}` })
      }
  
       res.status(200).json({ task })
    } catch (error) {
       res.status(500).json({ msg: error })
    }
  }

const updatetask = async (req,res)=>{
    try{
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{new:true,runValidators:true})
        if(!task){
            return res.status(404).json({"msg":`No task with id: ${taskID}`})
        }
        res.status(200).json({id:taskID,data:req.body})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}

const deletetask = async (req,res)=>{
    try{
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`No task with id: {${taskID}}`})
        }
        res.status(200).json({task})
    }catch(error){
        res.status(500).json({msg:error})
    }
}

module.exports = {getAlltasks,createTask,getTask,updatetask,deletetask}