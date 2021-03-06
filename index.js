const fetch = require('node-fetch');

const INTERVAL = 30*60*1000;
const WEEKDAY = [0,1,2,3,4,5,6,7,8,19,20,21,22,23];
const WEEKEND = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

function run(url, interval=INTERVAL, weekDaySchedule=WEEKDAY, weekendSchedule=WEEKEND) {
  setTimeout(async () => {
    const now = new Date();
    const hours = now.getDay() > 0 && now.getDay() < 6 ? weekDaySchedule : weekendSchedule;
    if(!hours.includes(now.getHours())) {
      await fetch(url);
      console.log('PING!', new Date().toISOString().replace('T', ' '));
    } 
    run();
  }, interval);
}

module.exports = { run };
