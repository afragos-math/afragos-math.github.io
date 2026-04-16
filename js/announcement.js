(function(){
      var currtime = new Date();
      const today = currtime.getFullYear()*10000+(currtime.getMonth()+1)*100+currtime.getDate();
      currtime = currtime.getHours()*100+currtime.getMinutes();
      var ongoingpgc26 = Array.from(document.getElementsByClassName("pgc26"));
      var ongoingfestum26 = Array.from(document.getElementsByClassName("festum26"));
      var ongoinggradworkshop26 = Array.from(document.getElementsByClassName("gradworkshop26"));
      var ongoinggradclub4 = Array.from(document.getElementsByClassName("gradclub4"));
      var ongoingmanual = Array.from(document.getElementsByClassName("manual"));
      ongoingmanual.forEach(
        box => {
          box.style.display = 'inline-block';
        }
      );
      if(today >= 20260918 && today <=20260920){
        if(currtime >= 830 && currtime < 2030){
          ongoingpgc26.forEach(
            box => {
              box.style.display = 'inline-block';
            }
          );
        }
      };
      if(today >= 20260726 && today <= 20260801){
        if(currtime >= 830 && currtime < 2030){
          ongoingfestum26.forEach(
            box => {
              box.style.display = 'inline-block';
            }
          );
        }
      };
      if(today == 20260423){
        if(currtime >= 1130 && currtime < 1500){
          ongoinggradworkshop26.forEach(
            box => {
              box.style.display = 'inline-block';
            }
          );
        }
      };
      if(today <= 20260620){
        ongoinggradclub4.forEach(
          box => {
            box.style.display = 'inline-block';
          }
        );
      };
    })();