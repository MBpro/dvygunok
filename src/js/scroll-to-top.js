const body = document.querySelector('body');

function showButton(){
  if (window.pageYOffset > body.clientWidth) { //если значение прокрутки больше чем высота экрана то удаляем класс hidden в которм в css установлено display="none"
    scrollToTopBtn.classList.remove('hidden');
  }else if(window.pageYOffset < body.clientWidth && !scrollToTopBtn.classList.contains('hidden')){ //если значение прокрутки меньше чем высота экрана и отсутствует класс hidden то добавляем класс hidden в которм в css установлено display="none"
    scrollToTopBtn.classList.add('hidden');
  }
}

function scrollToTop(){
  window.scrollTo(0, 0);
}

window.addEventListener('scroll',showButton);
scrollToTopBtn.addEventListener('click',scrollToTop); 


