const express = require('express');
const routerApi = require('./routes');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/errorHandler');
const app = express();
const port = 3000;

//Express Middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world');
});

routerApi(app);

//Los middlewares de tipo error se definen despues de iniciar el app
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
