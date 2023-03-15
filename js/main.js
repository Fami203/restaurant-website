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

if(document.getElementById('counter')){


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


}


const bookBtn = document.querySelector('.header__main-nav-linkbtn');
const book = document.querySelector('.table-booking');
const bg_dark = document.querySelector('.bg-wrapper');
const bookBtnClose = document.querySelector('.table-booking__btn');

if(document.querySelector('.header__main-nav-linkbtn')) {

    bookBtn.addEventListener('click', function(){
        book.classList.toggle('table-booking--close')
        bg_dark.classList.toggle('bg-wrapper--dark')
    }
    )
    
    bookBtnClose.addEventListener('click', function(){
        book.classList.add('table-booking--close')
        bg_dark.classList.remove('bg-wrapper--dark')
    })
    
    }


 
    if (document.querySelector('.header__menu-choseitem-basket')) {
        const counterPurchase = document.querySelector('.header__main-purchase-count');
        let counterPurchaseText = counterPurchase.textContent;
        const btnPurchase = document.querySelectorAll('.header__menu-choseitem-basket');

   btnPurchase.forEach(function(item) {
       item.addEventListener('click', function() {
        counterPurchase.classList.remove('none') 
       counterPurchaseText++;
       counterPurchase.textContent = counterPurchaseText;
     })
   })
 }



 