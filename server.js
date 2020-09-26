const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

app.use(express.json({ extended: false }));
connectDB();

app.use(cors());

app.use(require('./Routes/order'));
app.use(require('./Routes/auth'));
app.use(require('./Routes/food'));

app.use(
  cors({
    origin: 'http://localhost:5000',
  })
);

const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.send('done!');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
