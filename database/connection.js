const mongoose = require('mongoose');
module.exports = () => {
        return mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
}

