(function(){
      var currtime = new Date();
      const today = currtime.getFullYear()*10000+(currtime.getMonth()+1)*100+currtime.getDate();
      currtime = currtime.getHours()*100+currtime.getMinutes();
      var announcebox = document.getElementsByClassName("announceit")[0];
      var announcetxt = announcebox.children[2];
      var announcetxtmob = announcebox.children[3];
      if(today == 20260423){
        if(currtime >= 1200 && currtime < 1205){
          announcebox.style.display = 'block';
          [announcetxt, announcetxtmob].forEach(
            announce => {
              announce.innerHTML = 'Λίγα λόγια για την ημερίδα, Αμφ. 24'
            }
          );
        } else if(currtime >= 1205 && currtime < 1225){
          announcebox.style.display = 'block';
          [announcetxt, announcetxtmob].forEach(
            announce => {
              announce.innerHTML = 'Geometric Deep Learning, Αμφ. 24'
            }
          );
        } else if(currtime >= 1225 && currtime < 1250){
          announcebox.style.display = 'block';
          [announcetxt, announcetxtmob].forEach(
            announce => {
              announce.innerHTML = 'Μελέτη Εγκάρσιας Αστάθειας Σκοτεινών Σολιτονίων με Εφαρμογή Διαφορικής Γεωμετρίας, Αμφ. 24'
            }
          );
        } else if(currtime >= 1250 && currtime < 1300){
          announcebox.style.display = 'block';
          [announcetxt, announcetxtmob].forEach(
            announce => {
              announce.innerHTML = 'Σύντομο διάλλειμα'
            }
          );
        } else if(currtime >= 1300 && currtime < 1340){
          announcebox.style.display = 'block';
          [announcetxt, announcetxtmob].forEach(
            announce => {
              announce.innerHTML = 'Combinatorial Nullstellensatz'
            }
          );
        } else {
          announcebox.style.display = 'none';
        }
      }
    })();
