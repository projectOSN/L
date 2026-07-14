// ============================================================
// Forest Piano — Team Profile Accordion
// Versi vanilla JS dari komponen React "interactive image accordion",
// disesuaikan warna/font supaya menyatu dengan tema akar berduri.
// ============================================================
(function () {
  const track = document.getElementById('teamTrack');
  if (!track) return;

  // Ganti imageUrl dengan foto staf asli kapan pun siap.
  const PROFILES = [
    { name:'Asisten Afdeling', role:'Pimpinan Afdeling', desc:'Bertanggung jawab penuh atas seluruh operasional kebun di afdeling.',
      img:'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop' },
    { name:'Mandor 1', role:'Kepala Mandor', desc:'Mengoordinasikan seluruh mandor lapangan dan melapor ke Asisten.',
      img:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop' },
    { name:'Mandor Panen 1', role:'Mandor Panen', desc:'Mengawasi proses pemanenan TBS di blok yang menjadi tanggung jawabnya.',
      img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop' },
    { name:'Mandor Panen 2', role:'Mandor Panen', desc:'Mengawasi proses pemanenan TBS di blok yang menjadi tanggung jawabnya.',
      img:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop' },
    { name:'Mandor Panen 3', role:'Mandor Panen', desc:'Mengawasi proses pemanenan TBS di blok yang menjadi tanggung jawabnya.',
      img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop' },
    { name:'Mandor Panen 4', role:'Mandor Panen', desc:'Mengawasi proses pemanenan TBS di blok yang menjadi tanggung jawabnya.',
      img:'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=800&auto=format&fit=crop' },
    { name:'Mandor Rawat 1', role:'Mandor Rawat', desc:'Mengawasi perawatan tanaman, pemupukan, dan kebersihan piringan di blok.',
      img:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop' },
    { name:'Mandor Rawat 2', role:'Mandor Rawat', desc:'Mengawasi perawatan tanaman, pemupukan, dan kebersihan piringan di blok.',
      img:'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=800&auto=format&fit=crop' },
    { name:'Mandor Rawat 3', role:'Mandor Rawat', desc:'Mengawasi perawatan tanaman, pemupukan, dan kebersihan piringan di blok.',
      img:'https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=800&auto=format&fit=crop' },
    { name:'Mandor Rawat 4', role:'Mandor Rawat', desc:'Mengawasi perawatan tanaman, pemupukan, dan kebersihan piringan di blok.',
      img:'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=800&auto=format&fit=crop' },
    { name:'Mandor Transport 1', role:'Mandor Transport', desc:'Mengoordinasikan pengangkutan TBS dari TPH ke pabrik (PKS).',
      img:'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=800&auto=format&fit=crop' },
    { name:'Mandor Transport 2', role:'Mandor Transport', desc:'Mengoordinasikan pengangkutan TBS dari TPH ke pabrik (PKS).',
      img:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop' },
    { name:'Mandor Transport 3', role:'Mandor Transport', desc:'Mengoordinasikan pengangkutan TBS dari TPH ke pabrik (PKS).',
      img:'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=800&auto=format&fit=crop' },
    { name:'Mandor Transport 4', role:'Mandor Transport', desc:'Mengoordinasikan pengangkutan TBS dari TPH ke pabrik (PKS).',
      img:'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=800&auto=format&fit=crop' },
    { name:'Krani Afdeling', role:'Administrasi', desc:'Mengelola pencatatan produksi dan administrasi harian afdeling.',
      img:'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop' },
  ];

  let activeIndex = 0;

  function render(){
    track.innerHTML = '';
    PROFILES.forEach((p, i) => {
      const card = document.createElement('div');
      card.className = 'team-card' + (i === activeIndex ? ' active' : '');
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', p.name + ', ' + p.role);

      const img = document.createElement('img');
      img.src = p.img;
      img.alt = p.name;
      img.loading = 'lazy';
      img.addEventListener('error', () => {
        img.onerror = null;
        img.src = 'https://placehold.co/300x400/2a1d11/e8ddc4?text=Foto';
      });

      const roleTag = document.createElement('span');
      roleTag.className = 'role-tag';
      roleTag.textContent = p.role;

      const info = document.createElement('div');
      info.className = 'info';
      const name = document.createElement('div');
      name.className = 'name';
      name.textContent = p.name;
      const desc = document.createElement('div');
      desc.className = 'desc';
      desc.textContent = p.desc;
      info.appendChild(name);
      info.appendChild(desc);

      card.appendChild(img);
      card.appendChild(roleTag);
      card.appendChild(info);

      card.addEventListener('mouseenter', () => setActive(i));
      card.addEventListener('click', () => setActive(i));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(i); }
      });

      track.appendChild(card);
    });
  }

  function setActive(i){
    if (activeIndex === i) return;
    activeIndex = i;
    track.querySelectorAll('.team-card').forEach((el, idx) => {
      el.classList.toggle('active', idx === i);
    });
  }

  render();
})();
