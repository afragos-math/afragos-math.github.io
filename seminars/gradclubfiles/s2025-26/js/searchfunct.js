(function(){
      const q = document.getElementById('q');
      const noresval = 0;
      const nores = document.getElementById('nores');
      const speakerSelect = document.getElementById('filterSpeaker');
      const tagSelect = document.getElementById('filterTag');
      const list = document.getElementById('programList');

      const present = Array.from(list.querySelectorAll('.present'));

      const speakers = [...new Set(present.map(t => t.dataset.speaker).filter(Boolean))].sort();
      speakers.forEach(s => {
        const opt = document.createElement('option'); opt.value = s; opt.textContent = s; speakerSelect.appendChild(opt);
      })

      function filter(){
        const txt = q.value.trim().toLowerCase();
        const speaker = speakerSelect.value;
        const tag = tagSelect.value;

        nores.style.display = 'none'

        present.forEach(t => {
          const title = (t.querySelector('.presentinfoR .presentinfoR1')?.textContent || '').toLowerCase();
          const sp = (t.dataset.speaker || '').toLowerCase();
          const tags = (t.dataset.tags || '').toLowerCase();

          const matchesText = !txt || title.includes(txt) || sp.includes(txt);
          const matchesSpeaker = !speaker || (t.dataset.speaker === speaker);
          const matchesTag = !tag || tags.split(',').includes(tag);

          if(matchesText && matchesSpeaker && matchesTag){
            t.style.display = '';
          } else {
            t.style.display = 'none';
            nores.style.display = 'block';
          }
        })
      }

      q.addEventListener('input', filter);
      speakerSelect.addEventListener('change', filter);
      tagSelect.addEventListener('change', filter);

      present.forEach(t => { t.tabIndex = 0; });
    })();
