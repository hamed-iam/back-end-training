const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { notFound, errorHandler } = require('./middleware');
require('dotenv').config();

const app = express();
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(helmet());
app.use(morgan('common'));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'HELLLOOO THEREE FROM HAMED !',
  });
});

app.use(notFound);

app.use(errorHandler);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
