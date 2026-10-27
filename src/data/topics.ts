// Long-tail topic registry for Little India Brickfields guide.
// Slugs are language-neutral (English). Each topic carries ms + en content.
// Content is intentionally generic-by-type (no fabricated shop names, prices
// or exact times); readers are told to verify on-site or via official maps.

export interface TopicSection {
  id: string;
  title: string;
  /** HTML body — paragraphs and lists only, no scripts. */
  body: string;
}

export interface TopicFaq {
  q: string;
  a: string;
}

export interface TopicContent {
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: TopicSection[];
  faq: TopicFaq[];
}

export interface Topic {
  slug: string;
  /** Tier grouping for internal linking / future sitemaps. */
  group: "attraction" | "visit" | "food" | "itinerary" | "shopping";
  ms: TopicContent;
  en: TopicContent;
  related: string[];
}

export const TOPICS: Topic[] = [
  {
    slug: "opening-hours",
    group: "visit",
    related: ["best-time-to-visit", "kl-sentral-walk", "parking"],
    ms: {
      title: "Waktu Buka Little India Brickfields | Rujukan & Waktu Premis",
      description:
        "Waktu buka Little India Brickfields bukan satu jadual seragam: ini kawasan kejiranan terbuka. Ketahui rujukan penyenaraian peta, waktu berbeza mengikut jenis premis, dan cara menyemak status terkini.",
      h1: "Waktu Buka Little India Brickfields",
      intro:
        "Little India Brickfields bukan sebuah bangunan berpintu masuk, sebaliknya sepintas jalan dan kedai di sekitar Jalan Tun Sambanthan. Oleh itu, tiada satu “waktu buka” yang sah untuk seluruh kawasan. Halaman ini menggariskan rujukan yang berguna supaya anda tidak tersalah sangka sebelum datang.",
      sections: [
        {
          id: "kawasan-terbuka",
          title: "Kawasan terbuka, bukan satu premis",
          body:
            "<p>Jalan raya, kaki lima dan ruang awam di Brickfields boleh dilalui pada bila-bila masa siang. Tiada pagar atau kaunter tiket yang menutup kawasan ini. Waktu yang anda lihat dalam enjin carian biasanya merujuk kepada penyenaraian peta bagi “kawasan” secara keseluruhan, bukan kepada setiap kedai.</p><p>Untuk mengelak kecewa, anggapkan kunjungan sebagai berjalan di kejiranan, bukan melawat satu tarikan berjadual. Rancang mengikut premis yang anda ingin tuju.</p>",
        },
        {
          id: "rujukan-peta",
          title: "Rujukan penyenaraian peta: 10:30–21:30",
          body:
            "<p>Apabila disemak pada 19 Oktober 2026, penyenaraian Google Maps untuk Little India Brickfields menunjukkan jam rujukan <strong>10:30–21:30 setiap hari</strong>. Angka ini diambil daripada data awam Google Maps dan boleh berubah; ia hanya panduan umum untuk kawasan, bukan jaminan setiap perniagaan dibuka serentak.</p><p>Gunakan nombor ini untuk merancang masa tiba kasar, tetapi sahkan premis tertentu secara berasingan.</p>",
        },
        {
          id: "mengikut-jenis",
          title: "Waktu mengikut jenis premis",
          body:
            "<ul><li><strong>Kedai kain, rempah & barangan:</strong> kebanyakannya mengikut rentak perniagaan harian, dengan sebahagian tutup seketika pada waktu tengah hari atau hari tertentu.</li><li><strong>Restoran & gerai makan:</strong> sering buka lewat pagi hingga malam; sesetengah lebih sibuk pada hujung minggu.</li><li><strong>Kuil & ruang ibadat:</strong> mengikut jadual ibadat pagi dan petang; waktu lawatan biasanya lebih fleksibel di luar waktu sembahyang.</li></ul><p>Kerana ini berbeza, periksalah waktu premis yang anda kehendaki sebelum bergerak jauh.</p>",
        },
        {
          id: "semak-terkini",
          title: "Cara menyemak status terkini",
          body:
            "<p>Cara paling dipercayai ialah membuka penyenaraian Google Maps bagi Little India Brickfields dan premis individu, atau menghubungi premis berkenaan terus. Waktu yang dinyatakan di laman panduan bebas seperti ini hanyalah ringkasan rujukan yang disemak pada tarikh tertentu.</p><p>Musim perayaan Deepavali (biasanya Oktober atau November) sering mengubah waktu dan menambah bazar bermusim — semak kalendar perayaan sebelum merancang lawatan khas.</p>",
        },
      ],
      faq: [
        {
          q: "Apakah waktu buka Little India Brickfields?",
          a: "Penyenaraian Google Maps (disemak 19 Oktober 2026) menunjukkan 10:30–21:30 setiap hari sebagai rujukan kawasan. Ini bukan jadual seragam; kedai, restoran dan kuil mempunyai waktu berbeza. Sahkan premis yang dituju sebelum datang.",
        },
        {
          q: "Adakah Little India Brickfields tutup pada hari tertentu?",
          a: "Kawasan jalanan secara umumnya boleh dilalui setiap hari, tetapi sesetengah premis mungkin tutup pada hari kelepasan tertentu atau waktu tengah hari. Semak premis individu melalui peta sebelum berkunjung.",
        },
        {
          q: "Bilakah kedai paling ramai?",
          a: "Hujung minggu, terutamanya lewat petang menjelang malam, biasanya lebih meriah dan sesak. Jika mahu suasana lebih tenang, pilih hari bekerja dan datang lebih awal.",
        },
        {
          q: "Adakah kuil dibuka untuk pelawat?",
          a: "Ruang ibadat mempunyai jadual sembahyang pagi dan petang. Pelawat biasanya dialu-alukan di luar waktu ibadat utama, dengan berpakaian sopan dan mengikut arahan di pintu masuk.",
        },
        {
          q: "Waktu berbeza semasa Deepavali?",
          a: "Menjelang Deepavali, Jalan Tun Sambanthan dihiasi lampu dan bazar bermusim, dan sesetengah premis melanjutkan waktu. Tarikh sebenar berubah setiap tahun, jadi semak kalendar perayaan terlebih dahulu.",
        },
        {
          q: "Perlukah saya beli tiket masuk?",
          a: "Tidak. Berjalan di kawasan jalanan awam adalah percuma dan tanpa tiket. Belanja hanya timbul untuk makanan, belian, pengangkutan atau meletak kenderaan mengikut pilihan anda.",
        },
      ],
    },
    en: {
      title: "Little India Brickfields Opening Hours | Area vs Shop Times",
      description:
        "Little India Brickfields has no single opening time — it is an open neighbourhood. Learn the map-listing reference, how times differ by premise type, and how to check the latest status.",
      h1: "Little India Brickfields Opening Hours",
      intro:
        "Little India Brickfields is not a gated building but a stretch of streets and shops around Jalan Tun Sambanthan. That means there is no single “opening hours” that applies to the whole area. This page lays out a useful reference so you are not caught out before you arrive.",
      sections: [
        {
          id: "open-area",
          title: "An open area, not a single premise",
          body:
            "<p>The roads, pavements and public spaces in Brickfields can be walked at any time during daylight. There is no fence or ticket counter closing off the district. The hours you see in search usually refer to a map listing for the “area” as a whole, not to every shop.</p><p>To avoid disappointment, treat your visit as a neighbourhood walk rather than a scheduled attraction, and plan around the specific premises you want to see.</p>",
        },
        {
          id: "map-reference",
          title: "Map listing reference: 10:30–21:30",
          body:
            "<p>When checked on 19 October 2026, the Google Maps listing for Little India Brickfields showed a reference time of <strong>10:30–21:30 daily</strong>. This figure comes from public Google Maps data and can change; it is only a general guide for the district, not a guarantee that every business opens at the same time.</p><p>Use it to plan a rough arrival time, but confirm individual premises separately.</p>",
        },
        {
          id: "by-type",
          title: "Hours differ by premise type",
          body:
            "<ul><li><strong>Fabric, spice & goods shops:</strong> mostly follow daily trading hours, with some closing briefly at midday or on certain days.</li><li><strong>Restaurants & food stalls:</strong> often open late morning to night; some are busier on weekends.</li><li><strong>Temples & places of worship:</strong> follow morning and evening prayer schedules; visiting windows are usually more flexible outside main services.</li></ul><p>Because these vary, check the hours of the specific place you want to visit before travelling far.</p>",
        },
        {
          id: "check-latest",
          title: "How to check the latest status",
          body:
            "<p>The most reliable way is to open the Google Maps listing for Little India Brickfields and for individual premises, or to contact the premise directly. Hours stated on an independent guide like this are only a reference summary checked on a given date.</p><p>The Deepavali season (usually October or November) often changes hours and adds seasonal bazaars — check the festival calendar before planning a special trip.</p>",
        },
      ],
      faq: [
        {
          q: "What are the opening hours of Little India Brickfields?",
          a: "The Google Maps listing (checked 19 October 2026) shows 10:30–21:30 daily as an area reference. This is not a uniform timetable; shops, restaurants and temples keep different hours. Confirm your intended stop before you go.",
        },
        {
          q: "Is Little India Brickfields closed on certain days?",
          a: "The street area is generally walkable every day, but some premises may close on particular public holidays or at midday. Check individual premises via the map before visiting.",
        },
        {
          q: "When is it busiest?",
          a: "Weekends, especially late afternoon into the evening, are usually livelier and more crowded. For a calmer atmosphere, choose a weekday and arrive earlier.",
        },
        {
          q: "Are the temples open to visitors?",
          a: "Places of worship keep morning and evening prayer schedules. Visitors are usually welcome outside main services, dressing modestly and following the instructions at the entrance.",
        },
        {
          q: "Do hours change during Deepavali?",
          a: "Ahead of Deepavali, Jalan Tun Sambanthan is lit up with lamps and seasonal bazaars, and some premises extend their hours. The exact date changes each year, so check the festival calendar first.",
        },
        {
          q: "Do I need an entry ticket?",
          a: "No. Walking the public streets is free and ticketless. Costs arise only for food, shopping, transport or parking, as you choose.",
        },
      ],
    },
  },
  {
    slug: "kl-sentral-walk",
    group: "visit",
    related: ["parking", "best-time-to-visit", "opening-hours"],
    ms: {
      title: "Berjalan dari KL Sentral ke Little India | Panduan & Masa",
      description:
        "Cara berjalan kaki dari KL Sentral ke Little India Brickfields: pilih pintu keluar, gunakan lintasan bertanda, dan rancang mengikut destinasi di Jalan Tun Sambanthan.",
      h1: "Berjalan dari KL Sentral ke Little India Brickfields",
      intro:
        "KL Sentral ialah hab pengangkutan utama Kuala Lumpur dan titik mula paling lazim ke Little India Brickfields. Jaraknya dekat, tetapi masa berjalan bergantung pada pintu keluar yang anda ambil dan premis yang dituju. Halaman ini membantu anda merancang tanpa tersesat.",
      sections: [
        {
          id: "titik-mula",
          title: "Mulakan di KL Sentral",
          body:
            "<p>KL Sentral menghubungkan KTM Komuter, LRT, MRT, ERL (KLIA Ekspres) dan bas. Pilih pintu keluar yang menghala ke arah Brickfields / Jalan Tun Sambanthan; papan tanda arah dan aplikasi peta membantu memastikan anda bergerak ke barat daya dari stesen.</p><p>Jika anda membawa bagasi besar, pertimbangkan laluan bertutup yang menghubung ke kompleks NU Sentral sebelum keluar ke jalan raya.</p>",
        },
        {
          id: "laluan",
          title: "Laluan berjalan yang mudah",
          body:
            "<ul><li>Ikut laluan pejalan kaki bertanda dari pintu keluar pilihan anda ke Jalan Tun Sambanthan.</li><li>Guna lintasan bertanda dan lampu isyarat; jangan melintas di luar tempat yang dibenarkan.</li><li>Berhenti sejenak di NU Sentral jika mahu pendingin hawa atau tandas sebelum menyusuri jalan utama.</li></ul><p>Masa berjalan bergantung pada destinasi sebenar anda di sepanjang Jalan Tun Sambanthan, bukan satu nombor tetap untuk seluruh kawasan.</p>",
        },
        {
          id: "cuaca",
          title: "Cuaca dan keselesaan",
          body:
            "<p>Kuala Lumpur panas dan lembap, dengan hujan lewat petang yang kerap. Bawa payung atau baju hujan, minum air, dan rancang berhenti di premis berbumbung. Waktu lebih nyaman biasanya lewat petang menjelang malam.</p>",
        },
        {
          id: "alternatif",
          title: "Alternatif selain berjalan",
          body:
            "<p>Jika cuaca buruk atau anda membawa kanak-kanak atau warga emas, teksi atau perkhidmatan e-hailing ke “Little India Brickfields” atau “Jalan Tun Sambanthan, Brickfields” adalah pilihan. Turun di hujung jalan supaya tidak tersangkut dalam kesesakan.</p>",
        },
      ],
      faq: [
        {
          q: "Berapa jauh Little India dari KL Sentral?",
          a: "Ia berdekatan — jarak berjalan pendek dari stesen. Masa sebenar bergantung pada pintu keluar yang diambil dan premis yang dituju di Jalan Tun Sambanthan, jadi rancang mengikut destinasi, bukan anggaran jarak sahaja.",
        },
        {
          q: "Berapa lama masa berjalan?",
          a: "Panduan umum: berjalan santai dari pintu keluar yang betul ke hujung Jalan Tun Sambanthan mengambil masa yang berbeza mengikut langkah dan muatan anda. Semak peta untuk laluan pejalan kaki sebelum bergerak.",
        },
        {
          q: "Adakah selamat berjalan pada waktu malam?",
          a: "Kawasan ini biasanya sibuk sehingga lewat malam, tetapi seperti mana-mana bandar, jaga barang berharga, gunakan lintasan bertanda, dan elak lorong sunyi yang kurang bercahaya.",
        },
        {
          q: "Bolehkah saya tukar ke bas atau teksi?",
          a: "Ya. Selain berjalan, teksi dan e-hailing melayani laluan ke Brickfields; turun di tepi Jalan Tun Sambanthan untuk mengelak kesesakan dalam kawasan.",
        },
        {
          q: "Bagaimana jika saya tersesat?",
          a: "Buka penyenaraian Google Maps Little India Brickfields dan pilih titik jumpa di Jalan Tun Sambanthan. Papan tanda jalan dan kedai membantu orientasi apabila anda sudah berada di Brickfields.",
        },
        {
          q: "Adakah ada laluan bertutup dari stesen?",
          a: "Kompleks NU Sentral bersambung dengan KL Sentral dan memberi laluan bertutup sebelum anda keluar ke jalan raya — berguna semasa hujan atau membawa bagasi.",
        },
      ],
    },
    en: {
      title: "Walking from KL Sentral to Little India Brickfields | Route & Time",
      description:
        "How to walk from KL Sentral to Little India Brickfields: pick the right exit, use marked crossings, and plan around your destination on Jalan Tun Sambanthan.",
      h1: "Walking from KL Sentral to Little India Brickfields",
      intro:
        "KL Sentral is Kuala Lumpur’s main transport hub and the most common starting point for Little India Brickfields. The distance is short, but walking time depends on which exit you take and which premise you head to. This page helps you plan without getting lost.",
      sections: [
        {
          id: "start",
          title: "Start at KL Sentral",
          body:
            "<p>KL Sentral connects KTM Komuter, LRT, MRT, the ERL (KLIA Ekspres) and buses. Choose the exit heading towards Brickfields / Jalan Tun Sambanthan; directional signs and a map app help you move southwest out of the station.</p><p>If you are carrying large luggage, consider the covered walkway linking to the NU Sentral complex before stepping onto the open road.</p>",
        },
        {
          id: "route",
          title: "An easy walking route",
          body:
            "<ul><li>Follow the marked pedestrian route from your chosen exit towards Jalan Tun Sambanthan.</li><li>Use signalled, marked crossings and traffic lights; do not cross where it is not permitted.</li><li>Pause at NU Sentral if you want air-conditioning or a restroom before exploring the main street.</li></ul><p>Walking time depends on your actual destination along Jalan Tun Sambanthan, not one fixed number for the whole district.</p>",
        },
        {
          id: "weather",
          title: "Weather and comfort",
          body:
            "<p>Kuala Lumpur is hot and humid, with frequent late-afternoon rain. Carry an umbrella or rain jacket, drink water, and plan breaks in covered premises. The more comfortable window is usually late afternoon into the evening.</p>",
        },
        {
          id: "alternatives",
          title: "Alternatives to walking",
          body:
            "<p>If the weather is bad or you are with children or older travellers, a taxi or ride-hailing service to “Little India Brickfields” or “Jalan Tun Sambanthan, Brickfields” is an option. Ask to be dropped at the end of the street so you avoid getting stuck in congestion.</p>",
        },
      ],
      faq: [
        {
          q: "How far is Little India from KL Sentral?",
          a: "It is close — a short walk from the station. The real time depends on which exit you take and which premise you head to along Jalan Tun Sambanthan, so plan around your destination rather than distance alone.",
        },
        {
          q: "How long does the walk take?",
          a: "As a general guide, a relaxed walk from the correct exit to the far end of Jalan Tun Sambanthan varies with your pace and load. Check the map for the pedestrian route before setting off.",
        },
        {
          q: "Is it safe to walk at night?",
          a: "The area is usually busy into the late evening, but as in any city, keep valuables secure, use marked crossings, and avoid dim, quiet alleys.",
        },
        {
          q: "Can I switch to a bus or taxi?",
          a: "Yes. Besides walking, taxis and ride-hailing serve routes to Brickfields; be dropped near Jalan Tun Sambanthan to avoid congestion within the district.",
        },
        {
          q: "What if I get lost?",
          a: "Open the Google Maps listing for Little India Brickfields and pick a meeting point on Jalan Tun Sambanthan. Street and shop signage help with orientation once you are in Brickfields.",
        },
        {
          q: "Is there a covered walkway from the station?",
          a: "The NU Sentral complex connects to KL Sentral and offers a covered walk before you step onto the open road — useful in rain or when carrying luggage.",
        },
      ],
    },
  },
  {
    slug: "parking",
    group: "visit",
    related: ["kl-sentral-walk", "best-time-to-visit", "opening-hours"],
    ms: {
      title: "Tempat Letak Kereta Berhampiran Little India | Panduan",
      description:
        "Tempat letak kereta berhampiran Little India Brickfields: pilih petak berbayar di sekitar Brickfields, kompleks KL Sentral atau NU Sentral, dan elak risiko diderek pada waktu sibuk.",
      h1: "Tempat Letak Kereta Berhampiran Little India Brickfields",
      intro:
        "Memandu ke Little India Brickfields adalah mungkin, tetapi ruang letak kereta di dalam kawasan agak terhad dan boleh penuh pada hujung minggu atau waktu sibuk. Halaman ini menggariskan pilihan umum supaya anda tidak terkandas.",
      sections: [
        {
          id: "pilihan",
          title: "Pilihan letak kereta umum",
          body:
            "<ul><li><strong>Petak berbayar di sekitar Brickfields:</strong> tersedia di tepi jalan dan lot kecil berdekatan Jalan Tun Sambanthan, namun bilangan terhad.</li><li><strong>KL Sentral & NU Sentral:</strong> kompleks ini menawarkan tempat letak kereta berstruktur dengan lebih banyak petak, sesuai jika anda datang dengan rel.</li></ul><p>Pilih petak bertanda dan semak kadar di lokasi; kadar serta waktu bertol mungkin berbeza mengikut pengendali.</p>",
        },
        {
          id: "waktu-sibuk",
          title: "Elak waktu sibuk dan hujung minggu",
          body:
            "<p>Ruang cenderung penuh pada hujung minggu, cuti umum, dan menjelang Deepavali apabila bazar bermusim menambah trafik. Datang lebih awal atau parkir di kompleks yang lebih besar seperti KL Sentral, kemudian berjalan masuk.</p>",
        },
        {
          id: "risiko",
          title: "Risiko dan etika meletak kenderaan",
          body:
            "<p>Jangan menghalang lorong kedai, pintu masuk, atau jalan kecil — risiko diderek adalah nyata. Gunakan hanya petak letak kereta bertanda, patuhi papan tanda, dan elak meletak kenderaan di laluan yang menyekat perniagaan.</p>",
        },
        {
          id: "alternatif",
          title: "Alternatif memandu sendiri",
          body:
            "<p>Jika anda mahu mengelak isu letak kereta, pertimbangkan tren ke KL Sentral, kemudian berjalan atau menggunakan e-hailing untuk jarak pendek ke Jalan Tun Sambanthan. Ini sering lebih mudah pada hujung minggu.</p>",
        },
      ],
      faq: [
        {
          q: "Di manakah saya boleh meletak kereta di Little India Brickfields?",
          a: "Terdapat petak berbayar di sekitar Brickfields serta di kompleks KL Sentral dan NU Sentral. Ruang dalam kawasan terhad, jadi pilih petak bertanda dan semak kadar di lokasi.",
        },
        {
          q: "Adakah selamat meletak kereta di tepi jalan?",
          a: "Petak bertanda adalah pilihan, tetapi elak menghalang lorong kedai atau jalan kecil kerana risiko diderek. Patuhi papan tanda tempat letak kereta tempatan.",
        },
        {
          q: "Berapakah kadar letak kereta?",
          a: "Kadar berbeza mengikut pengendali dan lokasi; semak di mesin atau papan tanda di lokasi. Panduan bebas seperti ini tidak menetapkan harga tetap kerana ia boleh berubah.",
        },
        {
          q: "Adakah lebih mudah naik tren?",
          a: "Bagi ramai pelawat, menaiki tren ke KL Sentral kemudian berjalan atau e-hailing ke Jalan Tun Sambanthan lebih mudah pada hujung minggu apabila ruang letak kereta penuh.",
        },
        {
          q: "Bolehkah saya dilerek?",
          a: "Ya, jika kenderaan menghalang laluan atau petak tidak dibenarkan. Sentiasa gunakan petak bertanda dan ikut arahan tempatan untuk mengelakkan diderek.",
        },
        {
          q: "Adakah ada tempat letak kereta besar berhampiran?",
          a: "Kompleks KL Sentral dan NU Sentral menawarkan tempat letak kereta berstruktur dengan lebih banyak petak berbanding jalan kecil di Brickfields.",
        },
      ],
    },
    en: {
      title: "Parking Near Little India Brickfields | Guide",
      description:
        "Parking near Little India Brickfields: choose paid bays around Brickfields, the KL Sentral or NU Sentral complexes, and avoid towing risk at peak times.",
      h1: "Parking Near Little India Brickfields",
      intro:
        "Driving to Little India Brickfields is possible, but parking space inside the district is limited and can fill up on weekends or peak hours. This page outlines general options so you are not stranded.",
      sections: [
        {
          id: "options",
          title: "General parking options",
          body:
            "<ul><li><strong>Paid bays around Brickfields:</strong> roadside and small lots near Jalan Tun Sambanthan, but limited in number.</li><li><strong>KL Sentral & NU Sentral:</strong> these complexes offer structured parking with more bays, handy if you arrive by rail.</li></ul><p>Choose marked bays and check the rate on site; fees and hours may differ by operator.</p>",
        },
        {
          id: "peak",
          title: "Avoid peak times and weekends",
          body:
            "<p>Space tends to fill on weekends, public holidays, and ahead of Deepavali when seasonal bazaars add traffic. Arrive earlier or park at a larger complex like KL Sentral, then walk in.</p>",
        },
        {
          id: "risks",
          title: "Risks and parking etiquette",
          body:
            "<p>Do not block shop lanes, entrances, or small roads — towing risk is real. Use only marked bays, obey signage, and avoid spots that obstruct businesses.</p>",
        },
        {
          id: "alternatives",
          title: "Alternatives to driving yourself",
          body:
            "<p>To avoid parking hassle, consider the train to KL Sentral, then walk or use ride-hailing for the short hop to Jalan Tun Sambanthan. This is often easier on weekends.</p>",
        },
      ],
      faq: [
        {
          q: "Where can I park at Little India Brickfields?",
          a: "There are paid bays around Brickfields as well as the KL Sentral and NU Sentral complexes. Space within the district is limited, so choose marked bays and check the rate on site.",
        },
        {
          q: "Is it safe to park on the street?",
          a: "Marked bays are an option, but avoid blocking shop lanes or small roads because of towing risk. Follow local parking signage.",
        },
        {
          q: "What are the parking rates?",
          a: "Rates vary by operator and location; check the machine or signage on site. An independent guide like this does not set fixed prices because they change.",
        },
        {
          q: "Is the train easier?",
          a: "For many visitors, taking the train to KL Sentral then walking or ride-hailing to Jalan Tun Sambanthan is easier on weekends when parking fills up.",
        },
        {
          q: "Could I be towed?",
          a: "Yes, if the vehicle blocks a thoroughfare or an unpermitted spot. Always use marked bays and follow local instructions to avoid towing.",
        },
        {
          q: "Is there a large car park nearby?",
          a: "The KL Sentral and NU Sentral complexes offer structured parking with more bays than the small roads inside Brickfields.",
        },
      ],
    },
  },
  {
    slug: "banana-leaf-rice",
    group: "food",
    related: ["best-time-to-visit", "kl-sentral-walk", "opening-hours"],
    ms: {
      title: "Nasi Daun Pisang di Brickfields | Panduan Makan",
      description:
        "Nasi daun pisang di Brickfields: apa itu hidangan ini, cara memesan dan makan, pilihan vegetarian, serta tip mencuba di kawasan Little India Kuala Lumpur.",
      h1: "Nasi Daun Pisang di Brickfields",
          intro:
        "Salah satu pengalaman makan yang paling dikaitkan dengan Little India Kuala Lumpur ialah nasi daun pisang — hidangan selatan India yang dihidang di atas daun pisang sebenar. Brickfields padat dengan restoran yang menawarkannya; halaman ini membantu anda memahami dan menikmatinya tanpa tekanan.",
      sections: [
        {
          id: "apa-itu",
          title: "Apa itu nasi daun pisang?",
          body:
            "<p>Nasi daun pisang ialah hidangan nasi dengan pelbagai lauk — kari, dal, sayur, papadum dan acar — yang dihidang di atas daun pisang. Ia lazimnya dimakan dengan tangan, mengikut adat selatan India. Hidangan ini mengenyangkan dan sering ditawarkan pada harga yang berpatutan.</p>",
        },
        {
          id: "cara-pesan",
          title: "Cara memesan dan makan",
          body:
            "<ul><li>Duduk, dan nasi serta lauk asas akan dihidang; tambahan selalunya boleh diminta secara berasingan.</li><li>Makan dengan tangan kanan; campur nasi dengan sedikit lauk mengikut selera.</li><li>Tanya tentang tahap pedas dan sama ada lauk mengandungi produk tenusu jika anda peka.</li></ul><p>Jika ragu, minta pekerja menerangkan pilihan — kebanyakan restoran mesra pelawat.</p>",
        },
        {
          id: "vegetarian",
          title: "Pilihan vegetarian",
          body:
            "<p>Banyak hidangan asas adalah berasaskan tumbuhan, menjadikannya mesra vegetarian. Namun, sesetengah kari menggunakan mentega atau produk tenusu; sahkan dengan restoran jika anda mengelaknya. Sesetengah premis menyediakan menu vegetarian sepenuhnya pada hari tertentu.</p>",
        },
        {
          id: "tip",
          title: "Tip mencuba di Brickfields",
          body:
            "<p>Bandingkan beberapa restoran secara santai dan pilih yang paling sesuai dengan suasana anda. Waktu lebih selesa ialah lewat petang menjelang malam. Harga, stok dan cara hidang berbeza mengikut premis, jadi tanya sebelum memesan.</p>",
        },
      ],
      faq: [
        {
          q: "Apakah nasi daun pisang?",
          a: "Ia hidangan selatan India: nasi dengan pelbagai lauk dihidang di atas daun pisang, biasanya dimakan dengan tangan. Hidangan ini lazim di restoran sekitar Brickfields.",
        },
        {
          q: "Berapakah harga secawan nasi daun pisang?",
          a: "Harga berbeza mengikut restoran dan sama ada anda menambah lauk. Panduan bebas seperti ini tidak menetapkan harga; semak di premis atau tanya pekerja.",
        },
        {
          q: "Adakah ia halal atau vegetarian?",
          a: "Ramai restoran di Little India menyediakan pilihan halal dan vegetarian, tetapi status berbeza mengikut premis. Sahkan dengan restoran sebelum memesan jika ia penting bagi anda.",
        },
        {
          q: "Bolehkah saya makan dengan tangan?",
          a: "Ya, ia adat biasa. Jika tidak selesa, sudu selalunya disediakan. Makan dengan tangan kanan mengikut adat tempatan.",
        },
        {
          q: "Bilakah masa terbaik menikmatinya?",
          a: "Restoran sering buka lewat pagi hingga malam; lewat petang menjelang malam biasanya lebih selesa untuk berjalan dan makan.",
        },
        {
          q: "Adakah perlu tempah tempat?",
          a: "Biasanya tidak untuk hidangan santai, kecuali kumpulan besar. Kebanyakan restoran menerima pelanggan walk-in.",
        },
      ],
    },
    en: {
      title: "Banana Leaf Rice in Brickfields | Eating Guide",
      description:
        "Banana leaf rice in Brickfields: what the dish is, how to order and eat it, vegetarian options, and tips for trying it around Little India Kuala Lumpur.",
      h1: "Banana Leaf Rice in Brickfields",
      intro:
        "One of the eating experiences most associated with Little India Kuala Lumpur is banana leaf rice — a South Indian meal served on a real banana leaf. Brickfields is packed with restaurants offering it; this page helps you understand and enjoy it without pressure.",
      sections: [
        {
          id: "what",
          title: "What is banana leaf rice?",
          body:
            "<p>Banana leaf rice is a South Indian meal of rice with assorted sides — curries, dal, vegetables, papadum and pickles — served on a banana leaf. It is traditionally eaten with the hand, following South Indian custom. The meal is filling and often offered at a reasonable price.</p>",
        },
        {
          id: "how",
          title: "How to order and eat",
          body:
            "<ul><li>Sit down, and the rice with basic sides is served; extras can usually be requested separately.</li><li>Eat with your right hand, mixing rice with a little of each side to taste.</li><li>Ask about spice level and whether a side contains dairy if you are sensitive.</li></ul><p>If unsure, ask staff to explain the options — most restaurants are visitor-friendly.</p>",
        },
        {
          id: "vegetarian",
          title: "Vegetarian options",
          body:
            "<p>Many base dishes are plant-based, making them vegetarian-friendly. However, some curries use ghee or dairy; confirm with the restaurant if you avoid them. Some premises offer a fully vegetarian menu on certain days.</p>",
        },
        {
          id: "tips",
          title: "Tips for trying it in Brickfields",
          body:
            "<p>Compare a few restaurants at a relaxed pace and pick the one that suits your mood. The more comfortable window is late afternoon into the evening. Prices, stock and serving style differ by premise, so ask before ordering.</p>",
        },
      ],
      faq: [
        {
          q: "What is banana leaf rice?",
          a: "It is a South Indian meal: rice with assorted sides served on a banana leaf, usually eaten by hand. It is common at restaurants around Brickfields.",
        },
        {
          q: "How much does a banana leaf rice cost?",
          a: "Prices vary by restaurant and whether you add sides. An independent guide like this does not set prices; check at the premise or ask staff.",
        },
        {
          q: "Is it halal or vegetarian?",
          a: "Many restaurants in Little India offer halal and vegetarian choices, but status differs by premise. Confirm with the restaurant before ordering if it matters to you.",
        },
        {
          q: "Do I have to eat with my hand?",
          a: "Yes, it is the usual custom. If you are not comfortable, a spoon is often provided. Eating with the right hand follows local custom.",
        },
        {
          q: "When is the best time to enjoy it?",
          a: "Restaurants often open late morning to night; late afternoon into the evening is usually more comfortable for walking and eating.",
        },
        {
          q: "Do I need a reservation?",
          a: "Usually not for a casual meal, except for large groups. Most restaurants accept walk-in customers.",
        },
      ],
    },
  },
  {
    slug: "best-time-to-visit",
    group: "visit",
    related: ["opening-hours", "kl-sentral-walk", "parking"],
    ms: {
      title: "Masa Terbaik Melawat Little India KL | Elak Kesesakan",
      description:
        "Masa terbaik melawat Little India Brickfields: bandingkan waktu sepanjang hari, hari bekerja berbanding hujung minggu, dan musim perayaan Deepavali.",
      h1: "Masa Terbaik Melawat Little India KL",
      intro:
        "Little India Brickfields boleh dinikmati pada bila-bila masa siang, tetapi masa lawatan mempengaruhi keselesaan, cahaya untuk foto, dan kepadatan orang. Halaman ini membantu anda memilih saat yang tepat.",
      sections: [
        {
          id: "sepanjang-hari",
          title: "Masa sepanjang hari",
          body:
            "<ul><li><strong>Pagi:</strong> lebih tenang dan kurang sesak, baik untuk melihat kedai tanpa tergesa-gesa.</li><li><strong>Lewat petang menjelang malam:</strong> paling selesa untuk berjalan, dengan lampu dan suasana kedai makan lebih hidup.</li><li><strong>Tengah hari:</strong> panas dan lembap; sesuaikan dengan premis berbumbung.</li></ul>",
        },
        {
          id: "hari",
          title: "Hari bekerja berbanding hujung minggu",
          body:
            "<p>Hari bekerja biasanya kurang sesak, sesuai jika anda mahu foto tanpa orang ramai atau melihat kain dan rempah dengan tenang. Hujung minggu lebih meriah tetapi lebih padat; rancang masa dan sabar.</p>",
        },
        {
          id: "musim",
          title: "Musim perayaan Deepavali",
          body:
            "<p>Menjelang Deepavali (biasanya Oktober atau November), Jalan Tun Sambanthan dihiasi lampu dan bazar bermusim — pengalaman visual yang unik, tetapi lebih sesak. Tarikh sebenar berubah setiap tahun, jadi semak kalendar perayaan.</p>",
        },
        {
          id: "cuaca",
          title: "Cuaca dan persediaan",
          body:
            "<p>Kuala Lumpur panas dan lembap sepanjang tahun, dengan hujan lewat petang yang kerap. Bawa air, pelindung matahari, dan payung. Waktu lebih nyaman biasanya lewat petang.</p>",
        },
      ],
      faq: [
        {
          q: "Bilakah masa terbaik melawat Little India Brickfields?",
          a: "Lewat petang menjelang malam biasanya paling selesa untuk berjalan dan menikmati suasana. Jika mahu lebih tenang, pilih hari bekerja dan datang lebih awal.",
        },
        {
          q: "Hari apa paling kurang sesak?",
          a: "Hari bekerja, terutamanya pagi, cenderung kurang sesak berbanding hujung minggu. Ia baik untuk foto dan penerokaan santai.",
        },
        {
          q: "Patutkah saya pergi pada Deepavali?",
          a: "Ia pengalaman unik dengan lampu dan bazar, tetapi lebih sesak. Semak tarikh Deepavali (berubah setiap tahun) dan rancang lebih awal jika mahu pergi ketika itu.",
        },
        {
          q: "Adakah hujan menjadi masalah?",
          a: "Hujan lewat petang kerap, tetapi banyak premis berbumbung dan NU Sentral berdekatan memberi perlindungan. Bawa payung dan rancang rehat.",
        },
        {
          q: "Berapa lama masa yang sesuai?",
          a: "Kebanyakan pelawat menghabiskan 1.5 hingga 3 jam untuk berjalan, makan dan melihat-lihat. Tambah masa jika mahu singgah kuil atau membeli kain.",
        },
        {
          q: "Bilakah cahaya paling baik untuk foto?",
          a: "Lewat petang menjelang senja memberi cahaya hangat dan warna gerbang lebih menonjol — baik untuk fotografi jalanan.",
        },
      ],
    },
    en: {
      title: "Best Time to Visit Little India KL | Avoid Crowds",
      description:
        "Best time to visit Little India Brickfields: compare times of day, weekdays vs weekends, and the Deepavali festival season.",
      h1: "Best Time to Visit Little India KL",
      intro:
        "Little India Brickfields can be enjoyed any time during daylight, but when you visit affects comfort, photo light and crowd density. This page helps you pick the right moment.",
      sections: [
        {
          id: "time-of-day",
          title: "Times of day",
          body:
            "<ul><li><strong>Morning:</strong> calmer and less crowded, good for browsing shops without rushing.</li><li><strong>Late afternoon into evening:</strong> most comfortable for walking, with livelier shop and food lighting.</li><li><strong>Midday:</strong> hot and humid; fit it around covered premises.</li></ul>",
        },
        {
          id: "weekday",
          title: "Weekday vs weekend",
          body:
            "<p>Weekdays are usually less crowded, ideal if you want photos without crowds or a calm look at fabric and spices. Weekends are livelier but denser; plan your time and patience.</p>",
        },
        {
          id: "festival",
          title: "Deepavali festival season",
          body:
            "<p>Ahead of Deepavali (usually October or November), Jalan Tun Sambanthan is lit with lamps and seasonal bazaars — a unique visual, but more crowded. The exact date changes each year, so check the festival calendar.</p>",
        },
        {
          id: "weather",
          title: "Weather and preparation",
          body:
            "<p>Kuala Lumpur is hot and humid year-round, with frequent late-afternoon rain. Carry water, sun protection and an umbrella. The more comfortable window is usually late afternoon.</p>",
        },
      ],
      faq: [
        {
          q: "When is the best time to visit Little India Brickfields?",
          a: "Late afternoon into the evening is usually the most comfortable for walking and enjoying the atmosphere. For a calmer visit, choose a weekday and arrive earlier.",
        },
        {
          q: "Which day is least crowded?",
          a: "Weekdays, especially mornings, tend to be less crowded than weekends. They are good for photos and relaxed browsing.",
        },
        {
          q: "Should I go during Deepavali?",
          a: "It is a unique experience with lights and bazaars, but more crowded. Check the Deepavali date (it changes yearly) and plan ahead if you want to go then.",
        },
        {
          q: "Is rain a problem?",
          a: "Late-afternoon rain is common, but many premises are covered and nearby NU Sentral offers shelter. Carry an umbrella and plan breaks.",
        },
        {
          q: "How long should I allow?",
          a: "Most visitors spend 1.5 to 3 hours walking, eating and browsing. Add time if you want to visit a temple or shop for fabric.",
        },
        {
          q: "When is the best light for photos?",
          a: "Late afternoon towards dusk gives warm light and makes the arch colours pop — good for street photography.",
        },
      ],
    },
  },
  {
    slug: "sari-shops-guide",
    group: "shopping",
    related: ["spice-shops-guide", "best-time-to-visit", "kl-sentral-walk"],
    ms: {
      title: "Panduan Membeli Sari & Kain di Brickfields | Jenis & Tema",
      description:
        "Panduan membeli sari, kain dan tekstil India di Brickfields: jenis kain, cara memilih, tempah sukatan, dan etika tawar-menawar.",
      h1: "Membeli Sari & Kain India di Brickfields",
      intro:
        "Brickfields, khususnya sepanjang Jalan Tun Sambanthan, padat dengan kedai tekstil dan kain India. Sari, selendang, dan kain mentah dijual bersama perincian jahitan. Panduan ini membantu anda memahami pilihan tanpa tekanan, tidak kira untuk dipakai sendiri atau dibawa pulang sebagai cenderahati.",
      sections: [
        {
          id: "jenis-kain",
          title: "Jenis kain & sari",
          body:
            "<p>Sari tradisional panjangnya kira-kira 5.5 hingga 6 meter dan biasanya dijual bersama bahagian atas (blaus). Antara bahan biasa: kapas untuk kegunaan harian dan iklim tropika, sutera untuk majlis, serta campuran sintetik yang lebih berpatutan. Sesetengah kedai turut menawarkan sari siap pakai atau kain tidak siap yang boleh disukat mengikut saiz.</p><p>Jika anda tidak pasti, tanya pekerja untuk tunjukkan perbezaan rasa dan jatuh kain — ini cara terbaik mengenali kualiti.</p>",
        },
        {
          id: "memilih",
          title: "Cara memilih & menyukat",
          body:
            "<ul><li>Tentukan kegunaan: harian, majlis, atau cenderahati.</li><li>Periksa jahitan tepi dan corak; kain berkualiti biasanya lebih sekata.</li><li>Untuk sari, bahagian blaus selalunya ditempah berasingan mengikut sukatan badan.</li></ul><p>Ramai kedai mempunyai tukang jahit atau boleh merujuk anda ke tukang berdekatan; tempoh siap berbeza, jadi rancang lebih awal jika perlu.</p>",
        },
        {
          id: "tawar",
          title: "Etika tawar-menawar",
          body:
            "<p>Tawar-menawar adalah budaya biasa di kedai kain bebas, bukan kemestian di pusat beli-belah. Bandingkan beberapa kedai sebelum memutuskan, dan bertanya mengenai harga borong jika membeli banyak. Sentiasa bertanya sama ada harga sudah termasuk sukatan atau blaus.</p>",
        },
        {
          id: "jaga",
          title: "Bawa balik & penjagaan",
          body:
            "<p>Kain semula jadi seperti sutera dan kapas biasanya lebih mudah dijaga tetapi perlu dibasuh lembut. Semak peraturan kastam negara anda jika membawa balik sejumlah besar tekstil. Simpan resit sebagai bukti pembelian.</p>",
        },
      ],
      faq: [
        {
          q: "Di manakah saya boleh beli sari di Brickfields?",
          a: "Kedai tekstil tertumpu di sekitar Jalan Tun Sambanthan. Bandingkan beberapa kedai untuk harga dan pilihan yang sesuai sebelum membeli.",
        },
        {
          q: "Berapakah harga sari?",
          a: "Harga berbeza mengikut bahan — kapas lebih berpatutan, sutera lebih tinggi. Panduan bebas seperti ini tidak menetapkan harga; semak di premis atau tanya pekerja.",
        },
        {
          q: "Adakah saya perlu tempah sukatan blaus?",
          a: "Ya, bahagian blaus sari selalunya ditempah berasingan mengikut sukatan badan. Tanya di kedai mengenai tempoh siap.",
        },
        {
          q: "Bolehkah saya tawar harga?",
          a: "Di kedai kain bebas, tawar-menawar adalah biasa. Di pusat beli-belah, harga mungkin tetap. Bandingkan dahulu sebelum memutuskan.",
        },
        {
          q: "Bagaimana pilih kain untuk iklim panas?",
          a: "Kapas adalah pilihan paling selesa untuk cuaca tropika; elak kain sintetik tebal yang kurang bernafas.",
        },
        {
          q: "Bolehkah bawa balik ke luar negara?",
          a: "Semak peraturan kastam negara anda, terutamanya untuk kuantiti besar tekstil. Simpan resit sebagai bukti pembelian.",
        },
      ],
    },
    en: {
      title: "Buying Sari & Indian Fabric in Brickfields | Types & Tips",
      description:
        "A guide to buying sari, fabric and Indian textiles in Brickfields: fabric types, how to choose, tailoring, and bargaining etiquette.",
      h1: "Buying Sari & Indian Fabric in Brickfields",
      intro:
        "Brickfields, especially along Jalan Tun Sambanthan, is packed with Indian textile and fabric shops. Sari, shawls and raw cloth are sold alongside tailoring services. This guide helps you understand the options without pressure, whether for your own wear or as a souvenir.",
      sections: [
        {
          id: "fabric-types",
          title: "Fabric types & sari",
          body:
            "<p>A traditional sari is about 5.5 to 6 metres long and usually sold with a matching blouse piece. Common materials: cotton for daily wear and the tropical climate, silk for occasions, and more affordable synthetic blends. Some shops also offer ready-to-wear sari or unstitched cloth you can have tailored to size.</p><p>If unsure, ask staff to show you the difference in feel and drape — that is the best way to judge quality.</p>",
        },
        {
          id: "choosing",
          title: "How to choose & tailor",
          body:
            "<ul><li>Decide the use: daily, occasion, or souvenir.</li><li>Check the selvedge and pattern; quality cloth is usually more even.</li><li>For a sari, the blouse piece is often tailored separately to your measurements.</li></ul><p>Many shops have a tailor or can refer you nearby; completion time varies, so plan ahead if needed.</p>",
        },
        {
          id: "bargaining",
          title: "Bargaining etiquette",
          body:
            "<p>Bargaining is normal in independent fabric shops, but not expected in shopping malls. Compare a few shops before deciding, and ask about bulk pricing if buying more. Always ask whether the price already includes tailoring or the blouse piece.</p>",
        },
        {
          id: "care",
          title: "Taking it home & care",
          body:
            "<p>Natural fabrics like silk and cotton are usually easier to care for but need gentle washing. Check your country's customs rules if bringing back a large quantity of textiles, and keep the receipt as proof of purchase.</p>",
        },
      ],
      faq: [
        {
          q: "Where can I buy a sari in Brickfields?",
          a: "Textile shops cluster around Jalan Tun Sambanthan. Compare a few shops for price and selection before buying.",
        },
        {
          q: "How much does a sari cost?",
          a: "Prices vary by material — cotton is more affordable, silk higher. An independent guide like this does not set prices; check at the shop or ask staff.",
        },
        {
          q: "Do I need to tailor the blouse?",
          a: "Usually yes — the sari blouse piece is often tailored separately to your measurements. Ask the shop about turnaround time.",
        },
        {
          q: "Can I bargain?",
          a: "In independent fabric shops, bargaining is normal. In malls, prices may be fixed. Compare first before deciding.",
        },
        {
          q: "How do I choose fabric for hot weather?",
          a: "Cotton is the most comfortable for the tropical climate; avoid thick synthetics that do not breathe.",
        },
        {
          q: "Can I take fabric abroad?",
          a: "Check your country's customs rules, especially for larger quantities of textiles, and keep the receipt as proof of purchase.",
        },
      ],
    },
  },
  {
    slug: "spice-shops-guide",
    group: "shopping",
    related: ["sari-shops-guide", "vegetarian-food", "banana-leaf-rice"],
    ms: {
      title: "Panduan Kedai Rempah & Barangan India di Brickfields | Beli & Bawa",
      description:
        "Panduan membeli rempah, barangan runcit dan bahan masakan India di Brickfields: rempah biasa, pilih kesegaran, dan ingatan kastam.",
      h1: "Kedai Rempah & Barangan India di Brickfields",
      intro:
        "Selain tekstil, Brickfields terkenal dengan kedai rempah dan barangan runcit India. Dari serbuk kari ke daun kari segar, kawasan ini menjadi tempat menyambung bekalan masakan selatan India. Panduan ini ringkasan umum tanpa menyebut premis tertentu.",
      sections: [
        {
          id: "rempah-biasa",
          title: "Rempah selatan India biasa",
          body:
            "<p>Antara rempah yang kerap dicari: biji sawi, jintan manis, jintan putih, halba, buah pelaga, kayu manis, cili kering, kunyit, dan daun kari segar. Banyak kedai menjual campuran serbuk kari sedia campur mengikut rantau. Tanya pekerja untuk campuran yang sesuai dengan jenis masakan anda.</p>",
        },
        {
          id: "kesegaran",
          title: "Cara memilih kesegaran",
          body:
            "<ul><li>Beli biji utuh dan kisar sendiri untuk aroma lebih kuat.</li><li>Periksa warna dan bau; serbuk pudar atau berhabuk menandakan lama.</li><li>Daun kari segar hendaklah berwarna hijau pekat, tidak layu.</li></ul>",
        },
        {
          id: "runcit",
          title: "Barangan runcit lain",
          body:
            "<p>Selain rempah, kedai sering menjual tepung gram, beras, papadum, acar, dan manisan India. Ini berguna jika anda mahu mencuba memasak di rumah selepas lawatan.</p>",
        },
        {
          id: "kastam",
          title: "Ingatan bawa balik",
          body:
            "<p>Sembunyikan rempah dalam bekas bertutup rapat. Semak peraturan kastam negara anda — sesetengah memerlukan pengisytiharan untuk produk tumbuhan atau biji. Simpan resit.</p>",
        },
      ],
      faq: [
        {
          q: "Di manakah kedai rempah di Brickfields?",
          a: "Terdapat sekitar Jalan Tun Sambanthan; bandingkan beberapa kedai untuk kesegaran dan harga.",
        },
        {
          q: "Bolehkah beli serbuk kari sedia campur?",
          a: "Ya, banyak kedai menjual campuran mengikut rantau selatan India. Tanya pekerja untuk padanan masakan anda.",
        },
        {
          q: "Bagaimana tahu rempah segar?",
          a: "Periksa warna, bau, dan pilih biji utuh apabila boleh. Serbuk yang pudar atau berhabuk biasanya lama.",
        },
        {
          q: "Boleh bawa rempah ke luar negara?",
          a: "Semak peraturan kastam negara anda — sesetengah memerlukan pengisytiharan untuk biji atau produk tumbuhan. Tutup rapat dan simpan resit.",
        },
        {
          q: "Apa itu daun kari?",
          a: "Daun beraroma digunakan dalam tumisan selatan India; beli yang segar berwarna hijau pekat.",
        },
        {
          q: "Adakah harga berbeza?",
          a: "Ya mengikut jenis dan kepingan. Panduan bebas seperti ini tidak menetapkan harga; semak di premis.",
        },
      ],
    },
    en: {
      title: "Spice & Indian Grocery Shops in Brickfields | Buy & Carry",
      description:
        "A guide to buying spices, groceries and Indian cooking ingredients in Brickfields: common spices, freshness, and customs notes.",
      h1: "Spice & Indian Grocery Shops in Brickfields",
      intro:
        "Beyond textiles, Brickfields is known for spice and Indian grocery shops. From curry powder to fresh curry leaves, this is where many stock up on South Indian cooking supplies. This is a general overview without naming specific premises.",
      sections: [
        {
          id: "common-spices",
          title: "Common South Indian spices",
          body:
            "<p>Frequently sought spices include mustard seeds, fennel, cumin, fenugreek, cardamom, cinnamon, dried chilli, turmeric and fresh curry leaves. Many shops sell ready-mixed curry powders by region. Ask staff for a blend that matches your cooking style.</p>",
        },
        {
          id: "freshness",
          title: "How to judge freshness",
          body:
            "<ul><li>Buy whole seeds and grind yourself for stronger aroma.</li><li>Check colour and smell; faded, dusty powder means old stock.</li><li>Fresh curry leaves should be deep green, not wilted.</li></ul>",
        },
        {
          id: "grocery",
          title: "Other grocery items",
          body:
            "<p>Besides spices, shops often sell gram flour, rice, papadum, pickles and Indian sweets. Handy if you want to try cooking at home after your visit.</p>",
        },
        {
          id: "customs",
          title: "Carry-home notes",
          body:
            "<p>Keep spices in tightly sealed containers. Check your country's customs rules — some require declaration for plant products or seeds. Keep the receipt.</p>",
        },
      ],
      faq: [
        {
          q: "Where are the spice shops in Brickfields?",
          a: "They are around Jalan Tun Sambanthan; compare a few shops for freshness and price.",
        },
        {
          q: "Can I buy ready-mixed curry powder?",
          a: "Yes, many shops sell regional South Indian blends. Ask staff for the one that fits your cooking.",
        },
        {
          q: "How do I know spices are fresh?",
          a: "Check colour, smell, and prefer whole seeds when possible. Faded or dusty powder is usually old.",
        },
        {
          q: "Can I take spices abroad?",
          a: "Check your country's customs rules — some require declaration for seeds or plant products. Seal tightly and keep the receipt.",
        },
        {
          q: "What are curry leaves?",
          a: "Aromatic leaves used in South Indian tempering; buy fresh, deep-green ones.",
        },
        {
          q: "Do prices differ?",
          a: "Yes by type and pack size. An independent guide like this does not set prices; check at the shop.",
        },
      ],
    },
  },
  {
    slug: "little-india-with-kids",
    group: "visit",
    related: ["accessibility-luggage", "rainy-day-plan", "best-time-to-visit"],
    ms: {
      title: "Melawat Little India KL dengan Kanak-kanak | Panduan Ibu Bapa",
      description:
        "Panduan melawat Little India Brickfields dengan kanak-kanak: kebolehlaluan troli, makan, tandas, keselamatan, dan tempat berdekatan.",
      h1: "Little India Brickfields dengan Kanak-kanak",
      intro:
        "Little India Brickfields boleh dinikmati sekeluarga, tetapi jalanan dan kaki lima tidak selalu mesra troli. Halaman ini membantu ibu bapa merancang lawatan yang lebih selesa bersama anak kecil.",
      sections: [
        {
          id: "troli",
          title: "Troli & kaki lima",
          body:
            "<p>Kaki lima di sekitar Jalan Tun Sambanthan tidak seragam — sesetengah bahagian tidak rata, ada anak tangga kecil, dan ada gerai yang menjorok ke laluan. Troli susu (stroller) boleh digunakan tetapi lebih mudah dengan troli ringan dan roda besar. Bawa kanak-kanak berjalan jika penat.</p>",
        },
        {
          id: "makan-tandas",
          title: "Makan & tandas",
          body:
            "<ul><li>Restoran selatan India biasanya mesra keluarga; tanya pekerja mengenai kerusi tinggi secara tidak rasmi.</li><li>Tandas awam terhad di jalanan; kompleks NU Sentral berhampiran menawarkan tandas bersih berhawa dingin.</li><li>Sediakan air minuman dan makanan ringan sendiri untuk kanak-kanak.</li></ul>",
        },
        {
          id: "keselamatan",
          title: "Keselamatan & orang ramai",
          body:
            "<p>Kawasan ini boleh sesak, terutamanya hujung minggu dan musim perayaan. Pegang erat tangan kanak-kanak, elak lorong sunyi, dan gunakan lintasan bertanda ketika menyeberang jalan raya yang sibuk.</p>",
        },
        {
          id: "berdekatan",
          title: "Tempat berdekatan mesra keluarga",
          body:
            "<p>NU Sentral dan KL Sentral berhampiran menawarkan ruang berhawa dingin, tandas, dan pilihan makanan jika cuaca panas atau hujan. Muzium Negara juga dalam jarak berjalan jika anak lebih besar.</p>",
        },
      ],
      faq: [
        {
          q: "Adakah Little India sesuai untuk bayi atau troli?",
          a: "Ya, tetapi kaki lima tidak seragam — ada bahagian tidak rata dan anak tangga. Guna troli ringan dengan roda besar untuk lebih selesa.",
        },
        {
          q: "Di manakah tandas awam?",
          a: "Tandas awam terhad di jalanan; kompleks NU Sentral berhampiran menawarkan tandas bersih berhawa dingin.",
        },
        {
          q: "Bolehkah bawa makanan sendiri?",
          a: "Ya, amat praktikal untuk kanak-kanak. Restoran juga mesra keluarga jika mahu duduk makan.",
        },
        {
          q: "Bilakah kurang sesak?",
          a: "Hari bekerja pada waktu pagi biasanya lebih tenang berbanding hujung minggu.",
        },
        {
          q: "Ada tempat berhawa dingin?",
          a: "Ya — NU Sentral dan KL Sentral berhampiran menawarkan ruang berteduh dan berhawa dingin.",
        },
        {
          q: "Selamat untuk kanak-kanak?",
          a: "Ya dengan pengawasan rapat; jaga mereka di jalan raya sibuk dan elak lorong sunyi yang kurang bercahaya.",
        },
      ],
    },
    en: {
      title: "Visiting Little India KL with Kids | Family Guide",
      description:
        "A guide to visiting Little India Brickfields with children: stroller access, food, toilets, safety, and nearby family spots.",
      h1: "Little India Brickfields with Kids",
      intro:
        "Little India Brickfields can be enjoyed as a family, but the streets and pavements are not always stroller-friendly. This page helps parents plan a more comfortable visit with young children.",
      sections: [
        {
          id: "strollers",
          title: "Strollers & pavements",
          body:
            "<p>Pavements around Jalan Tun Sambanthan are uneven — some sections are bumpy, with small steps and stalls jutting into the path. A stroller can be used, but a light one with larger wheels is easier. Let children walk when tired.</p>",
        },
        {
          id: "food-toilets",
          title: "Food & toilets",
          body:
            "<ul><li>South Indian restaurants are generally family-friendly; ask staff informally about high chairs.</li><li>Public toilets are limited on the street; the nearby NU Sentral complex offers clean, air-conditioned toilets.</li><li>Bring your own drinking water and light snacks for children.</li></ul>",
        },
        {
          id: "safety",
          title: "Safety & crowds",
          body:
            "<p>The area can get crowded, especially weekends and festivals. Hold children's hands firmly, avoid dim side alleys, and use marked crossings when crossing the busy road.</p>",
        },
        {
          id: "nearby",
          title: "Nearby family-friendly spots",
          body:
            "<p>NU Sentral and KL Sentral nearby offer air-conditioned space, toilets and food choices if the weather is hot or rainy. The National Museum is also within walking distance for older children.</p>",
        },
      ],
      faq: [
        {
          q: "Is Little India suitable with a baby or stroller?",
          a: "Yes, but pavements are uneven — some parts are bumpy with small steps. Use a light stroller with larger wheels for comfort.",
        },
        {
          q: "Where are public toilets?",
          a: "Public toilets are limited on the street; the nearby NU Sentral complex offers clean, air-conditioned toilets.",
        },
        {
          q: "Can I bring my own food?",
          a: "Yes, very practical for children. Restaurants are also family-friendly if you want to sit down to eat.",
        },
        {
          q: "When is it less crowded?",
          a: "Weekday mornings are usually calmer than weekends.",
        },
        {
          q: "Is there air-conditioned space?",
          a: "Yes — nearby NU Sentral and KL Sentral provide shaded, air-conditioned space.",
        },
        {
          q: "Is it safe for children?",
          a: "Yes with close supervision; keep them safe on busy roads and avoid dim, quiet alleys.",
        },
      ],
    },
  },
  {
    slug: "accessibility-luggage",
    group: "visit",
    related: ["kl-sentral-walk", "little-india-with-kids", "parking"],
    ms: {
      title: "Kebolehcapaian & Simpanan Beg di Little India KL | Panduan",
      description:
        "Kebolehcapaian dan simpanan beg berhampiran Little India Brickfields: kaki lima, simpanan di KL Sentral, dan tips lawatan selesa.",
      h1: "Kebolehcapaian & Simpanan Beg di Brickfields",
      intro:
        "Sama ada anda menggunakan kerusi roda, membawa beg besar, atau memerlukan laluan lebih mudah, Brickfields mempunyai kekangan dan kemudahan yang perlu diketahui. Halaman ini ringkasan praktikal.",
      sections: [
        {
          id: "kaki-lima",
          title: "Keadaan kaki lima & jalan",
          body:
            "<p>Kaki lima di Brickfields tidak seragam: ada bahagian tidak rata, anak tangga kecil, tiang, dan gerai yang menjorok. Pengguna kerusi roda mungkin perlu merancang laluan dan bersedia untuk bahagian yang sukar. Jalan raya utama mempunyai lintasan bertanda.</p>",
        },
        {
          id: "simpanan",
          title: "Simpanan beg di KL Sentral",
          body:
            "<p>KL Sentral, hab pengangkutan berdekatan, selalunya mempunyai pilihan simpanan beg atau lokar di kawasan stesen. Waktu, kadar, dan ketersediaan berbeza mengikut pengendali — sahkan di kaunter stesen atau papan tanda apabila tiba.</p>",
        },
        {
          id: "kuil",
          title: "Kebolehcapaian kuil",
          body:
            "<p>Ruang ibadat mempunyai anak tangga dan ambang. Sesetengah mempunyai bantuan atau laluan alternatif; hubungi premis lebih awal jika akses tanpa halangan penting bagi anda.</p>",
        },
        {
          id: "tips",
          title: "Tips lawatan selesa",
          body:
            "<ul><li>Datang lebih awal untuk mengelak orang ramai.</li><li>Gunakan laluan bertanda dan elak gerai yang menjorok.</li><li>Untuk beg besar, urus simpanan di KL Sentral sebelum berjalan ke kawasan.</li></ul>",
        },
      ],
      faq: [
        {
          q: "Adakah Brickfields mesra kerusi roda?",
          a: "Sebahagian — kaki lima tidak seragam dan ada anak tangga kecil serta gerai yang menjorok. Rancang laluan dan bersedia untuk bahagian sukar.",
        },
        {
          q: "Di manakah simpan beg besar?",
          a: "KL Sentral berhampiran selalunya mempunyai pilihan simpanan beg atau lokar; sahkan waktu dan kadar di kaunter stesen.",
        },
        {
          q: "Bolehkah bawa beg ke kuil?",
          a: "Ya, tetapi ruang ibadat ada anak tangga dan ambang. Hubungi premis lebih awal jika akses tanpa halangan penting.",
        },
        {
          q: "Adakah tandas OKU?",
          a: "Tandas awam terhad di jalanan; NU Sentral dan KL Sentral menawarkan kemudahan lebih lengkap.",
        },
        {
          q: "Bilakah paling mudah bergerak?",
          a: "Pagi hari bekerja biasanya kurang sesak dan lebih selesa untuk bergerak.",
        },
        {
          q: "Ada laluan bertanda?",
          a: "Ya, di jalan raya utama terdapat lintasan bertanda untuk menyeberang dengan selamat.",
        },
      ],
    },
    en: {
      title: "Accessibility & Luggage Storage near Little India KL | Guide",
      description:
        "Accessibility and luggage storage near Little India Brickfields: pavements, storage at KL Sentral, and comfortable-visit tips.",
      h1: "Accessibility & Luggage Storage at Brickfields",
      intro:
        "Whether you use a wheelchair, carry large bags, or need an easier route, Brickfields has constraints and facilities worth knowing. This is a practical overview.",
      sections: [
        {
          id: "pavements",
          title: "Pavements & roads",
          body:
            "<p>Pavements in Brickfields are uneven: some sections are bumpy, with small steps, posts and stalls jutting out. Wheelchair users may need to plan routes and be ready for difficult stretches. The main road has marked crossings.</p>",
        },
        {
          id: "storage",
          title: "Luggage storage at KL Sentral",
          body:
            "<p>KL Sentral, the nearby transport hub, usually offers baggage storage or lockers in the station area. Hours, rates and availability vary by operator — confirm at the station counter or signage on arrival.</p>",
        },
        {
          id: "temples",
          title: "Temple accessibility",
          body:
            "<p>Places of worship have steps and thresholds. Some offer assistance or an alternative route; contact the premise in advance if step-free access matters to you.</p>",
        },
        {
          id: "tips",
          title: "Comfortable-visit tips",
          body:
            "<ul><li>Arrive earlier to avoid crowds.</li><li>Use marked paths and avoid stalls that jut into the walkway.</li><li>For large bags, sort out storage at KL Sentral before walking into the area.</li></ul>",
        },
      ],
      faq: [
        {
          q: "Is Brickfields wheelchair friendly?",
          a: "Partly — pavements are uneven with small steps and jutting stalls. Plan your route and expect some difficult stretches.",
        },
        {
          q: "Where can I store a large bag?",
          a: "Nearby KL Sentral usually offers baggage storage or lockers; confirm hours and rates at the station counter.",
        },
        {
          q: "Can I bring a bag into temples?",
          a: "Yes, but places of worship have steps and thresholds. Contact the premise in advance if step-free access is important.",
        },
        {
          q: "Are accessible toilets available?",
          a: "Public toilets are limited on the street; NU Sentral and KL Sentral offer more complete facilities.",
        },
        {
          q: "When is it easiest to move around?",
          a: "Weekday mornings are usually less crowded and more comfortable to navigate.",
        },
        {
          q: "Are there marked routes?",
          a: "Yes, the main road has marked crossings for safe crossing.",
        },
      ],
    },
  },
  {
    slug: "rainy-day-plan",
    group: "visit",
    related: ["little-india-with-kids", "banana-leaf-rice", "kl-sentral-walk"],
    ms: {
      title: "Rancangan Hari Hujan di Little India KL | Dalam & Berteduh",
      description:
        "Rancangan hari hujan di Little India Brickfields: restoran dalam, NU Sentral, lintasan berteduh, dan ingatan monsun.",
      h1: "Rancangan Hari Hujan di Little India Brickfields",
      intro:
        "Kuala Lumpur mengalami hujan lewat petang yang kerap, dengan monsun yang lebih basah lebih kurang Oktober hingga Mac. Jika hujan, Brickfields masih boleh dinikmati dengan merancang ruang berteduh dan laluan dalam.",
      sections: [
        {
          id: "dalam",
          title: "Makan & beli di dalam",
          body:
            "<p>Restoran selatan India dan kedai kain di sepanjang Jalan Tun Sambanthan kebanyakannya berteduh. Anda boleh menikmati makanan dan melihat kain tanpa basah. Pilih premis dengan bumbung penuh.</p>",
        },
        {
          id: "nu-sentral",
          title: "NU Sentral berhampiran",
          body:
            "<p>Kompleks NU Sentral bersambung dengan KL Sentral dan menawarkan ruang berhawa dingin, kedai, tandas, dan pintu masuk berteduh dari stesen. Ini tempat baik bermula atau berlindung jika hujan lebat.</p>",
        },
        {
          id: "lintasan",
          title: "Lintasan & bumbung",
          body:
            "<ul><li>Gunakan laluan berteduh dan pintu masuk kompleks apabila boleh.</li><li>Bawa payung lipat atau baju hujan; hujan lewat petang kerap.</li><li>Elak lorong kecil yang bertakung air.</li></ul>",
        },
        {
          id: "monsun",
          title: "Ingatan musim",
          body:
            "<p>Bulan basah (lebih kurang Oktober–Mac) membawa hujan lebih kerap, tetapi ia jarang sepanjang hari — selalunya ribut lewat petang. Rancang lawatan lebih awal atau lewat petang selepas hujan reda.</p>",
        },
      ],
      faq: [
        {
          q: "Bolehkah lawat Little India masa hujan?",
          a: "Ya; kebanyakan restoran dan kedai berteduh. Pilih premis dengan bumbung penuh dan rancang laluan dalam.",
        },
        {
          q: "Di manakah berteduh?",
          a: "Restoran, kedai kain, dan kompleks NU Sentral berhampiran menawarkan ruang berteduh berhawa dingin.",
        },
        {
          q: "Bilakah musim hujan?",
          a: "Lebih kurang Oktober hingga Mac, dengan hujan lewat petang yang kerap.",
        },
        {
          q: "Adakah hujan sepanjang hari?",
          a: "Jarang; biasanya ribut lewat petang. Rancang lawatan lebih awal atau selepas hujan reda.",
        },
        {
          q: "Perlu bawa payung?",
          a: "Disyorkan — hujan lewat petang di Kuala Lumpur kerap, jadi payung lipat atau baju hujan berguna.",
        },
        {
          q: "NU Sentral tersambung KL Sentral?",
          a: "Ya, NU Sentral bersambung dengan KL Sentral dan menawarkan laluan berteduh dari stesen.",
        },
      ],
    },
    en: {
      title: "Rainy Day Plan for Little India KL | Indoor & Sheltered",
      description:
        "A rainy day plan for Little India Brickfields: indoor eateries, NU Sentral, sheltered routes, and monsoon notes.",
      h1: "Rainy Day Plan for Little India Brickfields",
      intro:
        "Kuala Lumpur gets frequent late-afternoon rain, with a wetter monsoon roughly October to March. If it rains, Brickfields can still be enjoyed by planning sheltered spaces and indoor routes.",
      sections: [
        {
          id: "indoor",
          title: "Eating & shopping indoors",
          body:
            "<p>South Indian restaurants and fabric shops along Jalan Tun Sambanthan are mostly sheltered. You can enjoy food and browse cloth without getting wet. Pick premises with a full roof.</p>",
        },
        {
          id: "nu-sentral",
          title: "Nearby NU Sentral",
          body:
            "<p>The NU Sentral complex connects to KL Sentral and offers air-conditioned space, shops, toilets and a sheltered entrance from the station. It is a good place to start or take cover if the rain is heavy.</p>",
        },
        {
          id: "routes",
          title: "Routes & shelter",
          body:
            "<ul><li>Use covered walkways and mall entrances where possible.</li><li>Carry a folding umbrella or rain jacket; late-afternoon rain is common.</li><li>Avoid small alleys that collect water.</li></ul>",
        },
        {
          id: "monsoon",
          title: "Seasonal notes",
          body:
            "<p>The wetter months (roughly October–March) bring more frequent rain, but it rarely lasts all day — usually a late-afternoon downpour. Plan your visit earlier or later in the evening after the rain eases.</p>",
        },
      ],
      faq: [
        {
          q: "Can I visit Little India in the rain?",
          a: "Yes; most restaurants and shops are sheltered. Choose premises with a full roof and plan an indoor route.",
        },
        {
          q: "Where can I take shelter?",
          a: "Restaurants, fabric shops and the nearby NU Sentral complex offer sheltered, air-conditioned space.",
        },
        {
          q: "When is the rainy season?",
          a: "Roughly October to March, with frequent late-afternoon rain.",
        },
        {
          q: "Does it rain all day?",
          a: "Rarely; usually a late-afternoon downpour. Plan your visit earlier or after the rain eases.",
        },
        {
          q: "Should I bring an umbrella?",
          a: "Recommended — late-afternoon rain in Kuala Lumpur is common, so a folding umbrella or rain jacket helps.",
        },
        {
          q: "Is NU Sentral connected to KL Sentral?",
          a: "Yes, NU Sentral connects to KL Sentral and offers a sheltered walk from the station.",
        },
      ],
    },
  },
  {
    slug: "vegetarian-food",
    group: "food",
    related: ["banana-leaf-rice", "spice-shops-guide", "best-time-to-visit"],
    ms: {
      title: "Makanan Vegetarian & Vegan di Little India KL | Panduan",
      description:
        "Panduan makanan vegetarian dan vegan di Little India Brickfields: kenali penanda, jenis hidangan, dan hari berpuasa.",
      h1: "Makanan Vegetarian & Vegan di Little India Brickfields",
      intro:
        "Masakan selatan India amat mesra vegetarian — banyak hidangan secara semula jadi bebas daging dan telur. Little India Brickfields padat dengan restoran yang menawarkannya. Halaman ini membantu anda mengenali pilihan tanpa tekanan.",
      sections: [
        {
          id: "penanda",
          title: "Kenali penanda vegetarian",
          body:
            "<p>Di Malaysia, label dan banyak menu menggunakan penanda bulatan: titik hijau biasanya menunjukkan vegetarian, ada yang merah untuk bukan vegetarian. Apabila ragu, tanya pekerja sama ada hidangan mengandungi telur, hasil tenusu, atau pes ikan.</p>",
        },
        {
          id: "jenis",
          title: "Jenis hidangan",
          body:
            "<ul><li>Nasi daun pisang dengan lauk sayur dan dal.</li><li>Dosa, idli, dan vadai — sarapan beras dan kacang yang lazimnya vegan.</li><li>Kari sayur, kuzhi paniyaram, dan sup berasingan.</li></ul><p>Sebahagian besar restoran menawarkan menu vegetarian sepenuhnya pada hari tertentu.</p>",
        },
        {
          id: "tenusu",
          title: "Tenusu & vegan",
          body:
            "<p>Sesetengah hidangan menggunakan ghee (mentega jernih) atau dadih. Jika anda vegan, nyatakan dengan jelas dan tanya sama ada minyak sayuran digunakan dan elak hidangan yang dimasak dengan ghee. Ramai restoran boleh menyesuaikan.</p>",
        },
        {
          id: "puasa",
          title: "Hari berpuasa & adat",
          body:
            "<p>Sesetengah penganut Hindu berpuasa pada hari tertentu; restoran mungkin menawarkan menu lebih ringan atau sepenuhnya tanpa bawang-bawangan pada hari tersebut. Ini berbeza mengikut premis dan hari, jadi tanya jika anda melawat pada masa istimewa.</p>",
        },
      ],
      faq: [
        {
          q: "Adakah Little India mesra vegetarian?",
          a: "Ya, masakan selatan India mempunyai banyak pilihan semula jadi bebas daging dan telur. Ramai restoran menawarkan lauk sayur.",
        },
        {
          q: "Bagaimana kenal hidangan vegetarian?",
          a: "Guna penanda titik hijau pada label atau menu, dan tanya pekerja jika ragu tentang telur atau tenusu.",
        },
        {
          q: "Adakah pilihan vegan?",
          a: "Ya, dosa dan idli lazimnya vegan; tanya tentang ghee dan minyak sayuran jika anda vegan tegas.",
        },
        {
          q: "Apa itu ghee?",
          a: "Ghee ialah mentega jernih — elak jika anda vegan atau sensitif tenusu. Tanya sama ada hidangan dimasak dengannya.",
        },
        {
          q: "Ada menu vegetarian penuh?",
          a: "Sesetengah restoran menawarkan menu vegetarian sepenuhnya pada hari tertentu; tanya di premis.",
        },
        {
          q: "Selamat untuk alahan?",
          a: "Tanya ramuan dengan jelas; dapur berkongsi mungkin memproses alahan seperti kacang atau gluten. Maklumkan kepada pekerja.",
        },
      ],
    },
    en: {
      title: "Vegetarian & Vegan Food in Little India KL | Guide",
      description:
        "A guide to vegetarian and vegan food in Little India Brickfields: spot the markers, dish types, and fasting days.",
      h1: "Vegetarian & Vegan Food in Little India Brickfields",
      intro:
        "South Indian cuisine is very vegetarian-friendly — many dishes are naturally free of meat and eggs. Little India Brickfields is full of restaurants that serve them. This page helps you recognise the options without pressure.",
      sections: [
        {
          id: "markers",
          title: "Spot the vegetarian markers",
          body:
            "<p>In Malaysia, packaging labels and many menus use a circular marker: a green dot usually means vegetarian, with some using red for non-vegetarian. When unsure, ask staff whether a dish contains egg, dairy, or fish paste.</p>",
        },
        {
          id: "dishes",
          title: "Types of dishes",
          body:
            "<ul><li>Banana leaf rice with vegetable sides and dal.</li><li>Dosa, idli and vadai — rice-and-lentil breakfasts that are usually vegan.</li><li>Vegetable curries, kuzhi paniyaram and separate soups.</li></ul><p>Many restaurants offer a fully vegetarian menu on certain days.</p>",
        },
        {
          id: "dairy",
          title: "Dairy & vegan",
          body:
            "<p>Some dishes use ghee (clarified butter) or yoghurt. If you are vegan, state it clearly and ask whether vegetable oil is used, avoiding dishes cooked in ghee. Many restaurants can adapt.</p>",
        },
        {
          id: "fasting",
          title: "Fasting days & custom",
          body:
            "<p>Some Hindus fast on certain days; restaurants may offer a lighter menu or one fully without onions on those days. This varies by premise and date, so ask if you visit at a special time.</p>",
        },
      ],
      faq: [
        {
          q: "Is Little India vegetarian-friendly?",
          a: "Yes, South Indian cuisine has many naturally meat- and egg-free options. Many restaurants serve vegetable sides.",
        },
        {
          q: "How do I recognise vegetarian dishes?",
          a: "Use the green-dot marker on labels or menus, and ask staff if unsure about egg or dairy.",
        },
        {
          q: "Are there vegan options?",
          a: "Yes, dosa and idli are usually vegan; ask about ghee and cooking oil if you are strict vegan.",
        },
        {
          q: "What is ghee?",
          a: "Ghee is clarified butter — avoid it if you are vegan or dairy-sensitive. Ask whether a dish is cooked in it.",
        },
        {
          q: "Is there a fully vegetarian menu?",
          a: "Some restaurants offer a fully vegetarian menu on certain days; ask at the premise.",
        },
        {
          q: "Is it safe for allergies?",
          a: "Ask clearly about ingredients; shared kitchens may handle allergens like nuts or gluten. Inform the staff.",
        },
      ],
    },
  },
  {
    slug: "sri-kandaswamy-kovil",
    group: "attraction",
    related: ["tun-sambanthan-area", "buddhist-maha-vihara", "little-india-festivals"],
    ms: {
      title: "Kuil Sri Kandaswamy Kovil Brickfields | Panduan Pelawat",
      description:
        "Panduan melawat Kuil Sri Kandaswamy Kovil di Brickfields: latar, adat, dan perkara perlu diketahui sebelum berkunjung.",
      h1: "Kuil Sri Kandaswamy Kovil, Brickfields",
      intro:
        "Sri Kandaswamy Kovil adalah antara kuil Hindu yang paling dikenali di Brickfields, dengan menara pintu (gopuram) yang tersergam di Jalan Tun Sambanthan. Panduan ini ringkasan umum untuk pelawat; waktu dan adat boleh berubah, jadi semak dengan pihak kuil sebelum hadir.",
      sections: [
        {
          id: "latar",
          title: "Latar & seni bina",
          body:
            "<p>Kuil ini dibina oleh masyarakat Tamil Sri Lanka dan menjadi pusat ibadat serta perayaan tempatan. Ciri utama ialah gopuram berukir halus dan ruang dalam yang tenang. Ia bukan tapak pelancongan komersial, sebaliknya tempat ibadat yang hidup.</p>",
        },
        {
          id: "adat",
          title: "Adat & etika melawat",
          body:
            "<ul><li>Berpakaian sopan; tutup bahu dan lutut.</li><li>Tanggalkan kasut sebelum masuk ruang ibadat.</li><li>Minta kebenaran sebelum mengambil gambar, terutama semasa upacara.</li><li>Elak lawatan semasa upacara sensitif jika anda tidak pasti.</li></ul>",
        },
        {
          id: "masa",
          title: "Waktu & kemasukan",
          body:
            "<p>Kuil biasanya dibuka untuk orang ramai pada waktu siang, namun waktu tepat dan upacara berbeza mengikut hari dan perayaan. Tiada kadar standard yang boleh disahkan di sini — semak dengan pihak kuil atau penyenaraian rasmi sebelum berkunjung.</p>",
        },
        {
          id: "lokasi",
          title: "Lokasi & akses",
          body:
            "<p>Kuil terletak berhampiran Jalan Tun Sambanthan, dalam jarak berjalan dari stesen monorel Tun Sambanthan dan KL Sentral. Ia mudah digabungkan dengan lawatan Little India yang lebih luas.</p>",
        },
      ],
      faq: [
        {
          q: "Di manakah Kuil Sri Kandaswamy Kovil?",
          a: "Berhampiran Jalan Tun Sambanthan, Brickfields; dalam jarak berjalan dari stesen monorel Tun Sambanthan dan KL Sentral.",
        },
        {
          q: "Apa yang perlu dipakai?",
          a: "Berpakaian sopan — tutup bahu dan lutut — dan tanggalkan kasut di dalam ruang ibadat.",
        },
        {
          q: "Bolehkah saya mengambil gambar?",
          a: "Minta kebenaran dahulu, dan elak merakam semasa upacara berlangsung.",
        },
        {
          q: "Apakah waktu pembukaan?",
          a: "Biasanya siang hari, tetapi berbeza mengikut hari dan perayaan. Sahkan dengan pihak kuil kerana tiada jadual tetap yang disahkan di sini.",
        },
        {
          q: "Adakah yuran masuk?",
          a: "Ramai kuil tiada yuran masuk tetapi mengalu-alukan sumbangan; sahkan secara tempatan.",
        },
        {
          q: "Boleh digabungkan dengan Little India?",
          a: "Ya, kuil ini berada dalam kawasan Little India dan sesuai dijadikan sebahagian lawatan berjalan.",
        },
      ],
    },
    en: {
      title: "Sri Kandaswamy Kovil Brickfields | Visitor Guide",
      description:
        "A guide to visiting Sri Kandaswamy Kovil in Brickfields: background, etiquette, and what to know before you go.",
      h1: "Sri Kandaswamy Kovil, Brickfields",
      intro:
        "Sri Kandaswamy Kovil is one of the most recognisable Hindu temples in Brickfields, with a finely carved gopuram tower on Jalan Tun Sambanthan. This is a general overview for visitors; hours and customs can change, so check with the temple before attending.",
      sections: [
        {
          id: "background",
          title: "Background & architecture",
          body:
            "<p>The temple was built by the Sri Lankan Tamil community and serves as a living place of worship and festival. Its highlights are the ornate gopuram and a calm inner sanctum. It is not a commercial tourist site but an active place of worship.</p>",
        },
        {
          id: "etiquette",
          title: "Visiting etiquette",
          body:
            "<ul><li>Dress modestly; cover shoulders and knees.</li><li>Remove footwear before entering the worship area.</li><li>Ask before taking photos, especially during ceremonies.</li><li>Avoid visiting during sensitive rituals if unsure.</li></ul>",
        },
        {
          id: "hours",
          title: "Hours & entry",
          body:
            "<p>Temples are generally open to the public during daytime, but exact hours and ceremonies vary by day and festival. No standard fee can be confirmed here — check with the temple or an official listing before your visit.</p>",
        },
        {
          id: "location",
          title: "Location & access",
          body:
            "<p>The temple sits near Jalan Tun Sambanthan, within walking distance of Tun Sambanthan monorail and KL Sentral. It pairs naturally with a wider Little India walk.</p>",
        },
      ],
      faq: [
        {
          q: "Where is Sri Kandaswamy Kovil?",
          a: "Near Jalan Tun Sambanthan, Brickfields; within walking distance of Tun Sambanthan monorail and KL Sentral.",
        },
        {
          q: "What should I wear?",
          a: "Dress modestly — cover shoulders and knees — and remove shoes inside the worship area.",
        },
        {
          q: "Can I take photos?",
          a: "Ask first, and avoid photographing during ceremonies.",
        },
        {
          q: "What are the opening hours?",
          a: "Generally daytime, but they vary by day and festival. Confirm with the temple, as no fixed schedule is verified here.",
        },
        {
          q: "Is there an entry fee?",
          a: "Many temples are free to enter but welcome donations; confirm locally.",
        },
        {
          q: "Can I combine it with Little India?",
          a: "Yes, the temple lies within the Little India area and fits naturally into a walking visit.",
        },
      ],
    },
  },
  {
    slug: "buddhist-maha-vihara",
    group: "attraction",
    related: ["sri-kandaswamy-kovil", "tun-sambanthan-area", "brickfields-heritage-walk"],
    ms: {
      title: "Buddha Maha Vihara Brickfields | Panduan Pelawat",
      description:
        "Panduan melawat Buddha Maha Vihara di Brickfields: latar, adat, dan perkara perlu diketahui.",
      h1: "Buddha Maha Vihara, Brickfields",
      intro:
        "Buddha Maha Vihara di Jalan Berhala adalah antara kuil Buddha Theravada yang terkenal di Kuala Lumpur, dikenali dengan patung dan perayaan seperti Wesak. Panduan ini ringkasan umum; semak waktu dan adat dengan pihak kuil.",
      sections: [
        {
          id: "latar",
          title: "Latar & komuniti",
          body:
            "<p>Vihara ini merupakan pusat masyarakat Buddhist Theravada dan sering menganjurkan acara komuniti serta perayaan Wesak yang dihadiri ramai. Kawasan ini tenang dan mesra pelawat yang ingin memerhati atau belajar.</p>",
        },
        {
          id: "adat",
          title: "Adat melawat",
          body:
            "<ul><li>Berpakaian sopan dan tanggalkan kasut di dewan utama.</li><li>Kekalkan suasana tenang.</li><li>Tanya tentang panduan foto sebelum merakam.</li></ul>",
        },
        {
          id: "masa",
          title: "Waktu & acara",
          body:
            "<p>Waktu lawatan dan acara berbeza; perayaan Wesak menarik orang ramai. Semak dengan pihak kuil untuk waktu tepat sebelum hadir.</p>",
        },
        {
          id: "lokasi",
          title: "Lokasi & akses",
          body:
            "<p>Terletak di Jalan Berhala, dalam jarak berjalan dari inti Little India Brickfields. Mudah digabungkan dengan lawatan kuil Hindu berdekatan.</p>",
        },
      ],
      faq: [
        {
          q: "Di manakah Buddha Maha Vihara?",
          a: "Di Jalan Berhala, dalam jarak berjalan dari inti Little India Brickfields.",
        },
        {
          q: "Apakah etika berpakaian?",
          a: "Sopan dan tanggalkan kasut di dewan utama; kekalkan suasana tenang.",
        },
        {
          q: "Bilakah perayaan Wesak?",
          a: "Tarikh Wesak berubah mengikut kalendar Buddha setiap tahun; semak dengan pihak kuil.",
        },
        {
          q: "Bolehkah mengambil gambar?",
          a: "Tanya panduan foto terlebih dahulu, terutama di dewan ibadat.",
        },
        {
          q: "Adakah yuran masuk?",
          a: "Kebiasaannya percuma; sahkan secara tempatan.",
        },
        {
          q: "Boleh digabungkan dengan Little India?",
          a: "Ya, ia berdekatan dan sesuai dijadikan sebahagian lawatan berjalan.",
        },
      ],
    },
    en: {
      title: "Buddha Maha Vihara Brickfields | Visitor Guide",
      description:
        "A guide to visiting Buddha Maha Vihara in Brickfields: background, etiquette, and what to know.",
      h1: "Buddha Maha Vihara, Brickfields",
      intro:
        "Buddha Maha Vihara on Jalan Berhala is among the well-known Theravada Buddhist temples in Kuala Lumpur, noted for its statues and festivals such as Wesak. This is a general overview; check hours and customs with the temple.",
      sections: [
        {
          id: "background",
          title: "Background & community",
          body:
            "<p>The vihara is a centre of the Theravada Buddhist community and often hosts community events and the Wesak festival that draws crowds. The grounds are calm and welcoming for visitors who want to observe or learn.</p>",
        },
        {
          id: "etiquette",
          title: "Visiting etiquette",
          body:
            "<ul><li>Dress modestly and remove shoes in the main hall.</li><li>Keep a quiet atmosphere.</li><li>Ask about photo guidance before recording.</li></ul>",
        },
        {
          id: "hours",
          title: "Hours & events",
          body:
            "<p>Visiting hours and events vary; the Wesak festival attracts large crowds. Check with the temple for exact times before going.</p>",
        },
        {
          id: "location",
          title: "Location & access",
          body:
            "<p>On Jalan Berhala, within walking distance of the core of Little India Brickfields. It pairs easily with a nearby Hindu temple walk.</p>",
        },
      ],
      faq: [
        {
          q: "Where is Buddha Maha Vihara?",
          a: "On Jalan Berhala, within walking distance of the core of Little India Brickfields.",
        },
        {
          q: "What is the dress etiquette?",
          a: "Modest dress and remove shoes in the main hall; keep a quiet atmosphere.",
        },
        {
          q: "When is Wesak?",
          a: "The Wesak date changes each year by the Buddhist calendar; check with the temple.",
        },
        {
          q: "Can I take photos?",
          a: "Ask about photo guidance first, especially in the worship hall.",
        },
        {
          q: "Is there an entry fee?",
          a: "Usually free; confirm locally.",
        },
        {
          q: "Can I combine it with Little India?",
          a: "Yes, it is nearby and fits into a walking visit.",
        },
      ],
    },
  },
  {
    slug: "kuala-lumpur-railway-station",
    group: "attraction",
    related: ["brickfields-heritage-walk", "tun-sambanthan-area", "muzium-negara"],
    ms: {
      title: "Stesen Keretapi Kuala Lumpur (Lama) | Mercu Tarik Brickfields",
      description:
        "Panduan Stesen Keretapi Kuala Lumpur lama berhampiran Brickfields: seni bina Moor, sejarah, dan akses.",
      h1: "Stesen Keretapi Kuala Lumpur (Lama)",
      intro:
        "Stesen keretapi lama Kuala Lumpur, dengan kubah dan menara gaya Moor yang ikonik, terletak berhampiran Brickfields dan KL Sentral. Ia mercu tarik seni bina yang mudah dilihat semasa ke Brickfields.",
      sections: [
        {
          id: "seni",
          title: "Seni bina Moor",
          body:
            "<p>Stesen ini direka dengan gabungan gaya Moor dan Indo-Saracen, dengan kubah, menara, dan arked. Ia salah satu bangunan warisan paling fotogenik di bandar.</p>",
        },
        {
          id: "sejarah",
          title: "Sejarah ringkas",
          body:
            "<p>Dibina pada awal abad ke-20, stesen ini pernah menjadi pintu masuk utama ke Kuala Lumpur. Perkhidmatan keretapi utama kini berpindah ke KL Sentral bersebelahan, namun bangunan warisan ini kekal.</p>",
        },
        {
          id: "melawat",
          title: "Bolehkah masuk?",
          body:
            "<p>Bahagian dalaman berfungsi sebagai pusat operasi; lawatan dalam mungkin terhad. Anda boleh menikmati seni bina dari luar dan kawasan sekitar pada bila-bila masa.</p>",
        },
        {
          id: "akses",
          title: "Lokasi & akses",
          body:
            "<p>Bersebelahan KL Sentral, dalam jarak berjalan singkat ke Little India Brickfields. Stesen monorel dan LRT berdekatan memudahkan perjalanan.</p>",
        },
      ],
      faq: [
        {
          q: "Di manakah stesen lama ini?",
          a: "Bersebelahan KL Sentral, dalam jarak berjalan singkat ke Little India Brickfields.",
        },
        {
          q: "Apakah gaya seni binanya?",
          a: "Gabungan gaya Moor dan Indo-Saracen dengan kubah, menara, dan arked.",
        },
        {
          q: "Boleh masuk ke dalam?",
          a: "Bahagian dalam beroperasi; lawatan dalam mungkin terhad. Nikmati seni bina dari luar pada bila-bila masa.",
        },
        {
          q: "Apakah sejarahnya?",
          a: "Dibina awal abad ke-20, pernah jadi pintu masuk utama KL; perkhidmatan utama kini di KL Sentral bersebelahan.",
        },
        {
          q: "Jauhkah dari Little India?",
          a: "Hanya berjalan singkat dari inti Little India Brickfields.",
        },
        {
          q: "Tempat foto baik?",
          a: "Ya, bangunan warisan ini sangat fotogenik, terutama dari luar.",
        },
      ],
    },
    en: {
      title: "Kuala Lumpur Railway Station (Old) | Brickfields Landmark",
      description:
        "A guide to the old Kuala Lumpur Railway Station near Brickfields: Moorish architecture, history, and access.",
      h1: "Kuala Lumpur Railway Station (Old)",
      intro:
        "The old Kuala Lumpur railway station, with its iconic Moorish-style domes and towers, sits near Brickfields and KL Sentral. It is an easy architectural landmark to see while visiting Brickfields.",
      sections: [
        {
          id: "architecture",
          title: "Moorish architecture",
          body:
            "<p>The station was designed in a Moorish and Indo-Saracenic blend, with domes, towers, and arcades. It is one of the most photogenic heritage buildings in the city.</p>",
        },
        {
          id: "history",
          title: "Brief history",
          body:
            "<p>Built in the early 20th century, the station was once the main gateway to Kuala Lumpur. Main rail services have moved to the adjacent KL Sentral, but this heritage building remains.</p>",
        },
        {
          id: "visit",
          title: "Can you go inside?",
          body:
            "<p>The interior functions as an operations centre; inside visits may be limited. You can enjoy the architecture from outside and the surrounding grounds at any time.</p>",
        },
        {
          id: "access",
          title: "Location & access",
          body:
            "<p>Adjacent to KL Sentral, a short walk to Little India Brickfields. Nearby monorail and LRT stations make travel easy.</p>",
        },
      ],
      faq: [
        {
          q: "Where is this old station?",
          a: "Adjacent to KL Sentral, a short walk to Little India Brickfields.",
        },
        {
          q: "What is its architectural style?",
          a: "A Moorish and Indo-Saracenic blend with domes, towers, and arcades.",
        },
        {
          q: "Can I go inside?",
          a: "The interior is operational; inside visits may be limited. Enjoy the architecture from outside anytime.",
        },
        {
          q: "What is its history?",
          a: "Built in the early 20th century, it was once KL's main gateway; main services are now at adjacent KL Sentral.",
        },
        {
          q: "How far from Little India?",
          a: "Just a short walk from the core of Little India Brickfields.",
        },
        {
          q: "Is it good for photos?",
          a: "Yes, this heritage building is very photogenic, especially from outside.",
        },
      ],
    },
  },
  {
    slug: "brickfields-history",
    group: "attraction",
    related: ["brickfields-heritage-walk", "tun-sambanthan-area", "little-india-festivals"],
    ms: {
      title: "Sejarah Brickfields Kuala Lumpur | Little India",
      description:
        "Gambaran ringkas sejarah Brickfields dan perkembangannya menjadi Little India KL.",
      h1: "Sejarah Brickfields",
      intro:
        "Brickfields mendapat namanya daripada kilang bata awal dan berkembang menjadi kejiranan berbilang budaya. Hari ini ia dikenali sebagai Little India Kuala Lumpur. Berikut gambaran umum tanpa mendakwa tarikh tepat.",
      sections: [
        {
          id: "asal",
          title: "Asal usul nama",
          body:
            "<p>Kawasan ini dikaitkan dengan aktiviti pembuatan bata pada zaman awal Kuala Lumpur. Ia kemudian menjadi penempatan pekerja dan masyarakat berbilang etnik.</p>",
        },
        {
          id: "india",
          title: "Menjadi Little India",
          body:
            "<p>Komuniti India Selatan telah lama berakar di sini, membawa kuil, restoran, dan perdagangan tekstil yang membentuk watak Little India hari ini.</p>",
        },
        {
          id: "moden",
          title: "Brickfields moden",
          body:
            "<p>Hari ini, kehadiran KL Sentral menjadikannya hab pengangkutan, sambil mengekalkan jalanan Little India yang meriah di Jalan Tun Sambanthan.</p>",
        },
        {
          id: "warisan",
          title: "Warisan & bangunan",
          body:
            "<p>Beberapa bangunan lama dan kuil bersejarah kekal; gabungkan lawatan dengan Stesen Keretapi lama berdekatan.</p>",
        },
      ],
      faq: [
        {
          q: "Dari mana nama Brickfields?",
          a: "Dikaitkan dengan pembuatan bata awal Kuala Lumpur; kemudian jadi kejiranan pekerja.",
        },
        {
          q: "Mengapa ia dipanggil Little India?",
          a: "Komuniti India Selatan lama mendiami kawasan ini, membawa kuil, restoran, dan tekstil.",
        },
        {
          q: "Adakah ia selamat dan bersejarah?",
          a: "Ya, ia kejiranan bersejarah dengan kuil dan bangunan warisan; lihat dengan berjalan kaki.",
        },
        {
          q: "Apakah peranan KL Sentral?",
          a: "Menjadikan Brickfields hab pengangkutan moden sambil mengekalkan Little India.",
        },
        {
          q: "Kuil mana bersejarah?",
          a: "Kuil Hindu dan Buddha tempatan berakar lama di sini; semak waktu sebelum melawat.",
        },
        {
          q: "Boleh diterokai berjalan kaki?",
          a: "Ya, kebanyakan mercu tarik dalam radius berjalan singkat.",
        },
      ],
    },
    en: {
      title: "History of Brickfields Kuala Lumpur | Little India",
      description:
        "A brief history of Brickfields and how it became Little India KL.",
      h1: "History of Brickfields",
      intro:
        "Brickfields takes its name from early brickworks and grew into a multicultural neighbourhood. Today it is known as Little India Kuala Lumpur. The following is a general overview without claiming exact dates.",
      sections: [
        {
          id: "origin",
          title: "Origin of the name",
          body:
            "<p>The area is linked to early brick-making in Kuala Lumpur. It later became a settlement of workers and a multi-ethnic community.</p>",
        },
        {
          id: "india",
          title: "Becoming Little India",
          body:
            "<p>The South Indian community has deep roots here, bringing temples, restaurants, and textile trade that shape today's Little India character.</p>",
        },
        {
          id: "modern",
          title: "Modern Brickfields",
          body:
            "<p>Today, the presence of KL Sentral makes it a transport hub while preserving the lively Little India streets along Jalan Tun Sambanthan.</p>",
        },
        {
          id: "heritage",
          title: "Heritage & buildings",
          body:
            "<p>Some old buildings and historic temples remain; pair the visit with the nearby old railway station.</p>",
        },
      ],
      faq: [
        {
          q: "Where does the name Brickfields come from?",
          a: "Linked to early brick-making in KL; later a workers' neighbourhood.",
        },
        {
          q: "Why is it called Little India?",
          a: "The South Indian community has long lived here, bringing temples, restaurants, and textiles.",
        },
        {
          q: "Is it historic and safe?",
          a: "Yes, it is a historic neighbourhood with temples and heritage buildings; explore on foot.",
        },
        {
          q: "What is KL Sentral's role?",
          a: "It makes Brickfields a modern transport hub while keeping Little India intact.",
        },
        {
          q: "Which temples are historic?",
          a: "Local Hindu and Buddhist temples have long roots here; check hours before visiting.",
        },
        {
          q: "Can it be explored on foot?",
          a: "Yes, most landmarks are within a short walking radius.",
        },
      ],
    },
  },
  {
    slug: "little-india-festivals",
    group: "attraction",
    related: ["sri-kandaswamy-kovil", "brickfields-history", "tun-sambanthan-area"],
    ms: {
      title: "Perayaan Little India Brickfields | Deepavali & Thaipusam",
      description:
        "Panduan perayaan di Little India Brickfields: Deepavali, Thaipusam, dan Pongal — bila dan apa yang dijangka.",
      h1: "Perayaan di Little India Brickfields",
      intro:
        "Little India Brickfields paling meriah semasa perayaan masyarakat India. Deepavali, Thaipusam, dan Pongal menarik orang ramai. Tarikh berbeza setiap tahun (mengikut kalendar lunar/Hindu), jadi sahkan tarikh semasa perancangan.",
      sections: [
        {
          id: "deepavali",
          title: "Deepavali",
          body:
            "<p>Perayaan cahaya disambut dengan lampu, hiasan, dan jualan meriah di sepanjang Jalan Tun Sambanthan. Ia masa paling sibuk dan berwarna-warni untuk melawat.</p>",
        },
        {
          id: "thaipusam",
          title: "Thaipusam",
          body:
            "<p>Perayaan devosi yang melibatkan perarakan; kuil tempatan menjadi tumpuan. Jangkaan orang ramai yang sangat besar dan jalan sesak.</p>",
        },
        {
          id: "pongal",
          title: "Pongal",
          body:
            "<p>Perayaan tuaan yang lebih tenang, disambut di kuil dan kediaman. Peluang melihat adat masyarakat dengan kurang kesesakan.</p>",
        },
        {
          id: "tips",
          title: "Tips melawat masa perayaan",
          body:
            "<ul><li>Sahkan tarikh mengikut kalendar Hindu setiap tahun.</li><li>Datang lebih awal; jangka kesesakan dan jalan ditutup.</li><li>Pegang erat barang berharga dan kanak-kanak.</li></ul>",
        },
      ],
      faq: [
        {
          q: "Bilakah Deepavali?",
          a: "Tarikh berubah setiap tahun mengikut kalendar Hindu; sahkan semasa perancangan.",
        },
        {
          q: "Adakah Thaipusam sesak?",
          a: "Ya, perarakan menarik orang ramai sangat besar; jangka jalan sesak dan rancang awal.",
        },
        {
          q: "Masa terbaik melawat semasa perayaan?",
          a: "Deepavali paling meriah; Pongal lebih tenang jika anda mahu kurang kesesakan.",
        },
        {
          q: "Apakah Pongal?",
          a: "Perayaan tuaan yang lebih tenang disambut di kuil dan kediaman.",
        },
        {
          q: "Apa etika berpakaian?",
          a: "Sopan; elak pakaian mendedahkan semasa di kuil atau perarakan.",
        },
        {
          q: "Bagaimana ke sana?",
          a: "Guna KL Sentral dan monorel Tun Sambanthan; jangka kesesakan transit.",
        },
      ],
    },
    en: {
      title: "Festivals in Little India Brickfields | Deepavali & Thaipusam",
      description:
        "A guide to festivals in Little India Brickfields: Deepavali, Thaipusam, and Pongal — when and what to expect.",
      h1: "Festivals in Little India Brickfields",
      intro:
        "Little India Brickfields is liveliest during Indian community festivals. Deepavali, Thaipusam, and Pongal draw crowds. Dates change each year (by the lunar/Hindu calendar), so confirm dates when planning.",
      sections: [
        {
          id: "deepavali",
          title: "Deepavali",
          body:
            "<p>The festival of lights is celebrated with lamps, decorations, and lively sales along Jalan Tun Sambanthan. It is the busiest and most colourful time to visit.</p>",
        },
        {
          id: "thaipusam",
          title: "Thaipusam",
          body:
            "<p>A devotion festival involving processions; local temples become the focus. Expect very large crowds and congested streets.</p>",
        },
        {
          id: "pongal",
          title: "Pongal",
          body:
            "<p>A quieter harvest festival celebrated at temples and homes. A chance to observe community customs with less crowding.</p>",
        },
        {
          id: "tips",
          title: "Tips for visiting during festivals",
          body:
            "<ul><li>Confirm dates by the Hindu calendar each year.</li><li>Come earlier; expect crowds and road closures.</li><li>Hold valuables and children close.</li></ul>",
        },
      ],
      faq: [
        {
          q: "When is Deepavali?",
          a: "The date changes each year by the Hindu calendar; confirm when planning.",
        },
        {
          q: "Is Thaipusam crowded?",
          a: "Yes, processions draw very large crowds; expect congested streets and plan ahead.",
        },
        {
          q: "Best time to visit during festivals?",
          a: "Deepavali is most vibrant; Pongal is calmer if you want fewer crowds.",
        },
        {
          q: "What is Pongal?",
          a: "A quieter harvest festival celebrated at temples and homes.",
        },
        {
          q: "What is the dress etiquette?",
          a: "Modest dress; avoid revealing clothing at temples or processions.",
        },
        {
          q: "How do I get there?",
          a: "Use KL Sentral and Tun Sambanthan monorail; expect crowded transit.",
        },
      ],
    },
  },
  {
    slug: "muzium-negara",
    group: "attraction",
    related: ["kuala-lumpur-railway-station", "one-day-itinerary", "brickfields-heritage-walk"],
    ms: {
      title: "Muzium Negara Berdekatan Little India | Panduan",
      description:
        "Panduan Muzium Negara berhampiran Brickfields: apakah dipamerkan, akses, dan gabungkan dengan Little India.",
      h1: "Muzium Negara (National Museum)",
      intro:
        "Muzium Negara terletak dalam jarak berjalan dari Brickfields dan KL Sentral, menempatkan pameran sejarah Malaysia. Ia pilihan baik jika anda mahu konteks sebelum meneroka Little India.",
      sections: [
        {
          id: "pameran",
          title: "Apa dipamerkan",
          body:
            "<p>Muzium ini menceritakan sejarah, budaya, dan alam Malaysia melalui galeri dan artifak. Sesuai untuk pengenalan umum sebelum melawat kawasan kejiranan.</p>",
        },
        {
          id: "masa",
          title: "Waktu & kemasukan",
          body:
            "<p>Waktu dan kadar kemasukan ditetapkan oleh pihak muzium dan boleh berubah; semak penyenaraian rasmi sebelum hadir.</p>",
        },
        {
          id: "akses",
          title: "Lokasi & akses",
          body:
            "<p>Berhampiran KL Sentral dan dalam jarak berjalan atau pengangkutan singkat ke Little India Brickfields.</p>",
        },
        {
          id: "gabung",
          title: "Gabung dengan Little India",
          body:
            "<p>Rancang separuh hari: muzium pada waktu pagi, diikuti lawatan Little India untuk budaya dan makanan.</p>",
        },
      ],
      faq: [
        {
          q: "Di manakah Muzium Negara?",
          a: "Berhampiran KL Sentral, dalam jarak berjalan atau transit singkat ke Little India Brickfields.",
        },
        {
          q: "Apa dipamerkan?",
          a: "Sejarah, budaya, dan alam Malaysia melalui galeri dan artifak.",
        },
        {
          q: "Apakah waktu dan yuran?",
          a: "Ditentukan pihak muzium dan boleh berubah; semak penyenaraian rasmi.",
        },
        {
          q: "Jauhkah dari Little India?",
          a: "Berdekatan; berjalan singkat atau transit seketika.",
        },
        {
          q: "Sesuai untuk kanak-kanak?",
          a: "Ya, ia pengenalan umum yang baik; rancang masa mengikut tenaga mereka.",
        },
        {
          q: "Boleh digabungkan?",
          a: "Ya, buat separuh hari: muzium pagi, Little India kemudian.",
        },
      ],
    },
    en: {
      title: "National Museum near Little India | Guide",
      description:
        "A guide to the National Museum near Brickfields: what is exhibited, access, and combining with Little India.",
      h1: "National Museum (Muzium Negara)",
      intro:
        "The National Museum sits within walking distance of Brickfields and KL Sentral, housing Malaysia's history exhibits. It is a good choice if you want context before exploring Little India.",
      sections: [
        {
          id: "exhibits",
          title: "What is exhibited",
          body:
            "<p>The museum tells the story of Malaysia's history, culture, and nature through galleries and artefacts. Good general introduction before visiting the neighbourhood.</p>",
        },
        {
          id: "hours",
          title: "Hours & entry",
          body:
            "<p>Hours and entry fees are set by the museum and may change; check the official listing before going.</p>",
        },
        {
          id: "access",
          title: "Location & access",
          body:
            "<p>Near KL Sentral and within walking distance or a short transit to Little India Brickfields.</p>",
        },
        {
          id: "combine",
          title: "Combine with Little India",
          body:
            "<p>Plan a half day: the museum in the morning, followed by a Little India visit for culture and food.</p>",
        },
      ],
      faq: [
        {
          q: "Where is the National Museum?",
          a: "Near KL Sentral, a short walk or brief transit to Little India Brickfields.",
        },
        {
          q: "What is exhibited?",
          a: "Malaysia's history, culture, and nature through galleries and artefacts.",
        },
        {
          q: "What are the hours and fee?",
          a: "Set by the museum and may change; check the official listing.",
        },
        {
          q: "How far from Little India?",
          a: "Close by; a short walk or moment of transit.",
        },
        {
          q: "Good for children?",
          a: "Yes, it is a good general introduction; pace it to their energy.",
        },
        {
          q: "Can it be combined?",
          a: "Yes, do a half day: museum in the morning, Little India after.",
        },
      ],
    },
  },
  {
    slug: "tun-sambanthan-area",
    group: "attraction",
    related: ["sri-kandaswamy-kovil", "brickfields-history", "kl-sentral-walk"],
    ms: {
      title: "Kawasan Jalan Tun Sambanthan | Jantung Little India",
      description:
        "Panduan Jalan Tun Sambanthan dan sekitarnya: nadi Little India Brickfields, kedai, kuil, dan akses.",
      h1: "Jalan Tun Sambanthan & Sekitarnya",
      intro:
        "Jalan Tun Sambanthan adalah nadi Little India Brickfields — di sinilah kedai tekstil, restoran, dan kuil berkelompok. Halaman ini membantu anda merancang laluan berjalan.",
      sections: [
        {
          id: "peranan",
          title: "Peranan jalan",
          body:
            "<p>Jalan ini menghubungkan stesen monorel ke inti Little India, dan dipenuhi aktiviti siang sehingga malam. Ia titik permulaan terbaik untuk berjalan kaki.</p>",
        },
        {
          id: "apa",
          title: "Apa di sepanjang jalan",
          body:
            "<ul><li>Kedai tekstil dan sari.</li><li>Restoran selatan India dan kedai rempah.</li><li>Kuil Sri Kandaswamy Kovil berdekatan.</li></ul>",
        },
        {
          id: "berjalan",
          title: "Tips berjalan",
          body:
            "<p>Kaki lima tidak seragam; pakai kasut selesa dan berhati-hati dengan gerai yang menjorok. Lawatan pagi lebih nyaman.</p>",
        },
        {
          id: "akses",
          title: "Akses pengangkutan",
          body:
            "<p>Stesen monorel Tun Sambanthan dan KL Sentral berdekatan memudahkan ketibaan. Sila rujuk panduan berjalan dari KL Sentral.</p>",
        },
      ],
      faq: [
        {
          q: "Apakah Jalan Tun Sambanthan?",
          a: "Nadi Little India Brickfields dengan kedai tekstil, restoran, dan kuil.",
        },
        {
          q: "Di manakah mula berjalan?",
          a: "Dari stesen monorel Tun Sambanthan ke arah inti Little India.",
        },
        {
          q: "Adakah stesen monorel?",
          a: "Ya, stesen monorel Tun Sambanthan berdekatan.",
        },
        {
          q: "Apa kedai di sini?",
          a: "Tekstil, sari, restoran selatan India, dan kedai rempah.",
        },
        {
          q: "Adakah selamat?",
          a: "Ya dengan pengawasan; jaga barang di jalan sesak.",
        },
        {
          q: "Masa terbaik?",
          a: "Pagi lebih nyaman; petang lebih meriah.",
        },
      ],
    },
    en: {
      title: "Jalan Tun Sambanthan Area | Heart of Little India",
      description:
        "A guide to Jalan Tun Sambanthan and surroundings: the heart of Little India Brickfields, shops, temples, and access.",
      h1: "Jalan Tun Sambanthan & Surroundings",
      intro:
        "Jalan Tun Sambanthan is the heart of Little India Brickfields — where textile shops, restaurants, and temples cluster. This page helps you plan a walking route.",
      sections: [
        {
          id: "role",
          title: "Role of the street",
          body:
            "<p>This street links the monorail station to the core of Little India, full of activity from day to night. It is the best starting point for a walk.</p>",
        },
        {
          id: "what",
          title: "What is along the street",
          body:
            "<ul><li>Textile and sari shops.</li><li>South Indian restaurants and spice shops.</li><li>The nearby Sri Kandaswamy Kovil.</li></ul>",
        },
        {
          id: "walking",
          title: "Walking tips",
          body:
            "<p>Pavements are uneven; wear comfortable shoes and watch for stalls jutting out. Morning visits are more pleasant.</p>",
        },
        {
          id: "access",
          title: "Transport access",
          body:
            "<p>The nearby Tun Sambanthan monorail and KL Sentral make arrival easy. See the walk guide from KL Sentral.</p>",
        },
      ],
      faq: [
        {
          q: "What is Jalan Tun Sambanthan?",
          a: "The heart of Little India Brickfields with textile shops, restaurants, and temples.",
        },
        {
          q: "Where do I start walking?",
          a: "From Tun Sambanthan monorail station toward the core of Little India.",
        },
        {
          q: "Is there a monorail station?",
          a: "Yes, the Tun Sambanthan monorail station is nearby.",
        },
        {
          q: "What shops are here?",
          a: "Textiles, saris, South Indian restaurants, and spice shops.",
        },
        {
          q: "Is it safe?",
          a: "Yes with care; watch your belongings on crowded streets.",
        },
        {
          q: "Best time?",
          a: "Morning is more pleasant; evening is more lively.",
        },
      ],
    },
  },
  {
    slug: "brickfields-heritage-walk",
    group: "attraction",
    related: ["tun-sambanthan-area", "kuala-lumpur-railway-station", "brickfields-walking-route"],
    ms: {
      title: "Laluan Warisan Brickfields | Panduan Berjalan Sendiri",
      description:
        "Laluan berjalan sendiri di Brickfields: gabungkan kuil, seni bina warisan, dan Little India dalam satu pusingan.",
      h1: "Laluan Warisan Brickfields",
      intro:
        "Brickfields padat dan mesra pejalan kaki dalam jarak singkat. Laluan ini cadangan umum untuk menggabungkan mercu tarik warisan dengan Little India — laraskan mengikut rentak anda.",
      sections: [
        {
          id: "laluan",
          title: "Cadangan laluan",
          body:
            "<ul><li>Mula dari KL Sentral atau stesen monorel Tun Sambanthan.</li><li>Lalui Jalan Tun Sambanthan ke arah kuil.</li><li>Singgah kuil Hindu dan Buddha berdekatan.</li><li>Tamat dengan makanan di restoran selatan India.</li></ul>",
        },
        {
          id: "jarak",
          title: "Jarak & masa",
          body:
            "<p>Kebanyakan mercu tarik dalam radius berjalan 1–2 km; anggarkan 2–3 jam santai termasuk makan.</p>",
        },
        {
          id: "kaki",
          title: "Keadaan kaki lima",
          body:
            "<p>Kaki lima tidak seragam dengan anak tangga kecil dan gerai; pengguna kerusi roda atau troli perlu rancang laluan.</p>",
        },
        {
          id: "tips",
          title: "Tips umum",
          body:
            "<p>Datang pagi, bawa air, dan semak waktu kuil sebelum tiba. Gabungkan dengan Muzium Negara jika mahu.</p>",
        },
      ],
      faq: [
        {
          q: "Di manakah mula?",
          a: "Dari KL Sentral atau stesen monorel Tun Sambanthan.",
        },
        {
          q: "Berapa lama?",
          a: "Anggaran 2–3 jam santai termasuk makan dalam radius 1–2 km.",
        },
        {
          q: "Mesra kerusi roda?",
          a: "Sebahagian; kaki lima tidak seragam, rancang laluan.",
        },
        {
          q: "Masa terbaik?",
          a: "Pagi lebih nyaman dan kurang sesak.",
        },
        {
          q: "Boleh gabung muzium?",
          a: "Ya, Muzium Negara berdekatan sesuai dijadikan sebahagian pusingan.",
        },
        {
          q: "Apa perlu dilihat?",
          a: "Kuil, Stesen Keretapi lama, dan jalanan Little India.",
        },
      ],
    },
    en: {
      title: "Brickfields Heritage Walk | Self-Guided Route",
      description:
        "A self-guided walk in Brickfields: combine temples, heritage architecture, and Little India in one loop.",
      h1: "Brickfields Heritage Walk",
      intro:
        "Brickfields is compact and walkable within short distances. This route is a general suggestion to combine heritage landmarks with Little India — adjust to your pace.",
      sections: [
        {
          id: "route",
          title: "Suggested route",
          body:
            "<ul><li>Start from KL Sentral or Tun Sambanthan monorail station.</li><li>Walk Jalan Tun Sambanthan toward the temples.</li><li>Stop by nearby Hindu and Buddhist temples.</li><li>End with food at a South Indian restaurant.</li></ul>",
        },
        {
          id: "distance",
          title: "Distance & time",
          body:
            "<p>Most landmarks are within a 1–2 km walking radius; budget 2–3 relaxed hours including food.</p>",
        },
        {
          id: "pavements",
          title: "Pavement conditions",
          body:
            "<p>Pavements are uneven with small steps and stalls; wheelchair or stroller users should plan the route.</p>",
        },
        {
          id: "tips",
          title: "General tips",
          body:
            "<p>Come in the morning, bring water, and check temple hours before arrival. Add the National Museum if you wish.</p>",
        },
      ],
      faq: [
        {
          q: "Where do I start?",
          a: "From KL Sentral or Tun Sambanthan monorail station.",
        },
        {
          q: "How long?",
          a: "About 2–3 relaxed hours including food, within a 1–2 km radius.",
        },
        {
          q: "Wheelchair friendly?",
          a: "Partly; pavements are uneven, so plan the route.",
        },
        {
          q: "Best time?",
          a: "Morning is more comfortable and less crowded.",
        },
        {
          q: "Can I add the museum?",
          a: "Yes, the nearby National Museum fits into the loop.",
        },
        {
          q: "What should I see?",
          a: "Temples, the old railway station, and the Little India streets.",
        },
      ],
    },
  },
  {
    slug: "indian-sweets-mithai",
    group: "food",
    related: ["vegetarian-food", "banana-leaf-rice", "spice-shops-guide"],
    ms: {
      title: "Manisan & Mithai India di Brickfields | Panduan",
      description:
        "Panduan manisan dan snek India (mithai) di Little India Brickfields: jenis biasa dan tips membeli.",
      h1: "Manisan & Mithai India di Brickfields",
      intro:
        "Little India Brickfields mempunyai kedai manisan India yang menjual gula-gula dan snek seperti laddu, jalebi, dan burfi. Panduan ini ringkasan jenis biasa; pilih kedai berdasarkan kesegaran dan kebersihan.",
      sections: [
        {
          id: "jenis",
          title: "Jenis manisan biasa",
          body:
            "<ul><li>Laddu dan burfi — berasaskan kacang dan gula.</li><li>Jalebi — goreng manis berwarna emas.</li><li>Mysore pak dan barfi buah — pilihan popular.</li></ul>",
        },
        {
          id: "beli",
          title: "Cara membeli",
          body:
            "<p>Beli dalam kuantiti kecil untuk cuba dulu. Tanya tentang kesegaran dan simpan sejuk jika perlu. Kedai biasanya melabel kandungan.</p>",
        },
        {
          id: "jaga",
          title: "Penjagaan & bawa balik",
          body:
            "<p>Manisan berasaskan tenusu lebih mudah rosak; simpan sejuk dan habis dalam masa singkat. Semak kastam jika bawa keluar negara.</p>",
        },
        {
          id: "cari",
          title: "Di mana mencari",
          body:
            "<p>Kedai manisan tertumpu di sekitar Jalan Tun Sambanthan; bandingkan beberapa kedai untuk kesegaran.</p>",
        },
      ],
      faq: [
        {
          q: "Apakah mithai?",
          a: "Istilah umum untuk manisan India seperti laddu, burfi, dan jalebi.",
        },
        {
          q: "Jenis apa ada?",
          a: "Laddu, burfi, jalebi, Mysore pak, dan barfi buah antara yang biasa.",
        },
        {
          q: "Di manakah membeli?",
          a: "Kedai manisan tertumpu di sekitar Jalan Tun Sambanthan; bandingkan kesegaran.",
        },
        {
          q: "Tenusu & kesegaran?",
          a: "Banyak berasaskan tenusu; simpan sejuk dan beli yang paling segar.",
        },
        {
          q: "Boleh bawa balik?",
          a: "Ya, tetapi sejuk dan habis cepat; semak kastam jika keluar negara.",
        },
        {
          q: "Apa patut cuba dulu?",
          a: "Beli kuantiti kecil beberapa jenis untuk bandingkan rasa.",
        },
      ],
    },
    en: {
      title: "Indian Sweets & Mithai in Brickfields | Guide",
      description:
        "A guide to Indian sweets and snacks (mithai) in Little India Brickfields: common types and buying tips.",
      h1: "Indian Sweets & Mithai in Brickfields",
      intro:
        "Little India Brickfields has Indian sweet shops selling treats like laddu, jalebi, and burfi. This is a general overview of common types; choose shops by freshness and hygiene.",
      sections: [
        {
          id: "types",
          title: "Common sweet types",
          body:
            "<ul><li>Laddu and burfi — nut- and sugar-based.</li><li>Jalebi — golden fried sweet.</li><li>Mysore pak and fruit barfi — popular picks.</li></ul>",
        },
        {
          id: "buying",
          title: "How to buy",
          body:
            "<p>Buy small quantities to try first. Ask about freshness and refrigerate if needed. Shops usually label ingredients.</p>",
        },
        {
          id: "care",
          title: "Care & taking home",
          body:
            "<p>Dairy-based sweets spoil faster; keep them cool and finish soon. Check customs if taking abroad.</p>",
        },
        {
          id: "where",
          title: "Where to find",
          body:
            "<p>Sweet shops cluster around Jalan Tun Sambanthan; compare a few for freshness.</p>",
        },
      ],
      faq: [
        {
          q: "What is mithai?",
          a: "A general term for Indian sweets like laddu, burfi, and jalebi.",
        },
        {
          q: "What types are there?",
          a: "Laddu, burfi, jalebi, Mysore pak, and fruit barfi are common.",
        },
        {
          q: "Where do I buy?",
          a: "Sweet shops cluster around Jalan Tun Sambanthan; compare freshness.",
        },
        {
          q: "Dairy & freshness?",
          a: "Many are dairy-based; keep cool and buy the freshest.",
        },
        {
          q: "Can I take them home?",
          a: "Yes, but keep cool and finish quickly; check customs if leaving the country.",
        },
        {
          q: "What to try first?",
          a: "Buy small amounts of several types to compare flavours.",
        },
      ],
    },
  },
  {
    slug: "cafes-brickfields",
    group: "food",
    related: ["rainy-day-plan", "malls-near-little-india", "little-india-with-kids"],
    ms: {
      title: "Kafe & Kopi di Brickfields | Panduan Santai",
      description:
        "Panduan kafe dan minuman di Brickfields: tempat berehat, kopi, dan pilihan bukan India.",
      h1: "Kafe & Minuman di Brickfields",
      intro:
        "Selain restoran India, Brickfields dan KL Sentral berdekatan mempunyai kafe moden untuk berehat dari cuaca panas. Panduan ini umum; pilih berdasarkan ulasan dan keselesaan anda.",
      sections: [
        {
          id: "jenis",
          title: "Jenis kafe",
          body:
            "<p>Anda boleh menjumpai kafe rantai di kompleks berhawa dingin seperti NU Sentral, serta kafe bebas yang lebih tenang di sekitar Brickfields.</p>",
        },
        {
          id: "berehat",
          title: "Tempat berehat",
          body:
            "<p>Kompleks NU Sentral dan KL Sentral menawarkan ruang berhawa dingin, WiFi, dan tandas — baik untuk berehat antara lawatan.</p>",
        },
        {
          id: "minuman",
          title: "Minuman",
          body:
            "<p>Teh tarik dan kopi tempatan mudah didapati; kafe moden menawarkan pelbagai pilihan. Pilih mengikut citarasa.</p>",
        },
        {
          id: "tips",
          title: "Tips",
          body:
            "<p>Guna masa tengah hari untuk berehat berhawa dingin. Bandingkan harga antara kafe bebas dan rantai.</p>",
        },
      ],
      faq: [
        {
          q: "Di manakah mencari kafe?",
          a: "Kompleks berhawa dingin seperti NU Sentral, serta kafe bebas di sekitar Brickfields.",
        },
        {
          q: "Ada ruang berhawa dingin?",
          a: "Ya, NU Sentral dan KL Sentral menawarkan ruang berhawa dingin dan WiFi.",
        },
        {
          q: "Ada WiFi?",
          a: "Kompleks utama biasanya ada WiFi; tanya kedai.",
        },
        {
          q: "Terbaik untuk berehat?",
          a: "Guna waktu tengah hari untuk lari dari panas.",
        },
        {
          q: "Pilihan bukan India?",
          a: "Ya, kafe moden menawarkan kopi dan makanan ringan bukan India.",
        },
        {
          q: "Mesra keluarga?",
          a: "Ya, kompleks berhawa dingin sesuai dengan kanak-kanak.",
        },
      ],
    },
    en: {
      title: "Cafes & Coffee in Brickfields | Relaxed Guide",
      description:
        "A guide to cafes and drinks in Brickfields: places to rest, coffee, and non-Indian options.",
      h1: "Cafes & Drinks in Brickfields",
      intro:
        "Beyond Indian restaurants, Brickfields and nearby KL Sentral have modern cafes to escape the heat. This is a general guide; choose by reviews and your comfort.",
      sections: [
        {
          id: "types",
          title: "Types of cafes",
          body:
            "<p>You can find chain cafes in air-conditioned complexes like NU Sentral, as well as quieter independent cafes around Brickfields.</p>",
        },
        {
          id: "rest",
          title: "Places to rest",
          body:
            "<p>NU Sentral and KL Sentral offer air-conditioned space, WiFi, and toilets — good for a break between visits.</p>",
        },
        {
          id: "drinks",
          title: "Drinks",
          body:
            "<p>Teh tarik and local coffee are easy to find; modern cafes offer more variety. Choose to taste.</p>",
        },
        {
          id: "tips",
          title: "Tips",
          body:
            "<p>Use midday to rest in air-conditioning. Compare prices between independent and chain cafes.</p>",
        },
      ],
      faq: [
        {
          q: "Where do I find cafes?",
          a: "Air-conditioned complexes like NU Sentral, plus independent cafes around Brickfields.",
        },
        {
          q: "Is there air-conditioned space?",
          a: "Yes, NU Sentral and KL Sentral offer cool space and WiFi.",
        },
        {
          q: "Is there WiFi?",
          a: "Major complexes usually have WiFi; ask the shop.",
        },
        {
          q: "Best for a rest?",
          a: "Use midday to escape the heat.",
        },
        {
          q: "Non-Indian options?",
          a: "Yes, modern cafes offer coffee and light non-Indian food.",
        },
        {
          q: "Family friendly?",
          a: "Yes, air-conditioned complexes suit children.",
        },
      ],
    },
  },
  {
    slug: "street-food-little-india",
    group: "food",
    related: ["banana-leaf-rice", "vegetarian-food", "indian-sweets-mithai"],
    ms: {
      title: "Makanan Jalanan Little India Brickfields | Panduan",
      description:
        "Panduan makanan jalanan di Little India Brickfields: apa dicari, kebersihan, dan tips.",
      h1: "Makanan Jalanan di Little India Brickfields",
      intro:
        "Makanan jalanan menambah warna Little India — snek seperti pisang goreng, vadai, dan rojak. Pilih gerai yang bersih dan sibuk untuk kesegaran.",
      sections: [
        {
          id: "snek",
          title: "Snek biasa",
          body:
            "<ul><li>Vadai dan pisang goreng — snek goreng popular.</li><li>Rojak buah — salad buah dengan kuah.</li><li>Teh tarik dan jus buah segar.</li></ul>",
        },
        {
          id: "bersih",
          title: "Pilih gerai bersih",
          body:
            "<p>Cari gerai dengan aliran pelanggan tinggi dan penyediaan kemas. Makan segera selepas dibeli.</p>",
        },
        {
          id: "waktu",
          title: "Waktu terbaik",
          body:
            "<p>Petang hingga malam biasanya waktu snek jalanan paling banyak. Waktu siang lebih terhad.</p>",
        },
        {
          id: "tips",
          title: "Tips keselamatan",
          body:
            "<p>Elak makanan yang dibiarkan terdedah lama; bawa air minuman bersih. Berhati-hati dengan kepedasan jika tidak biasa.</p>",
        },
      ],
      faq: [
        {
          q: "Apa makanan jalanan?",
          a: "Snek seperti vadai, pisang goreng, rojak buah, dan teh tarik.",
        },
        {
          q: "Di manakah?",
          a: "Gerai kecil di sekitar Jalan Tun Sambanthan, lebih banyak petang/malam.",
        },
        {
          q: "Bagaimana kebersihan?",
          a: "Pilih gerai sibuk dan kemas; makan segera selepas dibeli.",
        },
        {
          q: "Masa terbaik?",
          a: "Petang hingga malam ada lebih pilihan.",
        },
        {
          q: "Ada pilihan vegetarian?",
          a: "Ya, banyak snek India semula jadi vegetarian; tanya ramuan.",
        },
        {
          q: "Pedas?",
          a: "Sesetengah pedas; berhati-hati jika tidak biasa.",
        },
      ],
    },
    en: {
      title: "Street Food in Little India Brickfields | Guide",
      description:
        "A guide to street food in Little India Brickfields: what to look for, hygiene, and tips.",
      h1: "Street Food in Little India Brickfields",
      intro:
        "Street food adds colour to Little India — snacks like fried banana, vadai, and rojak. Pick busy, clean stalls for freshness.",
      sections: [
        {
          id: "snacks",
          title: "Common snacks",
          body:
            "<ul><li>Vadai and fried banana — popular fried snacks.</li><li>Fruit rojak — fruit salad with dressing.</li><li>Teh tarik and fresh fruit juice.</li></ul>",
        },
        {
          id: "clean",
          title: "Choose clean stalls",
          body:
            "<p>Look for stalls with high customer flow and tidy preparation. Eat soon after buying.</p>",
        },
        {
          id: "time",
          title: "Best time",
          body:
            "<p>Afternoon to evening is usually when street snacks are most plentiful. Daytime is more limited.</p>",
        },
        {
          id: "tips",
          title: "Safety tips",
          body:
            "<p>Avoid food left exposed long; bring clean drinking water. Be careful with spiciness if unaccustomed.</p>",
        },
      ],
      faq: [
        {
          q: "What street food is there?",
          a: "Snacks like vadai, fried banana, fruit rojak, and teh tarik.",
        },
        {
          q: "Where is it?",
          a: "Small stalls around Jalan Tun Sambanthan, more in the afternoon/evening.",
        },
        {
          q: "How about hygiene?",
          a: "Pick busy, tidy stalls; eat soon after buying.",
        },
        {
          q: "Best time?",
          a: "Afternoon to evening offers more choice.",
        },
        {
          q: "Vegetarian options?",
          a: "Yes, many Indian snacks are naturally vegetarian; ask about ingredients.",
        },
        {
          q: "Spicy?",
          a: "Some are spicy; be careful if unaccustomed.",
        },
      ],
    },
  },
  {
    slug: "hotels-near-little-india",
    group: "visit",
    related: ["kl-sentral-walk", "accessibility-luggage", "one-day-itinerary"],
    ms: {
      title: "Penginapan Berdekatan Little India Brickfields | Panduan",
      description:
        "Panduan penginapan berhampiran Little India Brickfields: kelebihan tinggal dekat KL Sentral.",
      h1: "Penginapan Berdekatan Little India",
      intro:
        "Tinggal berdekatan KL Sentral memberi akses pengangkutan terbaik ke Little India dan seluruh KL. Panduan ini umum; bandingkan hotel melalui platform tempahan dan ulasan.",
      sections: [
        {
          id: "kl-sentral",
          title: "Mengapa KL Sentral",
          body:
            "<p>KL Sentral adalah hab keretapi, LRT, monorel, dan lapangan terbang. Menginap di sini memudahkan perjalanan ke Little India dalam jarak berjalan atau transit singkat.</p>",
        },
        {
          id: "jenis",
          title: "Jenis penginapan",
          body:
            "<p>Daripada hotel mewah hingga pilihan bajet, kawasan sekitar Brickfields dan KL Sentral menawarkan pelbagai. Pilih berdasarkan bajet dan ulasan.</p>",
        },
        {
          id: "tips",
          title: "Tips memilih",
          body:
            "<ul><li>Semak jarak berjalan sebenar ke Little India.</li><li>Bandingkan ulasan terkini.</li><li>Pertimbangkan akses awal pagi ke pengangkutan.</li></ul>",
        },
        {
          id: "tempah",
          title: "Tempahan",
          body:
            "<p>Guna platform tempahan untuk membandingkan harga dan baca ulasan. Harga berubah mengikut musim dan acara.</p>",
        },
      ],
      faq: [
        {
          q: "Di manakah patut menginap?",
          a: "Sekitar KL Sentral memberi akses pengangkutan terbaik ke Little India.",
        },
        {
          q: "Mengapa KL Sentral?",
          a: "Hab keretapi, LRT, monorel, dan lapangan terbang; dekat Little India.",
        },
        {
          q: "Ada pilihan bajet?",
          a: "Ya, kawasan ini menawarkan pelbagai dari mewah hingga bajet.",
        },
        {
          q: "Tips menempah?",
          a: "Bandingkan ulasan terkini dan jarak berjalan sebenar.",
        },
        {
          q: "Jauh berjalan ke Little India?",
          a: "Ramai hotel dalam jarak berjalan singkat; semak tapak tempahan.",
        },
        {
          q: "Akses lapangan terbang?",
          a: "KL Sentral mempunyai sambungan ke lapangan terbang; senang dari hotel berdekatan.",
        },
      ],
    },
    en: {
      title: "Hotels near Little India Brickfields | Guide",
      description:
        "A guide to staying near Little India Brickfields: the benefit of staying close to KL Sentral.",
      h1: "Hotels near Little India",
      intro:
        "Staying near KL Sentral gives the best transport access to Little India and all of KL. This is general guidance; compare hotels via booking platforms and reviews.",
      sections: [
        {
          id: "kl-sentral",
          title: "Why KL Sentral",
          body:
            "<p>KL Sentral is the hub for trains, LRT, monorail, and the airport. Staying here makes Little India a short walk or brief transit away.</p>",
        },
        {
          id: "types",
          title: "Types of accommodation",
          body:
            "<p>From upscale hotels to budget options, the area around Brickfields and KL Sentral offers variety. Choose by budget and reviews.</p>",
        },
        {
          id: "tips",
          title: "Choosing tips",
          body:
            "<ul><li>Check the real walking distance to Little India.</li><li>Compare recent reviews.</li><li>Consider early-morning transport access.</li></ul>",
        },
        {
          id: "booking",
          title: "Booking",
          body:
            "<p>Use booking platforms to compare prices and read reviews. Prices change by season and events.</p>",
        },
      ],
      faq: [
        {
          q: "Where should I stay?",
          a: "Around KL Sentral gives the best transport access to Little India.",
        },
        {
          q: "Why KL Sentral?",
          a: "Hub for trains, LRT, monorail, and the airport; close to Little India.",
        },
        {
          q: "Are there budget options?",
          a: "Yes, the area offers everything from upscale to budget.",
        },
        {
          q: "Booking tips?",
          a: "Compare recent reviews and the real walking distance.",
        },
        {
          q: "Far to walk to Little India?",
          a: "Many hotels are a short walk away; check the booking site.",
        },
        {
          q: "Airport access?",
          a: "KL Sentral has airport connections; convenient from nearby hotels.",
        },
      ],
    },
  },
  {
    slug: "things-to-do-evening",
    group: "visit",
    related: ["little-india-with-kids", "rainy-day-plan", "street-food-little-india"],
    ms: {
      title: "Aktiviti Waktu Petang & Malam di Little India | Panduan",
      description:
        "Apa boleh dibuat di Little India Brickfields pada petang dan malam: makan, beli, dan suasana.",
      h1: "Little India pada Petang & Malam",
      intro:
        "Little India menjadi lebih hidup pada petang dan malam — lampu, makanan, dan orang ramai. Halaman ini idea umum untuk lawatan lewat hari.",
      sections: [
        {
          id: "suasana",
          title: "Suasana malam",
          body:
            "<p>Jalan Tun Sambanthan diterangi lampu dan kedai dibuka lewat. Ia masa baik untuk melihat warna kawasan tanpa panas tengah hari.</p>",
        },
        {
          id: "makan",
          title: "Makan malam",
          body:
            "<p>Restoran selatan India sedia untuk makan malam; nasi daun pisang dan thali biasa. Cari restoran sibuk untuk kesegaran.</p>",
        },
        {
          id: "beli",
          title: "Beli lewat",
          body:
            "<p>Kedai tekstil dan rempah kekal dibuka; beli-belah malam lebih selesa berbanding siang.</p>",
        },
        {
          id: "tips",
          title: "Tips keselamatan",
          body:
            "<p>Kekal di kawasan bernyala dan sesak. Jaga barang berharga. Gunakan lintasan bertanda ketika menyeberang.</p>",
        },
      ],
      faq: [
        {
          q: "Adakah selamat pada malam?",
          a: "Ya di kawasan bernyala dan sesak; jaga barang berharga.",
        },
        {
          q: "Apa boleh dibuat?",
          a: "Makan malam, beli tekstil/rempah, dan serap suasana jalanan.",
        },
        {
          q: "Makan malam di mana?",
          a: "Restoran selatan India di Jalan Tun Sambanthan; cari yang sibuk.",
        },
        {
          q: "Kedai buka hingga bila?",
          a: "Banyak kekal dibuka lewat petang/malam; berbeza mengikut premis.",
        },
        {
          q: "Pengangkutan balik?",
          a: "Monorel Tun Sambanthan dan KL Sentral berdekatan; rancang awal.",
        },
        {
          q: "Mesra keluarga?",
          a: "Ya, tetapi jaga kanak-kanak di jalan sesak.",
        },
      ],
    },
    en: {
      title: "Evening & Night Things to Do in Little India | Guide",
      description:
        "What to do in Little India Brickfields in the evening and night: food, shopping, and atmosphere.",
      h1: "Little India in the Evening & Night",
      intro:
        "Little India gets livelier in the evening and night — lights, food, and crowds. This page gives general ideas for a late-day visit.",
      sections: [
        {
          id: "atmosphere",
          title: "Night atmosphere",
          body:
            "<p>Jalan Tun Sambanthan is lit up and shops stay open late. It is a good time to see the area's colours without midday heat.</p>",
        },
        {
          id: "dinner",
          title: "Dinner",
          body:
            "<p>South Indian restaurants serve dinner; banana leaf rice and thali are common. Pick busy ones for freshness.</p>",
        },
        {
          id: "shopping",
          title: "Late shopping",
          body:
            "<p>Textile and spice shops stay open; evening shopping is more comfortable than daytime.</p>",
        },
        {
          id: "tips",
          title: "Safety tips",
          body:
            "<p>Stay in lit, crowded areas. Watch valuables. Use marked crossings when crossing.</p>",
        },
      ],
      faq: [
        {
          q: "Is it safe at night?",
          a: "Yes in lit, crowded areas; watch your valuables.",
        },
        {
          q: "What can I do?",
          a: "Dinner, textile/spice shopping, and soaking up street atmosphere.",
        },
        {
          q: "Where for dinner?",
          a: "South Indian restaurants on Jalan Tun Sambanthan; pick busy ones.",
        },
        {
          q: "How late are shops open?",
          a: "Many stay open into the late afternoon/evening; varies by premise.",
        },
        {
          q: "Transport back?",
          a: "Tun Sambanthan monorail and KL Sentral are nearby; plan ahead.",
        },
        {
          q: "Family friendly?",
          a: "Yes, but keep children close on crowded streets.",
        },
      ],
    },
  },
  {
    slug: "malls-near-little-india",
    group: "shopping",
    related: ["rainy-day-plan", "kl-sentral-walk", "cafes-brickfields"],
    ms: {
      title: "Pusat Beli-belah Berdekatan Little India | NU Sentral",
      description:
        "Panduan pusat beli-belah berhampiran Little India: NU Sentral dan KL Sentral untuk berhawa dingin.",
      h1: "Pusat Beli-belah Berdekatan",
      intro:
        "Jika anda mahu ruang berhawa dingin, NU Sentral bersambung dengan KL Sentral dan berhampiran Little India. Panduan umum tanpa menyebut penyewa tertentu.",
      sections: [
        {
          id: "nu-sentral",
          title: "NU Sentral",
          body:
            "<p>Kompleks ini bersambung terus dengan KL Sentral dan menawarkan kedai, makanan, dan ruang berhawa dingin. Ia titik berteduh dan bertukar pengangkutan.</p>",
        },
        {
          id: "akses",
          title: "Akses",
          body:
            "<p>NU Sentral boleh dihubungi dengan berjalan singkat dari Little India atau terus dari stesen KL Sentral tanpa keluar hujan.</p>",
        },
        {
          id: "guna",
          title: "Kegunaan untuk pelawat",
          body:
            "<ul><li>Tandas bersih berhawa dingin.</li><li>Pilihan makanan pelbagai.</li><li>Tempat berehat dari cuaca.</li></ul>",
        },
        {
          id: "tips",
          title: "Tips",
          body:
            "<p>Gunakan sebagai titik permulaan atau penamat lawatan. Semak waktu operasi kompleks sebelum bergantung kepadanya.</p>",
        },
      ],
      faq: [
        {
          q: "Pusat beli-belah apa berdekatan?",
          a: "NU Sentral bersambung dengan KL Sentral, berhampiran Little India.",
        },
        {
          q: "Bersambung dengan KL Sentral?",
          a: "Ya, laluan berteduh terus dari stesen.",
        },
        {
          q: "Ada tandas?",
          a: "Ya, tandas bersih berhawa dingin tersedia dalam kompleks.",
        },
        {
          q: "Ada makanan?",
          a: "Ya, pelbagai pilihan makanan dalam kompleks.",
        },
        {
          q: "Tempat berteduh dari hujan?",
          a: "Ya, NU Sentral sesuai berteduh dan bertukar pengangkutan.",
        },
        {
          q: "Waktu operasi?",
          a: "Berbeza mengikut premis; semak sebelum bergantung.",
        },
      ],
    },
    en: {
      title: "Malls near Little India | NU Sentral",
      description:
        "A guide to malls near Little India: NU Sentral and KL Sentral for air-conditioning.",
      h1: "Malls Nearby",
      intro:
        "If you want air-conditioned space, NU Sentral connects to KL Sentral and is near Little India. General guidance without naming specific tenants.",
      sections: [
        {
          id: "nu-sentral",
          title: "NU Sentral",
          body:
            "<p>This complex connects directly to KL Sentral and offers shops, food, and air-conditioned space. It is a shelter and transport interchange point.</p>",
        },
        {
          id: "access",
          title: "Access",
          body:
            "<p>NU Sentral is a short walk from Little India, or directly from KL Sentral station without going out in the rain.</p>",
        },
        {
          id: "use",
          title: "Use for visitors",
          body:
            "<ul><li>Clean, air-conditioned toilets.</li><li>Varied food choices.</li><li>A place to rest from the weather.</li></ul>",
        },
        {
          id: "tips",
          title: "Tips",
          body:
            "<p>Use it as a start or end point for your visit. Check the complex's operating hours before relying on it.</p>",
        },
      ],
      faq: [
        {
          q: "What mall is nearby?",
          a: "NU Sentral connects to KL Sentral, near Little India.",
        },
        {
          q: "Connected to KL Sentral?",
          a: "Yes, a covered walkway directly from the station.",
        },
        {
          q: "Are there toilets?",
          a: "Yes, clean, air-conditioned toilets are in the complex.",
        },
        {
          q: "Is there food?",
          a: "Yes, varied food choices in the complex.",
        },
        {
          q: "Shelter from rain?",
          a: "Yes, NU Sentral is good for shelter and changing transport.",
        },
        {
          q: "Operating hours?",
          a: "Varies by tenant; check before relying on it.",
        },
      ],
    },
  },
  {
    slug: "half-day-itinerary",
    group: "itinerary",
    related: ["one-day-itinerary", "brickfields-walking-route", "banana-leaf-rice"],
    ms: {
      title: "Itinerari Separuh Hari Little India Brickfields",
      description:
        "Cadangan itinerari separuh hari di Little India Brickfields: laluan santai dengan makan dan kuil.",
      h1: "Itinerari Separuh Hari Little India",
      intro:
        "Jika anda mempunyai separuh hari, ini cadangan umum untuk menikmati Little India Brickfields tanpa tergesa-gesa. Laraskan mengikut rentak anda.",
      sections: [
        {
          id: "pagi",
          title: "Pagi (2 jam)",
          body:
            "<ul><li>Tiba melalui KL Sentral atau monorel Tun Sambanthan.</li><li>Berjalan Jalan Tun Sambanthan dan lihat kuil berdekatan.</li><li>Sarapan roti atau nasi daun pisang.</li></ul>",
        },
        {
          id: "tengah",
          title: "Tengah hari (1.5 jam)",
          body:
            "<p>Singgah kedai tekstil atau rempah, kemudian berehat berhawa dingin di NU Sentral jika panas.</p>",
        },
        {
          id: "petang",
          title: "Petang (1 jam)",
          body:
            "<p>Beli manisan atau snek, dan tamat dengan teh sebelum kembali ke KL Sentral.</p>",
        },
        {
          id: "tips",
          title: "Tips",
          body:
            "<p>Datang pagi untuk mengelak panas dan orang ramai. Bawa air dan kasut selesa.</p>",
        },
      ],
      faq: [
        {
          q: "Berapa jam diperlukan?",
          a: "Anggaran 4–5 jam santai termasuk makan.",
        },
        {
          q: "Di manakah mula?",
          a: "KL Sentral atau stesen monorel Tun Sambanthan.",
        },
        {
          q: "Boleh dengan kanak-kanak?",
          a: "Ya, tetapi bawa air dan jaga di jalan sesak.",
        },
        {
          q: "Ada hentian makan?",
          a: "Ya, sarapan dan snek petang disyorkan.",
        },
        {
          q: "Pengangkutan?",
          a: "Monorel dan KL Sentral berdekatan.",
        },
        {
          q: "Hari terbaik?",
          a: "Hari bekerja pagi lebih kurang sesak.",
        },
      ],
    },
    en: {
      title: "Half-Day Itinerary Little India Brickfields",
      description:
        "A half-day itinerary for Little India Brickfields: a relaxed route with food and temples.",
      h1: "Half-Day Itinerary Little India",
      intro:
        "If you have half a day, here is a general suggestion to enjoy Little India Brickfields without rushing. Adjust to your pace.",
      sections: [
        {
          id: "morning",
          title: "Morning (2 hrs)",
          body:
            "<ul><li>Arrive via KL Sentral or Tun Sambanthan monorail.</li><li>Walk Jalan Tun Sambanthan and see nearby temples.</li><li>Breakfast on bread or banana leaf rice.</li></ul>",
        },
        {
          id: "midday",
          title: "Midday (1.5 hrs)",
          body:
            "<p>Stop at a textile or spice shop, then rest in air-conditioning at NU Sentral if it is hot.</p>",
        },
        {
          id: "afternoon",
          title: "Afternoon (1 hr)",
          body:
            "<p>Buy sweets or snacks, and end with tea before returning to KL Sentral.</p>",
        },
        {
          id: "tips",
          title: "Tips",
          body:
            "<p>Come in the morning to avoid heat and crowds. Bring water and comfortable shoes.</p>",
        },
      ],
      faq: [
        {
          q: "How many hours?",
          a: "About 4–5 relaxed hours including food.",
        },
        {
          q: "Where do I start?",
          a: "KL Sentral or Tun Sambanthan monorail station.",
        },
        {
          q: "With children?",
          a: "Yes, but bring water and watch crowded streets.",
        },
        {
          q: "Food stops?",
          a: "Yes, breakfast and an afternoon snack are recommended.",
        },
        {
          q: "Transport?",
          a: "Monorail and KL Sentral are nearby.",
        },
        {
          q: "Best day?",
          a: "Weekday mornings are less crowded.",
        },
      ],
    },
  },
  {
    slug: "one-day-itinerary",
    group: "itinerary",
    related: ["half-day-itinerary", "muzium-negara", "brickfields-walking-route"],
    ms: {
      title: "Itinerari Sehari Little India Brickfields + Sekitar",
      description:
        "Cadangan itinerari sehari: Little India, Muzium Negara, dan Stesen Keretapi lama.",
      h1: "Itinerari Sehari di Brickfields",
      intro:
        "Untuk hari penuh, gabungkan Little India dengan mercu tarik berdekatan seperti Muzium Negara dan Stesen Keretapi lama. Ini cadangan umum; laraskan mengikut tenaga anda.",
      sections: [
        {
          id: "pagi",
          title: "Pagi",
          body:
            "<p>Mula dengan Muzium Negara untuk konteks sejarah, kemudian berjalan ke Little India melalui KL Sentral.</p>",
        },
        {
          id: "tengah",
          title: "Tengah hari",
          body:
            "<p>Terokai Jalan Tun Sambanthan, kuil, dan makan tengah hari di restoran selatan India.</p>",
        },
        {
          id: "petang",
          title: "Petang",
          body:
            "<p>Lawat Stesen Keretapi lama untuk foto seni bina, diikuti beli-belah tekstil dan manisan.</p>",
        },
        {
          id: "tips",
          title: "Tips",
          body:
            "<ul><li>Gunakan KL Sentral sebagai pangkalan transit.</li><li>Bawa payung jika musim hujan.</li><li>Rehat berhawa dingin di NU Sentral.</li></ul>",
        },
      ],
      faq: [
        {
          q: "Bolehkah sehari penuh?",
          a: "Ya, gabungkan Little India, Muzium Negara, dan Stesen Keretapi lama.",
        },
        {
          q: "Cara gabung muzium?",
          a: "Mula pagi di muzium, kemudian jalan ke Little India.",
        },
        {
          q: "Boleh dengan kanak-kanak?",
          a: "Ya, tetapi rancang rehat dan bawa air.",
        },
        {
          q: "Pengangkutan?",
          a: "KL Sentral sebagai hab transit utama.",
        },
        {
          q: "Ada makan tengah hari?",
          a: "Ya, restoran selatan India di Jalan Tun Sambanthan.",
        },
        {
          q: "Musim terbaik?",
          a: "Bulan lebih kering (kira-kira April–September) lebih selesa.",
        },
      ],
    },
    en: {
      title: "Full-Day Itinerary Little India Brickfields + Around",
      description:
        "A full-day itinerary: Little India, the National Museum, and the old railway station.",
      h1: "Full-Day Itinerary in Brickfields",
      intro:
        "For a full day, combine Little India with nearby landmarks like the National Museum and the old railway station. This is a general suggestion; adjust to your energy.",
      sections: [
        {
          id: "morning",
          title: "Morning",
          body:
            "<p>Start at the National Museum for historical context, then walk to Little India via KL Sentral.</p>",
        },
        {
          id: "midday",
          title: "Midday",
          body:
            "<p>Explore Jalan Tun Sambanthan, the temples, and have lunch at a South Indian restaurant.</p>",
        },
        {
          id: "afternoon",
          title: "Afternoon",
          body:
            "<p>Visit the old railway station for architecture photos, followed by textile and sweet shopping.</p>",
        },
        {
          id: "tips",
          title: "Tips",
          body:
            "<ul><li>Use KL Sentral as your transit base.</li><li>Bring an umbrella in the rainy season.</li><li>Rest in air-conditioning at NU Sentral.</li></ul>",
        },
      ],
      faq: [
        {
          q: "Can I do a full day?",
          a: "Yes, combine Little India, the National Museum, and the old railway station.",
        },
        {
          q: "How to add the museum?",
          a: "Start in the morning at the museum, then walk to Little India.",
        },
        {
          q: "With children?",
          a: "Yes, but plan rests and bring water.",
        },
        {
          q: "Transport?",
          a: "KL Sentral is the main transit hub.",
        },
        {
          q: "Is there lunch?",
          a: "Yes, South Indian restaurants on Jalan Tun Sambanthan.",
        },
        {
          q: "Best season?",
          a: "Drier months (roughly April–September) are more comfortable.",
        },
      ],
    },
  },
  {
    slug: "photo-spots-little-india",
    group: "itinerary",
    related: ["brickfields-heritage-walk", "sri-kandaswamy-kovil", "things-to-do-evening"],
    ms: {
      title: "Tempat Foto di Little India Brickfields | Panduan",
      description:
        "Tempat fotografi di Little India Brickfields: kuil, jalan berwarna, dan tips cahaya.",
      h1: "Tempat Foto di Little India",
      intro:
        "Little India Brickfields penuh warna — kuil, bendera, dan kedai. Halaman ini cadangan umum untuk fotografi tanpa mengganggu ibadat.",
      sections: [
        {
          id: "kawasan",
          title: "Kawasan berwarna",
          body:
            "<p>Jalan Tun Sambanthan dengan kedai dan hiasan memberi latar warna-warni. Waktu pagi atau petang memberi cahaya lebih lembut.</p>",
        },
        {
          id: "kuil",
          title: "Kuil & seni bina",
          body:
            "<p>Gopuram kuil dan Stesen Keretapi lama adalah subjek ikonik. Minta kebenaran sebelum merakam di dalam kuil.</p>",
        },
        {
          id: "tips",
          title: "Tips fotografi",
          body:
            "<ul><li>Elak kilat dalam kuil.</li><li>Hormati ibadat; jangan halang laluan.</li><li>Guna cahaya semula jadi pada pagi/petang.</li></ul>",
        },
        {
          id: "etika",
          title: "Etika",
          body:
            "<p>Sentiasa minta kebenaran merakam orang. Jaga peralatan dari hujan dan orang ramai.</p>",
        },
      ],
      faq: [
        {
          q: "Tempat terbaik?",
          a: "Jalan Tun Sambanthan berwarna dan gopuram kuil; Stesen Keretapi lama ikonik.",
        },
        {
          q: "Masa cahaya terbaik?",
          a: "Pagi atau petang memberi cahaya lebih lembut.",
        },
        {
          q: "Boleh foto kuil?",
          a: "Ya, tetapi minta kebenaran dan elak kilat serta upacara.",
        },
        {
          q: "Bagaimana menghormati?",
          a: "Jangan halang ibadat atau laluan; rakam dengan senyap.",
        },
        {
          q: "Peralatan?",
          a: "Bawa perlindungan hujan dan jaga dari orang ramai.",
        },
        {
          q: "Selamat?",
          a: "Ya di kawasan bernyala; jaga peralatan berharga.",
        },
      ],
    },
    en: {
      title: "Photo Spots in Little India Brickfields | Guide",
      description:
        "Photography spots in Little India Brickfields: temples, colourful streets, and light tips.",
      h1: "Photo Spots in Little India",
      intro:
        "Little India Brickfields is full of colour — temples, flags, and shops. This page gives general photography suggestions without disturbing worship.",
      sections: [
        {
          id: "areas",
          title: "Colourful areas",
          body:
            "<p>Jalan Tun Sambanthan with shops and decorations gives a colourful backdrop. Morning or evening gives softer light.</p>",
        },
        {
          id: "temples",
          title: "Temples & architecture",
          body:
            "<p>Temple gopurams and the old railway station are iconic subjects. Ask permission before recording inside temples.</p>",
        },
        {
          id: "tips",
          title: "Photography tips",
          body:
            "<ul><li>Avoid flash inside temples.</li><li>Respect worship; do not block paths.</li><li>Use natural light in the morning/evening.</li></ul>",
        },
        {
          id: "etiquette",
          title: "Etiquette",
          body:
            "<p>Always ask permission to photograph people. Protect gear from rain and crowds.</p>",
        },
      ],
      faq: [
        {
          q: "Best spots?",
          a: "Colourful Jalan Tun Sambanthan and temple gopurams; the old railway station is iconic.",
        },
        {
          q: "Best light time?",
          a: "Morning or evening gives softer light.",
        },
        {
          q: "Can I photograph temples?",
          a: "Yes, but ask permission and avoid flash and ceremonies.",
        },
        {
          q: "How to be respectful?",
          a: "Do not block worship or paths; shoot quietly.",
        },
        {
          q: "Gear?",
          a: "Bring rain protection and guard against crowds.",
        },
        {
          q: "Safe?",
          a: "Yes in lit areas; guard valuable gear.",
        },
      ],
    },
  },
  {
    slug: "free-things-to-do",
    group: "itinerary",
    related: ["brickfields-walking-route", "photo-spots-little-india", "half-day-itinerary"],
    ms: {
      title: "Aktiviti Percuma di Little India Brickfields | Panduan",
      description:
        "Perkara percuma untuk dilakukan di Little India Brickfields: berjalan, melihat kuil dari luar, dan suasana.",
      h1: "Aktiviti Percuma di Little India",
      intro:
        "Little India boleh dinikmati dengan bajet rendah. Berjalan kaki, melihat seni bina, dan menyerap suasana adalah percuma. Halaman ini senarai umum.",
      sections: [
        {
          id: "berjalan",
          title: "Berjalan kaki",
          body:
            "<p>Terokai Jalan Tun Sambanthan dengan berjalan — percuma dan memberi rasa kawasan. Kasut selesa disyorkan.</p>",
        },
        {
          id: "seni",
          title: "Seni bina & kuil (luar)",
          body:
            "<p>Lihat gopuram kuil dan Stesen Keretapi lama dari luar tanpa kos. Masuk ke dalam kuil biasanya juga percuma.</p>",
        },
        {
          id: "suasana",
          title: "Suasana & budaya",
          body:
            "<p>Menonton kehidupan jalanan, bau rempah, dan hiasan perayaan adalah pengalaman percuma.</p>",
        },
        {
          id: "tips",
          title: "Tips bajet",
          body:
            "<ul><li>Bawa air sendiri.</li><li>Guna pengangkutan awam dari KL Sentral.</li><li>Elak membeli secara impulsif.</li></ul>",
        },
      ],
      faq: [
        {
          q: "Apa yang percuma?",
          a: "Berjalan kaki, lihat seni bina, dan serap suasana jalanan.",
        },
        {
          q: "Masuk kuil percuma?",
          a: "Kebiasaannya ya; sumbangan dialu-alukan.",
        },
        {
          q: "Lawatan berjalan percuma?",
          a: "Ya, terokai dengan berjalan sendiri tanpa kos.",
        },
        {
          q: "Makanan bajet?",
          a: "Makanan jalanan dan restoran ada pilihan bajet; bandingkan.",
        },
        {
          q: "Mesra keluarga?",
          a: "Ya, berjalan kaki percuma sesuai semua peringkat umur.",
        },
        {
          q: "Pengangkutan murah?",
          a: "Pengangkutan awam dari KL Sentral paling menjimatkan.",
        },
      ],
    },
    en: {
      title: "Free Things to Do in Little India Brickfields | Guide",
      description:
        "Free things to do in Little India Brickfields: walking, viewing temples from outside, and atmosphere.",
      h1: "Free Things to Do in Little India",
      intro:
        "Little India can be enjoyed on a low budget. Walking, viewing architecture, and soaking up the atmosphere are free. This page lists general ideas.",
      sections: [
        {
          id: "walking",
          title: "Walking",
          body:
            "<p>Explore Jalan Tun Sambanthan on foot — free and gives a feel of the area. Comfortable shoes recommended.</p>",
        },
        {
          id: "architecture",
          title: "Architecture & temples (outside)",
          body:
            "<p>See temple gopurams and the old railway station from outside at no cost. Entering temples is usually also free.</p>",
        },
        {
          id: "atmosphere",
          title: "Atmosphere & culture",
          body:
            "<p>Watching street life, the smell of spices, and festival decorations is a free experience.</p>",
        },
        {
          id: "tips",
          title: "Budget tips",
          body:
            "<ul><li>Bring your own water.</li><li>Use public transport from KL Sentral.</li><li>Avoid impulse buying.</li></ul>",
        },
      ],
      faq: [
        {
          q: "What is free?",
          a: "Walking, viewing architecture, and soaking up street atmosphere.",
        },
        {
          q: "Is temple entry free?",
          a: "Usually yes; donations are welcomed.",
        },
        {
          q: "Is the walk free?",
          a: "Yes, explore on your own foot at no cost.",
        },
        {
          q: "Budget food?",
          a: "Street food and restaurants have budget options; compare.",
        },
        {
          q: "Family friendly?",
          a: "Yes, free walking suits all ages.",
        },
        {
          q: "Cheap transport?",
          a: "Public transport from KL Sentral is most economical.",
        },
      ],
    },
  },
  {
    slug: "little-india-to-batu-caves",
    group: "itinerary",
    related: ["kl-sentral-walk", "one-day-itinerary", "accessibility-luggage"],
    ms: {
      title: "Little India ke Batu Caves | Panduan Perjalanan",
      description:
        "Cara ke Batu Caves dari Little India Brickfields: pengangkutan, masa, dan gabungan lawatan.",
      h1: "Dari Little India ke Batu Caves",
      intro:
        "Batu Caves adalah kuil gua ikonik kira-kira di pinggir KL. Dari Little India, anda boleh menggunakan KTM Komuter dari KL Sentral. Panduan ini umum; sahkan jadual dan tambang semasa perancangan.",
      sections: [
        {
          id: "pengangkutan",
          title: "Pengangkutan",
          body:
            "<p>KTM Komuter dari KL Sentral ke stesen Batu Caves adalah pilihan lazim. Masa dan tambang berubah; semak jadual rasmi sebelum pergi.</p>",
        },
        {
          id: "masa",
          title: "Masa & jarak",
          body:
            "<p>Perjalanan bergantung kepada kekerapan tren; rancang separuh hari termasuk perjalanan. Tiba lebih awal untuk mengelak kesesakan.</p>",
        },
        {
          id: "tips",
          title: "Tips lawatan",
          body:
            "<ul><li>Pakai kasut selesa untuk tangga.</li><li>Bawa air; gua boleh panas.</li><li>Hormati adat kuil.</li></ul>",
        },
        {
          id: "gabung",
          title: "Gabung dengan Little India",
          body:
            "<p>Lakukan Little India pada satu bahagian hari dan Batu Caves pada bahagian lain, dengan KL Sentral sebagai hab.</p>",
        },
      ],
      faq: [
        {
          q: "Bagaimana ke sana?",
          a: "KTM Komuter dari KL Sentral ke stesen Batu Caves.",
        },
        {
          q: "Berapa lama?",
          a: "Bergantung kekerapan tren; rancang separuh hari termasuk perjalanan.",
        },
        {
          q: "Berapa tambang?",
          a: "Tambang berubah; semak jadual rasmi sebelum pergi.",
        },
        {
          q: "Boleh digabung?",
          a: "Ya, bahagikan hari dengan Little India dan gunakan KL Sentral sebagai hab.",
        },
        {
          q: "Masa terbaik?",
          a: "Tiba awal untuk elak kesesakan dan panas.",
        },
        {
          q: "Akses kerusi roda?",
          a: "Tangga gua ramai; semak kebolehcapaian dengan pihak kuil.",
        },
      ],
    },
    en: {
      title: "Little India to Batu Caves | Travel Guide",
      description:
        "How to get to Batu Caves from Little India Brickfields: transport, time, and combining the visit.",
      h1: "From Little India to Batu Caves",
      intro:
        "Batu Caves is an iconic cave temple roughly on the edge of KL. From Little India, you can take the KTM Komuter from KL Sentral. This is general guidance; confirm schedules and fares when planning.",
      sections: [
        {
          id: "transport",
          title: "Transport",
          body:
            "<p>The KTM Komuter from KL Sentral to Batu Caves station is the common choice. Times and fares change; check the official schedule before going.</p>",
        },
        {
          id: "time",
          title: "Time & distance",
          body:
            "<p>The trip depends on train frequency; plan a half day including travel. Arrive earlier to avoid crowds.</p>",
        },
        {
          id: "tips",
          title: "Visit tips",
          body:
            "<ul><li>Wear comfortable shoes for the steps.</li><li>Bring water; the caves can be hot.</li><li>Respect temple customs.</li></ul>",
        },
        {
          id: "combine",
          title: "Combine with Little India",
          body:
            "<p>Do Little India for part of the day and Batu Caves for another, using KL Sentral as the hub.</p>",
        },
      ],
      faq: [
        {
          q: "How do I get there?",
          a: "KTM Komuter from KL Sentral to Batu Caves station.",
        },
        {
          q: "How long?",
          a: "Depends on train frequency; plan a half day including travel.",
        },
        {
          q: "What is the fare?",
          a: "Fares change; check the official schedule before going.",
        },
        {
          q: "Can it be combined?",
          a: "Yes, split the day with Little India using KL Sentral as the hub.",
        },
        {
          q: "Best time?",
          a: "Arrive early to avoid crowds and heat.",
        },
        {
          q: "Wheelchair access?",
          a: "The cave steps are many; check accessibility with the temple.",
        },
      ],
    },
  },
  {
    slug: "little-india-to-klcc",
    group: "itinerary",
    related: ["kl-sentral-walk", "one-day-itinerary", "half-day-itinerary"],
    ms: {
      title: "Little India ke KLCC | Panduan Perjalanan",
      description:
        "Cara ke KLCC (Menara Berkembar Petronas) dari Little India Brickfields: transit dan masa.",
      h1: "Dari Little India ke KLCC",
      intro:
        "KLCC dan Menara Berkembar Petronas berada di pusat bandar, kira-kira 20–30 minit transit dari Brickfields. Gunakan LRT atau monorel dari KL Sentral. Sahkan jadual semasa perancangan.",
      sections: [
        {
          id: "transit",
          title: "Transit",
          body:
            "<p>Dari KL Sentral, LRT atau monorel menghubungkan ke stesen berdekatan KLCC. Masa dan laluan berbeza; semak peta transit rasmi.</p>",
        },
        {
          id: "masa",
          title: "Masa & jarak",
          body:
            "<p>Perjalanan biasanya 20–30 minit bergantung transit dan pertukaran. Rancang masa lebih untuk kesesakan waktu puncak.</p>",
        },
        {
          id: "klcc",
          title: "Apa di KLCC",
          body:
            "<p>Taman, pusat beli-belah, dan taman air berhampiran Menara Berkembar. Baik untuk petang selepas Little India.</p>",
        },
        {
          id: "tips",
          title: "Tips",
          body:
            "<p>Guna kad Touch n Go atau aplikasi transit. Elak waktu puncak jika boleh.</p>",
        },
      ],
      faq: [
        {
          q: "Bagaimana ke sana?",
          a: "LRT atau monorel dari KL Sentral ke stesen berdekatan KLCC.",
        },
        {
          q: "Berapa lama?",
          a: "Biasanya 20–30 minit bergantung transit dan pertukaran.",
        },
        {
          q: "Berapa tambang?",
          a: "Berbeza mengikut laluan; semak peta transit rasmi.",
        },
        {
          q: "Boleh digabung?",
          a: "Ya, buat Little India siang dan KLCC petang.",
        },
        {
          q: "Masa terbaik?",
          a: "Elak waktu puncak; petang di KLCC menyenangkan.",
        },
        {
          q: "Ada taman?",
          a: "Ya, taman dan taman air berhampiran Menara Berkembar.",
        },
      ],
    },
    en: {
      title: "Little India to KLCC | Travel Guide",
      description:
        "How to get to KLCC (Petronas Twin Towers) from Little India Brickfields: transit and time.",
      h1: "From Little India to KLCC",
      intro:
        "KLCC and the Petronas Twin Towers are in the city centre, about 20–30 minutes of transit from Brickfields. Use the LRT or monorail from KL Sentral. Confirm schedules when planning.",
      sections: [
        {
          id: "transit",
          title: "Transit",
          body:
            "<p>From KL Sentral, the LRT or monorail connects to stations near KLCC. Times and routes vary; check the official transit map.</p>",
        },
        {
          id: "time",
          title: "Time & distance",
          body:
            "<p>The trip is usually 20–30 minutes depending on transit and transfers. Allow extra time for peak crowding.</p>",
        },
        {
          id: "klcc",
          title: "What is at KLCC",
          body:
            "<p>Parks, a shopping centre, and water park near the Twin Towers. Nice for the evening after Little India.</p>",
        },
        {
          id: "tips",
          title: "Tips",
          body:
            "<p>Use a Touch n Go card or transit app. Avoid peak hours if possible.</p>",
        },
      ],
      faq: [
        {
          q: "How do I get there?",
          a: "LRT or monorail from KL Sentral to stations near KLCC.",
        },
        {
          q: "How long?",
          a: "Usually 20–30 minutes depending on transit and transfers.",
        },
        {
          q: "What is the fare?",
          a: "Varies by route; check the official transit map.",
        },
        {
          q: "Can it be combined?",
          a: "Yes, do Little India by day and KLCC in the evening.",
        },
        {
          q: "Best time?",
          a: "Avoid peak hours; the evening at KLCC is pleasant.",
        },
        {
          q: "Is there a park?",
          a: "Yes, a park and water park near the Twin Towers.",
        },
      ],
    },
  },
  {
    slug: "brickfields-walking-route",
    group: "itinerary",
    related: ["brickfields-heritage-walk", "half-day-itinerary", "free-things-to-do"],
    ms: {
      title: "Laluan Berjalan Brickfields | Panduan Peta Sendiri",
      description:
        "Laluan berjalan sendiri di Brickfields menggabungkan Little India, kuil, dan mercu tarik warisan.",
      h1: "Laluan Berjalan Brickfields",
      intro:
        "Brickfields sesuai di terokai dengan berjalan. Laluan ini cadangan umum menggabungkan inti Little India dengan mercu tarik berdekatan dalam satu pusingan santai.",
      sections: [
        {
          id: "mula",
          title: "Mula",
          body:
            "<p>Mula dari stesen monorel Tun Sambanthan atau KL Sentral, kemudian masuk ke Jalan Tun Sambanthan.</p>",
        },
        {
          id: "laluan",
          title: "Laluan",
          body:
            "<ul><li>Lalui kedai tekstil dan restoran.</li><li>Singgah kuil Hindu dan Buddha.</li><li>Tamat di Stesen Keretapi lama untuk foto.</li></ul>",
        },
        {
          id: "jarak",
          title: "Jarak & masa",
          body:
            "<p>Radius berjalan kira-kira 1–2 km; anggarkan 2–3 jam santai. Laraskan mengikut cuaca.</p>",
        },
        {
          id: "tips",
          title: "Tips",
          body:
            "<p>Kaki lima tidak seragam; pakai kasut selesa. Datang pagi. Bawa air dan payung.</p>",
        },
      ],
      faq: [
        {
          q: "Di manakah mula?",
          a: "Stesen monorel Tun Sambanthan atau KL Sentral.",
        },
        {
          q: "Berapa lama?",
          a: "Anggaran 2–3 jam santai dalam radius 1–2 km.",
        },
        {
          q: "Mesra kerusi roda?",
          a: "Sebahagian; kaki lima tidak seragam, rancang laluan.",
        },
        {
          q: "Ada peta?",
          a: "Gunakan panduan laluan ini sebagai rujukan umum.",
        },
        {
          q: "Masa terbaik?",
          a: "Pagi lebih nyaman; petang lebih meriah.",
        },
        {
          q: "Boleh digabung?",
          a: "Ya, gabung dengan Muzium Negara dan Stesen Keretapi lama.",
        },
      ],
    },
    en: {
      title: "Brickfields Walking Route | Self-Guided Map",
      description:
        "A self-guided walking route in Brickfields combining Little India, temples, and heritage landmarks.",
      h1: "Brickfields Walking Route",
      intro:
        "Brickfields is best explored on foot. This route is a general suggestion combining the core of Little India with nearby landmarks in one relaxed loop.",
      sections: [
        {
          id: "start",
          title: "Start",
          body:
            "<p>Start from Tun Sambanthan monorail station or KL Sentral, then enter Jalan Tun Sambanthan.</p>",
        },
        {
          id: "route",
          title: "Route",
          body:
            "<ul><li>Pass textile shops and restaurants.</li><li>Stop by Hindu and Buddhist temples.</li><li>End at the old railway station for photos.</li></ul>",
        },
        {
          id: "distance",
          title: "Distance & time",
          body:
            "<p>Walking radius about 1–2 km; budget 2–3 relaxed hours. Adjust for weather.</p>",
        },
        {
          id: "tips",
          title: "Tips",
          body:
            "<p>Pavements are uneven; wear comfortable shoes. Come in the morning. Bring water and an umbrella.</p>",
        },
      ],
      faq: [
        {
          q: "Where do I start?",
          a: "Tun Sambanthan monorail station or KL Sentral.",
        },
        {
          q: "How long?",
          a: "About 2–3 relaxed hours within a 1–2 km radius.",
        },
        {
          q: "Wheelchair friendly?",
          a: "Partly; pavements are uneven, so plan the route.",
        },
        {
          q: "Is there a map?",
          a: "Use this route guide as a general reference.",
        },
        {
          q: "Best time?",
          a: "Morning is more comfortable; evening is more lively.",
        },
        {
          q: "Can it be combined?",
          a: "Yes, combine with the National Museum and the old railway station.",
        },
      ],
    },
  },
];

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}

export function topicSlugs(): string[] {
  return TOPICS.map((t) => t.slug);
}
