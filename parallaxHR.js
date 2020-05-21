window.addEventListener('scroll', function(e){

  const target = this.document.querySelectorAll('.scrollhr');

    var i = 0;
    var l = target.length;

    for (i; i<l; i++){
      var pos = window.pageYOffset * target[i].dataset.rate;
      var y = window.pageYOffset;
      target[i].style.transform = 'translate3d('+pos+'px, '+y+'px, 0px)';
    }
  }
);