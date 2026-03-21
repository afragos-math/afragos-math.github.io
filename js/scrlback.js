(function() {
    let btnapp = document.getElementsByClassName("scrlbtn")[0];
    window.onscroll = function() {scrlapp()};

    function scrlapp() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btnapp.style.display = "block";
      } else {
        btnapp.style.display = "none";
      }
    }
  })();

function scrlback(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };