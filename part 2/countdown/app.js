const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];


const giveways =document .querySelector(".giveway");
const  count =document.querySelector(".countbox");
const countBox = document.querySelectorAll(".countbox1 h4")

let futureData = new Date(2021,11,15,6,38,0);
// console.log(futureData); 

const year = futureData.getFullYear();
const hours = futureData.getHours();
const mints = futureData.getMinutes();
const data = futureData.getDate();

let month = futureData.getMonth();

month = months[month]

const weekday = weekdays[futureData.getDay()];
// console.log(weekday)

giveways.textContent = `Giveways end on ${weekday} ${data} ${month} ${year} ${hours}:${mints}am `;



const futureTime = futureData.getTime();

function getReminingTime(){
  const today = new Date().getTime();
  const t =   today - futureData ; 
  // console.log(t)

  const oneDay = 24*60*60*1000;
  const onehours = 60*60*1000;
  const oneMin = 60*1000; 
  let day = t/oneDay;
  day = Math.floor(day);
  let hours = Math.floor((t % oneDay) / onehours);
  let minutes = Math.floor((t % onehours) / oneMin);
  let seconds = Math.floor((t % oneMin) / 1000);
  const values = [day, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  countBox.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    countBox.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }

}
let countdown = setInterval(getReminingTime, 1000);
//set initial values

getReminingTime();
