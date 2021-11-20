const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));
app.use(express.json())
app.use(require('morgan')('tiny'));
app.use("/api/v1/tasks", require("./routes/tasks.route"))
app.use(require("./middlewares/notFound"));
app.use(require("./middlewares/error-handler").errorHandlerMiddleware)

require('./database/connection')()
        .then(() => app.listen(PORT, () => console.log(`Server is running on ${PORT}`)))
        .catch((err) => console.log("Error :: Connection DB", err))
