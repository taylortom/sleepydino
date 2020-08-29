const fetch = require('node-fetch');

const INTERVAL = 30*60*1000;
const WEEKDAY = [0,1,2,3,4,5,6,7,8,19,20,21,22,23];
const WEEKEND = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

function run() {
  const now = new Date();
  const hours = now.getDay() > 0 && now.getDay() < 6 ? WEEKDAY : WEEKEND;
  if(!hours.includes(now.getHours())) setTimeout(() => fetch("http://reactions.tomtaylor.name").then(run), INTERVAL);
}

module.exports = run();