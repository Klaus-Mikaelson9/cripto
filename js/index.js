const select = function () {
    const selects = document.querySelectorAll('.select');
  
    selects.forEach(select => {
      const selectHeader = select.querySelector('.select__header');
      const selectItems = select.querySelectorAll('.select__item');
      const currentText = select.querySelector('.select__current');
  
      selectHeader.addEventListener('click', function () {
        select.classList.toggle('is-active');
      });
  
      selectItems.forEach(item => {
        item.addEventListener('click', function () {
          currentText.innerText = item.innerText;
          select.classList.remove('is-active');
        });
      });
    });
};
  
select();
  