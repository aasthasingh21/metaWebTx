const express = require('express');
const router = express.Router();
const taskControllers = require('../controller/controller');

router.post('/register', taskControllers.registerUser);

router.post('/login', taskControllers.loginUser);

router.get('/', taskControllers.getAllFaq); // to get all the tasks (READ)

router.post('/', taskControllers.createNewFaq); // for creating new tasks (CREATE)

router.get('/:id', taskControllers.getFaqById); // to get particular task using its id

router.patch('/:id', taskControllers.updateFaq); // to edit/update the data (UPDATE)

router.delete('/:id', taskControllers.deleteFaq); // to delete the task (DELETE)

module.exports = router;