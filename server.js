const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.disable('x-powered-by');
app.use(express.json());
app.all('*', (req, res) => {
    const {method, url, headers, query, body} = req;
    res.status(query.fail || 200).set('x-echo', 'true').send({method, url, headers, query, body})
})

app.listen(port, () => {
  console.log(`Echo server listening at http://localhost:${port}`)
})

