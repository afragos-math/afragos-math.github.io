(function(){
      var currtime = new Date();
      const today = currtime.getFullYear()*10000+(currtime.getMonth()+1)*100+currtime.getDate();
      currtime = currtime.getHours()*100+currtime.getMinutes();
      var announcebox = document.getElementsByClassName("announceit")[0];
      var announcetxt = announcebox.children[2];
      var announcetxtmob = announcebox.children[3];
      if (today == 20260430){
        if (currtime >= 1150 && currtime < 1315){
          announcebox.style.display = 'block';
          [announcetxt, announcetxtmob].forEach(
            announce => {
              announce.innerHTML = 'Παρουσίαση, A12'
            }
          );
        };
      } else if (today == 20260326){
        if (currtime >= 1150 && currtime < 1315){
          announcebox.style.display = 'block';
          [announcetxt, announcetxtmob].forEach(
            announce => {
              announce.innerHTML = 'Η Ευστάθεια, ο δείκτης Morse μιας ελαχιστικής επιφάνειας και οι Γεωμετρικές συνέπειές τους, A12'
            }
          );
        };
      } else if (today == 20260319){
        if (currtime >= 1050 && currtime < 1215){
          announcebox.style.display = 'block';
          [announcetxt, announcetxtmob].forEach(
            announce => {
              announce.innerHTML = 'The Geometry of Fiber Bundles: Applications in Mathematics and Physics (Μέρος ΙΙΙ), A12'
            }
          );
        };
      } else if (today == 20260312){
        if (currtime >= 1150 && currtime < 1315){
          announcebox.style.display = 'block';
          [announcetxt, announcetxtmob].forEach(
            announce => {
              announce.innerHTML = 'Γεωμετρικές ερμηνείες αλγεβρικών ισομορφισμών, A12'
            }
          );
        };
      } else if (today == 20260305){
        if (currtime >= 1150 && currtime < 1315){
          announcebox.style.display = 'block';
          [announcetxt, announcetxtmob].forEach(
            announce => {
              announce.innerHTML = 'The Geometry of Fiber Bundles: Applications in Mathematics and Physics (Μέρος ΙΙ), A12'
            }
          );
        };
      } else if (today == 20260226){
        if (currtime >= 1150 && currtime < 1315){
          announcebox.style.display = 'block';
          [announcetxt, announcetxtmob].forEach(
            announce => {
              announce.innerHTML = 'The Geometry of Fiber Bundles: Applications in Mathematics and Physics (Μέρος Ι), A12'
            }
          );
        };
      } else {
        announcebox.style.display = 'none';
      }
    })();
