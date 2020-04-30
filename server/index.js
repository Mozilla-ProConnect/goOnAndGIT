// const Express = require('express');
// const path = require('path');
// const parser = require('body-parser');

// const app = express();
// const port = 3000;

// app.use(parser.json());
// app.use(parser.urlencoded({extended: true}));

// app.use(Express.static(path.join(__dirname, '/../client/dist')));

// app.listen(port,() => console.log(`Server is up on ${port}`));

const Express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const db = require('../db/index.js');
// const router = require('./router.js');
// const schema = require('../db/schema.js')



const app = Express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(Express.static(path.join(__dirname, '/../client/dist')));

app.listen(port, () => {console.log(`Server is up on Port ${port}!`)});
