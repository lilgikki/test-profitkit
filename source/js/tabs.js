const items = document.querySelectorAll('.slider__item');

const removeActive = (i) => {
  const actPic = i.querySelector('.slider__img-wrapper--act');
  const actTab = i.querySelector('.slider__tab--act');

  actPic.classList.remove('slider__img-wrapper--act');
  actTab.classList.remove('slider__tab--act');
}

const changeImg = () => {
  if (items) {
    items.forEach((item) => {
      item.addEventListener('click', (e) => {
        const target = e.target;
        if (target.closest('.slider__tab--1')) {
          removeActive(item);
          item.querySelector('.slider__tab--1').classList.add('slider__tab--act');
          item.querySelector('.slider__img-wrapper--1').classList.add('slider__img-wrapper--act');
        }
        if (target.closest('.slider__tab--2')) {
          removeActive(item);
          item.querySelector('.slider__tab--2').classList.add('slider__tab--act');
          item.querySelector('.slider__img-wrapper--2').classList.add('slider__img-wrapper--act');
        }
        if (target.closest('.slider__tab--3')) {
          removeActive(item);
          item.querySelector('.slider__tab--3').classList.add('slider__tab--act');
          item.querySelector('.slider__img-wrapper--3').classList.add('slider__img-wrapper--act');
        }
        if (target.closest('.slider__tab--4')) {
          removeActive(item);
          item.querySelector('.slider__tab--4').classList.add('slider__tab--act');
          item.querySelector('.slider__img-wrapper--4').classList.add('slider__img-wrapper--act');
        }
        if (target.closest('.slider__tab--5')) {
          removeActive(item);
          item.querySelector('.slider__tab--5').classList.add('slider__tab--act');
          item.querySelector('.slider__img-wrapper--5').classList.add('slider__img-wrapper--act');
        }
      })
    })
  }
}

export {changeImg};
