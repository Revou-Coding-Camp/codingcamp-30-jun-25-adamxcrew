<script>
  function tampilkanHalaman(id) {
    const semuaHalaman = document.querySelectorAll('.halaman');
    semuaHalaman.forEach(halaman => halaman.classList.remove('aktif'));
    const halamanAktif = document.getElementById(id);
    if (halamanAktif) {
      halamanAktif.classList.add('aktif');
    }
  }

  function kirimPesan(event) {
    event.preventDefault();
    const nama = document.getElementById('nama').value;
    const pesan = document.getElementById('pesan').value;
    document.getElementById('respon').textContent = `Terima kasih, ${nama}, pesan Anda telah dikirim!`;
    document.getElementById('nama').value = '';
    document.getElementById('pesan').value = '';
  }

  function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  
    const button = document.getElementById('darkModeBtn');
    if (body.classList.contains('dark-mode')) {
      button.textContent = '☀️ Light Mode';
    } else {
      button.textContent = '🌙 Dark Mode';
    }
  }

</script>