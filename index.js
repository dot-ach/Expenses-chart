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
    // const 

    bar.addEventListener("mouseover", event => {
      const container = document.getElementById('bar-container')
      container.innerHTML = ''
      console.log(container);
      const amount = document.createElement('div');
      const text = document.createTextNode(dates[0].amount);
      amount.classList.add('amount');
      amount.setAttribute('id', 'amount_mon');
      amount.appendChild(text);
      container.appendChild(amount);

      const bar = document.createElement('div');
      bar.classList.add('graph-bar_mon')
      bar.setAttribute('id', 'bar_mon')
      container.appendChild(bar);

      const paragraph = document.createElement('p')
      const textDay = document.createTextNode('mon')
      paragraph.appendChild(textDay);

      container.appendChild(paragraph);
    })
    bar.addEventListener('mouseout', event =>{
      event.target.innerHTML = `<div class="graph-bar_container" id="bar-container">
      <div class="graph-bar_mon" id="bar_mon"></div>
      <p>mon</p>`
      console.log(event.target);
    })
    console.log(dates[0].amount)
  } catch (error) {
    console.error(error);
  }
})();