const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Performance example');
});

app.get('/timer', (req, res) => {
  res.send('NEO, WAKE UP');
});

/* if (cluster.isMaster) {
  console.log('Master process started');
  console.log('os ', os.cpus(), os.cpus().length, os.hostname, os.EOL);
  const cpus = os.cpus().length;
  for (let i = 0; i < cpus; i++) {
    cluster.Worker();
  }

}else console.log('Worker process started'); */

app.listen(3000)