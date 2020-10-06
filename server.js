const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const path = require('path');

app.use(express.json({ extended: false }));
connectDB();

app.use(cors());

const PORT = process.env.PORT || 5000;

app.use(require('./Routes/order'));
app.use(require('./Routes/auth'));
app.use(require('./Routes/food'));
// yeh sab upar rehna chahiye tha, mene if condition ke neeche paste kiya tha ok ok wait ha

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
// i'll become dumb try not to
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
