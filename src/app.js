const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const { errorHandler } = require('./helpers/routeHelpers');
const apartmentsRouter = require('./routes/apartmentsRoute');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/.netlify/functions/server', apartmentsRouter);  // path must route to lambda

app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

app.use(errorHandler);

module.exports = app;
