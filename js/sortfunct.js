function sortfunct(val){
    const sortid = val.innerHTML;
    const yr1 = document.getElementById("y2026");
    const yr2 = document.getElementById("y2025");
    const yr3 = document.getElementById("y2024");
    const yr4 = document.getElementById("prev");
    const yr1d = document.getElementById("sortyr1");
    const yr2d = document.getElementById("sortyr2");
    const yr3d = document.getElementById("sortyr3");
    const yr4d = document.getElementById("sortyr4");
    const templ2 = document.getElementById("y2025-noload");
    const templ3 = document.getElementById("y2024-noload");
    const templ4 = document.getElementById("prev-noload");

    if (sortid == 2026) {
      yr1.style.display = 'block';
        yr1d.style.backgroundColor = '#004080';
        yr1d.style.color = '#ffffff';
      [yr2, yr3, yr4].forEach(yr => {
          yr.style.display = 'none';
        });
      [yr2d, yr3d, yr4d].forEach(yrd => {
          yrd.style.backgroundColor = '#ffffff';
          yrd.style.color = '#004080';
        });
    } else if (sortid == 2025) {
      yr2.style.display = 'block';
        yr2d.style.backgroundColor = '#004080';
        yr2d.style.color = '#ffffff';
        if (yr2.innerHTML == '') {
          yr2.appendChild(templ2.content.cloneNode(true));
        };
      [yr1, yr3, yr4].forEach(yr => {
          yr.style.display = 'none';
        });
      [yr1d, yr3d, yr4d].forEach(yrd => {
          yrd.style.backgroundColor = '#ffffff';
          yrd.style.color = '#004080';
        });
    } else if (sortid == 2024) {
      yr3.style.display = 'block';
        yr3d.style.backgroundColor = '#004080';
        yr3d.style.color = '#ffffff';
        if (yr3.innerHTML == '') {
          yr3.appendChild(templ3.content.cloneNode(true));
        };
      [yr1, yr2, yr4].forEach(yr => {
          yr.style.display = 'none';
        });
      [yr1d, yr2d, yr4d].forEach(yrd => {
          yrd.style.backgroundColor = '#ffffff';
          yrd.style.color = '#004080';
        });
    } else if (sortid == 'Prev') {
      yr4.style.display = 'block';
        yr4d.style.backgroundColor = '#004080';
        yr4d.style.color = '#ffffff';
        if (yr4.innerHTML == '') {
          yr4.appendChild(templ4.content.cloneNode(true));
        };
      [yr1, yr2, yr3].forEach(yr => {
          yr.style.display = 'none';
        });
      [yr1d, yr2d, yr3d].forEach(yrd => {
          yrd.style.backgroundColor = '#ffffff';
          yrd.style.color = '#004080';
        });
    };
  };
