const counter = document.querySelectorAll('.slider__counts');

const checkCounter = () => {
  if (counter) {
    counter.forEach( (count) => {
      const num = count.querySelector('.slider__count-add');
      count.querySelector('.slider__count--min').addEventListener('click', () => {
        if (num.textContent > 1) {
          num.textContent--;
        }
      })
      count.querySelector('.slider__count--plus').addEventListener('click', () => {
        if (num.textContent < 100) {
          num.textContent++;
        }
      })
    })
  }
}

export {checkCounter};
