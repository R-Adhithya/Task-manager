const express = require('express')
const router = express.Router()
const {getAlltasks,createTask,getTask,updatetask,deletetask} = require('../controllers/tasks')

router.route('/').get(getAlltasks).post(createTask)
router.route('/:id').get(getTask).patch(updatetask).delete(deletetask)
module.exports = router