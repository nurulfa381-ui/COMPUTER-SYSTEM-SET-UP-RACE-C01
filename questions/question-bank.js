/* =========================================================
   COMPUTER SYSTEM SET-UP RACE C01
   BANK SOALAN KP01–KP15
   Versi: 1.0
========================================================= */

const C01_QUESTION_BANK = [

  /* =======================================================
     KP01 — PENGENALAN KEPADA KOMPUTER
  ======================================================= */

  {
    id: "KP01-Q01",
    kp: 1,
    type: "mcq",
    title: "Pengenalan Komputer",
    question: "Apakah maksud komputer?",
    answers: [
      "Peranti elektronik yang menerima, memproses, menyimpan dan menghasilkan maklumat",
      "Peralatan yang hanya digunakan untuk menaip dokumen",
      "Mesin yang hanya boleh digunakan untuk bermain permainan",
      "Peranti yang tidak boleh menyimpan data"
    ],
    correctAnswer: 0,
    explanation:
      "Komputer ialah peranti elektronik yang menerima input, memproses data, menyimpan data dan menghasilkan output."
  },

  {
    id: "KP01-Q02",
    kp: 1,
    type: "sequence",
    title: "Kitaran Pemprosesan Maklumat",
    question: "Pilih susunan kitaran pemprosesan maklumat yang betul.",
    answers: [
      "Input → Proses → Output → Storan",
      "Output → Input → Storan → Proses",
      "Proses → Storan → Input → Output",
      "Storan → Output → Proses → Input"
    ],
    correctAnswer: 0,
    explanation:
      "Kitaran asas komputer ialah Input, Proses, Output dan Storan."
  },


  /* =======================================================
     KP02 — FUNGSI KERJA SISTEM KOMPUTER
  ======================================================= */

  {
    id: "KP02-Q01",
    kp: 2,
    type: "mcq",
    title: "Fungsi Sistem Komputer",
    question: "Apakah fungsi proses dalam sistem komputer?",
    answers: [
      "Menukar data input kepada maklumat yang berguna",
      "Mencetak semua maklumat secara automatik",
      "Memadam semua data pengguna",
      "Menyimpan komputer di dalam stor"
    ],
    correctAnswer: 0,
    explanation:
      "Proses menukar data mentah yang diterima melalui input kepada maklumat yang berguna."
  },

  {
    id: "KP02-Q02",
    kp: 2,
    type: "matching",
    title: "Peranti Input dan Output",
    question: "Antara berikut, yang manakah merupakan peranti input?",
    answers: [
      "Papan kekunci",
      "Monitor",
      "Projektor",
      "Pencetak"
    ],
    correctAnswer: 0,
    explanation:
      "Papan kekunci digunakan untuk memasukkan data dan arahan ke dalam komputer."
  },


  /* =======================================================
     KP03 — PERKAKASAN DAN PERALATAN KOMPUTER
  ======================================================= */

  {
    id: "KP03-Q01",
    kp: 3,
    type: "mcq",
    title: "Perkakasan Komputer",
    question: "Apakah yang dimaksudkan dengan perkakasan komputer?",
    answers: [
      "Komponen fizikal komputer yang boleh dilihat dan disentuh",
      "Program yang dipasang dalam komputer",
      "Data yang disimpan dalam Internet",
      "Arahan yang hanya boleh dibaca oleh pengguna"
    ],
    correctAnswer: 0,
    explanation:
      "Perkakasan ialah semua komponen fizikal komputer seperti papan induk, RAM, CPU dan cakera storan."
  },

  {
    id: "KP03-Q02",
    kp: 3,
    type: "truefalse",
    title: "Peranti Storan",
    question: "SSD merupakan salah satu peranti storan komputer.",
    answers: [
      "Betul",
      "Salah"
    ],
    correctAnswer: 0,
    explanation:
      "SSD menyimpan sistem pengoperasian, aplikasi dan fail pengguna secara kekal."
  },


  /* =======================================================
     KP04 — PERALATAN PEMASANGAN PERKAKASAN KOMPUTER
  ======================================================= */

  {
    id: "KP04-Q01",
    kp: 4,
    type: "mcq",
    title: "Alat Pemasangan",
    question: "Alat manakah digunakan untuk membuka dan memasang skru casing komputer?",
    answers: [
      "Pemutar skru Phillips",
      "Multimeter",
      "Penyedut habuk rumah",
      "Pencetak"
    ],
    correctAnswer: 0,
    explanation:
      "Pemutar skru Phillips digunakan untuk membuka dan memasang skru pada casing serta komponen komputer."
  },

  {
    id: "KP04-Q02",
    kp: 4,
    type: "mcq",
    title: "Keselamatan ESD",
    question: "Apakah fungsi gelang antistatik?",
    answers: [
      "Melindungi komponen daripada nyahcas elektrostatik",
      "Meningkatkan kelajuan pemproses",
      "Menyimpan fail pengguna",
      "Menghidupkan komputer tanpa bekalan kuasa"
    ],
    correctAnswer: 0,
    explanation:
      "Gelang antistatik membantu mengalirkan cas statik daripada badan bagi melindungi komponen sensitif."
  },


  /* =======================================================
     KP05 — FUNGSI KOMPONEN PERKAKASAN KOMPUTER
  ======================================================= */

  {
    id: "KP05-Q01",
    kp: 5,
    type: "mcq",
    title: "Unit Pemprosesan Pusat",
    question: "Apakah fungsi utama CPU?",
    answers: [
      "Melaksanakan arahan dan memproses data",
      "Membekalkan kuasa elektrik kepada bangunan",
      "Mencetak dokumen",
      "Menyimpan fail secara kekal"
    ],
    correctAnswer: 0,
    explanation:
      "CPU ialah komponen utama yang melaksanakan arahan dan memproses data dalam komputer."
  },

  {
    id: "KP05-Q02",
    kp: 5,
    type: "mcq",
    title: "Memori RAM",
    question: "Apakah fungsi RAM?",
    answers: [
      "Menyimpan data sementara yang sedang digunakan",
      "Menyimpan data selama-lamanya tanpa kuasa",
      "Menghasilkan sambungan rangkaian",
      "Menyejukkan pemproses"
    ],
    correctAnswer: 0,
    explanation:
      "RAM menyimpan data dan arahan sementara semasa sistem serta aplikasi sedang digunakan."
  },


  /* =======================================================
     KP06 — JENIS-JENIS CASING KOMPUTER
  ======================================================= */

  {
    id: "KP06-Q01",
    kp: 6,
    type: "mcq",
    title: "Casing Komputer",
    question: "Apakah fungsi utama casing komputer?",
    answers: [
      "Menempatkan dan melindungi komponen dalaman komputer",
      "Menyimpan kata laluan pengguna",
      "Menggantikan sistem pengoperasian",
      "Menghasilkan sambungan Internet"
    ],
    correctAnswer: 0,
    explanation:
      "Casing menempatkan, menyusun dan melindungi komponen seperti papan induk, PSU dan storan."
  },

  {
    id: "KP06-Q02",
    kp: 6,
    type: "mcq",
    title: "Jenis Casing",
    question: "Casing yang lazim digunakan untuk komputer desktop bersaiz penuh ialah:",
    answers: [
      "Tower",
      "Tablet",
      "Notebook",
      "Telefon pintar"
    ],
    correctAnswer: 0,
    explanation:
      "Casing jenis tower menyediakan ruang untuk papan induk, storan, PSU dan kad tambahan."
  },


  /* =======================================================
     KP07 — JENIS-JENIS PENGGERA AMARAN KOMPUTER
  ======================================================= */

  {
    id: "KP07-Q01",
    kp: 7,
    type: "mcq",
    title: "Kod Bunyi BIOS",
    question: "Apakah tujuan bunyi beep semasa komputer dihidupkan?",
    answers: [
      "Memberikan petunjuk keadaan atau ralat perkakasan",
      "Memainkan muzik pengguna",
      "Mengaktifkan sambungan Internet",
      "Membuka semua aplikasi"
    ],
    correctAnswer: 0,
    explanation:
      "Kod bunyi beep daripada BIOS atau UEFI membantu mengenal pasti ralat perkakasan semasa POST."
  },

  {
    id: "KP07-Q02",
    kp: 7,
    type: "truefalse",
    title: "Amaran Komputer",
    question: "Bunyi beep berulang boleh menunjukkan masalah pada RAM atau komponen lain.",
    answers: [
      "Betul",
      "Salah"
    ],
    correctAnswer: 0,
    explanation:
      "Corak beep tertentu digunakan untuk menunjukkan kerosakan RAM, kad grafik atau komponen lain."
  },


  /* =======================================================
     KP08 — PENGENALAN MESEJ POST
  ======================================================= */

  {
    id: "KP08-Q01",
    kp: 8,
    type: "mcq",
    title: "Power-On Self-Test",
    question: "Apakah tujuan POST?",
    answers: [
      "Menguji komponen asas ketika komputer dihidupkan",
      "Memadam sistem pengoperasian",
      "Memasang aplikasi pejabat",
      "Menghasilkan dokumen"
    ],
    correctAnswer: 0,
    explanation:
      "POST menguji komponen asas seperti CPU, RAM, papan induk dan peranti paparan semasa permulaan."
  },

  {
    id: "KP08-Q02",
    kp: 8,
    type: "mcq",
    title: "Ralat POST",
    question: "Apakah tindakan awal jika komputer memaparkan ralat RAM semasa POST?",
    answers: [
      "Matikan komputer dan periksa pemasangan modul RAM",
      "Terus format cakera keras",
      "Tukar monitor tanpa pemeriksaan",
      "Pasang aplikasi baharu"
    ],
    correctAnswer: 0,
    explanation:
      "Komputer perlu dimatikan dan modul RAM diperiksa dari segi pemasangan, slot dan kebersihannya."
  },


  /* =======================================================
     KP09 — SISTEM PENGOPERASIAN DAN PEMACU PERANTI
  ======================================================= */

  {
    id: "KP09-Q01",
    kp: 9,
    type: "mcq",
    title: "Sistem Pengoperasian",
    question: "Apakah fungsi sistem pengoperasian?",
    answers: [
      "Mengurus perkakasan, perisian dan sumber komputer",
      "Menggantikan bekalan kuasa",
      "Membina casing komputer",
      "Menghasilkan kabel rangkaian"
    ],
    correctAnswer: 0,
    explanation:
      "Sistem pengoperasian mengurus sumber komputer dan menyediakan persekitaran untuk aplikasi."
  },

  {
    id: "KP09-Q02",
    kp: 9,
    type: "mcq",
    title: "Pemacu Peranti",
    question: "Apakah fungsi pemacu peranti atau device driver?",
    answers: [
      "Membolehkan sistem pengoperasian berkomunikasi dengan perkakasan",
      "Menyimpan semua fail secara automatik",
      "Meningkatkan kapasiti fizikal RAM",
      "Menggantikan papan induk"
    ],
    correctAnswer: 0,
    explanation:
      "Pemacu peranti membolehkan sistem pengoperasian mengenali dan mengawal perkakasan."
  },


  /* =======================================================
     KP10 — PEMASANGAN APLIKASI DAN KEMAS KINI
  ======================================================= */

  {
    id: "KP10-Q01",
    kp: 10,
    type: "mcq",
    title: "Pemasangan Aplikasi",
    question: "Apakah yang perlu disemak sebelum memasang aplikasi?",
    answers: [
      "Keperluan sistem dan keserasian aplikasi",
      "Warna casing komputer",
      "Jenama meja komputer",
      "Bilangan lampu di dalam bilik"
    ],
    correctAnswer: 0,
    explanation:
      "Keperluan sistem perlu disemak bagi memastikan komputer mempunyai sumber dan sistem yang sesuai."
  },

  {
    id: "KP10-Q02",
    kp: 10,
    type: "truefalse",
    title: "Kemas Kini Perisian",
    question: "Kemas kini perisian boleh membaiki ralat dan meningkatkan keselamatan.",
    answers: [
      "Betul",
      "Salah"
    ],
    correctAnswer: 0,
    explanation:
      "Kemas kini biasanya menyediakan pembaikan pepijat, tampalan keselamatan dan penambahbaikan fungsi."
  },


  /* =======================================================
     KP11 — BACKUP DAN VERIFIKASI KESELAMATAN
  ======================================================= */

  {
    id: "KP11-Q01",
    kp: 11,
    type: "mcq",
    title: "Backup Data",
    question: "Apakah tujuan utama membuat backup?",
    answers: [
      "Menyediakan salinan data sekiranya data asal rosak atau hilang",
      "Memperlahankan komputer",
      "Memadam semua akaun pengguna",
      "Menggantikan papan induk"
    ],
    correctAnswer: 0,
    explanation:
      "Backup membolehkan data dipulihkan jika berlaku kerosakan, kehilangan atau serangan keselamatan."
  },

  {
    id: "KP11-Q02",
    kp: 11,
    type: "mcq",
    title: "Verifikasi Backup",
    question: "Apakah maksud verifikasi backup?",
    answers: [
      "Memastikan data backup boleh dibaca dan dipulihkan",
      "Menukar warna folder backup",
      "Memadam data asal selepas backup",
      "Menghentikan semua kemas kini"
    ],
    correctAnswer: 0,
    explanation:
      "Verifikasi memastikan fail backup lengkap, tidak rosak dan boleh digunakan untuk proses pemulihan."
  },


  /* =======================================================
     KP12 — PEMASANGAN PERALATAN TAMBAHAN KOMPUTER
  ======================================================= */

  {
    id: "KP12-Q01",
    kp: 12,
    type: "mcq",
    title: "Peralatan Tambahan",
    question: "Antara berikut, yang manakah peralatan tambahan komputer?",
    answers: [
      "Pencetak",
      "CPU",
      "RAM",
      "Papan induk"
    ],
    correctAnswer: 0,
    explanation:
      "Pencetak ialah peralatan tambahan atau periferal yang disambungkan kepada komputer."
  },

  {
    id: "KP12-Q02",
    kp: 12,
    type: "sequence",
    title: "Pemasangan Periferal",
    question: "Apakah urutan umum pemasangan peralatan tambahan yang paling sesuai?",
    answers: [
      "Sambung peralatan → Pasang pemacu → Uji fungsi",
      "Uji fungsi → Cabut kabel → Padam pemacu",
      "Padam sistem → Sambung peralatan → Tutup komputer",
      "Format komputer → Tukar CPU → Pasang aplikasi"
    ],
    correctAnswer: 0,
    explanation:
      "Peralatan disambungkan, pemacu dipasang jika diperlukan dan fungsinya diuji."
  },


  /* =======================================================
     KP13 — PENGUJIAN SISTEM KOMPUTER
  ======================================================= */

  {
    id: "KP13-Q01",
    kp: 13,
    type: "mcq",
    title: "Pengujian Sistem",
    question: "Apakah tujuan pengujian sistem komputer?",
    answers: [
      "Memastikan perkakasan dan perisian berfungsi dengan betul",
      "Menukar semua komponen tanpa pemeriksaan",
      "Memadam semua rekod pengguna",
      "Menghentikan penggunaan komputer"
    ],
    correctAnswer: 0,
    explanation:
      "Pengujian memastikan sistem memenuhi keperluan dan setiap komponen berfungsi dengan stabil."
  },

  {
    id: "KP13-Q02",
    kp: 13,
    type: "mcq",
    title: "Ujian Prestasi",
    question: "Apakah yang dinilai melalui ujian prestasi komputer?",
    answers: [
      "Kelajuan, kestabilan dan keupayaan sistem menjalankan beban kerja",
      "Warna casing sahaja",
      "Saiz meja komputer",
      "Bilangan pengguna Internet di luar organisasi"
    ],
    correctAnswer: 0,
    explanation:
      "Ujian prestasi menilai kelajuan, penggunaan sumber dan kestabilan sistem semasa beban kerja."
  },


  /* =======================================================
     KP14 — PENGENDALIAN PERKAKASAN TAMBAHAN
  ======================================================= */

  {
    id: "KP14-Q01",
    kp: 14,
    type: "mcq",
    title: "Pengendalian Perkakasan",
    question: "Apakah langkah keselamatan sebelum mengendalikan perkakasan tambahan?",
    answers: [
      "Matikan kuasa dan gunakan perlindungan antistatik",
      "Sentuh semua pin komponen dengan tangan",
      "Pasang komponen ketika komputer sedang hidup",
      "Letakkan komponen di atas permukaan basah"
    ],
    correctAnswer: 0,
    explanation:
      "Kuasa perlu dimatikan dan perlindungan ESD digunakan sebelum mengendalikan komponen."
  },

  {
    id: "KP14-Q02",
    kp: 14,
    type: "truefalse",
    title: "Pengendalian Komponen",
    question: "Komponen elektronik hendaklah dipegang pada bahagian tepi.",
    answers: [
      "Betul",
      "Salah"
    ],
    correctAnswer: 0,
    explanation:
      "Memegang komponen pada bahagian tepi mengurangkan risiko menyentuh litar dan terminal sensitif."
  },


  /* =======================================================
     KP15 — PENYEDIAAN LAPORAN SISTEM KOMPUTER
  ======================================================= */

  {
    id: "KP15-Q01",
    kp: 15,
    type: "mcq",
    title: "Laporan Sistem Komputer",
    question: "Apakah maklumat penting dalam laporan sistem komputer?",
    answers: [
      "Butiran sistem, ujian, masalah, tindakan dan keputusan",
      "Nama permainan kegemaran pengguna sahaja",
      "Warna dinding bilik",
      "Harga makanan di kantin"
    ],
    correctAnswer: 0,
    explanation:
      "Laporan perlu merekodkan butiran sistem, hasil ujian, masalah, tindakan pembetulan dan keputusan akhir."
  },

  {
    id: "KP15-Q02",
    kp: 15,
    type: "mcq",
    title: "Kepentingan Laporan",
    question: "Mengapakah laporan sistem komputer perlu disediakan?",
    answers: [
      "Sebagai bukti kerja dan rujukan penyelenggaraan",
      "Untuk menggantikan semua komponen",
      "Untuk memadam sejarah pembaikan",
      "Untuk menghalang proses pengujian"
    ],
    correctAnswer: 0,
    explanation:
      "Laporan menjadi bukti pelaksanaan kerja dan rujukan bagi pemeriksaan atau penyelenggaraan seterusnya."
  }
];


