const getData = async (url) => {
  const res = await fetch(url)
  const data = await res.json();
  // console.log(data);
  return data;
}
(async () => {
  try {
    const dates = await getData('./data.json');
    const bar = document.getElementById('bar_mon');
    console.log('bar before',bar);
    const amount = document.getElementById('amount_mon')
    bar.addEventListener("mouseover", event => {
      event.stopPropagation();
      console.log('ok')
      amount.classList.remove('inactive');
    })

    bar.addEventListener('mouseout', event =>{
      // console.log(event);
      event.stopPropagation();
      amount.classList.add('inactive');
    })
    // console.log(dates[0].amount)
  } catch (error) {
    console.error(error);
  }
})();