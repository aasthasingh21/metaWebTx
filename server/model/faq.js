const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({ // creating the schema for the each task
  question: { 
    type: String, 
    required: true 
  },
  answer: { 
    type: String, 
    required: true 
  },
  createdAt: { 
    type: Date,
    default: Date.now // is for timeStamp
  },
  updatedAt: {  // for editing purposes
    type: Date, 
    default: Date.now 
  }
});
    
module.exports = mongoose.model('FAQ', faqSchema);