require('./build');

const express = require('express');

const app = express();

const NODE_PORT = 1302;
const NODE_DIR_PUBLIC = 'build';

app.use(express.static(NODE_DIR_PUBLIC));

app.get('/*', (req, res) => res.sendFile('index.html', { root: NODE_DIR_PUBLIC }));

app.listen(NODE_PORT, function() {
    console.log(`[NODE] Server is listening on http://localhost:${NODE_PORT}/`);
});