/* =========================================================
   FUNGSI UTILITI BANK SOALAN
========================================================= */

function getQuestionsByKp(kpNumbers = []) {
  const selectedKp =
    kpNumbers
      .map(Number)
      .filter(
        number =>
          number >= 1 &&
          number <= 15
      );

  if (
    selectedKp.length === 0
  ) {
    return [
      ...C01_QUESTION_BANK
    ];
  }

  return C01_QUESTION_BANK.filter(
    question =>
      selectedKp.includes(
        Number(question.kp)
      )
  );
}


function getQuestionsByType(
  questions,
  questionTypes = []
) {
  if (
    !Array.isArray(
      questionTypes
    ) ||
    questionTypes.length === 0
  ) {
    return [
      ...questions
    ];
  }

  return questions.filter(
    question =>
      questionTypes.includes(
        question.type
      )
  );
}


function shuffleArray(items) {
  const shuffled = [
    ...items
  ];

  for (
    let index =
      shuffled.length - 1;
    index > 0;
    index--
  ) {
    const randomIndex =
      Math.floor(
        Math.random() *
        (index + 1)
      );

    [
      shuffled[index],
      shuffled[randomIndex]
    ] = [
      shuffled[randomIndex],
      shuffled[index]
    ];
  }

  return shuffled;
}


