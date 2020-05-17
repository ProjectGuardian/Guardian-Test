const express = require('express');

const app = express();

app.use(express.static('./dist/guardian-test'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/guardian-test/'}),
);

app.listen(process.env.PORT || 8080);