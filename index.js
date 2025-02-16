const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Node.js/Express on Kubernetes!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
