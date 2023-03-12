const express = require('express');
const cors = require('cors');
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
//Iniciar el middleware para cors y habilitar cualquier origen de peticiones
const whiteList = [
  'http://localhost:8080',
  'https://store-express.onrender.com',
];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) callback(null, true);
    callback(new Error('Do not allow'));
  },
};
app.use(cors(options));

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
