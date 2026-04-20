(function(){
      var currtime = new Date();
      const today = currtime.getFullYear()*10000+(currtime.getMonth()+1)*100+currtime.getDate();
      currtime = currtime.getHours()*100+currtime.getMinutes();
      var announcebox = document.getElementsByClassName("announceit")[0];
      var announcetxt = announcebox.children[2];
      var announcetxtmob = announcebox.children[3];
      if(today == 20260423){
        if(currtime >= 1150 && currtime < 1205){
          announcebox.style.display = 'block';
          [announcetxt, announcetxtmob].forEach(
            announce => {
              announce.innerHTML = 'Λίγα λόγια για την ημερίδα, A32'
            }
          );
        } else if(currtime >= 1205 && currtime < 1225){
          announcebox.style.display = 'block';
          [announcetxt, announcetxtmob].forEach(
            announce => {
              announce.innerHTML = 'Geometric Deep Learning, A32'
            }
          );
        } else if(currtime >= 1225 && currtime < 1250){
          announcebox.style.display = 'block';
          [announcetxt, announcetxtmob].forEach(
            announce => {
              announce.innerHTML = 'Μελέτη Εγκάρσιας Αστάθειας Σκοτεινών Σολιτονίων με Εφαρμογή Διαφορικής Γεωμετρίας, A32'
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
              announce.innerHTML = 'The Combinatorial Nullstellensatz and some applications in classical problems, A32'
            }
          );
        } else if(currtime >= 1340 && currtime < 1400){
          announcebox.style.display = 'block';
          [announcetxt, announcetxtmob].forEach(
            announce => {
              announce.innerHTML = 'Θεωρία Galois πάνω από σώματα χαρακτηριστικής p>0, A32'
            }
          );
        } else if(currtime >= 1400 && currtime < 1410){
          announcebox.style.display = 'block';
          [announcetxt, announcetxtmob].forEach(
            announce => {
              announce.innerHTML = 'Σύντομο διάλλειμα'
            }
          );
        } else if(currtime >= 1410 && currtime < 1415){
          announcebox.style.display = 'block';
          [announcetxt, announcetxtmob].forEach(
            announce => {
              announce.innerHTML = 'Θεωρίες Μάθησης στην Γνωστική Ψυχολογία, Α32'
            }
          );
        } else if(currtime >= 1415 && currtime < 1445){
          announcebox.style.display = 'block';
          [announcetxt, announcetxtmob].forEach(
            announce => {
              announce.innerHTML = 'Cuntz`s Rose: A First Glimpse at Graph Algebras, A32'
            }
          );
        } else if(currtime >= 1445 && currtime < 1450){
          announcebox.style.display = 'block';
          [announcetxt, announcetxtmob].forEach(
            announce => {
              announce.innerHTML = 'Λήξη της ημερίδας, A32'
            }
          );
        } else {
          announcebox.style.display = 'none';
        }
      }
    })();
