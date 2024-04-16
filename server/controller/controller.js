const user = require('../model/user');
const FAQ = require('../model/faq');
const passport = require('passport');
const localStrategy = require("passport-local");

passport.use(new localStrategy(user.authenticate()));

const registerUser = async (req, res) => {
    
    const userData = new user({
        username: req.body.username, // username comes from the name given in the form(index.ejs(basically while creating the account))
        email: req.body.email,
        password: req.body.password,
    });

    try {
        await user.register(userData, req.body.password) // register creates the account with userdata and password, it returns a promise which is handled by .then funtion
        passport.authenticate("local") (req, res, function() {
            res.redirect("/")
        })
    } catch (error) {
        res.status(500).json(error.message);
    }
    
};

const loginUser = async(req, res) => {
    try {
       await passport.authenticate("local", { // passport.authenticate : this means login in on the basis of password and username
            successRedirect: "/",
            failureRedirect: "/login"
        }), function() { res.json("hieeee");}
    } catch (error) {
        res.status(500).json(error.message);
    }

}

// Get all  the tasks
const getAllFaq = async (req, res) => {
    // we use try and catch for error handling, if no error run try code and if any error it runs catch code
    try { 
        const faq = await FAQ.find(); // .find is a mongodb function for getting the data
        res.json(faq); // to show the data on the frontend
        res.status(200).json('all the faq');
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// create new task
const createNewFaq = async (req, res) => {
    // we make use of postman(as a frontend) for api req
    const faq = new FAQ({ // creating a new task by the data from frontend(req)
        question: req.body.question,
        answer: req.body.answer,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt
    });

    try {
        const a1 = await faq.save(); // saving the data in the database
        res.json(a1); 
        res.status(200).json('new faq added');
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// get particular task by id
const getFaqById = async (req, res) => {
    try {
        const faq = await FAQ.findById(req.params.id); // we make use of findById (mongodb function) to get particular task

        if (!faq) { // if task is not present then we send message saying task not found
            return res.status(404).json({ message: 'faq not found' });
        }

        res.json(faq);
        res.status(200).json('faq by id');
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// update task 
const updateFaq = async (req, res) => {
    try {
        const faq = await FAQ.findById(req.params.id); // finding the task

        if (!faq) {
            return res.status(404).json({ message: 'faq not found' });
        }
      
        // if task found update desired data
        faq.question = req.body.question || faq.question;
        faq.answer = req.body.answer || faq.answer;
        faq.updatedAt = Date.now();
    
        const updatedFAQ = await faq.save(); // saving the updated data/task
        res.json(updatedFAQ);
        res.status(200).json('faq updated');
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// delete task
const deleteFaq = async (req, res) => {
    try {
        const faq = await FAQ.findById(req.params.id); // finding the task by id

        if (!faq) {
            return res.status(404).json({ message: 'faq not found' });
        }

        const a1 = await faq.deleteOne(); // deleteing the task
        res.json(a1);
        res.status(200).json('faq deleted');
    } catch (error) {
        res.status(500).json(error.message);
    }
};

module.exports = {
    registerUser,
    loginUser,
    getAllFaq,
    createNewFaq,
    getFaqById,
    updateFaq,
    deleteFaq
};