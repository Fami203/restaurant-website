$(function () {
    if(document.querySelector('.header__menu-chose__wrapper')) {
        var mixer = mixitup('.header__menu-chose__wrapper', {
            load: {
                filter: '.category-1'
            }
        })
    }

})


const btnmenu = document.querySelector('.header__main-burger')
const menublock = document.querySelector('.menu-open')
const showbody = document.querySelector('.showbody')
const closebtn = document.querySelector('.menu-close')

btnmenu.addEventListener('click', function() {
    menublock.classList.toggle('none');
    showbody.classList.toggle('none')
})

if(closebtn){
closebtn.addEventListener('click', function() {
    menublock.classList.toggle('none');
    showbody.classList.toggle('none')
})
}


function incrementValue() {
    let value = parseInt(document.getElementById('counter').value, 10);
    value = isNaN(value) ? 1 : value;
    value++;
    document.getElementById('counter').value = value;
  }
  
  function decrementValue() {
    let value = parseInt(document.getElementById('counter').value, 10);
    value = isNaN(value) ? 1 : value;
    value < 2 ? value = 1 : '';
    value--;
    document.getElementById('counter').value = value;
  }


