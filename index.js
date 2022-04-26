const art = require('ascii-art');
const Data = require('./data/index');

art.font(Data.greets[0], 'doom', (err, rendered) => {
  console.log(rendered);
});