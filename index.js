const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3000;

//Express Middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world');
});

routerApi(app);

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
