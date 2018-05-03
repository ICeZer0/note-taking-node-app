import {express} from 'express';
import {bodyParser} from 'body-parser';

const app = express();

//parse requests type app/www-form-url & json
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/',(request, response) => { 
    response.json({"message": "Welcome to NoteTaker. Easily organize and store your notes"});
});

app.list(3000, () => {
    console.log("Server is listening on port 3000")
});

