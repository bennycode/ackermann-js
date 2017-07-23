const ack = require('./index');
const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;
const options = {minSamples: 100};

suite
.add('plain JavaScript', () => {
  ack(3, 0);
}, options)
.on('cycle', (event) => {
  console.log(String(event.target));
})
.on('complete', () => {
  console.log(`Fastest is ${suite.filter('fastest').map('name')}.`);
})
.run({'async': true});