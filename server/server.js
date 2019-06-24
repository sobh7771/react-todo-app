const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, '../build');
const port = process.env.PORT || 5000;

app.use(express.static(publicPath));

app.listen(port, console.log(`Server is up on port ${port}`));