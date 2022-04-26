const art = require('ascii-art');
const Data = require('./data/index');

art.font(
  Data.greets[Math.floor(Math.random() * Data.greets.length)],
  'doom',
  (err, rendered) => {
  console.log(rendered);
});