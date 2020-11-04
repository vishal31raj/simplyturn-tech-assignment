const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(_dirname + '/dist/intershala-project'));

app.get('/*', (req,res) => {
  res.sendFile(path.join(_dirname + '/dist/intershala-project/index.html'));
});

app.listen(process.env.PORT || 8080);
