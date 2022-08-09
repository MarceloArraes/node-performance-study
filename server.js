const express = require('express')
const cluster = require('cluster');
const os = require('os');

const app = express()

app.get('/', (req, res) => {
  console.log('/', process.pid);
  res.send('Performance example');
});

app.get('/timer', (req, res) => {
  console.log('timer', process.pid);
  res.send('NEO, WAKE UP');
});

if (cluster.isMaster) {
  console.log('Master process started');
  console.log('os ', os.cpus(), os.cpus().length, os.hostname, os.EOL);
  const cpus = os.cpus().length;
  for (let i = 0; i < cpus; i++) {
    cluster.Worker();
  }

}else console.log('Worker process started');

app.listen(3000)