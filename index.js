const getData = async (url) => {
  const res = await fetch(url)
  const data = await res.json();
  // console.log(data);
  return data;
}
(async () => {
  try {
    const dates = await getData('./data.json');
    // dates.forEach(element => {
    //   console.log(element);
    // });

    //Elements
    const bar_mon = document.getElementById('bar_mon');
    const bar_tue = document.getElementById('bar_tue');
    const bar_wed = document.getElementById('bar_wed');
    const bar_thu = document.getElementById('bar_thu');
    const bar_fri = document.getElementById('bar_fri');
    const bar_sat = document.getElementById('bar_sat');
    const bar_sun = document.getElementById('bar_sun');

    const amount_mon = document.getElementById('amount_mon');
    const amount_tue = document.getElementById('amount_tue');
    const amount_wed = document.getElementById('amount_wed');
    const amount_thu = document.getElementById('amount_thu');
    const amount_fri = document.getElementById('amount_fri');
    const amount_sat = document.getElementById('amount_sat');
    const amount_sun = document.getElementById('amount_sun');

    const text_mon = document.createTextNode(dates[0].amount);
    const text_tue = document.createTextNode(dates[1].amount);
    const text_wed = document.createTextNode(dates[2].amount);
    const text_thu = document.createTextNode(dates[3].amount);
    const text_fri = document.createTextNode(dates[4].amount);
    const text_sat = document.createTextNode(dates[5].amount);
    const text_sun = document.createTextNode(dates[6].amount);

    amount_mon.appendChild(text_mon);
    amount_tue.appendChild(text_tue);
    amount_wed.appendChild(text_wed);
    amount_thu.appendChild(text_thu);
    amount_fri.appendChild(text_fri);
    amount_sat.appendChild(text_sat);
    amount_sun.appendChild(text_sun);

    // Mouseover Listeners
    bar_mon.addEventListener("mouseover", event => {
      event.stopPropagation();
      amount_mon.classList.remove('inactive');
    });
    bar_tue.addEventListener("mouseover", event => {
      event.stopPropagation();
      amount_tue.classList.remove('inactive');
    });
    bar_wed.addEventListener("mouseover", event => {
      event.stopPropagation();
      amount_wed.classList.remove('inactive');
    });
    bar_thu.addEventListener("mouseover", event => {
      event.stopPropagation();
      amount_thu.classList.remove('inactive');
    });
    bar_fri.addEventListener("mouseover", event => {
      event.stopPropagation();
      amount_fri.classList.remove('inactive');
    });
    bar_sat.addEventListener("mouseover", event => {
      event.stopPropagation();
      amount_sat.classList.remove('inactive');
    });
    bar_sun.addEventListener("mouseover", event => {
      event.stopPropagation();
      amount_sun.classList.remove('inactive');
    });

    // Mouseout Listeners
    bar_mon.addEventListener('mouseout', event =>{
      event.stopPropagation();
      amount_mon.classList.add('inactive');
    })
    bar_tue.addEventListener('mouseout', event =>{
      event.stopPropagation();
      amount_tue.classList.add('inactive');
    })
    bar_wed.addEventListener('mouseout', event =>{
      event.stopPropagation();
      amount_wed.classList.add('inactive');
    })
    bar_thu.addEventListener('mouseout', event =>{
      event.stopPropagation();
      amount_thu.classList.add('inactive');
    })
    bar_fri.addEventListener('mouseout', event =>{
      event.stopPropagation();
      amount_fri.classList.add('inactive');
    })
    bar_sat.addEventListener('mouseout', event =>{
      event.stopPropagation();
      amount_sat.classList.add('inactive');
    })
    bar_sun.addEventListener('mouseout', event =>{
      event.stopPropagation();
      amount_sun.classList.add('inactive');
    })
  } catch (error) {
    console.error(error);
  }
})();