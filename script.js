const jadwal = {
  Senin: [
    { waktu: "07.00 - 07.30", pelajaran: "Upacara", guru: "-" },
    { waktu: "07.30 - 08.30", pelajaran: "Matematika", guru: "Bu Siti" },
    { waktu: "08.30 - 09.30", pelajaran: "Bahasa Indonesia", guru: "Pak Bambang" },
    { waktu: "09.30 - 10.30", pelajaran: "IPA", guru: "Bu Lina" },
    { waktu: "10.30 - 11.30", pelajaran: "PJOK", guru: "Pak Dedi" },
  ],
  Selasa: [
    { waktu: "07.00 - 08.00", pelajaran: "IPS", guru: "Bu Endah" },
    { waktu: "08.00 - 09.00", pelajaran: "Bahasa Inggris", guru: "Pak Yusuf" },
    { waktu: "09.00 - 10.00", pelajaran: "Matematika", guru: "Bu Siti" },
    { waktu: "10.00 - 11.00", pelajaran: "Seni Budaya", guru: "Pak Tono" },
  ],
  Rabu: [
    { waktu: "07.00 - 08.00", pelajaran: "PPKN", guru: "Bu Rani" },
    { waktu: "08.00 - 09.00", pelajaran: "Bahasa Indonesia", guru: "Pak Bambang" },
    { waktu: "09.00 - 10.00", pelajaran: "Biologi", guru: "Bu Rina" },
  ],
  Kamis: [
    { waktu: "07.00 - 08.00", pelajaran: "Fisika", guru: "Pak Yanto" },
    { waktu: "08.00 - 09.00", pelajaran: "Kimia", guru: "Bu Novi" },
    { waktu: "09.00 - 10.00", pelajaran: "Matematika", guru: "Bu Siti" },
  ],
  Jumat: [
    { waktu: "07.00 - 07.30", pelajaran: "Senam Pagi", guru: "-" },
    { waktu: "07.30 - 08.30", pelajaran: "Agama", guru: "Pak Hadi" },
    { waktu: "08.30 - 09.30", pelajaran: "Bahasa Inggris", guru: "Pak Yusuf" },
  ]
};

const piket = {
  Senin: ["Aldi", "Dina"],
  Selasa: ["Budi", "Nina"],
  Rabu: ["Citra", "Rama"],
  Kamis: ["Dodi", "Siska"],
  Jumat: ["Eka", "Tomi"]
};

const daySelector = document.getElementById("daySelector");
const scheduleDiv = document.getElementById("schedule");
const piketDiv = document.getElementById("piket");

function tampilkanJadwal(hari) {
  scheduleDiv.innerHTML = "<h2>📅 Jadwal Pelajaran " + hari + "</h2>";
  jadwal[hari].forEach(item => {
    scheduleDiv.innerHTML += `
      <div class="schedule-item">
        <strong>${item.waktu}</strong><br/>
        Pelajaran: ${item.pelajaran}<br/>
        Guru: ${item.guru}
      </div>`;
  });

  piketDiv.innerHTML = `<h2>🧹 Jadwal Piket</h2>
    <div class="piket-item">${piket[hari].join(", ")}</div>`;
}

daySelector.addEventListener("change", e => tampilkanJadwal(e.target.value));

// tampilkan default hari Senin
tampilkanJadwal("Senin");