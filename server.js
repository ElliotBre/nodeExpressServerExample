
import express from 'express';
import path from 'path'
import {fileURLToPath} from 'url';
import {dirname} from 'path';

const app = express();
const port = process.env.PORT || 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'html/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);