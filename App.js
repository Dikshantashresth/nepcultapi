const express = require('express');
const app = express();
const rateLimit = require('express-rate-limit'); 
const placeRouter = require('./Router'); 
const cors = require('cors')
app.use(cors());
const limiter = rateLimit({
    windowMs: 60 * 1000, 
    max: 100,         
    message: "Too many requests. Try again after a minute."
});


app.use('/places', limiter, placeRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
