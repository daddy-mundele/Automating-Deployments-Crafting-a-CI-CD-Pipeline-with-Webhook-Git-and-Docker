const express = require('express');
const app = express();
const port = 3000;  // You can change this port if needed

app.use(express.json());

app.post('/webhook-endpoint', (req, res) => {
  // Log incoming request
  console.log('Received webhook request:', req.body);

  // Your webhook handling logic here...

  res.status(200).send('Webhook received successfully');
});

app.listen(port, () => {
  console.log(`Server is listening at http://127.0.0.1:${port}`);
});