function prepareRaceQuestions({
  selectedKp = [],
  questionTypes = [],
  questionCount = 10
} = {}) {
  let questions =
    getQuestionsByKp(
      selectedKp
    );

  const filteredByType =
    getQuestionsByType(
      questions,
      questionTypes
    );

  /*
    Jika jenis soalan yang dipilih belum mencukupi,
    sistem menggunakan semua jenis daripada KP terpilih.
  */

  if (
    filteredByType.length > 0
  ) {
    questions =
      filteredByType;
  }

  const shuffled =
    shuffleArray(
      questions
    );

  const requestedCount =
    Math.max(
      1,
      Number(
        questionCount
      ) || 10
    );

  const prepared = [];

  /*
    Soalan boleh diulang secara rawak jika guru memilih
    bilangan lebih besar daripada jumlah soalan tersedia.
  */

  while (
    prepared.length <
    requestedCount
  ) {
    const nextBatch =
      shuffleArray(
        shuffled
      );

    for (
      const question
      of nextBatch
    ) {
      prepared.push({
        ...question,

        answers:
          [...question.answers]
      });

      if (
        prepared.length >=
        requestedCount
      ) {
        break;
      }
    }

    if (
      shuffled.length === 0
    ) {
      break;
    }
  }

  return prepared;
}


/* =========================================================
   EXPORT
========================================================= */

export {
  C01_QUESTION_BANK,
  getQuestionsByKp,
  getQuestionsByType,
  shuffleArray,
  prepareRaceQuestions
};
