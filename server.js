const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");



mongoose.connect(
process.env.MONGODB_URI || 'mongodb://localhost/budget',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}
);

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
console.log(`App running on port ${PORT}!`);
});