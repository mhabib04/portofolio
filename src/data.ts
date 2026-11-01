// Semua teks dan tautan portofolio ada di sini.
// Tautan yang masih kosong ("") otomatis tidak ditampilkan.

export const profile = {
  logo: "Habib",
  name: "Muhammad Habib",
  role: "IT & Software Developer",
  description:
    "Lulusan Teknik Informatika UIN Sultan Syarif Kasim Riau tahun 2026. Saat ini bekerja sebagai Pengelola Data dan Informasi di RSUD Pasaman Barat, dengan tanggung jawab mengelola SIMRS, mengembangkan sistem internal, dan memberikan dukungan teknis. Berpengalaman mengembangkan aplikasi Android dengan Kotlin serta aplikasi web dengan Laravel.",
  // Taruh foto di folder public, lalu isi misalnya "/foto.jpg"
  photo: "/foto.jpg",
  // Taruh CV di folder public dengan nama cv.pdf
  cv: "/cv.pdf",
  email: "mhabib180404@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammad-habib-890141387",
  github: "https://github.com/mhabib04",
};

export const navLinks = [
  { label: "Pengalaman", href: "#pengalaman" },
  { label: "Proyek", href: "#proyek" },
  { label: "Tech", href: "#tech" },
  { label: "Kontak", href: "#kontak" },
];

export type Experience = {
  title: string;
  org: string;
  type: string;
  start: string;
  end: string;
  points: string[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    title: "Pengelola Data dan Informasi",
    org: "RSUD Pasaman Barat",
    type: "Pegawai Kontrak",
    start: "Agustus 2026",
    end: "Sekarang",
    points: [
      "Mengelola dan memelihara SIMRS (SIMGOS Kemenkes) yang digunakan untuk operasional layanan rumah sakit",
      "Mengembangkan sistem pemanggilan antrean apotek berbasis web dengan PHP native untuk menggantikan pemanggilan manual menggunakan mikrofon",
      "Memberikan dukungan IT sehari-hari, meliputi instalasi ulang sistem operasi, penanganan kendala ringan printer, serta penyiapan perangkat pendukung kegiatan",
    ],
    tags: ["SIMGOS", "PHP", "MySQL", "FileZilla", "IT Support"],
  },
  {
    title: "Pengelola Media Sosial dan Website",
    org: "Prodi Hukum Tata Negara, UIN Suska Riau",
    type: "Freelance",
    start: "Juli 2026",
    end: "Agustus 2026",
    points: [
      "Mengelola dan mempublikasikan konten Prodi HTN melalui website (WordPress) dan Instagram",
    ],
    tags: ["WordPress", "Canva"],
  },
  {
    title: "Magang, Sub Bagian Teknologi Informasi",
    org: "PT Perkebunan Nusantara IV Regional 3, Pekanbaru",
    type: "Magang",
    start: "Februari 2025",
    end: "Mei 2025",
    points: [
      "Mengembangkan aplikasi Android dengan Kotlin untuk pencatatan surat perusahaan dan pemantauan masa berlaku dokumen",
      "Terlibat dalam analisis kebutuhan, pengembangan, dan pengujian aplikasi",
      "Memberikan dukungan IT kepada karyawan, meliputi penanganan kendala ringan komputer, laptop, dan printer, instalasi perangkat lunak, serta pengoperasian perangkat Starlink dan perangkat presentasi",
    ],
    tags: ["Kotlin", "Android", "IT Support"],
  },
];

export type ProjectLink = { label: string; href: string };

