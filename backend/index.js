const express = require('express');
const app = express();
const port = 5000;
const mongoDB = require("./db");

// ✅ Body parser must come BEFORE routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

mongoDB((err, foodData, categoryData) => {
  if (err) {
    console.error('Error in callback:', err);
  }
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// ✅ Routes should come after middleware
app.use('/api', require("./Routes/CreatUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));
// app.use('/api', require("./Routes/OrderData"));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
