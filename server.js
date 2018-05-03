import express from 'express';
import bodyParser from 'body-parser';

const app = express();

//parse requests type app/www-form-url & json
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//DB configuration
import dbConfig from './config/database.config';
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

//conenction to DB
mongoose.connect(dbConfig.url)
.then(() => { 
    console.log("Connected to database...");
}).catch(err => {
    console.log(err)
    console.log("Could not connect to database. Exiting now...");
    process.exit();
})

app.get('/',(request, response) => { 
    response.json({"message": "Welcome to NoteTaker. Easily organize and store your notes"});
});

//require notes routes
require('./app/routes/note.routes')(app);

app.listen(3000, () => {
    console.log("Server is listening on port 3000")
});

