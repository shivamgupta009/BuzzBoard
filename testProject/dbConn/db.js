const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shivamGupta', {useNewUrlParser: true, useUnifiedTopology: true }, (err, result) => {
    if (err) {
        console.log("mongodb connection error");
        throw err;
    }
    else {
        console.log("DB connected succcessfully");
    }
});
