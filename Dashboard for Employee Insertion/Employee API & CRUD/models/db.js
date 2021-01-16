const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://saurabh39:tC6rpoyzusg3NuPO@cluster0.qwttm.mongodb.net/InfoDB?retryWrites=true&w=majority', 
{ useNewUrlParser: true,useUnifiedTopology: true }, 




 (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');