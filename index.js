const getData = async (url) => {
  const res = await fetch(url)
  const data = await res.json();
  // console.log(data);
  return data;
}
(async () => {
  try {
    const dates = await getData('./data.json');
    const bar = document.getElementById('bar_tue');

    bar.addEventListener("mouseover", event => {
      const container = event.target;
      const amount = document.createElement('div');
      const text = document.createTextNode(dates[0].amount);
      amount.classList.add('amount');
      amount.setAttribute('id', 'amount_mon');
      amount.appendChild(text);
      container.appendChild(amount);
      console.log(container);
    })
    bar.addEventListener('mouseout', event =>{
      event.target.innerText = ''
      console.log(event.target);
    })
    console.log(dates[0].amount)
  } catch (error) {
    console.error(error);
  }
})();