export type Project = {
  title: string;
  labels: string[];
  kind: "web" | "mobile";
  // Taruh screenshot di folder public, lalu isi misalnya "/proyek/myrubel.png"
  image: string;
  summary: string;
  points: string[];
  tags: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: "My Rubel",
    labels: ["Proyek Klien"],
    kind: "web",
    image: "/bimbelmyrubel.png",
    summary:
      "Website resmi Bimbel My Rubel Pasaman Barat beserta dua unitnya, Literacy Center dan Motivation & Outbound Center.",
    points: [
      "Membangun 3 website terhubung: myrubel.com, literacy.myrubel.com, dan motivation.myrubel.com",
      "Menyediakan panel admin agar klien dapat mengelola konten secara mandiri",
      "Menampilkan program, prestasi, alumni, event, galeri, dan kontak WhatsApp per cabang",
      "Menangani deployment ke hosting, domain, dan subdomain",
    ],
    tags: ["Laravel", "MySQL"],
    links: [
      { label: "myrubel.com", href: "https://myrubel.com" },
      { label: "literacy", href: "https://literacy.myrubel.com" },
      { label: "motivation", href: "https://motivation.myrubel.com" },
    ],
  },
  {
    title: "Instagaram",
    labels: ["Proyek Pribadi"],
    kind: "mobile",
    image: "/instagaram.png",
    summary:
      "Aplikasi media sosial Android bergaya Instagram dengan pesan langsung real-time dan notifikasi push.",
    points: [
      "Feed, unggah foto, suka, ikuti akun, pencarian, dan notifikasi aktivitas",
      "Pesan langsung real-time dengan status online",
      "Notifikasi push melalui Firebase Cloud Messaging dan AWS Lambda",
      "Mendukung Bahasa Indonesia/Inggris dan mode gelap",
    ],
    tags: ["Java", "Firestore", "FCM", "Cloudinary", "AWS Lambda"],
    links: [
      { label: "GitHub", href: "https://github.com/mhabib04/Instagaram" },
      { label: "Unduh APK", href: "https://github.com/mhabib04/Instagaram/releases/download/v1.0.0/Instagaram.apk" },
    ],
  },
  {
    title: "SPK Pemilihan Sepeda Motor Listrik",
    labels: ["Tugas Akhir", "Terpublikasi di Jurnal"],
    kind: "mobile",
    image: "/spk.png",
    summary:
      "Aplikasi Android yang merekomendasikan sepeda motor listrik sesuai preferensi pengguna menggunakan metode Fuzzy AHP-TOPSIS.",
    points: [
      "Menyederhanakan 21 perbandingan berpasangan menjadi 7 slider preferensi",
      "Membandingkan 23 motor listrik dari dealer resmi di Pekanbaru berdasarkan 7 kriteria",
      "Dipublikasikan di jurnal TIN: Terapan Informatika Nusantara(SINTA 4), 2026",
    ],
    tags: ["Kotlin", "Firebase", "Fuzzy AHP", "TOPSIS"],
    links: [
      { label: "GitHub", href: "https://github.com/mhabib04/SPKMotorListrik.git" },
      { label: "Unduh APK", href: "https://github.com/mhabib04/SPKMotorListrik/releases/download/v1.0.0/spk_motor_listrik.apk" },
      { label: "Baca jurnal", href: "https://doi.org/10.47065/tin.v7i1.10260" },
    ],
  },
];

// Satu baris per kelompok: mobile, web, IT & sistem, tools
export const skillRows: string[][] = [
  ["Kotlin", "Java", "Firebase"],
  ["Laravel", "PHP", "MySQL", "WordPress", "HTML/CSS"],
  ["SIMRS (SIMGOS)", "IT Support"],
  ["Git", "GitHub", "FileZilla", "Canva"],
];

export const education = {
  campus: "Universitas Islam Negeri Sultan Syarif Kasim Riau",
  campusShort: "UIN Sultan Syarif Kasim Riau",
  period: "2022 – 2026",
  degree: "Sarjana Teknik (S.T.), Program Studi Teknik Informatika",
  degreeShort: "S.T., Teknik Informatika",
  gpa: "IPK 3,70/4,00 (Predikat Cumlaude)",
  thesis:
    "Sistem Pendukung Keputusan Pemilihan Sepeda Motor Listrik Menggunakan Fuzzy AHP-TOPSIS dengan Pendekatan User-Driven",
  journal: "TIN: Terapan Informatika Nusantara (SINTA 4), Vol. 7 No. 1 (2026)",
  journalShort: "TIN Vol. 7 No. 1 (2026), SINTA 4",
  journalUrl: "https://doi.org/10.47065/tin.v7i1.10260",
};

// Galeri di bawah Pendidikan. Taruh foto di public/galeri lalu ganti image dan label.
// Gambar Foto 1–5 sekarang hanya contoh sementara.
export const gallery = [
  { image: "/galeri/1.jpg", label: "Foto 1" },
  { image: "/galeri/2.jpg", label: "Foto 2" },
  { image: "/galeri/3.jpg", label: "Foto 3" },
  { image: "/galeri/4.jpg", label: "Foto 4" },
  { image: "/galeri/5.jpg", label: "Foto 5" },
];

export const contact = {
  heading: "Mari Terhubung",
  text: "Terbuka untuk kesempatan magang dan kerja di bidang pengembangan aplikasi maupun IT. Silakan hubungi saya melalui email atau LinkedIn.",
};
