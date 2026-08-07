/* =========================================================
   COMPUTER SYSTEM SET-UP RACE C01
   BANK SOALAN KP01-KP15
   20 SOALAN SETIAP KP = 300 SOALAN
   Race hanya mengambil jumlah questionCount yang dipilih guru.
   Jawapan dirandom dalam race.html.
========================================================= */

const C01_QUESTION_BANK = [
  {
    "id": "KP01-Q01",
    "kp": 1,
    "type": "mcq",
    "title": "Pengenalan Komputer",
    "question": "Apakah maksud komputer?",
    "answers": [
      "Peranti elektronik yang menerima, memproses, menyimpan dan menghasilkan maklumat",
      "Peranti yang hanya mencetak dokumen",
      "Mesin yang hanya menyimpan gambar",
      "Alat yang hanya digunakan untuk permainan"
    ],
    "correctAnswer": 0,
    "explanation": "Komputer menerima input, memproses data, menyimpan data dan menghasilkan output."
  },
  {
    "id": "KP01-Q02",
    "kp": 1,
    "type": "mcq",
    "title": "Pengenalan Komputer",
    "question": "Apakah urutan asas kitaran pemprosesan maklumat?",
    "answers": [
      "Input → Proses → Output → Storan",
      "Proses → Input → Storan → Output",
      "Output → Input → Proses → Storan",
      "Storan → Output → Input → Proses"
    ],
    "correctAnswer": 0,
    "explanation": "Kitaran asas komputer bermula dengan input, diikuti proses, output dan storan."
  },
  {
    "id": "KP01-Q03",
    "kp": 1,
    "type": "mcq",
    "title": "Pengenalan Komputer",
    "question": "Yang manakah contoh peranti input?",
    "answers": [
      "Papan kekunci",
      "Monitor",
      "Pencetak",
      "Pembesar suara"
    ],
    "correctAnswer": 0,
    "explanation": "Papan kekunci digunakan untuk memasukkan data ke komputer."
  },
  {
    "id": "KP01-Q04",
    "kp": 1,
    "type": "mcq",
    "title": "Pengenalan Komputer",
    "question": "Yang manakah contoh peranti output?",
    "answers": [
      "Monitor",
      "Tetikus",
      "Pengimbas",
      "Papan kekunci"
    ],
    "correctAnswer": 0,
    "explanation": "Monitor memaparkan hasil pemprosesan komputer."
  },
  {
    "id": "KP01-Q05",
    "kp": 1,
    "type": "mcq",
    "title": "Pengenalan Komputer",
    "question": "Apakah fungsi storan komputer?",
    "answers": [
      "Menyimpan data dan maklumat untuk digunakan semula",
      "Mengawal suhu bilik",
      "Menghasilkan bunyi beep sahaja",
      "Menggantikan CPU"
    ],
    "correctAnswer": 0,
    "explanation": "Storan menyimpan data, program dan maklumat."
  },
  {
    "id": "KP01-Q06",
    "kp": 1,
    "type": "mcq",
    "title": "Pengenalan Komputer",
    "question": "Apakah yang dimaksudkan dengan data?",
    "answers": [
      "Fakta mentah yang belum diproses",
      "Maklumat akhir yang telah dicetak",
      "Perkakasan fizikal komputer",
      "Sistem pengoperasian"
    ],
    "correctAnswer": 0,
    "explanation": "Data ialah fakta mentah sebelum diproses."
  },
  {
    "id": "KP01-Q07",
    "kp": 1,
    "type": "mcq",
    "title": "Pengenalan Komputer",
    "question": "Apakah yang dimaksudkan dengan maklumat?",
    "answers": [
      "Data yang telah diproses dan mempunyai makna",
      "Data yang belum dimasukkan",
      "Casing komputer",
      "Kabel kuasa"
    ],
    "correctAnswer": 0,
    "explanation": "Maklumat ialah hasil pemprosesan data."
  },
  {
    "id": "KP01-Q08",
    "kp": 1,
    "type": "mcq",
    "title": "Pengenalan Komputer",
    "question": "Yang manakah contoh komputer peribadi?",
    "answers": [
      "Komputer desktop",
      "Router",
      "Switch",
      "Access point"
    ],
    "correctAnswer": 0,
    "explanation": "Komputer desktop ialah salah satu jenis komputer peribadi."
  },
  {
    "id": "KP01-Q09",
    "kp": 1,
    "type": "mcq",
    "title": "Pengenalan Komputer",
    "question": "Apakah fungsi utama komputer dalam organisasi?",
    "answers": [
      "Memproses dan mengurus data dengan cekap",
      "Menggantikan semua pekerja",
      "Menyimpan kabel sahaja",
      "Menyejukkan bilik server"
    ],
    "correctAnswer": 0,
    "explanation": "Komputer membantu memproses, menyimpan dan mengurus maklumat."
  },
  {
    "id": "KP01-Q10",
    "kp": 1,
    "type": "mcq",
    "title": "Pengenalan Komputer",
    "question": "Apakah perbezaan utama perkakasan dan perisian?",
    "answers": [
      "Perkakasan ialah komponen fizikal, perisian ialah program",
      "Kedua-duanya ialah kabel",
      "Perkakasan ialah fail, perisian ialah skru",
      "Tiada perbezaan"
    ],
    "correctAnswer": 0,
    "explanation": "Perkakasan boleh disentuh, manakala perisian ialah program/arahan."
  },
  {
    "id": "KP01-Q11",
    "kp": 1,
    "type": "mcq",
    "title": "Pengenalan Komputer",
    "question": "Apakah contoh perisian sistem?",
    "answers": [
      "Sistem pengoperasian",
      "RAM",
      "CPU",
      "SSD"
    ],
    "correctAnswer": 0,
    "explanation": "Sistem pengoperasian ialah perisian sistem."
  },
  {
    "id": "KP01-Q12",
    "kp": 1,
    "type": "mcq",
    "title": "Pengenalan Komputer",
    "question": "Apakah contoh perisian aplikasi?",
    "answers": [
      "Pemproses kata",
      "Motherboard",
      "Bekalan kuasa",
      "Kabel SATA"
    ],
    "correctAnswer": 0,
    "explanation": "Pemproses kata ialah aplikasi untuk tugas pengguna."
  },
  {
    "id": "KP01-Q13",
    "kp": 1,
    "type": "mcq",
    "title": "Pengenalan Komputer",
    "question": "Apakah tujuan komputer riba direka?",
    "answers": [
      "Membolehkan penggunaan komputer secara mudah alih",
      "Hanya untuk server",
      "Hanya untuk mencetak",
      "Menggantikan pencetak"
    ],
    "correctAnswer": 0,
    "explanation": "Komputer riba menggabungkan komponen komputer dalam bentuk mudah alih."
  },
  {
    "id": "KP01-Q14",
    "kp": 1,
    "type": "mcq",
    "title": "Pengenalan Komputer",
    "question": "Apakah yang berlaku semasa proses?",
    "answers": [
      "CPU memproses arahan dan data",
      "Monitor memasukkan data",
      "Printer menyimpan data",
      "Mouse mencetak dokumen"
    ],
    "correctAnswer": 0,
    "explanation": "CPU melaksanakan arahan dan memproses data."
  },
  {
    "id": "KP01-Q15",
    "kp": 1,
    "type": "mcq",
    "title": "Pengenalan Komputer",
    "question": "Yang manakah paling tepat menerangkan output?",
    "answers": [
      "Hasil selepas data diproses",
      "Data mentah sebelum diproses",
      "Skru casing",
      "Bekalan kuasa utama"
    ],
    "correctAnswer": 0,
    "explanation": "Output ialah hasil daripada proses komputer."
  },
  {
    "id": "KP01-Q16",
    "kp": 1,
    "type": "mcq",
    "title": "Pengenalan Komputer",
    "question": "Peranti manakah digunakan untuk menunjuk dan memilih objek pada skrin?",
    "answers": [
      "Tetikus",
      "Pencetak",
      "Monitor",
      "SSD"
    ],
    "correctAnswer": 0,
    "explanation": "Tetikus ialah peranti input penunjuk."
  },
  {
    "id": "KP01-Q17",
    "kp": 1,
    "type": "mcq",
    "title": "Pengenalan Komputer",
    "question": "Apakah kegunaan komputer dalam pendidikan?",
    "answers": [
      "Menyokong pembelajaran, penyelidikan dan pengurusan maklumat",
      "Menghapuskan semua buku secara automatik",
      "Menggantikan elektrik",
      "Menyambung kabel tanpa pengguna"
    ],
    "correctAnswer": 0,
    "explanation": "Komputer membantu pembelajaran dan pengurusan bahan pendidikan."
  },
  {
    "id": "KP01-Q18",
    "kp": 1,
    "type": "mcq",
    "title": "Pengenalan Komputer",
    "question": "Apakah ciri utama komputer moden?",
    "answers": [
      "Boleh memproses data dengan pantas dan tepat",
      "Tidak memerlukan perisian",
      "Tidak memerlukan kuasa",
      "Tidak menggunakan storan"
    ],
    "correctAnswer": 0,
    "explanation": "Komputer moden direka untuk pemprosesan pantas dan tepat."
  },
  {
    "id": "KP01-Q19",
    "kp": 1,
    "type": "mcq",
    "title": "Pengenalan Komputer",
    "question": "Apakah tujuan sistem komputer?",
    "answers": [
      "Menerima input, memproses, menyimpan dan menghasilkan output",
      "Menghasilkan haba sahaja",
      "Mengawal kipas sahaja",
      "Menghidupkan monitor sahaja"
    ],
    "correctAnswer": 0,
    "explanation": "Sistem komputer melaksanakan keseluruhan kitaran pemprosesan maklumat."
  },
  {
    "id": "KP01-Q20",
    "kp": 1,
    "type": "mcq",
    "title": "Pengenalan Komputer",
    "question": "Komponen manakah dianggap pusat pemprosesan utama?",
    "answers": [
      "CPU",
      "Speaker",
      "Scanner",
      "Printer"
    ],
    "correctAnswer": 0,
    "explanation": "CPU ialah unit pemprosesan utama komputer."
  },
  {
    "id": "KP02-Q01",
    "kp": 2,
    "type": "mcq",
    "title": "Fungsi Sistem Komputer",
    "question": "Apakah fungsi input?",
    "answers": [
      "Memasukkan data dan arahan ke dalam sistem",
      "Mencetak hasil",
      "Menyimpan kuasa",
      "Menyejukkan CPU"
    ],
    "correctAnswer": 0,
    "explanation": "Input membolehkan data dan arahan dimasukkan."
  },
  {
    "id": "KP02-Q02",
    "kp": 2,
    "type": "mcq",
    "title": "Fungsi Sistem Komputer",
    "question": "Apakah fungsi proses?",
    "answers": [
      "Menukar data input kepada maklumat berguna",
      "Menyimpan casing",
      "Menyambung kabel kuasa",
      "Mencetak tanpa arahan"
    ],
    "correctAnswer": 0,
    "explanation": "Proses menukar data mentah kepada maklumat."
  },
  {
    "id": "KP02-Q03",
    "kp": 2,
    "type": "mcq",
    "title": "Fungsi Sistem Komputer",
    "question": "Apakah fungsi output?",
    "answers": [
      "Menyampaikan hasil pemprosesan kepada pengguna",
      "Memasukkan kata laluan",
      "Menyimpan BIOS",
      "Mengawal PSU"
    ],
    "correctAnswer": 0,
    "explanation": "Output menyampaikan hasil proses."
  },
  {
    "id": "KP02-Q04",
    "kp": 2,
    "type": "mcq",
    "title": "Fungsi Sistem Komputer",
    "question": "Apakah fungsi storan?",
    "answers": [
      "Menyimpan data, program dan maklumat",
      "Menjana bunyi sahaja",
      "Mengawal monitor",
      "Mengganti RAM"
    ],
    "correctAnswer": 0,
    "explanation": "Storan membolehkan data digunakan semula."
  },
  {
    "id": "KP02-Q05",
    "kp": 2,
    "type": "mcq",
    "title": "Fungsi Sistem Komputer",
    "question": "CPU terlibat secara langsung dalam fungsi apa?",
    "answers": [
      "Pemprosesan",
      "Percetakan fizikal",
      "Penyejukan bilik",
      "Penyimpanan kabel"
    ],
    "correctAnswer": 0,
    "explanation": "CPU memproses arahan dan data."
  },
  {
    "id": "KP02-Q06",
    "kp": 2,
    "type": "mcq",
    "title": "Fungsi Sistem Komputer",
    "question": "RAM berfungsi terutamanya untuk apa?",
    "answers": [
      "Menyimpan data sementara semasa program berjalan",
      "Menyimpan data kekal sahaja",
      "Mencetak dokumen",
      "Menyambung internet secara langsung"
    ],
    "correctAnswer": 0,
    "explanation": "RAM ialah memori sementara."
  },
  {
    "id": "KP02-Q07",
    "kp": 2,
    "type": "mcq",
    "title": "Fungsi Sistem Komputer",
    "question": "Peranti manakah digunakan untuk menghasilkan salinan fizikal?",
    "answers": [
      "Pencetak",
      "Tetikus",
      "RAM",
      "CPU"
    ],
    "correctAnswer": 0,
    "explanation": "Pencetak ialah peranti output."
  },
  {
    "id": "KP02-Q08",
    "kp": 2,
    "type": "mcq",
    "title": "Fungsi Sistem Komputer",
    "question": "Peranti manakah sesuai untuk memasukkan imej bercetak ke komputer?",
    "answers": [
      "Pengimbas",
      "Monitor",
      "Speaker",
      "SSD"
    ],
    "correctAnswer": 0,
    "explanation": "Pengimbas menukar dokumen fizikal kepada data digital."
  },
  {
    "id": "KP02-Q09",
    "kp": 2,
    "type": "mcq",
    "title": "Fungsi Sistem Komputer",
    "question": "Apakah hubungan input dan output?",
    "answers": [
      "Input membekalkan data, output menunjukkan hasil pemprosesan",
      "Kedua-duanya hanya menyimpan data",
      "Kedua-duanya ialah CPU",
      "Kedua-duanya tidak berkaitan"
    ],
    "correctAnswer": 0,
    "explanation": "Input dan output berada pada dua bahagian berbeza dalam kitaran pemprosesan."
  },
  {
    "id": "KP02-Q10",
    "kp": 2,
    "type": "mcq",
    "title": "Fungsi Sistem Komputer",
    "question": "Apakah fungsi utama motherboard dalam sistem?",
    "answers": [
      "Menghubungkan dan membolehkan komunikasi antara komponen",
      "Mencetak data",
      "Menghasilkan audio sahaja",
      "Menjadi sistem pengoperasian"
    ],
    "correctAnswer": 0,
    "explanation": "Motherboard menyediakan sambungan antara komponen."
  },
  {
    "id": "KP02-Q11",
    "kp": 2,
    "type": "mcq",
    "title": "Fungsi Sistem Komputer",
    "question": "Apakah fungsi PSU?",
    "answers": [
      "Menukar dan membekalkan kuasa elektrik kepada komponen",
      "Menyimpan fail pengguna",
      "Memproses arahan",
      "Menghasilkan paparan"
    ],
    "correctAnswer": 0,
    "explanation": "PSU membekalkan voltan yang sesuai."
  },
  {
    "id": "KP02-Q12",
    "kp": 2,
    "type": "mcq",
    "title": "Fungsi Sistem Komputer",
    "question": "Apakah fungsi GPU?",
    "answers": [
      "Memproses grafik dan paparan",
      "Menyimpan kata laluan BIOS",
      "Mengawal pencetak sahaja",
      "Membekalkan kuasa utama"
    ],
    "correctAnswer": 0,
    "explanation": "GPU mengendalikan pemprosesan grafik."
  },
  {
    "id": "KP02-Q13",
    "kp": 2,
    "type": "mcq",
    "title": "Fungsi Sistem Komputer",
    "question": "Apakah fungsi NIC?",
    "answers": [
      "Membolehkan komputer berkomunikasi melalui rangkaian",
      "Menyimpan sistem operasi",
      "Menyejukkan CPU",
      "Mencetak dokumen"
    ],
    "correctAnswer": 0,
    "explanation": "NIC menyediakan sambungan rangkaian."
  },
  {
    "id": "KP02-Q14",
    "kp": 2,
    "type": "mcq",
    "title": "Fungsi Sistem Komputer",
    "question": "Apakah fungsi BIOS/UEFI?",
    "answers": [
      "Memulakan perkakasan dan menyediakan tetapan firmware",
      "Menjadi aplikasi pejabat",
      "Mencetak laporan",
      "Menggantikan SSD"
    ],
    "correctAnswer": 0,
    "explanation": "BIOS/UEFI membantu proses permulaan sistem."
  },
  {
    "id": "KP02-Q15",
    "kp": 2,
    "type": "mcq",
    "title": "Fungsi Sistem Komputer",
    "question": "Apakah fungsi kipas casing?",
    "answers": [
      "Membantu aliran udara dan penyejukan",
      "Menyimpan data",
      "Mengurus fail",
      "Menghasilkan rangkaian"
    ],
    "correctAnswer": 0,
    "explanation": "Kipas membantu membuang haba."
  },
  {
    "id": "KP02-Q16",
    "kp": 2,
    "type": "mcq",
    "title": "Fungsi Sistem Komputer",
    "question": "Apakah fungsi cache CPU?",
    "answers": [
      "Menyimpan data yang kerap digunakan untuk akses pantas",
      "Menyimpan fail pengguna jangka panjang",
      "Menyambung internet",
      "Mengawal pencetak"
    ],
    "correctAnswer": 0,
    "explanation": "Cache membantu mempercepat akses CPU."
  },
  {
    "id": "KP02-Q17",
    "kp": 2,
    "type": "mcq",
    "title": "Fungsi Sistem Komputer",
    "question": "Apakah fungsi port USB?",
    "answers": [
      "Menyambungkan peranti USB dan memindahkan data/kuasa",
      "Menggantikan motherboard",
      "Menjadi storan dalaman tetap",
      "Memproses grafik"
    ],
    "correctAnswer": 0,
    "explanation": "USB digunakan untuk sambungan periferal."
  },
  {
    "id": "KP02-Q18",
    "kp": 2,
    "type": "mcq",
    "title": "Fungsi Sistem Komputer",
    "question": "Apakah fungsi HDMI?",
    "answers": [
      "Menghantar audio dan video digital",
      "Membekalkan kuasa CPU",
      "Menyimpan fail",
      "Menghubungkan RAM"
    ],
    "correctAnswer": 0,
    "explanation": "HDMI membawa isyarat audio dan video digital."
  },
  {
    "id": "KP02-Q19",
    "kp": 2,
    "type": "mcq",
    "title": "Fungsi Sistem Komputer",
    "question": "Apakah fungsi SATA?",
    "answers": [
      "Menghubungkan peranti storan seperti HDD/SSD SATA",
      "Mengawal kipas CPU",
      "Menghasilkan audio",
      "Menghubungkan monitor analog"
    ],
    "correctAnswer": 0,
    "explanation": "SATA ialah antara muka storan."
  },
  {
    "id": "KP02-Q20",
    "kp": 2,
    "type": "mcq",
    "title": "Fungsi Sistem Komputer",
    "question": "Mengapa semua fungsi sistem perlu bekerjasama?",
    "answers": [
      "Supaya data dapat diproses menjadi maklumat dengan betul",
      "Supaya casing lebih berat",
      "Supaya kipas berhenti",
      "Supaya monitor padam"
    ],
    "correctAnswer": 0,
    "explanation": "Sistem komputer bergantung pada kerjasama input, proses, output dan storan."
  },
  {
    "id": "KP03-Q01",
    "kp": 3,
    "type": "mcq",
    "title": "Perkakasan Komputer",
    "question": "Apakah maksud perkakasan komputer?",
    "answers": [
      "Komponen fizikal yang boleh dilihat dan disentuh",
      "Program aplikasi",
      "Fail digital",
      "Arahan sistem"
    ],
    "correctAnswer": 0,
    "explanation": "Perkakasan ialah komponen fizikal komputer."
  },
  {
    "id": "KP03-Q02",
    "kp": 3,
    "type": "mcq",
    "title": "Perkakasan Komputer",
    "question": "Yang manakah komponen dalaman komputer?",
    "answers": [
      "RAM",
      "Pencetak",
      "Projektor",
      "Scanner"
    ],
    "correctAnswer": 0,
    "explanation": "RAM dipasang di dalam sistem."
  },
  {
    "id": "KP03-Q03",
    "kp": 3,
    "type": "mcq",
    "title": "Perkakasan Komputer",
    "question": "Yang manakah peranti luaran komputer?",
    "answers": [
      "Pencetak",
      "CPU",
      "RAM",
      "Motherboard"
    ],
    "correctAnswer": 0,
    "explanation": "Pencetak ialah periferal luaran."
  },
  {
    "id": "KP03-Q04",
    "kp": 3,
    "type": "mcq",
    "title": "Perkakasan Komputer",
    "question": "Apakah fungsi motherboard?",
    "answers": [
      "Menempatkan dan menghubungkan komponen utama",
      "Mencetak dokumen",
      "Menyimpan fail pengguna secara utama",
      "Menjadi antivirus"
    ],
    "correctAnswer": 0,
    "explanation": "Motherboard ialah papan litar utama."
  },
  {
    "id": "KP03-Q05",
    "kp": 3,
    "type": "mcq",
    "title": "Perkakasan Komputer",
    "question": "Apakah fungsi CPU?",
    "answers": [
      "Melaksanakan arahan dan memproses data",
      "Menyimpan data kekal",
      "Menjana kuasa",
      "Memegang skru"
    ],
    "correctAnswer": 0,
    "explanation": "CPU ialah pusat pemprosesan."
  },
  {
    "id": "KP03-Q06",
    "kp": 3,
    "type": "mcq",
    "title": "Perkakasan Komputer",
    "question": "Apakah fungsi RAM?",
    "answers": [
      "Menyimpan data sementara semasa digunakan",
      "Menyimpan data kekal tanpa kuasa",
      "Menyambung monitor",
      "Membekal kuasa"
    ],
    "correctAnswer": 0,
    "explanation": "RAM ialah memori sementara."
  },
  {
    "id": "KP03-Q07",
    "kp": 3,
    "type": "mcq",
    "title": "Perkakasan Komputer",
    "question": "Apakah fungsi HDD/SSD?",
    "answers": [
      "Menyimpan data secara kekal",
      "Memproses grafik",
      "Membekalkan kuasa",
      "Mengawal kipas"
    ],
    "correctAnswer": 0,
    "explanation": "HDD/SSD ialah storan utama."
  },
  {
    "id": "KP03-Q08",
    "kp": 3,
    "type": "truefalse",
    "title": "Perkakasan Komputer",
    "question": "Apakah fungsi PSU?",
    "answers": [
      "Membekalkan kuasa kepada komponen komputer",
      "Memproses data",
      "Menyimpan video",
      "Menghasilkan bunyi"
    ],
    "correctAnswer": 0,
    "explanation": "PSU menukar AC kepada voltan DC yang sesuai."
  },
  {
    "id": "KP03-Q09",
    "kp": 3,
    "type": "mcq",
    "title": "Perkakasan Komputer",
    "question": "Apakah fungsi heatsink?",
    "answers": [
      "Menyerap dan membantu membuang haba dari komponen",
      "Menyimpan fail",
      "Memasukkan data",
      "Menghasilkan rangkaian"
    ],
    "correctAnswer": 0,
    "explanation": "Heatsink membantu penyejukan."
  },
  {
    "id": "KP03-Q10",
    "kp": 3,
    "type": "mcq",
    "title": "Perkakasan Komputer",
    "question": "Apakah fungsi GPU?",
    "answers": [
      "Memproses grafik",
      "Menyimpan BIOS",
      "Membekalkan kuasa utama",
      "Mengawal port USB"
    ],
    "correctAnswer": 0,
    "explanation": "GPU mengendalikan grafik."
  },
  {
    "id": "KP03-Q11",
    "kp": 3,
    "type": "mcq",
    "title": "Perkakasan Komputer",
    "question": "Slot DIMM digunakan untuk apa?",
    "answers": [
      "Memasang modul RAM",
      "Memasang CPU",
      "Memasang PSU",
      "Memasang HDD 3.5 inci"
    ],
    "correctAnswer": 0,
    "explanation": "DIMM ialah slot memori."
  },
  {
    "id": "KP03-Q12",
    "kp": 3,
    "type": "mcq",
    "title": "Perkakasan Komputer",
    "question": "Soket CPU digunakan untuk apa?",
    "answers": [
      "Memasang pemproses pada motherboard",
      "Memasang RAM",
      "Memasang kabel SATA",
      "Memasang pencetak"
    ],
    "correctAnswer": 0,
    "explanation": "CPU dipasang pada soket yang sesuai."
  },
  {
    "id": "KP03-Q13",
    "kp": 3,
    "type": "mcq",
    "title": "Perkakasan Komputer",
    "question": "Slot PCIe biasanya digunakan untuk apa?",
    "answers": [
      "Kad tambahan seperti GPU atau NIC",
      "Memasang CPU",
      "Memasang skru casing",
      "Menyimpan sistem operasi"
    ],
    "correctAnswer": 0,
    "explanation": "PCIe menyokong kad pengembangan."
  },
  {
    "id": "KP03-Q14",
    "kp": 3,
    "type": "mcq",
    "title": "Perkakasan Komputer",
    "question": "Port RJ45 digunakan untuk apa?",
    "answers": [
      "Sambungan rangkaian Ethernet",
      "Sambungan kuasa CPU",
      "Sambungan audio analog sahaja",
      "Memasang RAM"
    ],
    "correctAnswer": 0,
    "explanation": "RJ45 digunakan untuk Ethernet."
  },
  {
    "id": "KP03-Q15",
    "kp": 3,
    "type": "mcq",
    "title": "Perkakasan Komputer",
    "question": "Port audio 3.5 mm digunakan untuk apa?",
    "answers": [
      "Sambungan peranti audio",
      "Sambungan RAM",
      "Sambungan SATA",
      "Sambungan kuasa motherboard"
    ],
    "correctAnswer": 0,
    "explanation": "Port audio digunakan untuk speaker/headset/mikrofon."
  },
  {
    "id": "KP03-Q16",
    "kp": 3,
    "type": "truefalse",
    "title": "Perkakasan Komputer",
    "question": "Apakah fungsi bateri CMOS?",
    "answers": [
      "Mengekalkan tetapan masa dan firmware tertentu",
      "Membekalkan kuasa penuh komputer",
      "Menyejukkan CPU",
      "Memproses grafik"
    ],
    "correctAnswer": 0,
    "explanation": "Bateri CMOS membantu mengekalkan tetapan tertentu apabila kuasa utama tiada."
  },
  {
    "id": "KP03-Q17",
    "kp": 3,
    "type": "mcq",
    "title": "Perkakasan Komputer",
    "question": "Apakah fungsi kipas CPU?",
    "answers": [
      "Membantu menyejukkan CPU",
      "Menyimpan fail",
      "Mencetak dokumen",
      "Mengawal mouse"
    ],
    "correctAnswer": 0,
    "explanation": "Kipas CPU mengalirkan udara melalui heatsink."
  },
  {
    "id": "KP03-Q18",
    "kp": 3,
    "type": "mcq",
    "title": "Perkakasan Komputer",
    "question": "Apakah fungsi kabel data SATA?",
    "answers": [
      "Memindahkan data antara motherboard dan peranti storan SATA",
      "Membekalkan kuasa PSU utama",
      "Menghubungkan monitor",
      "Mengawal RAM"
    ],
    "correctAnswer": 0,
    "explanation": "Kabel data SATA menghubungkan storan ke motherboard."
  },
  {
    "id": "KP03-Q19",
    "kp": 3,
    "type": "mcq",
    "title": "Perkakasan Komputer",
    "question": "Apakah fungsi kabel kuasa SATA?",
    "answers": [
      "Membekalkan kuasa kepada peranti SATA",
      "Memindahkan video",
      "Memasang sistem operasi",
      "Mengawal CPU"
    ],
    "correctAnswer": 0,
    "explanation": "Kabel kuasa SATA datang daripada PSU."
  },
  {
    "id": "KP03-Q20",
    "kp": 3,
    "type": "mcq",
    "title": "Perkakasan Komputer",
    "question": "Mengapa spesifikasi perkakasan perlu serasi?",
    "answers": [
      "Untuk memastikan komponen boleh berfungsi bersama dengan stabil",
      "Supaya casing lebih berat",
      "Supaya semua port digunakan",
      "Supaya kipas sentiasa maksimum"
    ],
    "correctAnswer": 0,
    "explanation": "Keserasian penting untuk operasi sistem yang stabil."
  },
  {
    "id": "KP04-Q01",
    "kp": 4,
    "type": "mcq",
    "title": "Peralatan Pemasangan",
    "question": "Alat utama untuk membuka skru casing ialah?",
    "answers": [
      "Pemutar skru Phillips",
      "Playar hidung panjang",
      "Berus cat",
      "Pita pelekat"
    ],
    "correctAnswer": 0,
    "explanation": "Pemutar skru Phillips lazim digunakan untuk skru komputer."
  },
  {
    "id": "KP04-Q02",
    "kp": 4,
    "type": "mcq",
    "title": "Peralatan Pemasangan",
    "question": "Apakah kegunaan gelang antistatik?",
    "answers": [
      "Mengurangkan risiko kerosakan ESD pada komponen",
      "Mengukur voltan",
      "Memotong kabel",
      "Membersihkan monitor"
    ],
    "correctAnswer": 0,
    "explanation": "Gelang antistatik membantu mengawal cas statik."
  },
  {
    "id": "KP04-Q03",
    "kp": 4,
    "type": "mcq",
    "title": "Peralatan Pemasangan",
    "question": "Apakah kegunaan multimeter?",
    "answers": [
      "Mengukur nilai elektrik seperti voltan dan kesinambungan",
      "Memasang CPU",
      "Menghapus habuk",
      "Menyusun fail"
    ],
    "correctAnswer": 0,
    "explanation": "Multimeter digunakan untuk pengukuran elektrik."
  },
  {
    "id": "KP04-Q04",
    "kp": 4,
    "type": "mcq",
    "title": "Peralatan Pemasangan",
    "question": "Apakah kegunaan cable tie?",
    "answers": [
      "Mengemas dan mengurus kabel",
      "Mengukur suhu CPU",
      "Memasang RAM",
      "Menghapus malware"
    ],
    "correctAnswer": 0,
    "explanation": "Cable tie membantu pengurusan kabel."
  },
  {
    "id": "KP04-Q05",
    "kp": 4,
    "type": "mcq",
    "title": "Peralatan Pemasangan",
    "question": "Apakah kegunaan berus antistatik?",
    "answers": [
      "Membersihkan habuk dengan risiko statik yang lebih rendah",
      "Memotong skru",
      "Memasang CPU",
      "Mengukur voltan"
    ],
    "correctAnswer": 0,
    "explanation": "Berus antistatik sesuai untuk pembersihan komponen."
  },
  {
    "id": "KP04-Q06",
    "kp": 4,
    "type": "mcq",
    "title": "Peralatan Pemasangan",
    "question": "Apakah kegunaan thermal paste?",
    "answers": [
      "Meningkatkan pemindahan haba antara CPU dan heatsink",
      "Mengikat kabel",
      "Membersihkan monitor",
      "Menyimpan data"
    ],
    "correctAnswer": 0,
    "explanation": "Thermal paste mengisi ruang mikro antara permukaan."
  },
  {
    "id": "KP04-Q07",
    "kp": 4,
    "type": "mcq",
    "title": "Peralatan Pemasangan",
    "question": "Apakah kegunaan flashlight semasa pemasangan?",
    "answers": [
      "Membantu melihat kawasan sempit dalam casing",
      "Mengukur RAM",
      "Memasang OS",
      "Menjana kuasa"
    ],
    "correctAnswer": 0,
    "explanation": "Lampu membantu pemeriksaan visual."
  },
  {
    "id": "KP04-Q08",
    "kp": 4,
    "type": "mcq",
    "title": "Peralatan Pemasangan",
    "question": "Mengapa meja kerja perlu bersih?",
    "answers": [
      "Mengurangkan risiko kehilangan skru dan kerosakan komponen",
      "Supaya internet laju",
      "Supaya RAM bertambah",
      "Supaya PSU lebih kuat"
    ],
    "correctAnswer": 0,
    "explanation": "Ruang kerja bersih meningkatkan keselamatan."
  },
  {
    "id": "KP04-Q09",
    "kp": 4,
    "type": "mcq",
    "title": "Peralatan Pemasangan",
    "question": "Apakah kegunaan bekas skru?",
    "answers": [
      "Menyimpan skru agar tidak hilang",
      "Mengukur suhu",
      "Menguji rangkaian",
      "Memasang perisian"
    ],
    "correctAnswer": 0,
    "explanation": "Bekas skru membantu organisasi kerja."
  },
  {
    "id": "KP04-Q10",
    "kp": 4,
    "type": "mcq",
    "title": "Peralatan Pemasangan",
    "question": "Mengapa pemutar skru bermagnet digunakan dengan berhati-hati?",
    "answers": [
      "Untuk mengawal skru dan mengelakkan sentuhan tidak perlu pada komponen",
      "Kerana ia menggantikan ESD",
      "Kerana ia menyimpan data",
      "Kerana ia menguatkan PSU"
    ],
    "correctAnswer": 0,
    "explanation": "Alat mesti digunakan dengan cermat di sekitar komponen."
  },
  {
    "id": "KP04-Q11",
    "kp": 4,
    "type": "mcq",
    "title": "Peralatan Pemasangan",
    "question": "Apakah kegunaan playar hidung panjang?",
    "answers": [
      "Memegang atau mencapai komponen kecil di ruang sempit",
      "Menguji BIOS",
      "Memasang OS",
      "Mencetak laporan"
    ],
    "correctAnswer": 0,
    "explanation": "Playar membantu mencapai bahagian kecil."
  },
  {
    "id": "KP04-Q12",
    "kp": 4,
    "type": "mcq",
    "title": "Peralatan Pemasangan",
    "question": "Apakah kegunaan blower udara yang sesuai?",
    "answers": [
      "Membuang habuk dari komponen",
      "Membekal kuasa",
      "Menguji RAM",
      "Mengawal BIOS"
    ],
    "correctAnswer": 0,
    "explanation": "Blower membantu pembersihan habuk."
  },
  {
    "id": "KP04-Q13",
    "kp": 4,
    "type": "mcq",
    "title": "Peralatan Pemasangan",
    "question": "Mengapa cecair pembersih tidak boleh disembur terus pada komponen?",
    "answers": [
      "Boleh menyebabkan kelembapan dan kerosakan elektrik",
      "Boleh menambah RAM",
      "Boleh mempercepat CPU",
      "Boleh menukar BIOS"
    ],
    "correctAnswer": 0,
    "explanation": "Cecair perlu digunakan secara terkawal."
  },
  {
    "id": "KP04-Q14",
    "kp": 4,
    "type": "mcq",
    "title": "Peralatan Pemasangan",
    "question": "Apakah alat sesuai untuk memotong cable tie?",
    "answers": [
      "Pemotong kabel kecil",
      "Pemutar skru",
      "Multimeter",
      "Thermal paste"
    ],
    "correctAnswer": 0,
    "explanation": "Pemotong kecil lebih sesuai dan selamat."
  },
  {
    "id": "KP04-Q15",
    "kp": 4,
    "type": "mcq",
    "title": "Peralatan Pemasangan",
    "question": "Mengapa manual motherboard penting?",
    "answers": [
      "Menunjukkan lokasi connector, slot dan konfigurasi yang betul",
      "Menggantikan sistem operasi",
      "Membekalkan kuasa",
      "Membersihkan casing"
    ],
    "correctAnswer": 0,
    "explanation": "Manual membantu pemasangan tepat."
  },
  {
    "id": "KP04-Q16",
    "kp": 4,
    "type": "mcq",
    "title": "Peralatan Pemasangan",
    "question": "Apakah langkah sebelum menggunakan multimeter?",
    "answers": [
      "Pilih fungsi dan julat pengukuran yang betul",
      "Pasang RAM dahulu",
      "Matikan monitor sahaja",
      "Format storan"
    ],
    "correctAnswer": 0,
    "explanation": "Tetapan salah boleh memberi bacaan tidak tepat atau merosakkan alat."
  },
  {
    "id": "KP04-Q17",
    "kp": 4,
    "type": "mcq",
    "title": "Peralatan Pemasangan",
    "question": "Apakah kegunaan tikar antistatik?",
    "answers": [
      "Menyediakan permukaan kerja yang mengurangkan risiko ESD",
      "Menambah kelajuan CPU",
      "Memasang driver",
      "Menggantikan PSU"
    ],
    "correctAnswer": 0,
    "explanation": "Tikar antistatik membantu perlindungan ESD."
  },
  {
    "id": "KP04-Q18",
    "kp": 4,
    "type": "mcq",
    "title": "Peralatan Pemasangan",
    "question": "Apakah kegunaan label kabel?",
    "answers": [
      "Memudahkan pengecaman sambungan semasa pemasangan atau servis",
      "Meningkatkan kapasiti SSD",
      "Menambah kuasa",
      "Mengawal BIOS"
    ],
    "correctAnswer": 0,
    "explanation": "Pelabelan membantu pengurusan kabel."
  },
  {
    "id": "KP04-Q19",
    "kp": 4,
    "type": "mcq",
    "title": "Peralatan Pemasangan",
    "question": "Mengapa alat perlu diperiksa sebelum digunakan?",
    "answers": [
      "Memastikan alat selamat dan dalam keadaan baik",
      "Supaya OS dipasang automatik",
      "Supaya kabel bertambah panjang",
      "Supaya monitor menjadi lebih terang"
    ],
    "correctAnswer": 0,
    "explanation": "Alat rosak boleh menyebabkan kecederaan atau kerosakan."
  },
  {
    "id": "KP04-Q20",
    "kp": 4,
    "type": "mcq",
    "title": "Peralatan Pemasangan",
    "question": "Apakah amalan terbaik selepas selesai menggunakan alat?",
    "answers": [
      "Simpan semula alat dengan kemas di tempat yang betul",
      "Biarkan atas motherboard",
      "Campur dengan skru longgar",
      "Letak dalam casing hidup"
    ],
    "correctAnswer": 0,
    "explanation": "Penyimpanan kemas membantu keselamatan dan kecekapan."
  },
  {
    "id": "KP05-Q01",
    "kp": 5,
    "type": "mcq",
    "title": "Komponen Komputer",
    "question": "Apakah fungsi utama CPU?",
    "answers": [
      "Melaksanakan arahan dan memproses data",
      "Membekalkan kuasa",
      "Mencetak dokumen",
      "Menyimpan data kekal"
    ],
    "correctAnswer": 0,
    "explanation": "CPU ialah pusat pemprosesan."
  },
  {
    "id": "KP05-Q02",
    "kp": 5,
    "type": "mcq",
    "title": "Komponen Komputer",
    "question": "Apakah fungsi utama RAM?",
    "answers": [
      "Menyimpan data sementara yang sedang digunakan",
      "Menyimpan data kekal",
      "Mengawal kuasa AC",
      "Menyambung internet tanpa NIC"
    ],
    "correctAnswer": 0,
    "explanation": "RAM menyimpan data sementara."
  },
  {
    "id": "KP05-Q03",
    "kp": 5,
    "type": "mcq",
    "title": "Komponen Komputer",
    "question": "Apakah fungsi SSD?",
    "answers": [
      "Menyimpan data secara kekal dengan akses pantas",
      "Memproses grafik",
      "Membekal kuasa",
      "Mengawal kipas"
    ],
    "correctAnswer": 0,
    "explanation": "SSD ialah storan bukan volatil."
  },
  {
    "id": "KP05-Q04",
    "kp": 5,
    "type": "mcq",
    "title": "Komponen Komputer",
    "question": "Apakah fungsi PSU?",
    "answers": [
      "Menukar kuasa AC kepada DC untuk komponen",
      "Menyimpan BIOS",
      "Menghasilkan paparan",
      "Memproses audio sahaja"
    ],
    "correctAnswer": 0,
    "explanation": "PSU membekalkan kuasa kepada sistem."
  },
  {
    "id": "KP05-Q05",
    "kp": 5,
    "type": "mcq",
    "title": "Komponen Komputer",
    "question": "Apakah fungsi motherboard?",
    "answers": [
      "Menghubungkan semua komponen utama komputer",
      "Mencetak dokumen",
      "Menggantikan SSD",
      "Menjadi aplikasi"
    ],
    "correctAnswer": 0,
    "explanation": "Motherboard ialah pusat sambungan perkakasan."
  },
  {
    "id": "KP05-Q06",
    "kp": 5,
    "type": "mcq",
    "title": "Komponen Komputer",
    "question": "Apakah fungsi heatsink CPU?",
    "answers": [
      "Memindahkan haba daripada CPU ke udara",
      "Menyimpan data",
      "Mengawal internet",
      "Menghasilkan bunyi"
    ],
    "correctAnswer": 0,
    "explanation": "Heatsink membantu menyejukkan CPU."
  },
  {
    "id": "KP05-Q07",
    "kp": 5,
    "type": "mcq",
    "title": "Komponen Komputer",
    "question": "Apakah fungsi thermal paste?",
    "answers": [
      "Meningkatkan sentuhan haba antara CPU dan heatsink",
      "Melekatkan RAM",
      "Membersihkan port",
      "Mengikat kabel"
    ],
    "correctAnswer": 0,
    "explanation": "Thermal paste meningkatkan pemindahan haba."
  },
  {
    "id": "KP05-Q08",
    "kp": 5,
    "type": "mcq",
    "title": "Komponen Komputer",
    "question": "Apakah fungsi GPU diskret?",
    "answers": [
      "Memproses grafik dan video",
      "Menyimpan BIOS",
      "Membekalkan kuasa utama",
      "Mengawal papan kekunci"
    ],
    "correctAnswer": 0,
    "explanation": "GPU khusus memproses grafik."
  },
  {
    "id": "KP05-Q09",
    "kp": 5,
    "type": "mcq",
    "title": "Komponen Komputer",
    "question": "Apakah fungsi NIC?",
    "answers": [
      "Menyambungkan komputer ke rangkaian",
      "Menyimpan fail",
      "Menjana kuasa",
      "Menyejukkan CPU"
    ],
    "correctAnswer": 0,
    "explanation": "NIC menyediakan sambungan rangkaian."
  },
  {
    "id": "KP05-Q10",
    "kp": 5,
    "type": "mcq",
    "title": "Komponen Komputer",
    "question": "Apakah fungsi sound card?",
    "answers": [
      "Memproses input dan output audio",
      "Memproses rangkaian",
      "Menyimpan OS",
      "Mengawal PSU"
    ],
    "correctAnswer": 0,
    "explanation": "Sound card mengurus audio."
  },
  {
    "id": "KP05-Q11",
    "kp": 5,
    "type": "mcq",
    "title": "Komponen Komputer",
    "question": "Apakah fungsi chipset motherboard?",
    "answers": [
      "Mengurus komunikasi antara komponen tertentu pada motherboard",
      "Mencetak dokumen",
      "Menambah kapasiti RAM",
      "Menggantikan CPU"
    ],
    "correctAnswer": 0,
    "explanation": "Chipset membantu pengurusan komunikasi sistem."
  },
  {
    "id": "KP05-Q12",
    "kp": 5,
    "type": "mcq",
    "title": "Komponen Komputer",
    "question": "Apakah fungsi slot M.2?",
    "answers": [
      "Memasang peranti seperti SSD M.2",
      "Memasang PSU",
      "Memasang CPU",
      "Memasang monitor"
    ],
    "correctAnswer": 0,
    "explanation": "Slot M.2 menyokong storan dan peranti tertentu."
  },
  {
    "id": "KP05-Q13",
    "kp": 5,
    "type": "mcq",
    "title": "Komponen Komputer",
    "question": "Apakah fungsi kipas casing intake?",
    "answers": [
      "Membawa udara sejuk masuk ke casing",
      "Mengeluarkan semua udara",
      "Menyimpan data",
      "Mengawal BIOS"
    ],
    "correctAnswer": 0,
    "explanation": "Intake membantu aliran udara masuk."
  },
  {
    "id": "KP05-Q14",
    "kp": 5,
    "type": "mcq",
    "title": "Komponen Komputer",
    "question": "Apakah fungsi kipas casing exhaust?",
    "answers": [
      "Mengeluarkan udara panas dari casing",
      "Membekalkan kuasa",
      "Mengawal RAM",
      "Menyambung internet"
    ],
    "correctAnswer": 0,
    "explanation": "Exhaust membuang udara panas."
  },
  {
    "id": "KP05-Q15",
    "kp": 5,
    "type": "mcq",
    "title": "Komponen Komputer",
    "question": "Apakah fungsi connector 24-pin ATX?",
    "answers": [
      "Membekalkan kuasa utama kepada motherboard",
      "Menyambung monitor",
      "Menyambung HDD data",
      "Memasang GPU"
    ],
    "correctAnswer": 0,
    "explanation": "24-pin ATX ialah kuasa utama motherboard."
  },
  {
    "id": "KP05-Q16",
    "kp": 5,
    "type": "mcq",
    "title": "Komponen Komputer",
    "question": "Apakah fungsi connector CPU 4/8-pin EPS?",
    "answers": [
      "Membekalkan kuasa kepada bahagian CPU",
      "Menyambung speaker",
      "Menyambung SATA data",
      "Menyambung USB"
    ],
    "correctAnswer": 0,
    "explanation": "EPS memberi kuasa kepada CPU/VRM."
  },
  {
    "id": "KP05-Q17",
    "kp": 5,
    "type": "mcq",
    "title": "Komponen Komputer",
    "question": "Apakah fungsi VRM pada motherboard?",
    "answers": [
      "Mengawal dan menukar voltan untuk komponen seperti CPU",
      "Menyimpan fail",
      "Menghasilkan rangkaian",
      "Mengawal monitor"
    ],
    "correctAnswer": 0,
    "explanation": "VRM membekalkan voltan stabil."
  },
  {
    "id": "KP05-Q18",
    "kp": 5,
    "type": "mcq",
    "title": "Komponen Komputer",
    "question": "Mengapa kapasiti RAM penting?",
    "answers": [
      "Mempengaruhi jumlah data/program yang boleh aktif serentak",
      "Meningkatkan voltan PSU",
      "Menambah port USB",
      "Menukar jenis CPU"
    ],
    "correctAnswer": 0,
    "explanation": "Kapasiti RAM mempengaruhi multitugas."
  },
  {
    "id": "KP05-Q19",
    "kp": 5,
    "type": "mcq",
    "title": "Komponen Komputer",
    "question": "Mengapa kelajuan storan penting?",
    "answers": [
      "Mempengaruhi masa boot dan pemuatan fail/aplikasi",
      "Meningkatkan saiz monitor",
      "Mengawal kipas sahaja",
      "Menambah kuasa PSU"
    ],
    "correctAnswer": 0,
    "explanation": "Storan lebih pantas mempercepat akses data."
  },
  {
    "id": "KP05-Q20",
    "kp": 5,
    "type": "mcq",
    "title": "Komponen Komputer",
    "question": "Mengapa keserasian soket CPU penting?",
    "answers": [
      "CPU hanya boleh dipasang pada motherboard dengan soket yang sesuai",
      "Semua CPU menggunakan soket sama",
      "Soket hanya untuk RAM",
      "Soket tidak mempengaruhi pemasangan"
    ],
    "correctAnswer": 0,
    "explanation": "Keserasian soket ialah syarat asas pemasangan CPU."
  },
  {
    "id": "KP06-Q01",
    "kp": 6,
    "type": "mcq",
    "title": "Casing Komputer",
    "question": "Apakah fungsi utama casing komputer?",
    "answers": [
      "Menempatkan dan melindungi komponen dalaman",
      "Menyimpan sistem operasi sahaja",
      "Memproses data",
      "Menghasilkan rangkaian"
    ],
    "correctAnswer": 0,
    "explanation": "Casing melindungi dan menyusun komponen."
  },
  {
    "id": "KP06-Q02",
    "kp": 6,
    "type": "mcq",
    "title": "Casing Komputer",
    "question": "Apakah maksud form factor casing?",
    "answers": [
      "Saiz dan susun atur fizikal yang menentukan keserasian komponen",
      "Jenis sistem operasi",
      "Kelajuan internet",
      "Kapasiti RAM"
    ],
    "correctAnswer": 0,
    "explanation": "Form factor menentukan keserasian motherboard dan komponen."
  },
  {
    "id": "KP06-Q03",
    "kp": 6,
    "type": "mcq",
    "title": "Casing Komputer",
    "question": "Casing ATX biasanya menyokong motherboard jenis apa?",
    "answers": [
      "ATX dan saiz lebih kecil yang serasi",
      "Hanya laptop",
      "Hanya server blade",
      "Hanya printer"
    ],
    "correctAnswer": 0,
    "explanation": "Casing ATX lazimnya menyokong ATX dan form factor lebih kecil."
  },
  {
    "id": "KP06-Q04",
    "kp": 6,
    "type": "mcq",
    "title": "Casing Komputer",
    "question": "Apakah fungsi bay 3.5 inci?",
    "answers": [
      "Menempatkan peranti seperti HDD 3.5 inci",
      "Memasang CPU",
      "Memasang RAM",
      "Memasang PSU sahaja"
    ],
    "correctAnswer": 0,
    "explanation": "Bay 3.5 inci digunakan untuk storan tertentu."
  },
  {
    "id": "KP06-Q05",
    "kp": 6,
    "type": "mcq",
    "title": "Casing Komputer",
    "question": "Apakah fungsi ruang cable management?",
    "answers": [
      "Menyusun kabel agar aliran udara lebih baik",
      "Menambah kelajuan CPU",
      "Menyimpan BIOS",
      "Mencetak dokumen"
    ],
    "correctAnswer": 0,
    "explanation": "Pengurusan kabel membantu aliran udara dan kemasan."
  },
  {
    "id": "KP06-Q06",
    "kp": 6,
    "type": "mcq",
    "title": "Casing Komputer",
    "question": "Mengapa airflow casing penting?",
    "answers": [
      "Membantu mengekalkan suhu komponen pada tahap selamat",
      "Menambah kapasiti SSD",
      "Menggantikan antivirus",
      "Meningkatkan resolusi monitor"
    ],
    "correctAnswer": 0,
    "explanation": "Airflow mengurangkan pengumpulan haba."
  },
  {
    "id": "KP06-Q07",
    "kp": 6,
    "type": "mcq",
    "title": "Casing Komputer",
    "question": "Di manakah kipas intake biasanya dipasang?",
    "answers": [
      "Bahagian hadapan atau bawah casing",
      "Di atas CPU tanpa heatsink",
      "Dalam PSU secara rawak",
      "Pada monitor"
    ],
    "correctAnswer": 0,
    "explanation": "Intake lazimnya menarik udara sejuk dari hadapan/bawah."
  },
  {
    "id": "KP06-Q08",
    "kp": 6,
    "type": "mcq",
    "title": "Casing Komputer",
    "question": "Di manakah kipas exhaust biasanya dipasang?",
    "answers": [
      "Bahagian belakang atau atas casing",
      "Dalam slot RAM",
      "Pada port USB",
      "Di bawah motherboard tanpa bracket"
    ],
    "correctAnswer": 0,
    "explanation": "Udara panas biasanya dikeluarkan di belakang/atas."
  },
  {
    "id": "KP06-Q09",
    "kp": 6,
    "type": "mcq",
    "title": "Casing Komputer",
    "question": "Apakah fungsi dust filter?",
    "answers": [
      "Mengurangkan habuk masuk bersama aliran udara",
      "Menambah voltan",
      "Menyimpan data",
      "Mengawal BIOS"
    ],
    "correctAnswer": 0,
    "explanation": "Dust filter membantu menjaga kebersihan dalaman."
  },
  {
    "id": "KP06-Q10",
    "kp": 6,
    "type": "mcq",
    "title": "Casing Komputer",
    "question": "Mengapa panel sisi perlu dipasang dengan betul?",
    "answers": [
      "Untuk keselamatan dan aliran udara yang dirancang",
      "Supaya CPU lebih laju",
      "Supaya RAM bertambah",
      "Supaya OS auto-update"
    ],
    "correctAnswer": 0,
    "explanation": "Panel yang betul membantu perlindungan dan airflow."
  },
  {
    "id": "KP06-Q11",
    "kp": 6,
    "type": "mcq",
    "title": "Casing Komputer",
    "question": "Apakah fungsi standoff motherboard?",
    "answers": [
      "Menjarakkan motherboard daripada tray casing",
      "Memegang kipas CPU",
      "Menyambung internet",
      "Menyimpan storan"
    ],
    "correctAnswer": 0,
    "explanation": "Standoff mencegah motherboard bersentuhan terus dengan logam casing."
  },
  {
    "id": "KP06-Q12",
    "kp": 6,
    "type": "mcq",
    "title": "Casing Komputer",
    "question": "Apa risiko standoff dipasang pada lokasi salah?",
    "answers": [
      "Boleh menyebabkan litar pintas pada motherboard",
      "Menambah kelajuan CPU",
      "Menambah kapasiti RAM",
      "Meningkatkan bunyi speaker"
    ],
    "correctAnswer": 0,
    "explanation": "Standoff yang salah boleh menyentuh bahagian litar."
  },
  {
    "id": "KP06-Q13",
    "kp": 6,
    "type": "mcq",
    "title": "Casing Komputer",
    "question": "Apakah fungsi front panel connector?",
    "answers": [
      "Menghubungkan butang kuasa, reset dan LED casing ke motherboard",
      "Menyambung storan SATA",
      "Memasang RAM",
      "Menyambung GPU"
    ],
    "correctAnswer": 0,
    "explanation": "Front panel connector menghubungkan kawalan casing."
  },
  {
    "id": "KP06-Q14",
    "kp": 6,
    "type": "mcq",
    "title": "Casing Komputer",
    "question": "Apakah fungsi front USB header?",
    "answers": [
      "Menghubungkan port USB hadapan casing ke motherboard",
      "Membekal kuasa CPU",
      "Menghubungkan monitor",
      "Mengawal BIOS"
    ],
    "correctAnswer": 0,
    "explanation": "Header USB digunakan untuk port hadapan."
  },
  {
    "id": "KP06-Q15",
    "kp": 6,
    "type": "mcq",
    "title": "Casing Komputer",
    "question": "Apakah fungsi HD Audio header?",
    "answers": [
      "Menghubungkan port audio hadapan casing",
      "Menghubungkan SATA data",
      "Menghubungkan CPU fan",
      "Menghubungkan RAM"
    ],
    "correctAnswer": 0,
    "explanation": "HD Audio header menyokong audio hadapan."
  },
  {
    "id": "KP06-Q16",
    "kp": 6,
    "type": "mcq",
    "title": "Casing Komputer",
    "question": "Mengapa saiz GPU perlu diperiksa sebelum pemasangan?",
    "answers": [
      "Untuk memastikan panjang dan ketebalan GPU muat dalam casing",
      "Untuk menentukan sistem operasi",
      "Untuk menentukan jenis mouse",
      "Untuk menambah kuasa USB"
    ],
    "correctAnswer": 0,
    "explanation": "GPU moden boleh memerlukan ruang casing yang besar."
  },
  {
    "id": "KP06-Q17",
    "kp": 6,
    "type": "mcq",
    "title": "Casing Komputer",
    "question": "Mengapa ketinggian CPU cooler perlu diperiksa?",
    "answers": [
      "Supaya cooler tidak terkena panel sisi casing",
      "Supaya printer berfungsi",
      "Supaya BIOS reset",
      "Supaya SSD menjadi lebih besar"
    ],
    "correctAnswer": 0,
    "explanation": "Clearance CPU cooler bergantung pada lebar casing."
  },
  {
    "id": "KP06-Q18",
    "kp": 6,
    "type": "mcq",
    "title": "Casing Komputer",
    "question": "Apakah fungsi PSU shroud?",
    "answers": [
      "Menyembunyikan PSU/kabel dan membantu kemasan airflow",
      "Meningkatkan kapasiti RAM",
      "Menambah port CPU",
      "Menggantikan heatsink"
    ],
    "correctAnswer": 0,
    "explanation": "PSU shroud membantu kemasan dalaman."
  },
  {
    "id": "KP06-Q19",
    "kp": 6,
    "type": "mcq",
    "title": "Casing Komputer",
    "question": "Apakah tanda airflow casing kurang baik?",
    "answers": [
      "Suhu komponen tinggi walaupun kipas berfungsi",
      "Monitor lebih cerah",
      "Keyboard lebih senyap",
      "SSD bertukar format"
    ],
    "correctAnswer": 0,
    "explanation": "Airflow lemah boleh menyebabkan suhu meningkat."
  },
  {
    "id": "KP06-Q20",
    "kp": 6,
    "type": "mcq",
    "title": "Casing Komputer",
    "question": "Apakah amalan baik semasa memilih casing?",
    "answers": [
      "Pastikan serasi dengan motherboard, GPU, cooler dan PSU",
      "Pilih berdasarkan warna sahaja",
      "Abaikan saiz komponen",
      "Pastikan tiada ruang kipas"
    ],
    "correctAnswer": 0,
    "explanation": "Keserasian fizikal perlu diperiksa sebelum pembelian/pemasangan."
  },
  {
    "id": "KP07-Q01",
    "kp": 7,
    "type": "mcq",
    "title": "Amaran Komputer",
    "question": "Apakah tujuan bunyi beep semasa komputer dihidupkan?",
    "answers": [
      "Memberi petunjuk keadaan atau ralat perkakasan",
      "Menandakan internet aktif",
      "Menandakan printer siap",
      "Menandakan fail telah disimpan"
    ],
    "correctAnswer": 0,
    "explanation": "Kod beep membantu diagnosis semasa POST."
  },
  {
    "id": "KP07-Q02",
    "kp": 7,
    "type": "mcq",
    "title": "Amaran Komputer",
    "question": "Apakah yang perlu dilakukan jika terdengar beep luar biasa?",
    "answers": [
      "Rujuk manual motherboard atau kod beep pengeluar",
      "Format storan terus",
      "Cabut semua kabel tanpa rekod",
      "Tekan reset berulang kali"
    ],
    "correctAnswer": 0,
    "explanation": "Kod beep berbeza mengikut pengeluar."
  },
  {
    "id": "KP07-Q03",
    "kp": 7,
    "type": "mcq",
    "title": "Amaran Komputer",
    "question": "Apakah maksud lampu debug CPU pada motherboard?",
    "answers": [
      "Menunjukkan kemungkinan masalah berkaitan CPU",
      "Menunjukkan Wi-Fi aktif",
      "Menunjukkan printer rosak",
      "Menunjukkan monitor gelap"
    ],
    "correctAnswer": 0,
    "explanation": "Debug LED membantu mengenal pasti komponen bermasalah."
  },
  {
    "id": "KP07-Q04",
    "kp": 7,
    "type": "mcq",
    "title": "Amaran Komputer",
    "question": "Apakah maksud lampu debug DRAM?",
    "answers": [
      "Menunjukkan kemungkinan masalah memori/RAM",
      "Masalah audio",
      "Masalah printer",
      "Masalah kabel HDMI sahaja"
    ],
    "correctAnswer": 0,
    "explanation": "DRAM LED berkait dengan memori."
  },
  {
    "id": "KP07-Q05",
    "kp": 7,
    "type": "mcq",
    "title": "Amaran Komputer",
    "question": "Apakah maksud lampu debug VGA?",
    "answers": [
      "Menunjukkan kemungkinan masalah grafik/GPU",
      "Masalah CPU fan sahaja",
      "Masalah HDD sahaja",
      "Masalah keyboard sahaja"
    ],
    "correctAnswer": 0,
    "explanation": "VGA LED berkait dengan grafik."
  },
  {
    "id": "KP07-Q06",
    "kp": 7,
    "type": "mcq",
    "title": "Amaran Komputer",
    "question": "Apakah maksud lampu debug BOOT?",
    "answers": [
      "Menunjukkan masalah peranti boot atau proses boot",
      "Masalah speaker",
      "Masalah mouse",
      "Masalah casing"
    ],
    "correctAnswer": 0,
    "explanation": "BOOT LED berkaitan peranti boot."
  },
  {
    "id": "KP07-Q07",
    "kp": 7,
    "type": "mcq",
    "title": "Amaran Komputer",
    "question": "Apakah langkah awal jika komputer langsung tidak menyala?",
    "answers": [
      "Periksa bekalan kuasa, suis PSU dan sambungan kuasa",
      "Format SSD",
      "Pasang semula printer",
      "Reset router"
    ],
    "correctAnswer": 0,
    "explanation": "Masalah kuasa perlu diperiksa dahulu."
  },
  {
    "id": "KP07-Q08",
    "kp": 7,
    "type": "truefalse",
    "title": "Amaran Komputer",
    "question": "Apakah langkah jika kipas berpusing tetapi tiada paparan?",
    "answers": [
      "Periksa RAM, GPU, kabel paparan dan indikator POST",
      "Tukar wallpaper",
      "Pasang aplikasi",
      "Cetak laporan"
    ],
    "correctAnswer": 0,
    "explanation": "No-display boleh berpunca daripada beberapa komponen utama."
  },
  {
    "id": "KP07-Q09",
    "kp": 7,
    "type": "mcq",
    "title": "Amaran Komputer",
    "question": "Mengapa kod beep perlu direkod?",
    "answers": [
      "Memudahkan diagnosis dan rujukan masalah",
      "Untuk menambah RAM",
      "Untuk mengubah BIOS",
      "Untuk mempercepat internet"
    ],
    "correctAnswer": 0,
    "explanation": "Rekod simptom membantu troubleshooting."
  },
  {
    "id": "KP07-Q10",
    "kp": 7,
    "type": "mcq",
    "title": "Amaran Komputer",
    "question": "Apakah tanda kemungkinan overheat?",
    "answers": [
      "Sistem tiba-tiba mati atau suhu sangat tinggi",
      "Keyboard bertukar warna",
      "Mouse bergerak laju",
      "Printer berhenti kertas"
    ],
    "correctAnswer": 0,
    "explanation": "Overheat boleh menyebabkan thermal shutdown."
  },
  {
    "id": "KP07-Q11",
    "kp": 7,
    "type": "mcq",
    "title": "Amaran Komputer",
    "question": "Apakah amaran 'CPU Fan Error' biasanya menunjukkan?",
    "answers": [
      "Kipas CPU tidak dikesan atau berputar tidak normal",
      "SSD penuh",
      "Monitor salah resolusi",
      "USB terlalu banyak"
    ],
    "correctAnswer": 0,
    "explanation": "Firmware memantau putaran kipas CPU."
  },
  {
    "id": "KP07-Q12",
    "kp": 7,
    "type": "mcq",
    "title": "Amaran Komputer",
    "question": "Apakah amaran 'No Boot Device' menunjukkan?",
    "answers": [
      "Tiada peranti boot yang boleh digunakan dikesan",
      "CPU terlalu sejuk",
      "Printer tiada kertas",
      "RAM terlalu besar"
    ],
    "correctAnswer": 0,
    "explanation": "Sistem tidak menemui storan/bootloader yang sesuai."
  },
  {
    "id": "KP07-Q13",
    "kp": 7,
    "type": "mcq",
    "title": "Amaran Komputer",
    "question": "Apakah amaran SMART pada storan?",
    "answers": [
      "Petunjuk kemungkinan masalah kesihatan HDD/SSD",
      "Masalah keyboard",
      "Masalah monitor",
      "Masalah PSU fan sahaja"
    ],
    "correctAnswer": 0,
    "explanation": "SMART memantau indikator kesihatan storan."
  },
  {
    "id": "KP07-Q14",
    "kp": 7,
    "type": "mcq",
    "title": "Amaran Komputer",
    "question": "Apakah tindakan jika bau hangit dikesan?",
    "answers": [
      "Matikan kuasa serta-merta dan periksa komponen",
      "Teruskan ujian",
      "Naikkan kelajuan kipas sahaja",
      "Reset BIOS berulang kali"
    ],
    "correctAnswer": 0,
    "explanation": "Bau hangit boleh menandakan kerosakan elektrik."
  },
  {
    "id": "KP07-Q15",
    "kp": 7,
    "type": "mcq",
    "title": "Amaran Komputer",
    "question": "Apakah tindakan jika terdapat percikan elektrik?",
    "answers": [
      "Putuskan bekalan kuasa dan jangan teruskan penggunaan",
      "Tambah thermal paste",
      "Pasang driver",
      "Tukar wallpaper"
    ],
    "correctAnswer": 0,
    "explanation": "Percikan elektrik ialah bahaya keselamatan."
  },
  {
    "id": "KP07-Q16",
    "kp": 7,
    "type": "truefalse",
    "title": "Amaran Komputer",
    "question": "Mengapa bunyi kipas luar biasa perlu diperiksa?",
    "answers": [
      "Mungkin menandakan kipas rosak atau bergesel",
      "Menandakan RAM penuh",
      "Menandakan internet perlahan",
      "Menandakan OS tamat lesen"
    ],
    "correctAnswer": 0,
    "explanation": "Bunyi mekanikal boleh menunjukkan masalah kipas."
  },
  {
    "id": "KP07-Q17",
    "kp": 7,
    "type": "mcq",
    "title": "Amaran Komputer",
    "question": "Apakah maksud sistem restart berulang sebelum boot?",
    "answers": [
      "Kemungkinan terdapat masalah perkakasan, kuasa atau konfigurasi firmware",
      "Printer sedang warm-up",
      "Mouse belum disambung",
      "Speaker tidak aktif"
    ],
    "correctAnswer": 0,
    "explanation": "Boot loop perlu didiagnosis secara sistematik."
  },
  {
    "id": "KP07-Q18",
    "kp": 7,
    "type": "mcq",
    "title": "Amaran Komputer",
    "question": "Mengapa log ralat penting?",
    "answers": [
      "Membantu mengenal pasti corak dan punca masalah",
      "Meningkatkan kapasiti storan",
      "Menggantikan antivirus",
      "Membekalkan kuasa"
    ],
    "correctAnswer": 0,
    "explanation": "Log menyediakan bukti untuk troubleshooting."
  },
  {
    "id": "KP07-Q19",
    "kp": 7,
    "type": "mcq",
    "title": "Amaran Komputer",
    "question": "Apakah langkah selamat sebelum membuka casing untuk diagnosis?",
    "answers": [
      "Matikan kuasa dan cabut kabel kuasa",
      "Biarkan komputer hidup",
      "Pegang motherboard tanpa ESD",
      "Sembur air"
    ],
    "correctAnswer": 0,
    "explanation": "Kuasa mesti dimatikan sebelum kerja dalaman."
  },
  {
    "id": "KP07-Q20",
    "kp": 7,
    "type": "mcq",
    "title": "Amaran Komputer",
    "question": "Apakah prinsip utama troubleshooting amaran komputer?",
    "answers": [
      "Kenal pasti simptom, semak punca paling asas dan uji satu demi satu",
      "Tukar semua komponen serentak",
      "Abaikan kod ralat",
      "Format komputer dahulu"
    ],
    "correctAnswer": 0,
    "explanation": "Troubleshooting sistematik mengelakkan tindakan yang tidak perlu."
  },
  {
    "id": "KP08-Q01",
    "kp": 8,
    "type": "mcq",
    "title": "Mesej POST",
    "question": "Apakah tujuan POST?",
    "answers": [
      "Menguji komponen asas ketika komputer dihidupkan",
      "Memasang OS",
      "Mencetak laporan",
      "Menyimpan dokumen"
    ],
    "correctAnswer": 0,
    "explanation": "POST memeriksa perkakasan utama semasa permulaan."
  },
  {
    "id": "KP08-Q02",
    "kp": 8,
    "type": "mcq",
    "title": "Mesej POST",
    "question": "POST biasanya berlaku bila?",
    "answers": [
      "Semasa komputer mula dihidupkan sebelum OS dimuatkan",
      "Selepas komputer shutdown",
      "Semasa mencetak",
      "Selepas logout pengguna"
    ],
    "correctAnswer": 0,
    "explanation": "POST berlaku pada awal proses boot."
  },
  {
    "id": "KP08-Q03",
    "kp": 8,
    "type": "mcq",
    "title": "Mesej POST",
    "question": "Apakah komponen yang lazim diperiksa semasa POST?",
    "answers": [
      "CPU, RAM dan peranti asas sistem",
      "Printer sahaja",
      "Mousepad sahaja",
      "Speaker sahaja"
    ],
    "correctAnswer": 0,
    "explanation": "POST memeriksa komponen utama."
  },
  {
    "id": "KP08-Q04",
    "kp": 8,
    "type": "mcq",
    "title": "Mesej POST",
    "question": "Apakah tanda POST berjaya pada sesetengah sistem?",
    "answers": [
      "Sistem meneruskan proses boot tanpa ralat kritikal",
      "Casing terbuka",
      "Printer mencetak automatik",
      "Internet terputus"
    ],
    "correctAnswer": 0,
    "explanation": "POST berjaya membolehkan proses boot diteruskan."
  },
  {
    "id": "KP08-Q05",
    "kp": 8,
    "type": "mcq",
    "title": "Mesej POST",
    "question": "Jika POST gagal pada RAM, apakah tindakan sesuai?",
    "answers": [
      "Periksa pemasangan dan keserasian RAM",
      "Tukar wallpaper",
      "Format printer",
      "Pasang aplikasi pejabat"
    ],
    "correctAnswer": 0,
    "explanation": "RAM perlu diperiksa jika POST menunjukkan isu memori."
  },
  {
    "id": "KP08-Q06",
    "kp": 8,
    "type": "mcq",
    "title": "Mesej POST",
    "question": "Jika POST gagal pada GPU, apakah yang patut diperiksa?",
    "answers": [
      "Pemasangan GPU, kuasa PCIe dan kabel paparan",
      "Port audio",
      "Kertas printer",
      "Tetapan mouse"
    ],
    "correctAnswer": 0,
    "explanation": "GPU dan sambungannya perlu disahkan."
  },
  {
    "id": "KP08-Q07",
    "kp": 8,
    "type": "mcq",
    "title": "Mesej POST",
    "question": "Apakah fungsi speaker motherboard semasa POST?",
    "answers": [
      "Mengeluarkan kod beep untuk diagnosis",
      "Menyimpan BIOS",
      "Menyambung internet",
      "Membekal kuasa"
    ],
    "correctAnswer": 0,
    "explanation": "Speaker kecil boleh mengeluarkan kod beep."
  },
  {
    "id": "KP08-Q08",
    "kp": 8,
    "type": "mcq",
    "title": "Mesej POST",
    "question": "Apakah fungsi debug LED semasa POST?",
    "answers": [
      "Menunjukkan bahagian perkakasan yang bermasalah",
      "Menambah kelajuan CPU",
      "Menyimpan data",
      "Mengawal printer"
    ],
    "correctAnswer": 0,
    "explanation": "Debug LED memudahkan diagnosis."
  },
  {
    "id": "KP08-Q09",
    "kp": 8,
    "type": "mcq",
    "title": "Mesej POST",
    "question": "Apakah maksud POST code display pada sesetengah motherboard?",
    "answers": [
      "Memaparkan kod diagnostik proses permulaan",
      "Memaparkan suhu bilik",
      "Memaparkan IP internet",
      "Memaparkan nama pengguna"
    ],
    "correctAnswer": 0,
    "explanation": "POST code membantu mengenal pasti tahap boot."
  },
  {
    "id": "KP08-Q10",
    "kp": 8,
    "type": "mcq",
    "title": "Mesej POST",
    "question": "Mengapa manual motherboard diperlukan untuk kod POST?",
    "answers": [
      "Kerana maksud kod berbeza mengikut model/pengeluar",
      "Kerana semua kod sama",
      "Kerana manual mengganti BIOS",
      "Kerana manual menyimpan data"
    ],
    "correctAnswer": 0,
    "explanation": "Kod POST perlu dirujuk kepada dokumentasi model."
  },
  {
    "id": "KP08-Q11",
    "kp": 8,
    "type": "mcq",
    "title": "Mesej POST",
    "question": "Apakah tindakan awal jika tiada POST langsung?",
    "answers": [
      "Semak kuasa motherboard dan CPU serta pemasangan komponen asas",
      "Pasang printer",
      "Format HDD",
      "Reset router"
    ],
    "correctAnswer": 0,
    "explanation": "No POST sering berkait dengan kuasa atau komponen asas."
  },
  {
    "id": "KP08-Q12",
    "kp": 8,
    "type": "mcq",
    "title": "Mesej POST",
    "question": "Bolehkah sistem boot OS tanpa POST selesai?",
    "answers": [
      "Tidak, ralat kritikal POST boleh menghalang proses boot",
      "Ya, sentiasa",
      "Hanya jika printer aktif",
      "Hanya jika speaker dipasang"
    ],
    "correctAnswer": 0,
    "explanation": "POST ialah sebahagian awal proses boot."
  },
  {
    "id": "KP08-Q13",
    "kp": 8,
    "type": "mcq",
    "title": "Mesej POST",
    "question": "Apakah beza POST dan boot OS?",
    "answers": [
      "POST menguji perkakasan; boot memuatkan sistem pengoperasian",
      "Kedua-duanya sama",
      "POST untuk printer",
      "Boot hanya untuk RAM"
    ],
    "correctAnswer": 0,
    "explanation": "POST berlaku sebelum pemuatan OS."
  },
  {
    "id": "KP08-Q14",
    "kp": 8,
    "type": "mcq",
    "title": "Mesej POST",
    "question": "Apakah yang perlu dilakukan selepas membetulkan ralat POST?",
    "answers": [
      "Hidupkan semula dan sahkan sistem melepasi POST",
      "Terus format SSD",
      "Cabut semua kabel",
      "Abaikan ujian"
    ],
    "correctAnswer": 0,
    "explanation": "Pengesahan diperlukan selepas pembaikan."
  },
  {
    "id": "KP08-Q15",
    "kp": 8,
    "type": "mcq",
    "title": "Mesej POST",
    "question": "Mengapa satu komponen diuji pada satu masa?",
    "answers": [
      "Untuk mengenal pasti punca ralat dengan lebih tepat",
      "Supaya proses lebih lambat",
      "Supaya semua komponen rosak",
      "Supaya BIOS hilang"
    ],
    "correctAnswer": 0,
    "explanation": "Ujian berperingkat mengasingkan punca."
  },
  {
    "id": "KP08-Q16",
    "kp": 8,
    "type": "mcq",
    "title": "Mesej POST",
    "question": "Apakah peranan CMOS reset dalam troubleshooting POST?",
    "answers": [
      "Mengembalikan tetapan firmware kepada nilai asas tertentu",
      "Memadam semua fail HDD",
      "Menggantikan RAM",
      "Memperbaiki printer"
    ],
    "correctAnswer": 0,
    "explanation": "Clear CMOS boleh membantu jika konfigurasi firmware bermasalah."
  },
  {
    "id": "KP08-Q17",
    "kp": 8,
    "type": "mcq",
    "title": "Mesej POST",
    "question": "Apakah risiko memasang RAM tidak kemas?",
    "answers": [
      "Sistem mungkin gagal POST atau tidak mengesan memori",
      "Monitor jadi lebih besar",
      "PSU bertambah watt",
      "Keyboard berubah layout"
    ],
    "correctAnswer": 0,
    "explanation": "RAM perlu duduk rapat pada slot."
  },
  {
    "id": "KP08-Q18",
    "kp": 8,
    "type": "mcq",
    "title": "Mesej POST",
    "question": "Mengapa kuasa PCIe GPU perlu dipasang jika diperlukan?",
    "answers": [
      "GPU mungkin gagal berfungsi atau gagal POST tanpa kuasa tambahan",
      "Untuk menambah storan",
      "Untuk menghidupkan keyboard",
      "Untuk membekal RAM"
    ],
    "correctAnswer": 0,
    "explanation": "GPU berkuasa tinggi memerlukan connector tambahan."
  },
  {
    "id": "KP08-Q19",
    "kp": 8,
    "type": "mcq",
    "title": "Mesej POST",
    "question": "Apakah tanda POST yang baik selepas pemasangan komputer?",
    "answers": [
      "Tiada ralat kritikal dan peranti asas dikesan",
      "Semua kipas berhenti",
      "Monitor tidak menyala",
      "PSU berbunyi kuat"
    ],
    "correctAnswer": 0,
    "explanation": "POST berjaya menandakan perkakasan asas berfungsi."
  },
  {
    "id": "KP08-Q20",
    "kp": 8,
    "type": "mcq",
    "title": "Mesej POST",
    "question": "Apakah rekod yang patut dibuat jika POST gagal?",
    "answers": [
      "Kod ralat, simptom dan tindakan yang telah diuji",
      "Warna casing sahaja",
      "Nama wallpaper",
      "Jenis mousepad"
    ],
    "correctAnswer": 0,
    "explanation": "Dokumentasi membantu troubleshooting dan laporan."
  },
  {
    "id": "KP09-Q01",
    "kp": 9,
    "type": "mcq",
    "title": "Sistem Pengoperasian",
    "question": "Apakah fungsi sistem pengoperasian?",
    "answers": [
      "Mengurus perkakasan, perisian dan sumber komputer",
      "Menggantikan PSU",
      "Memasang RAM secara fizikal",
      "Mencetak tanpa driver"
    ],
    "correctAnswer": 0,
    "explanation": "OS mengurus sumber sistem."
  },
  {
    "id": "KP09-Q02",
    "kp": 9,
    "type": "mcq",
    "title": "Sistem Pengoperasian",
    "question": "Yang manakah contoh sistem pengoperasian desktop?",
    "answers": [
      "Windows",
      "HDMI",
      "DDR5",
      "SATA"
    ],
    "correctAnswer": 0,
    "explanation": "Windows ialah sistem pengoperasian."
  },
  {
    "id": "KP09-Q03",
    "kp": 9,
    "type": "mcq",
    "title": "Sistem Pengoperasian",
    "question": "Apakah fungsi driver?",
    "answers": [
      "Membolehkan OS berkomunikasi dengan perkakasan",
      "Membekal kuasa",
      "Menyejukkan CPU",
      "Mengikat kabel"
    ],
    "correctAnswer": 0,
    "explanation": "Driver menyediakan komunikasi OS-perkakasan."
  },
  {
    "id": "KP09-Q04",
    "kp": 9,
    "type": "mcq",
    "title": "Sistem Pengoperasian",
    "question": "Apakah tujuan partition semasa pemasangan OS?",
    "answers": [
      "Membahagikan ruang storan secara logik",
      "Menambah RAM",
      "Menukar PSU",
      "Meningkatkan resolusi monitor"
    ],
    "correctAnswer": 0,
    "explanation": "Partition mengatur ruang storan."
  },
  {
    "id": "KP09-Q05",
    "kp": 9,
    "type": "mcq",
    "title": "Sistem Pengoperasian",
    "question": "Apakah fungsi bootloader?",
    "answers": [
      "Memulakan proses memuatkan sistem pengoperasian",
      "Mencetak dokumen",
      "Mengawal kipas",
      "Menyambung printer"
    ],
    "correctAnswer": 0,
    "explanation": "Bootloader membantu memulakan OS."
  },
  {
    "id": "KP09-Q06",
    "kp": 9,
    "type": "mcq",
    "title": "Sistem Pengoperasian",
    "question": "Mengapa tetapan boot order penting?",
    "answers": [
      "Menentukan peranti yang cuba digunakan untuk boot terlebih dahulu",
      "Menentukan warna desktop",
      "Menentukan saiz RAM",
      "Menentukan watt PSU"
    ],
    "correctAnswer": 0,
    "explanation": "Boot order menentukan sumber boot."
  },
  {
    "id": "KP09-Q07",
    "kp": 9,
    "type": "mcq",
    "title": "Sistem Pengoperasian",
    "question": "Apakah tujuan media pemasangan USB?",
    "answers": [
      "Memasang atau membaiki sistem pengoperasian",
      "Menyambung monitor",
      "Menambah kuasa",
      "Menyejukkan casing"
    ],
    "correctAnswer": 0,
    "explanation": "USB boleh dijadikan media pemasangan OS."
  },
  {
    "id": "KP09-Q08",
    "kp": 9,
    "type": "mcq",
    "title": "Sistem Pengoperasian",
    "question": "Apakah yang perlu diperiksa sebelum memasang OS?",
    "answers": [
      "Keperluan sistem dan keserasian perkakasan",
      "Warna casing sahaja",
      "Jenis meja",
      "Nama pengguna sahaja"
    ],
    "correctAnswer": 0,
    "explanation": "Keserasian penting untuk pemasangan stabil."
  },
  {
    "id": "KP09-Q09",
    "kp": 9,
    "type": "mcq",
    "title": "Sistem Pengoperasian",
    "question": "Apakah tujuan lesen OS?",
    "answers": [
      "Memberi hak penggunaan perisian mengikut syarat pengeluar",
      "Menambah RAM",
      "Mengawal PSU",
      "Menggantikan BIOS"
    ],
    "correctAnswer": 0,
    "explanation": "Lesen berkaitan hak penggunaan perisian."
  },
  {
    "id": "KP09-Q10",
    "kp": 9,
    "type": "mcq",
    "title": "Sistem Pengoperasian",
    "question": "Apakah fungsi user account?",
    "answers": [
      "Mengurus identiti, tetapan dan akses pengguna",
      "Membekalkan kuasa",
      "Memasang CPU",
      "Menyimpan skru"
    ],
    "correctAnswer": 0,
    "explanation": "Akaun pengguna mengawal akses."
  },
  {
    "id": "KP09-Q11",
    "kp": 9,
    "type": "mcq",
    "title": "Sistem Pengoperasian",
    "question": "Apakah fungsi file system?",
    "answers": [
      "Mengatur cara fail dan folder disimpan pada storan",
      "Menentukan suhu CPU",
      "Mengawal monitor",
      "Menambah port USB"
    ],
    "correctAnswer": 0,
    "explanation": "File system mengurus organisasi data."
  },
  {
    "id": "KP09-Q12",
    "kp": 9,
    "type": "mcq",
    "title": "Sistem Pengoperasian",
    "question": "Apakah contoh file system yang biasa pada Windows?",
    "answers": [
      "NTFS",
      "HDMI",
      "PCIe",
      "ATX"
    ],
    "correctAnswer": 0,
    "explanation": "NTFS ialah file system biasa Windows."
  },
  {
    "id": "KP09-Q13",
    "kp": 9,
    "type": "mcq",
    "title": "Sistem Pengoperasian",
    "question": "Apakah tujuan update OS?",
    "answers": [
      "Membaiki kelemahan, pepijat dan meningkatkan kestabilan",
      "Menggantikan RAM",
      "Menambah watt PSU",
      "Menukar casing"
    ],
    "correctAnswer": 0,
    "explanation": "Update membantu keselamatan dan kestabilan."
  },
  {
    "id": "KP09-Q14",
    "kp": 9,
    "type": "mcq",
    "title": "Sistem Pengoperasian",
    "question": "Mengapa restore point berguna?",
    "answers": [
      "Membolehkan pemulihan tetapan sistem ke keadaan terdahulu tertentu",
      "Menambah kapasiti SSD",
      "Mengganti monitor",
      "Mengawal kabel"
    ],
    "correctAnswer": 0,
    "explanation": "Restore point membantu pemulihan sistem."
  },
  {
    "id": "KP09-Q15",
    "kp": 9,
    "type": "mcq",
    "title": "Sistem Pengoperasian",
    "question": "Apakah fungsi Task Manager?",
    "answers": [
      "Memantau proses, prestasi dan aplikasi berjalan",
      "Memasang CPU",
      "Mengukur voltan",
      "Membekal kuasa"
    ],
    "correctAnswer": 0,
    "explanation": "Task Manager membantu pemantauan sistem."
  },
  {
    "id": "KP09-Q16",
    "kp": 9,
    "type": "mcq",
    "title": "Sistem Pengoperasian",
    "question": "Apakah fungsi Device Manager?",
    "answers": [
      "Melihat dan mengurus perkakasan serta driver",
      "Menyimpan fail pengguna",
      "Mengawal BIOS secara penuh",
      "Mengikat kabel"
    ],
    "correctAnswer": 0,
    "explanation": "Device Manager membantu pengurusan peranti."
  },
  {
    "id": "KP09-Q17",
    "kp": 9,
    "type": "mcq",
    "title": "Sistem Pengoperasian",
    "question": "Apakah tanda driver mungkin bermasalah?",
    "answers": [
      "Peranti tidak dikenali atau tidak berfungsi dengan betul",
      "PSU bertambah watt",
      "Casing lebih panas sahaja",
      "Mousepad kotor"
    ],
    "correctAnswer": 0,
    "explanation": "Driver bermasalah boleh menyebabkan peranti gagal."
  },
  {
    "id": "KP09-Q18",
    "kp": 9,
    "type": "mcq",
    "title": "Sistem Pengoperasian",
    "question": "Apakah tindakan selepas memasang driver penting?",
    "answers": [
      "Uji peranti dan semak Device Manager",
      "Cabut storan",
      "Format semua partition",
      "Matikan PSU terus"
    ],
    "correctAnswer": 0,
    "explanation": "Pengesahan diperlukan selepas pemasangan driver."
  },
  {
    "id": "KP09-Q19",
    "kp": 9,
    "type": "mcq",
    "title": "Sistem Pengoperasian",
    "question": "Mengapa backup penting sebelum pemasangan semula OS?",
    "answers": [
      "Untuk melindungi data pengguna daripada kehilangan",
      "Untuk menambah kelajuan CPU",
      "Untuk menukar port",
      "Untuk memperbesar monitor"
    ],
    "correctAnswer": 0,
    "explanation": "Pemasangan semula boleh memadam data."
  },
  {
    "id": "KP09-Q20",
    "kp": 9,
    "type": "mcq",
    "title": "Sistem Pengoperasian",
    "question": "Apakah langkah terakhir selepas pemasangan OS?",
    "answers": [
      "Pastikan driver, kemas kini dan fungsi asas sistem lengkap",
      "Biarkan semua driver tidak dipasang",
      "Abaikan update",
      "Cabut kabel rangkaian selamanya"
    ],
    "correctAnswer": 0,
    "explanation": "Sistem perlu diuji dan dikemas kini selepas pemasangan."
  },
  {
    "id": "KP10-Q01",
    "kp": 10,
    "type": "mcq",
    "title": "Aplikasi dan Kemas Kini",
    "question": "Apakah yang perlu disemak sebelum memasang aplikasi?",
    "answers": [
      "Keperluan sistem dan keserasian aplikasi",
      "Warna casing",
      "Nama motherboard sahaja",
      "Bilangan skru"
    ],
    "correctAnswer": 0,
    "explanation": "Keserasian mengelakkan masalah pemasangan."
  },
  {
    "id": "KP10-Q02",
    "kp": 10,
    "type": "mcq",
    "title": "Aplikasi dan Kemas Kini",
    "question": "Apakah tujuan installer aplikasi?",
    "answers": [
      "Menyalin dan mengkonfigurasi fail aplikasi pada sistem",
      "Menambah RAM fizikal",
      "Menukar PSU",
      "Membaiki casing"
    ],
    "correctAnswer": 0,
    "explanation": "Installer menyediakan aplikasi untuk digunakan."
  },
  {
    "id": "KP10-Q03",
    "kp": 10,
    "type": "mcq",
    "title": "Aplikasi dan Kemas Kini",
    "question": "Mengapa sumber muat turun perlu dipercayai?",
    "answers": [
      "Mengurangkan risiko malware dan fail palsu",
      "Menambah kelajuan CPU",
      "Menambah watt PSU",
      "Menukar resolusi monitor"
    ],
    "correctAnswer": 0,
    "explanation": "Sumber rasmi lebih selamat."
  },
  {
    "id": "KP10-Q04",
    "kp": 10,
    "type": "mcq",
    "title": "Aplikasi dan Kemas Kini",
    "question": "Apakah tujuan update aplikasi?",
    "answers": [
      "Membaiki pepijat, keselamatan dan fungsi",
      "Menggantikan HDD",
      "Memasang RAM",
      "Membersihkan casing"
    ],
    "correctAnswer": 0,
    "explanation": "Update aplikasi meningkatkan kestabilan dan keselamatan."
  },
  {
    "id": "KP10-Q05",
    "kp": 10,
    "type": "mcq",
    "title": "Aplikasi dan Kemas Kini",
    "question": "Apakah risiko menggunakan aplikasi tidak serasi?",
    "answers": [
      "Boleh gagal dipasang atau menyebabkan masalah sistem",
      "Menambah kapasiti RAM",
      "Menguatkan PSU",
      "Meningkatkan airflow"
    ],
    "correctAnswer": 0,
    "explanation": "Keserasian mesti diperiksa."
  },
  {
    "id": "KP10-Q06",
    "kp": 10,
    "type": "mcq",
    "title": "Aplikasi dan Kemas Kini",
    "question": "Apakah fungsi antivirus?",
    "answers": [
      "Mengesan dan membantu melindungi sistem daripada malware",
      "Memasang CPU",
      "Membekalkan kuasa",
      "Menyejukkan GPU"
    ],
    "correctAnswer": 0,
    "explanation": "Antivirus membantu keselamatan sistem."
  },
  {
    "id": "KP10-Q07",
    "kp": 10,
    "type": "mcq",
    "title": "Aplikasi dan Kemas Kini",
    "question": "Mengapa lesen aplikasi perlu dipatuhi?",
    "answers": [
      "Untuk penggunaan yang sah dan mengikut syarat pemilik perisian",
      "Untuk menambah RAM",
      "Untuk menukar BIOS",
      "Untuk menguatkan kabel"
    ],
    "correctAnswer": 0,
    "explanation": "Lesen menentukan hak penggunaan."
  },
  {
    "id": "KP10-Q08",
    "kp": 10,
    "type": "truefalse",
    "title": "Aplikasi dan Kemas Kini",
    "question": "Apakah yang patut dibuat sebelum update besar?",
    "answers": [
      "Backup data penting dan pastikan kuasa stabil",
      "Cabut RAM",
      "Buka heatsink",
      "Tukar mouse"
    ],
    "correctAnswer": 0,
    "explanation": "Backup mengurangkan risiko kehilangan data."
  },
  {
    "id": "KP10-Q09",
    "kp": 10,
    "type": "mcq",
    "title": "Aplikasi dan Kemas Kini",
    "question": "Apakah maksud versi aplikasi?",
    "answers": [
      "Nombor/label yang menunjukkan keluaran perisian tertentu",
      "Jenis kabel",
      "Jenis skru",
      "Kapasiti PSU"
    ],
    "correctAnswer": 0,
    "explanation": "Versi membantu mengenal pasti keluaran perisian."
  },
  {
    "id": "KP10-Q10",
    "kp": 10,
    "type": "mcq",
    "title": "Aplikasi dan Kemas Kini",
    "question": "Mengapa changelog berguna?",
    "answers": [
      "Menunjukkan perubahan, pembaikan dan ciri dalam versi baharu",
      "Menyimpan kata laluan BIOS",
      "Mengukur voltan",
      "Menentukan saiz casing"
    ],
    "correctAnswer": 0,
    "explanation": "Changelog menerangkan perubahan versi."
  },
  {
    "id": "KP10-Q11",
    "kp": 10,
    "type": "mcq",
    "title": "Aplikasi dan Kemas Kini",
    "question": "Apakah fungsi uninstall?",
    "answers": [
      "Membuang aplikasi dan komponen berkaitan daripada sistem",
      "Memasang driver",
      "Menambah RAM",
      "Mengawal PSU"
    ],
    "correctAnswer": 0,
    "explanation": "Uninstall membuang aplikasi."
  },
  {
    "id": "KP10-Q12",
    "kp": 10,
    "type": "mcq",
    "title": "Aplikasi dan Kemas Kini",
    "question": "Mengapa restart kadang-kadang diperlukan selepas update?",
    "answers": [
      "Untuk memuatkan perubahan sistem sepenuhnya",
      "Untuk menambah storan",
      "Untuk menukar port",
      "Untuk membersihkan skru"
    ],
    "correctAnswer": 0,
    "explanation": "Sesetengah perubahan hanya aktif selepas restart."
  },
  {
    "id": "KP10-Q13",
    "kp": 10,
    "type": "mcq",
    "title": "Aplikasi dan Kemas Kini",
    "question": "Apakah risiko mematikan komputer semasa update kritikal?",
    "answers": [
      "Boleh menyebabkan fail sistem atau aplikasi rosak",
      "Menambah RAM",
      "Mengubah monitor",
      "Membaiki PSU"
    ],
    "correctAnswer": 0,
    "explanation": "Gangguan update boleh merosakkan pemasangan."
  },
  {
    "id": "KP10-Q14",
    "kp": 10,
    "type": "mcq",
    "title": "Aplikasi dan Kemas Kini",
    "question": "Apakah maksud software dependency?",
    "answers": [
      "Komponen/perisian lain yang diperlukan oleh aplikasi",
      "Skru tambahan",
      "Kabel power",
      "Casing kecil"
    ],
    "correctAnswer": 0,
    "explanation": "Sesetengah aplikasi memerlukan runtime atau library tertentu."
  },
  {
    "id": "KP10-Q15",
    "kp": 10,
    "type": "mcq",
    "title": "Aplikasi dan Kemas Kini",
    "question": "Mengapa ruang storan perlu diperiksa?",
    "answers": [
      "Aplikasi memerlukan ruang untuk dipasang dan beroperasi",
      "Supaya PSU lebih sejuk",
      "Supaya mouse lebih laju",
      "Supaya monitor lebih cerah"
    ],
    "correctAnswer": 0,
    "explanation": "Ruang tidak mencukupi boleh menggagalkan pemasangan."
  },
  {
    "id": "KP10-Q16",
    "kp": 10,
    "type": "truefalse",
    "title": "Aplikasi dan Kemas Kini",
    "question": "Apakah maksud automatic update?",
    "answers": [
      "Sistem memuat turun atau memasang kemas kini secara automatik mengikut tetapan",
      "CPU bertukar automatik",
      "RAM bertambah automatik",
      "PSU menukar voltan sesuka hati"
    ],
    "correctAnswer": 0,
    "explanation": "Auto update mengurangkan kerja manual."
  },
  {
    "id": "KP10-Q17",
    "kp": 10,
    "type": "mcq",
    "title": "Aplikasi dan Kemas Kini",
    "question": "Bilakah update manual sesuai?",
    "answers": [
      "Apabila pentadbir mahu mengawal masa dan versi pemasangan",
      "Apabila mahu menambah RAM",
      "Apabila mahu menukar casing",
      "Apabila mahu memasang CPU"
    ],
    "correctAnswer": 0,
    "explanation": "Update manual memberi kawalan lebih besar."
  },
  {
    "id": "KP10-Q18",
    "kp": 10,
    "type": "mcq",
    "title": "Aplikasi dan Kemas Kini",
    "question": "Apakah tindakan jika aplikasi gagal dibuka selepas update?",
    "answers": [
      "Semak log/ralat, keserasian dan cuba pembaikan atau rollback jika sesuai",
      "Format semua storan terus",
      "Cabut PSU",
      "Buang semua driver"
    ],
    "correctAnswer": 0,
    "explanation": "Troubleshooting perlu dilakukan secara terkawal."
  },
  {
    "id": "KP10-Q19",
    "kp": 10,
    "type": "mcq",
    "title": "Aplikasi dan Kemas Kini",
    "question": "Mengapa aplikasi perlu diuji selepas pemasangan?",
    "answers": [
      "Untuk memastikan fungsi utama berjalan dengan betul",
      "Untuk menambah kuasa",
      "Untuk menukar BIOS",
      "Untuk mengaktifkan kipas"
    ],
    "correctAnswer": 0,
    "explanation": "Ujian mengesahkan pemasangan berjaya."
  },
  {
    "id": "KP10-Q20",
    "kp": 10,
    "type": "mcq",
    "title": "Aplikasi dan Kemas Kini",
    "question": "Apakah dokumentasi yang patut direkod selepas pemasangan?",
    "answers": [
      "Nama aplikasi, versi, tarikh dan keputusan ujian",
      "Warna casing",
      "Jenis meja",
      "Bilangan kipas bilik"
    ],
    "correctAnswer": 0,
    "explanation": "Rekod membantu penyelenggaraan dan audit."
  },
  {
    "id": "KP11-Q01",
    "kp": 11,
    "type": "mcq",
    "title": "Backup",
    "question": "Apakah tujuan utama backup?",
    "answers": [
      "Menyediakan salinan data jika data asal hilang atau rosak",
      "Menambah RAM",
      "Meningkatkan watt PSU",
      "Menukar resolusi monitor"
    ],
    "correctAnswer": 0,
    "explanation": "Backup membolehkan data dipulihkan."
  },
  {
    "id": "KP11-Q02",
    "kp": 11,
    "type": "mcq",
    "title": "Backup",
    "question": "Apakah maksud full backup?",
    "answers": [
      "Menyalin semua data yang dipilih",
      "Menyalin satu fail sahaja",
      "Menghapus data lama",
      "Memasang OS"
    ],
    "correctAnswer": 0,
    "explanation": "Full backup menyalin keseluruhan set data terpilih."
  },
  {
    "id": "KP11-Q03",
    "kp": 11,
    "type": "mcq",
    "title": "Backup",
    "question": "Apakah maksud incremental backup?",
    "answers": [
      "Menyalin perubahan sejak backup terakhir",
      "Menyalin semua data setiap masa",
      "Menghapus semua data",
      "Menambah partition"
    ],
    "correctAnswer": 0,
    "explanation": "Incremental menjimatkan ruang dan masa."
  },
  {
    "id": "KP11-Q04",
    "kp": 11,
    "type": "mcq",
    "title": "Backup",
    "question": "Apakah maksud differential backup?",
    "answers": [
      "Menyalin perubahan sejak full backup terakhir",
      "Menyalin hanya sistem operasi",
      "Menghapus backup",
      "Mengganti HDD"
    ],
    "correctAnswer": 0,
    "explanation": "Differential berkembang sejak full backup terakhir."
  },
  {
    "id": "KP11-Q05",
    "kp": 11,
    "type": "mcq",
    "title": "Backup",
    "question": "Apakah maksud restore?",
    "answers": [
      "Memulihkan data daripada salinan backup",
      "Memasang RAM",
      "Mengawal BIOS",
      "Mengikat kabel"
    ],
    "correctAnswer": 0,
    "explanation": "Restore mengembalikan data."
  },
  {
    "id": "KP11-Q06",
    "kp": 11,
    "type": "mcq",
    "title": "Backup",
    "question": "Apakah maksud verifikasi backup?",
    "answers": [
      "Memastikan backup boleh dibaca dan dipulihkan",
      "Menambah ruang storan",
      "Menukar casing",
      "Meningkatkan kelajuan CPU"
    ],
    "correctAnswer": 0,
    "explanation": "Backup yang tidak boleh dipulihkan tidak berguna."
  },
  {
    "id": "KP11-Q07",
    "kp": 11,
    "type": "mcq",
    "title": "Backup",
    "question": "Mengapa backup perlu disimpan di lokasi berbeza?",
    "answers": [
      "Mengurangkan risiko kehilangan serentak akibat kerosakan atau bencana",
      "Supaya RAM bertambah",
      "Supaya monitor lebih terang",
      "Supaya printer lebih laju"
    ],
    "correctAnswer": 0,
    "explanation": "Lokasi berasingan meningkatkan ketahanan."
  },
  {
    "id": "KP11-Q08",
    "kp": 11,
    "type": "mcq",
    "title": "Backup",
    "question": "Apakah prinsip 3-2-1 backup?",
    "answers": [
      "3 salinan data, 2 jenis media, 1 salinan di lokasi berasingan",
      "3 PSU, 2 CPU, 1 RAM",
      "3 user, 2 printer, 1 monitor",
      "3 kabel, 2 skru, 1 casing"
    ],
    "correctAnswer": 0,
    "explanation": "3-2-1 ialah strategi backup yang biasa."
  },
  {
    "id": "KP11-Q09",
    "kp": 11,
    "type": "mcq",
    "title": "Backup",
    "question": "Mengapa jadual backup penting?",
    "answers": [
      "Memastikan backup dilakukan secara konsisten",
      "Menambah kapasiti RAM",
      "Meningkatkan suhu CPU",
      "Mengawal mouse"
    ],
    "correctAnswer": 0,
    "explanation": "Jadual mengurangkan risiko terlupa."
  },
  {
    "id": "KP11-Q10",
    "kp": 11,
    "type": "mcq",
    "title": "Backup",
    "question": "Apakah risiko backup pada storan sama dengan data asal sahaja?",
    "answers": [
      "Kedua-duanya boleh hilang jika storan rosak",
      "RAM akan rosak",
      "Printer akan berhenti",
      "Monitor akan gelap"
    ],
    "correctAnswer": 0,
    "explanation": "Backup perlu dipisahkan daripada sumber asal."
  },
  {
    "id": "KP11-Q11",
    "kp": 11,
    "type": "mcq",
    "title": "Backup",
    "question": "Apakah fungsi external drive dalam backup?",
    "answers": [
      "Menjadi media salinan data yang boleh dipisahkan daripada komputer",
      "Menjadi CPU kedua",
      "Mengganti PSU",
      "Mengawal BIOS"
    ],
    "correctAnswer": 0,
    "explanation": "External drive sesuai untuk salinan luar."
  },
  {
    "id": "KP11-Q12",
    "kp": 11,
    "type": "mcq",
    "title": "Backup",
    "question": "Apakah fungsi cloud backup?",
    "answers": [
      "Menyimpan salinan data pada perkhidmatan storan jauh",
      "Menambah RAM fizikal",
      "Mengawal kipas",
      "Mengganti motherboard"
    ],
    "correctAnswer": 0,
    "explanation": "Cloud menyediakan lokasi backup berasingan."
  },
  {
    "id": "KP11-Q13",
    "kp": 11,
    "type": "mcq",
    "title": "Backup",
    "question": "Mengapa backup perlu dienkripsi?",
    "answers": [
      "Melindungi data backup daripada akses tanpa kebenaran",
      "Menambah kelajuan CPU",
      "Menambah watt PSU",
      "Meningkatkan resolusi"
    ],
    "correctAnswer": 0,
    "explanation": "Enkripsi melindungi kerahsiaan."
  },
  {
    "id": "KP11-Q14",
    "kp": 11,
    "type": "mcq",
    "title": "Backup",
    "question": "Apakah yang perlu direkod dalam log backup?",
    "answers": [
      "Tarikh, data dibackup, keputusan dan sebarang ralat",
      "Warna kabel",
      "Jenis meja",
      "Nama wallpaper"
    ],
    "correctAnswer": 0,
    "explanation": "Log membantu audit dan troubleshooting."
  },
  {
    "id": "KP11-Q15",
    "kp": 11,
    "type": "mcq",
    "title": "Backup",
    "question": "Apakah tanda backup gagal?",
    "answers": [
      "Perisian melaporkan ralat atau fail backup tidak dapat dibaca",
      "Keyboard berubah warna",
      "Mouse bergerak perlahan",
      "Casing sejuk"
    ],
    "correctAnswer": 0,
    "explanation": "Status backup perlu disahkan."
  },
  {
    "id": "KP11-Q16",
    "kp": 11,
    "type": "mcq",
    "title": "Backup",
    "question": "Mengapa ujian restore perlu dilakukan?",
    "answers": [
      "Untuk membuktikan data benar-benar boleh dipulihkan",
      "Untuk menambah RAM",
      "Untuk format monitor",
      "Untuk menukar PSU"
    ],
    "correctAnswer": 0,
    "explanation": "Restore test mengesahkan backup."
  },
  {
    "id": "KP11-Q17",
    "kp": 11,
    "type": "mcq",
    "title": "Backup",
    "question": "Apakah Recovery Point Objective (RPO) secara mudah?",
    "answers": [
      "Jumlah kehilangan data yang masih boleh diterima berdasarkan sela backup",
      "Kelajuan CPU",
      "Saiz casing",
      "Bilangan port USB"
    ],
    "correctAnswer": 0,
    "explanation": "RPO berkait sejauh mana data boleh hilang."
  },
  {
    "id": "KP11-Q18",
    "kp": 11,
    "type": "mcq",
    "title": "Backup",
    "question": "Apakah Recovery Time Objective (RTO) secara mudah?",
    "answers": [
      "Tempoh sasaran untuk memulihkan operasi selepas gangguan",
      "Tempoh boot BIOS",
      "Masa memasang RAM",
      "Masa mencuci casing"
    ],
    "correctAnswer": 0,
    "explanation": "RTO berkait masa pemulihan."
  },
  {
    "id": "KP11-Q19",
    "kp": 11,
    "type": "mcq",
    "title": "Backup",
    "question": "Mengapa media backup lama perlu dilupuskan dengan selamat?",
    "answers": [
      "Untuk mengelakkan kebocoran data",
      "Untuk menambah ruang RAM",
      "Untuk mempercepat CPU",
      "Untuk menyejukkan PSU"
    ],
    "correctAnswer": 0,
    "explanation": "Media boleh mengandungi data sensitif."
  },
  {
    "id": "KP11-Q20",
    "kp": 11,
    "type": "mcq",
    "title": "Backup",
    "question": "Apakah langkah selepas backup selesai?",
    "answers": [
      "Semak status, verifikasi dan rekod keputusan",
      "Padam data asal terus",
      "Cabut RAM",
      "Reset BIOS"
    ],
    "correctAnswer": 0,
    "explanation": "Backup perlu disahkan sebelum dianggap berjaya."
  },
  {
    "id": "KP12-Q01",
    "kp": 12,
    "type": "mcq",
    "title": "Peralatan Tambahan",
    "question": "Yang manakah peralatan tambahan komputer?",
    "answers": [
      "Pencetak",
      "CPU",
      "RAM",
      "Motherboard"
    ],
    "correctAnswer": 0,
    "explanation": "Pencetak ialah periferal tambahan."
  },
  {
    "id": "KP12-Q02",
    "kp": 12,
    "type": "mcq",
    "title": "Peralatan Tambahan",
    "question": "Apakah fungsi pencetak?",
    "answers": [
      "Menghasilkan salinan fizikal dokumen atau imej",
      "Menyimpan OS",
      "Membekal kuasa",
      "Memproses CPU"
    ],
    "correctAnswer": 0,
    "explanation": "Pencetak ialah peranti output."
  },
  {
    "id": "KP12-Q03",
    "kp": 12,
    "type": "mcq",
    "title": "Peralatan Tambahan",
    "question": "Apakah fungsi scanner?",
    "answers": [
      "Menukar dokumen fizikal kepada bentuk digital",
      "Menghasilkan kuasa",
      "Menyejukkan CPU",
      "Menyimpan BIOS"
    ],
    "correctAnswer": 0,
    "explanation": "Scanner ialah peranti input."
  },
  {
    "id": "KP12-Q04",
    "kp": 12,
    "type": "mcq",
    "title": "Peralatan Tambahan",
    "question": "Apakah fungsi webcam?",
    "answers": [
      "Menangkap video atau imej untuk komputer",
      "Menyimpan data kekal",
      "Mengawal PSU",
      "Memasang OS"
    ],
    "correctAnswer": 0,
    "explanation": "Webcam ialah peranti input video."
  },
  {
    "id": "KP12-Q05",
    "kp": 12,
    "type": "mcq",
    "title": "Peralatan Tambahan",
    "question": "Apakah fungsi mikrofon?",
    "answers": [
      "Menangkap input audio",
      "Mencetak dokumen",
      "Menyimpan fail",
      "Mengawal RAM"
    ],
    "correctAnswer": 0,
    "explanation": "Mikrofon ialah input audio."
  },
  {
    "id": "KP12-Q06",
    "kp": 12,
    "type": "mcq",
    "title": "Peralatan Tambahan",
    "question": "Apakah fungsi speaker?",
    "answers": [
      "Menghasilkan output audio",
      "Memasukkan teks",
      "Menyimpan BIOS",
      "Mengawal kipas"
    ],
    "correctAnswer": 0,
    "explanation": "Speaker ialah peranti output."
  },
  {
    "id": "KP12-Q07",
    "kp": 12,
    "type": "mcq",
    "title": "Peralatan Tambahan",
    "question": "Apakah fungsi projektor?",
    "answers": [
      "Memaparkan output visual pada skrin besar",
      "Menyimpan data",
      "Membekal kuasa CPU",
      "Mengawal internet"
    ],
    "correctAnswer": 0,
    "explanation": "Projektor ialah peranti output."
  },
  {
    "id": "KP12-Q08",
    "kp": 12,
    "type": "mcq",
    "title": "Peralatan Tambahan",
    "question": "Apakah fungsi UPS?",
    "answers": [
      "Membekalkan kuasa sementara dan perlindungan ketika gangguan kuasa",
      "Menambah RAM",
      "Memproses grafik",
      "Menjadi sistem operasi"
    ],
    "correctAnswer": 0,
    "explanation": "UPS membantu melindungi sistem daripada gangguan kuasa."
  },
  {
    "id": "KP12-Q09",
    "kp": 12,
    "type": "mcq",
    "title": "Peralatan Tambahan",
    "question": "Apakah fungsi external HDD/SSD?",
    "answers": [
      "Menyimpan dan memindahkan data secara luaran",
      "Mengawal BIOS",
      "Menyejukkan CPU",
      "Membekal kuasa motherboard"
    ],
    "correctAnswer": 0,
    "explanation": "External drive ialah storan mudah alih."
  },
  {
    "id": "KP12-Q10",
    "kp": 12,
    "type": "mcq",
    "title": "Peralatan Tambahan",
    "question": "Apakah fungsi USB hub?",
    "answers": [
      "Menambah bilangan port USB yang boleh digunakan",
      "Menambah RAM",
      "Menukar CPU",
      "Mengganti PSU"
    ],
    "correctAnswer": 0,
    "explanation": "USB hub memperluas sambungan USB."
  },
  {
    "id": "KP12-Q11",
    "kp": 12,
    "type": "mcq",
    "title": "Peralatan Tambahan",
    "question": "Apakah fungsi card reader?",
    "answers": [
      "Membaca kad memori",
      "Mengukur voltan",
      "Memasang RAM",
      "Mengawal printer"
    ],
    "correctAnswer": 0,
    "explanation": "Card reader digunakan untuk media kad."
  },
  {
    "id": "KP12-Q12",
    "kp": 12,
    "type": "mcq",
    "title": "Peralatan Tambahan",
    "question": "Apakah fungsi Bluetooth adapter?",
    "answers": [
      "Menambah atau menyediakan sambungan Bluetooth",
      "Menambah storan",
      "Menyimpan BIOS",
      "Mengawal PSU"
    ],
    "correctAnswer": 0,
    "explanation": "Adapter Bluetooth menyediakan komunikasi tanpa wayar jarak dekat."
  },
  {
    "id": "KP12-Q13",
    "kp": 12,
    "type": "mcq",
    "title": "Peralatan Tambahan",
    "question": "Apakah fungsi Wi-Fi adapter?",
    "answers": [
      "Membolehkan komputer menyambung ke rangkaian Wi-Fi",
      "Mencetak dokumen",
      "Menambah RAM",
      "Menyejukkan casing"
    ],
    "correctAnswer": 0,
    "explanation": "Wi-Fi adapter menyediakan sambungan rangkaian tanpa wayar."
  },
  {
    "id": "KP12-Q14",
    "kp": 12,
    "type": "mcq",
    "title": "Peralatan Tambahan",
    "question": "Apakah fungsi docking station?",
    "answers": [
      "Menambah port dan sambungan untuk komputer riba/peranti",
      "Menggantikan CPU",
      "Menambah RAM secara automatik",
      "Menyimpan BIOS"
    ],
    "correctAnswer": 0,
    "explanation": "Docking station memperluas sambungan."
  },
  {
    "id": "KP12-Q15",
    "kp": 12,
    "type": "mcq",
    "title": "Peralatan Tambahan",
    "question": "Apakah fungsi KVM switch?",
    "answers": [
      "Mengawal beberapa komputer menggunakan set keyboard, video dan mouse tertentu",
      "Menambah storan",
      "Mengawal kipas CPU",
      "Membekal kuasa semua komputer"
    ],
    "correctAnswer": 0,
    "explanation": "KVM membantu pengurusan beberapa komputer."
  },
  {
    "id": "KP12-Q16",
    "kp": 12,
    "type": "mcq",
    "title": "Peralatan Tambahan",
    "question": "Mengapa driver periferal perlu dipasang?",
    "answers": [
      "Supaya sistem dapat mengenali dan menggunakan fungsi peranti",
      "Supaya PSU lebih kuat",
      "Supaya CPU lebih sejuk",
      "Supaya casing lebih besar"
    ],
    "correctAnswer": 0,
    "explanation": "Driver menyediakan komunikasi dengan periferal."
  },
  {
    "id": "KP12-Q17",
    "kp": 12,
    "type": "mcq",
    "title": "Peralatan Tambahan",
    "question": "Apakah yang perlu diperiksa sebelum menyambung periferal USB?",
    "answers": [
      "Port, keserasian dan keadaan kabel/peranti",
      "Jumlah skru casing",
      "Jenis thermal paste",
      "Saiz heatsink CPU sahaja"
    ],
    "correctAnswer": 0,
    "explanation": "Pemeriksaan awal mengelakkan masalah sambungan."
  },
  {
    "id": "KP12-Q18",
    "kp": 12,
    "type": "mcq",
    "title": "Peralatan Tambahan",
    "question": "Mengapa eject safely penting untuk storan USB?",
    "answers": [
      "Mengurangkan risiko data rosak ketika pemindahan masih berlaku",
      "Menambah kapasiti storan",
      "Menambah kelajuan CPU",
      "Menguatkan PSU"
    ],
    "correctAnswer": 0,
    "explanation": "Safe eject membantu melindungi integriti data."
  },
  {
    "id": "KP12-Q19",
    "kp": 12,
    "type": "mcq",
    "title": "Peralatan Tambahan",
    "question": "Apakah tanda periferal mungkin bermasalah?",
    "answers": [
      "Tidak dikesan atau gagal berfungsi walaupun sambungan betul",
      "Monitor lebih cerah",
      "RAM lebih besar",
      "PSU lebih senyap"
    ],
    "correctAnswer": 0,
    "explanation": "Periferal perlu diuji jika tidak dikesan."
  },
  {
    "id": "KP12-Q20",
    "kp": 12,
    "type": "mcq",
    "title": "Peralatan Tambahan",
    "question": "Apakah amalan baik selepas memasang periferal?",
    "answers": [
      "Uji fungsi dan rekod keputusan pemasangan",
      "Abaikan driver",
      "Cabut kabel semasa digunakan",
      "Matikan semua perlindungan"
    ],
    "correctAnswer": 0,
    "explanation": "Ujian mengesahkan peranti berfungsi."
  },
  {
    "id": "KP13-Q01",
    "kp": 13,
    "type": "mcq",
    "title": "Pengujian Sistem",
    "question": "Apakah tujuan pengujian sistem komputer?",
    "answers": [
      "Memastikan perkakasan dan perisian berfungsi dengan betul",
      "Menambah RAM",
      "Mengganti PSU",
      "Mencetak tanpa driver"
    ],
    "correctAnswer": 0,
    "explanation": "Pengujian memastikan sistem stabil dan berfungsi."
  },
  {
    "id": "KP13-Q02",
    "kp": 13,
    "type": "mcq",
    "title": "Pengujian Sistem",
    "question": "Apakah yang perlu diuji selepas pemasangan RAM?",
    "answers": [
      "Kapasiti dikesan dan sistem stabil",
      "Warna casing",
      "Kecerahan monitor sahaja",
      "Bilangan skru"
    ],
    "correctAnswer": 0,
    "explanation": "RAM perlu dikesan dan diuji kestabilannya."
  },
  {
    "id": "KP13-Q03",
    "kp": 13,
    "type": "mcq",
    "title": "Pengujian Sistem",
    "question": "Apakah yang perlu diuji selepas pemasangan storan?",
    "answers": [
      "Storan dikesan, boleh dibaca dan ditulis",
      "Speaker sahaja",
      "Mousepad",
      "Cable tie"
    ],
    "correctAnswer": 0,
    "explanation": "Storan perlu berfungsi untuk operasi sistem."
  },
  {
    "id": "KP13-Q04",
    "kp": 13,
    "type": "mcq",
    "title": "Pengujian Sistem",
    "question": "Apakah yang perlu diuji selepas pemasangan GPU?",
    "answers": [
      "Paparan, driver dan kestabilan grafik",
      "Pencetak sahaja",
      "BIOS password sahaja",
      "Kipas PSU sahaja"
    ],
    "correctAnswer": 0,
    "explanation": "GPU perlu diuji dari segi output dan kestabilan."
  },
  {
    "id": "KP13-Q05",
    "kp": 13,
    "type": "mcq",
    "title": "Pengujian Sistem",
    "question": "Apakah tujuan stress test?",
    "answers": [
      "Menguji kestabilan komponen di bawah beban",
      "Menghapus OS",
      "Menambah kapasiti SSD",
      "Menukar casing"
    ],
    "correctAnswer": 0,
    "explanation": "Stress test membantu mengesan ketidakstabilan."
  },
  {
    "id": "KP13-Q06",
    "kp": 13,
    "type": "mcq",
    "title": "Pengujian Sistem",
    "question": "Mengapa suhu CPU perlu dipantau semasa ujian?",
    "answers": [
      "Untuk memastikan penyejukan berfungsi dan suhu selamat",
      "Untuk menambah RAM",
      "Untuk mengubah BIOS",
      "Untuk mengaktifkan printer"
    ],
    "correctAnswer": 0,
    "explanation": "Suhu tinggi boleh menandakan masalah penyejukan."
  },
  {
    "id": "KP13-Q07",
    "kp": 13,
    "type": "mcq",
    "title": "Pengujian Sistem",
    "question": "Apakah tujuan memory test?",
    "answers": [
      "Mengesan ralat pada RAM",
      "Mengukur voltan PSU",
      "Mencetak laporan",
      "Mengawal monitor"
    ],
    "correctAnswer": 0,
    "explanation": "Memory test menguji integriti RAM."
  },
  {
    "id": "KP13-Q08",
    "kp": 13,
    "type": "mcq",
    "title": "Pengujian Sistem",
    "question": "Apakah tujuan storage health test?",
    "answers": [
      "Menilai keadaan dan ralat pada HDD/SSD",
      "Menambah watt PSU",
      "Menguji keyboard",
      "Mengawal speaker"
    ],
    "correctAnswer": 0,
    "explanation": "Kesihatan storan penting untuk integriti data."
  },
  {
    "id": "KP13-Q09",
    "kp": 13,
    "type": "mcq",
    "title": "Pengujian Sistem",
    "question": "Apakah tujuan benchmark?",
    "answers": [
      "Mengukur prestasi komponen atau sistem",
      "Menghapus data",
      "Memasang RAM",
      "Mengikat kabel"
    ],
    "correctAnswer": 0,
    "explanation": "Benchmark membandingkan prestasi."
  },
  {
    "id": "KP13-Q10",
    "kp": 13,
    "type": "mcq",
    "title": "Pengujian Sistem",
    "question": "Mengapa ujian port USB penting?",
    "answers": [
      "Memastikan port dapat mengesan dan menggunakan peranti",
      "Menambah voltan CPU",
      "Mengawal BIOS",
      "Mengganti PSU"
    ],
    "correctAnswer": 0,
    "explanation": "Semua port yang diperlukan perlu disahkan."
  },
  {
    "id": "KP13-Q11",
    "kp": 13,
    "type": "mcq",
    "title": "Pengujian Sistem",
    "question": "Mengapa ujian audio penting?",
    "answers": [
      "Memastikan input/output audio berfungsi",
      "Menambah storan",
      "Memasang CPU",
      "Mengawal RAM"
    ],
    "correctAnswer": 0,
    "explanation": "Audio perlu diuji jika sistem menyokongnya."
  },
  {
    "id": "KP13-Q12",
    "kp": 13,
    "type": "mcq",
    "title": "Pengujian Sistem",
    "question": "Mengapa ujian rangkaian penting?",
    "answers": [
      "Memastikan sambungan dan komunikasi rangkaian berfungsi",
      "Meningkatkan kapasiti RAM",
      "Menambah kipas",
      "Mengganti casing"
    ],
    "correctAnswer": 0,
    "explanation": "NIC dan konfigurasi rangkaian perlu diuji."
  },
  {
    "id": "KP13-Q13",
    "kp": 13,
    "type": "mcq",
    "title": "Pengujian Sistem",
    "question": "Apakah tujuan ping dalam ujian rangkaian?",
    "answers": [
      "Menguji kebolehcapaian hos melalui rangkaian",
      "Mengukur suhu CPU",
      "Mengukur voltan PSU",
      "Menguji printer kertas"
    ],
    "correctAnswer": 0,
    "explanation": "Ping ialah ujian asas sambungan IP."
  },
  {
    "id": "KP13-Q14",
    "kp": 13,
    "type": "mcq",
    "title": "Pengujian Sistem",
    "question": "Apakah yang perlu dilakukan jika ujian gagal?",
    "answers": [
      "Catat ralat, kenal pasti punca dan uji semula selepas pembaikan",
      "Abaikan masalah",
      "Terus serah sistem",
      "Tukar semua komponen serentak"
    ],
    "correctAnswer": 0,
    "explanation": "Kegagalan mesti ditangani secara sistematik."
  },
  {
    "id": "KP13-Q15",
    "kp": 13,
    "type": "mcq",
    "title": "Pengujian Sistem",
    "question": "Mengapa keputusan ujian perlu direkod?",
    "answers": [
      "Untuk bukti, rujukan dan pengesahan kerja",
      "Untuk menambah CPU",
      "Untuk menyejukkan casing",
      "Untuk mengubah monitor"
    ],
    "correctAnswer": 0,
    "explanation": "Dokumentasi penting dalam kerja teknikal."
  },
  {
    "id": "KP13-Q16",
    "kp": 13,
    "type": "mcq",
    "title": "Pengujian Sistem",
    "question": "Apakah maksud functional test?",
    "answers": [
      "Ujian untuk memastikan fungsi yang diperlukan berjalan seperti sepatutnya",
      "Ujian warna casing",
      "Ujian jenis skru",
      "Ujian meja kerja"
    ],
    "correctAnswer": 0,
    "explanation": "Functional test fokus pada fungsi sebenar sistem."
  },
  {
    "id": "KP13-Q17",
    "kp": 13,
    "type": "mcq",
    "title": "Pengujian Sistem",
    "question": "Apakah maksud visual inspection?",
    "answers": [
      "Pemeriksaan fizikal terhadap pemasangan, kabel dan kerosakan",
      "Memasang OS",
      "Mengukur internet",
      "Menyimpan fail"
    ],
    "correctAnswer": 0,
    "explanation": "Pemeriksaan visual ialah langkah awal penting."
  },
  {
    "id": "KP13-Q18",
    "kp": 13,
    "type": "mcq",
    "title": "Pengujian Sistem",
    "question": "Mengapa kabel perlu diperiksa semasa ujian?",
    "answers": [
      "Sambungan longgar boleh menyebabkan sistem tidak stabil atau gagal",
      "Kabel menambah RAM",
      "Kabel mengubah CPU",
      "Kabel menentukan OS"
    ],
    "correctAnswer": 0,
    "explanation": "Sambungan perlu kukuh."
  },
  {
    "id": "KP13-Q19",
    "kp": 13,
    "type": "mcq",
    "title": "Pengujian Sistem",
    "question": "Apakah kriteria sistem dianggap lulus ujian?",
    "answers": [
      "Fungsi utama bekerja, tiada ralat kritikal dan prestasi stabil",
      "Casing berwarna cantik",
      "Semua kipas pada maksimum",
      "Semua port mesti digunakan"
    ],
    "correctAnswer": 0,
    "explanation": "Kelulusan berdasarkan fungsi dan kestabilan."
  },
  {
    "id": "KP13-Q20",
    "kp": 13,
    "type": "mcq",
    "title": "Pengujian Sistem",
    "question": "Apakah langkah akhir selepas semua ujian lulus?",
    "answers": [
      "Dokumentasikan keputusan dan serahkan sistem mengikut prosedur",
      "Padam semua rekod",
      "Cabut semua kabel",
      "Reset BIOS tanpa sebab"
    ],
    "correctAnswer": 0,
    "explanation": "Keputusan akhir perlu direkod dan disahkan."
  },
  {
    "id": "KP14-Q01",
    "kp": 14,
    "type": "mcq",
    "title": "Pengendalian Perkakasan",
    "question": "Apakah langkah keselamatan sebelum mengendalikan perkakasan?",
    "answers": [
      "Matikan kuasa dan gunakan perlindungan antistatik",
      "Biarkan sistem hidup",
      "Pegang pin CPU",
      "Sembur air"
    ],
    "correctAnswer": 0,
    "explanation": "Kuasa dan ESD perlu dikawal."
  },
  {
    "id": "KP14-Q02",
    "kp": 14,
    "type": "mcq",
    "title": "Pengendalian Perkakasan",
    "question": "Mengapa ESD berbahaya?",
    "answers": [
      "Boleh merosakkan komponen elektronik sensitif",
      "Menambah kelajuan CPU",
      "Menguatkan PSU",
      "Menukar BIOS"
    ],
    "correctAnswer": 0,
    "explanation": "Cas statik boleh merosakkan litar."
  },
  {
    "id": "KP14-Q03",
    "kp": 14,
    "type": "mcq",
    "title": "Pengendalian Perkakasan",
    "question": "Bahagian manakah tidak patut disentuh pada RAM?",
    "answers": [
      "Contact emas",
      "Label modul",
      "Heatsink luar",
      "Bahagian tepi PCB yang selamat"
    ],
    "correctAnswer": 0,
    "explanation": "Contact perlu kekal bersih dan tidak tercemar."
  },
  {
    "id": "KP14-Q04",
    "kp": 14,
    "type": "mcq",
    "title": "Pengendalian Perkakasan",
    "question": "Bagaimana CPU patut dipegang?",
    "answers": [
      "Pegang pada bahagian tepi tanpa menyentuh pin/contact",
      "Pegang pada pin",
      "Tekan permukaan contact",
      "Tarik heatsink"
    ],
    "correctAnswer": 0,
    "explanation": "CPU ialah komponen sensitif."
  },
  {
    "id": "KP14-Q05",
    "kp": 14,
    "type": "mcq",
    "title": "Pengendalian Perkakasan",
    "question": "Mengapa komponen perlu diletakkan dalam beg antistatik?",
    "answers": [
      "Melindungi daripada ESD semasa penyimpanan/angkutan",
      "Menambah kapasiti",
      "Meningkatkan suhu",
      "Mengubah firmware"
    ],
    "correctAnswer": 0,
    "explanation": "Beg antistatik mengurangkan risiko ESD."
  },
  {
    "id": "KP14-Q06",
    "kp": 14,
    "type": "mcq",
    "title": "Pengendalian Perkakasan",
    "question": "Apakah amalan sebelum mencabut connector?",
    "answers": [
      "Pegang connector, bukan tarik kabel secara kasar",
      "Tarik wayar sekuat mungkin",
      "Gunakan air",
      "Biarkan kuasa hidup"
    ],
    "correctAnswer": 0,
    "explanation": "Menarik connector dengan betul mengelakkan kerosakan."
  },
  {
    "id": "KP14-Q07",
    "kp": 14,
    "type": "mcq",
    "title": "Pengendalian Perkakasan",
    "question": "Mengapa skru tidak boleh terlalu ketat?",
    "answers": [
      "Boleh merosakkan thread, PCB atau mounting",
      "Menambah kelajuan CPU",
      "Menguatkan internet",
      "Meningkatkan RAM"
    ],
    "correctAnswer": 0,
    "explanation": "Ketegangan berlebihan boleh menyebabkan kerosakan mekanikal."
  },
  {
    "id": "KP14-Q08",
    "kp": 14,
    "type": "truefalse",
    "title": "Pengendalian Perkakasan",
    "question": "Apakah langkah jika komponen terjatuh?",
    "answers": [
      "Periksa kerosakan fizikal sebelum digunakan semula",
      "Terus pasang tanpa semak",
      "Cuci dengan air",
      "Format storan"
    ],
    "correctAnswer": 0,
    "explanation": "Komponen yang terjatuh perlu diperiksa."
  },
  {
    "id": "KP14-Q09",
    "kp": 14,
    "type": "mcq",
    "title": "Pengendalian Perkakasan",
    "question": "Mengapa makanan/minuman tidak sesuai di meja kerja?",
    "answers": [
      "Boleh menyebabkan tumpahan dan kerosakan elektrik",
      "Mengurangkan internet",
      "Menghapus driver",
      "Menambah habuk BIOS"
    ],
    "correctAnswer": 0,
    "explanation": "Cecair ialah risiko besar kepada elektronik."
  },
  {
    "id": "KP14-Q10",
    "kp": 14,
    "type": "mcq",
    "title": "Pengendalian Perkakasan",
    "question": "Apakah cara selamat menyimpan skru?",
    "answers": [
      "Gunakan bekas berasingan dan berlabel",
      "Letak atas motherboard",
      "Masukkan dalam PSU",
      "Campur dengan kabel kuasa"
    ],
    "correctAnswer": 0,
    "explanation": "Organisasi mengelakkan kehilangan dan short circuit."
  },
  {
    "id": "KP14-Q11",
    "kp": 14,
    "type": "mcq",
    "title": "Pengendalian Perkakasan",
    "question": "Apakah cara selamat mengangkat desktop berat?",
    "answers": [
      "Gunakan postur betul dan bantuan jika perlu",
      "Angkat sebelah tangan sahaja",
      "Tarik pada kabel",
      "Pegang pada kipas"
    ],
    "correctAnswer": 0,
    "explanation": "Ergonomik penting untuk keselamatan."
  },
  {
    "id": "KP14-Q12",
    "kp": 14,
    "type": "mcq",
    "title": "Pengendalian Perkakasan",
    "question": "Mengapa kasut/permukaan kerja sesuai penting untuk ESD?",
    "answers": [
      "Membantu mengurangkan pengumpulan cas statik",
      "Menambah kelajuan CPU",
      "Mengubah BIOS",
      "Mengawal printer"
    ],
    "correctAnswer": 0,
    "explanation": "Persekitaran mempengaruhi ESD."
  },
  {
    "id": "KP14-Q13",
    "kp": 14,
    "type": "mcq",
    "title": "Pengendalian Perkakasan",
    "question": "Apakah yang perlu dibuat sebelum memasang CPU cooler?",
    "answers": [
      "Pastikan permukaan bersih dan thermal paste digunakan dengan betul",
      "Sembur minyak",
      "Tarik socket",
      "Pasang RAM atas CPU"
    ],
    "correctAnswer": 0,
    "explanation": "Pemindahan haba memerlukan permukaan yang sesuai."
  },
  {
    "id": "KP14-Q14",
    "kp": 14,
    "type": "mcq",
    "title": "Pengendalian Perkakasan",
    "question": "Mengapa connector perlu disejajarkan sebelum ditekan?",
    "answers": [
      "Mengelakkan pin bengkok atau connector rosak",
      "Supaya kabel lebih panjang",
      "Supaya PSU lebih kuat",
      "Supaya OS lebih laju"
    ],
    "correctAnswer": 0,
    "explanation": "Pemasangan paksa boleh merosakkan connector."
  },
  {
    "id": "KP14-Q15",
    "kp": 14,
    "type": "mcq",
    "title": "Pengendalian Perkakasan",
    "question": "Bagaimana RAM dipasang dengan selamat?",
    "answers": [
      "Sejajarkan notch dan tekan sehingga latch mengunci",
      "Pasang terbalik",
      "Paksa tanpa semak notch",
      "Pegang contact"
    ],
    "correctAnswer": 0,
    "explanation": "Notch memastikan orientasi betul."
  },
  {
    "id": "KP14-Q16",
    "kp": 14,
    "type": "truefalse",
    "title": "Pengendalian Perkakasan",
    "question": "Apakah langkah selepas kerja perkakasan selesai?",
    "answers": [
      "Periksa semula sambungan, skru dan alat sebelum hidupkan sistem",
      "Tinggalkan skru dalam casing",
      "Hidupkan tanpa panel dan tanpa semak",
      "Buang manual"
    ],
    "correctAnswer": 0,
    "explanation": "Pemeriksaan akhir mengurangkan risiko."
  },
  {
    "id": "KP14-Q17",
    "kp": 14,
    "type": "mcq",
    "title": "Pengendalian Perkakasan",
    "question": "Mengapa nombor siri komponen kadang-kadang direkod?",
    "answers": [
      "Untuk inventori, waranti dan jejak aset",
      "Untuk menambah RAM",
      "Untuk mengubah voltan",
      "Untuk mengawal BIOS"
    ],
    "correctAnswer": 0,
    "explanation": "Nombor siri membantu pengurusan aset."
  },
  {
    "id": "KP14-Q18",
    "kp": 14,
    "type": "mcq",
    "title": "Pengendalian Perkakasan",
    "question": "Apakah tujuan label komponen yang dikeluarkan?",
    "answers": [
      "Mengelakkan pertukaran atau kehilangan semasa kerja servis",
      "Menambah prestasi",
      "Mengubah firmware",
      "Menguatkan kipas"
    ],
    "correctAnswer": 0,
    "explanation": "Pelabelan membantu kawalan komponen."
  },
  {
    "id": "KP14-Q19",
    "kp": 14,
    "type": "mcq",
    "title": "Pengendalian Perkakasan",
    "question": "Mengapa kabel perlu dialihkan dari kipas?",
    "answers": [
      "Mengelakkan kabel terkena bilah kipas dan mengganggu airflow",
      "Untuk menambah storan",
      "Untuk mengubah BIOS",
      "Untuk meningkatkan resolusi"
    ],
    "correctAnswer": 0,
    "explanation": "Kabel yang terkena kipas boleh rosak dan menghasilkan bunyi."
  },
  {
    "id": "KP14-Q20",
    "kp": 14,
    "type": "mcq",
    "title": "Pengendalian Perkakasan",
    "question": "Apakah prinsip utama pengendalian perkakasan?",
    "answers": [
      "Cermat, bersih, antistatik dan ikut prosedur",
      "Cepat tanpa pemeriksaan",
      "Guna daya maksimum",
      "Sentuh semua contact"
    ],
    "correctAnswer": 0,
    "explanation": "Pengendalian yang betul melindungi pengguna dan komponen."
  },
  {
    "id": "KP15-Q01",
    "kp": 15,
    "type": "mcq",
    "title": "Laporan Sistem",
    "question": "Apakah maklumat penting dalam laporan sistem?",
    "answers": [
      "Butiran sistem, ujian, masalah, tindakan dan keputusan",
      "Warna meja sahaja",
      "Jenis mousepad",
      "Nama wallpaper"
    ],
    "correctAnswer": 0,
    "explanation": "Laporan merekod kerja dan hasil pemeriksaan."
  },
  {
    "id": "KP15-Q02",
    "kp": 15,
    "type": "mcq",
    "title": "Laporan Sistem",
    "question": "Mengapa nombor aset perlu direkod?",
    "answers": [
      "Untuk mengenal pasti komputer yang diperiksa",
      "Untuk menambah RAM",
      "Untuk mengubah BIOS",
      "Untuk menukar PSU"
    ],
    "correctAnswer": 0,
    "explanation": "Nombor aset membezakan setiap unit."
  },
  {
    "id": "KP15-Q03",
    "kp": 15,
    "type": "mcq",
    "title": "Laporan Sistem",
    "question": "Mengapa tarikh kerja perlu direkod?",
    "answers": [
      "Untuk jejak masa pemeriksaan atau pemasangan",
      "Untuk mengawal CPU",
      "Untuk menambah storan",
      "Untuk mengubah driver"
    ],
    "correctAnswer": 0,
    "explanation": "Tarikh penting untuk rekod sejarah."
  },
  {
    "id": "KP15-Q04",
    "kp": 15,
    "type": "mcq",
    "title": "Laporan Sistem",
    "question": "Mengapa nama juruteknik/pelajar perlu direkod?",
    "answers": [
      "Untuk mengenal pasti individu yang menjalankan kerja",
      "Untuk menambah kelajuan sistem",
      "Untuk mengawal RAM",
      "Untuk mengubah port"
    ],
    "correctAnswer": 0,
    "explanation": "Identiti pelaksana penting untuk akauntabiliti."
  },
  {
    "id": "KP15-Q05",
    "kp": 15,
    "type": "mcq",
    "title": "Laporan Sistem",
    "question": "Apakah yang perlu ditulis pada bahagian masalah?",
    "answers": [
      "Simptom dan ralat yang ditemui secara jelas",
      "Warna casing sahaja",
      "Nama lagu",
      "Jenis meja"
    ],
    "correctAnswer": 0,
    "explanation": "Masalah perlu diterangkan berdasarkan pemerhatian."
  },
  {
    "id": "KP15-Q06",
    "kp": 15,
    "type": "mcq",
    "title": "Laporan Sistem",
    "question": "Apakah yang perlu ditulis pada bahagian tindakan?",
    "answers": [
      "Langkah pembaikan atau konfigurasi yang dilakukan",
      "Nama wallpaper",
      "Jenis kerusi",
      "Warna kabel sahaja"
    ],
    "correctAnswer": 0,
    "explanation": "Tindakan mesti direkod supaya boleh dirujuk."
  },
  {
    "id": "KP15-Q07",
    "kp": 15,
    "type": "mcq",
    "title": "Laporan Sistem",
    "question": "Apakah yang perlu ditulis pada keputusan ujian?",
    "answers": [
      "Sama ada ujian lulus/gagal beserta pemerhatian penting",
      "Nama browser sahaja",
      "Warna monitor",
      "Jenis mousepad"
    ],
    "correctAnswer": 0,
    "explanation": "Keputusan ujian perlu jelas."
  },
  {
    "id": "KP15-Q08",
    "kp": 15,
    "type": "mcq",
    "title": "Laporan Sistem",
    "question": "Mengapa spesifikasi sistem perlu direkod?",
    "answers": [
      "Untuk rujukan konfigurasi dan keserasian",
      "Untuk menambah RAM",
      "Untuk mengawal PSU",
      "Untuk menukar BIOS"
    ],
    "correctAnswer": 0,
    "explanation": "Spesifikasi membantu troubleshooting dan inventori."
  },
  {
    "id": "KP15-Q09",
    "kp": 15,
    "type": "mcq",
    "title": "Laporan Sistem",
    "question": "Mengapa serial number komponen penting?",
    "answers": [
      "Untuk jejak waranti dan pengurusan aset",
      "Untuk menukar resolusi",
      "Untuk mengaktifkan OS",
      "Untuk mengawal kipas"
    ],
    "correctAnswer": 0,
    "explanation": "Nombor siri membantu pengesanan komponen."
  },
  {
    "id": "KP15-Q10",
    "kp": 15,
    "type": "mcq",
    "title": "Laporan Sistem",
    "question": "Apakah format laporan yang baik?",
    "answers": [
      "Jelas, tersusun, tepat dan mudah dirujuk",
      "Panjang tanpa struktur",
      "Hanya gambar",
      "Tanpa tarikh"
    ],
    "correctAnswer": 0,
    "explanation": "Laporan teknikal perlu mudah difahami."
  },
  {
    "id": "KP15-Q11",
    "kp": 15,
    "type": "mcq",
    "title": "Laporan Sistem",
    "question": "Mengapa bahasa laporan perlu tepat?",
    "answers": [
      "Mengurangkan kekeliruan dan salah tafsir",
      "Menambah prestasi CPU",
      "Meningkatkan watt PSU",
      "Menambah port USB"
    ],
    "correctAnswer": 0,
    "explanation": "Bahasa teknikal perlu jelas."
  },
  {
    "id": "KP15-Q12",
    "kp": 15,
    "type": "mcq",
    "title": "Laporan Sistem",
    "question": "Mengapa gambar sebelum/selepas berguna?",
    "answers": [
      "Memberi bukti visual keadaan dan hasil kerja",
      "Menambah RAM",
      "Mengubah BIOS",
      "Memasang driver"
    ],
    "correctAnswer": 0,
    "explanation": "Gambar menyokong dokumentasi."
  },
  {
    "id": "KP15-Q13",
    "kp": 15,
    "type": "mcq",
    "title": "Laporan Sistem",
    "question": "Apakah yang dimaksudkan dengan status akhir?",
    "answers": [
      "Keadaan sistem selepas semua tindakan dan ujian selesai",
      "Nama user login",
      "Jenis mouse",
      "Warna casing"
    ],
    "correctAnswer": 0,
    "explanation": "Status akhir merumuskan keadaan sistem."
  },
  {
    "id": "KP15-Q14",
    "kp": 15,
    "type": "mcq",
    "title": "Laporan Sistem",
    "question": "Mengapa cadangan tindakan susulan perlu ditulis?",
    "answers": [
      "Supaya kerja lanjutan atau pemantauan dapat dibuat",
      "Untuk menambah kapasiti RAM",
      "Untuk mengubah PSU",
      "Untuk menukar skru"
    ],
    "correctAnswer": 0,
    "explanation": "Cadangan membantu perancangan seterusnya."
  },
  {
    "id": "KP15-Q15",
    "kp": 15,
    "type": "mcq",
    "title": "Laporan Sistem",
    "question": "Apakah yang perlu direkod jika komponen diganti?",
    "answers": [
      "Nama komponen, model/serial dan sebab penggantian",
      "Warna meja",
      "Nama browser",
      "Jenis wallpaper"
    ],
    "correctAnswer": 0,
    "explanation": "Penggantian komponen perlu dijejak."
  },
  {
    "id": "KP15-Q16",
    "kp": 15,
    "type": "mcq",
    "title": "Laporan Sistem",
    "question": "Mengapa masa mula dan tamat kerja berguna?",
    "answers": [
      "Untuk mengukur tempoh kerja dan rekod operasi",
      "Untuk menambah voltan",
      "Untuk mengubah BIOS",
      "Untuk menambah storan"
    ],
    "correctAnswer": 0,
    "explanation": "Masa membantu dokumentasi kerja."
  },
  {
    "id": "KP15-Q17",
    "kp": 15,
    "type": "mcq",
    "title": "Laporan Sistem",
    "question": "Apakah tujuan tandatangan/pengesahan jika digunakan?",
    "answers": [
      "Mengesahkan kerja atau penerimaan keputusan",
      "Menambah kelajuan CPU",
      "Mengawal kipas",
      "Membekal kuasa"
    ],
    "correctAnswer": 0,
    "explanation": "Pengesahan memberi akauntabiliti."
  },
  {
    "id": "KP15-Q18",
    "kp": 15,
    "type": "mcq",
    "title": "Laporan Sistem",
    "question": "Mengapa keputusan gagal tidak boleh dipadam?",
    "answers": [
      "Ia penting sebagai rekod diagnosis dan tindakan seterusnya",
      "Ia menambah RAM",
      "Ia mengubah suhu",
      "Ia mengawal PSU"
    ],
    "correctAnswer": 0,
    "explanation": "Kegagalan juga sebahagian rekod teknikal."
  },
  {
    "id": "KP15-Q19",
    "kp": 15,
    "type": "mcq",
    "title": "Laporan Sistem",
    "question": "Apakah yang patut dibuat sebelum menyerahkan laporan?",
    "answers": [
      "Semak semula ketepatan maklumat dan kelengkapan bukti",
      "Padam semua tarikh",
      "Buang keputusan ujian",
      "Abaikan nombor aset"
    ],
    "correctAnswer": 0,
    "explanation": "Semakan akhir meningkatkan kualiti laporan."
  },
  {
    "id": "KP15-Q20",
    "kp": 15,
    "type": "mcq",
    "title": "Laporan Sistem",
    "question": "Apakah tujuan utama laporan sistem komputer?",
    "answers": [
      "Menyediakan rekod teknikal yang boleh dirujuk dan disahkan",
      "Menggantikan BIOS",
      "Menambah RAM",
      "Mengawal monitor"
    ],
    "correctAnswer": 0,
    "explanation": "Laporan ialah bukti dan rujukan kerja teknikal."
  }
];


function shuffleArray(items) {
  const a = [...items];

  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }

  return a;
}

function prepareRaceQuestions({
  selectedKp = [],
  questionTypes = [],
  questionCount = 10
} = {}) {

  const selectedKpNumbers = selectedKp.map(Number);

  let pool = C01_QUESTION_BANK.filter(question => {
    return (
      !selectedKpNumbers.length ||
      selectedKpNumbers.includes(Number(question.kp))
    );
  });

  const typedPool = pool.filter(question => {
    return (
      !questionTypes.length ||
      questionTypes.includes(question.type)
    );
  });

  if (typedPool.length) {
    pool = typedPool;
  }

  if (!pool.length) {
    return [];
  }

  const unique = [
    ...new Map(
      pool.map(question => [
        question.id || `${question.kp}-${question.question}`,
        question
      ])
    ).values()
  ];

  const requestedCount = Math.max(
    1,
    Number(questionCount) || 10
  );

  return shuffleArray(unique)
    .slice(
      0,
      Math.min(requestedCount, unique.length)
    )
    .map(question => ({
      ...question,
      answers: [...question.answers]
    }));
}

export {
  C01_QUESTION_BANK,
  prepareRaceQuestions,
  shuffleArray
};
