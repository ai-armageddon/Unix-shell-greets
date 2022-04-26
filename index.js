const art = require('ascii-art');
const Data = require('./data/index');

opts = {
  // switch to randomize options to false
  // to use your consistent options
  randFont: true,
  randGreet: true
}

rand = itemArr => Math.floor(Math.random() * itemArr.length);

greet = opts.randGreet ? Data.greets[rand(Data.greets)] : "Hi"
font = opts.randGreet ? Data.fonts[rand(Data.fonts)] : "doom"

art.font(
  greet,
  font,
  (err, rendered) => {
  console.log(rendered);
});