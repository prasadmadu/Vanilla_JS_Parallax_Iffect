window.addEventListener('scroll', function(e){

  const target = this.document.querySelectorAll('.scroll');

    /* simple way
    var scrolled = window.pageYOffset;
    var rate = scrolled * 0.5;

    target.style.transform = 'translate3d(0px, '+rate+'px, 0px)';
    */

    //using for loop
    var i = 0;
    var l = target.length;

    for (i; i<l; i++){
      var pos = window.pageYOffset * target[i].dataset.rate;
      target[i].style.transform = 'translate3d(0px, '+pos+'px, 0px)';
    }
  }
);