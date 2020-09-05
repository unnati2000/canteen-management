const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
