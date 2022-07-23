const getData = async (url) => {
  const res = await fetch(url)
  const data = await res.json();
  // console.log(data);
  return data;
}
// const bar_mon = document.getElementById('bar_mon');
const amount_mon = document.getElementById('amount_mon');
const amount_tue = document.getElementById('amount_tue');
const amount_wed = document.getElementById('amount_wed');
const amount_thu = document.getElementById('amount_thu');
const amount_fri = document.getElementById('amount_fri');
const amount_sat = document.getElementById('amount_sat');
const amount_sun = document.getElementById('amount_sun');
(async () => {
  try {
    const dates = await getData('./data.json');
    amount_mon.innerText = `$${dates[0].amount}`;
    amount_tue.innerText = `$${dates[1].amount}`;
    amount_wed.innerText = `$${dates[2].amount}`;
    amount_thu.innerText = `$${dates[3].amount}`;
    amount_fri.innerText = `$${dates[4].amount}`;
    amount_sat.innerText = `$${dates[5].amount}`;
    amount_sun.innerText = `$${dates[6].amount}`;
    // bar_mon.addEventListener('onmouseover', (event) =>{
    //   event.t
    // })
    console.log(dates[0].amount)
  } catch (error) {
    console.error(error);
  }
})();