const express = require('express')

const app = express()

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {
    //event loop blocked.
    console.log('on loop');
  }
  return;
}

app.get('/', (req, res) => {
  res.send('Performance example');
});

app.get('/timer', (req, res) => {
  delay(9000);
  res.send('NEO, WAKE UP');
});

app.listen(3000)