const dotenv = require('dotenv');
dotenv.config();
const logger = require('./logger');
const express = require('express');
const CoordsRouter = require('./routes/coords');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    return res.sendStatus(200);
});

app.use('/coords', CoordsRouter);

app.listen(PORT, () => {
    logger.info(`Server is running on PORT: ${PORT}`);
});