const CONFIG = {
  seninAdin: "Efe",
  onunAdi: "Elif",

  hero: {
    baslik: "Bizim Hikayemiz",
    altBaslik: "Her anı, her gülüşü, her bakışı...",
    tarih: "6 Temmuz 2026'dan beri",
    baslangicTarihi: "2026-07-06",
  },

  fotograflar: [
    { src: "assets/photos/foto1.jpg", alt: "Peçeteden gül", caption: "El emeği bir gül, senin gibi özel..." },
    { src: "assets/photos/foto2.jpg", alt: "Gece selfie", caption: "Gecenin ortasında, seninle her yer güzel" },
    { src: "assets/photos/foto3.jpg", alt: "Aynada biz", caption: "Kollarında kaybolmak istediğim an" },
    { src: "assets/photos/foto4.jpg", alt: "Yelpaze", caption: "Arkamızda sakladığımız o tatlı sır..." },
    { src: "assets/photos/foto5.jpg", alt: "Araba selfie", caption: "Güneşin altında, seninle yolculuk" },
    { src: "assets/photos/foto6.jpg", alt: "Tavşan şapka", caption: "Gülüşünle dünyam aydınlanıyor" },
    { src: "assets/photos/foto7.jpg", alt: "Polaroid anılar", caption: "06.07.2023 — Her karede bir hatıra" },
    { src: "assets/photos/foto8.jpg", alt: "Karanlıkta biz", caption: "Karanlıkta bile parlayan gülüşün..." },
    { src: "assets/photos/foto9.jpg", alt: "Kahkahan", caption: "Bu kahkahan benim en sevdiğim melodi" },
    { src: "assets/photos/foto10.jpg", alt: "Uyurken", caption: "En huzurlu anlarım, senin yanında" },
    { src: "assets/photos/foto11.jpg", alt: "Gece dışarıda", caption: "Deli dolu, tam bizlik bir an..." },
    { src: "assets/photos/foto12.jpg", alt: "Araba selfie", caption: "Omzunda huzur, yanında mutluluk..." },
    { src: "assets/photos/foto13.jpg", alt: "Batman maskesi", caption: "Gece yarısı, Batman maskesi... Gotham'ı kurtarmaya giderken aklımda sadece sen vardın 🖤" },
    { src: "assets/photos/foto14.jpg", alt: "Fe Fıstık", caption: "Fe Fıstık — bana aldığın ilk ve tek oyuncak. Her yolculuğumuzda yanımızda, tıpkı senin gibi..." },
    { src: "assets/photos/foto15.jpg", alt: "Ay dönümü yemeği", caption: "Ay dönümümüz... Deniz kenarında, mor çiçeklerle, en güzel masada — sadece sen ve ben 💕" },
    { src: "assets/photos/foto16.jpg", alt: "Mutfağımızda", caption: "Hamurun üstüne yazdığımız isimler... ELİF & EFE — her börekte bir parça aşk" },
    { src: "assets/photos/foto17.jpg", alt: "Beraber pişiriyoruz", caption: "Beraber hazırladığımız her şey daha lezzetli, çünkü içinde sevgi var..." },
    { src: "assets/photos/foto18.jpg", alt: "Mutfağımız", caption: "Ellerimizle yoğurduğumuz hamur, kalplerimizle pişirdiğimiz anılar..." },
    { src: "assets/photos/foto19.jpg", alt: "Havuzda", caption: "Havuzda, güneşte, pembe şapkanla — yazın en güzel anı" },
    { src: "assets/photos/foto20.jpg", alt: "Küçük kızlarım", caption: "İkiniz de aynı anda... Küçük kızlarım, o gün çok tatlıydınız 💕" },
    { src: "assets/photos/foto21.jpg", alt: "Köpekle gece", caption: "Üçümüzün gecesi — sen, ben ve minik prensesimiz..." },
    { src: "assets/photos/foto22.jpg", alt: "Plajda", caption: "Plajda, güneşte, şezlongda — en güzel manzara yine sensin..." },
    { src: "assets/photos/foto23.jpg", alt: "Romantik akşam yemeği", caption: "Işıklar altında, burnumuz burnumuza... Sadece sen, sadece ben" },
    { src: "assets/photos/foto24.jpg", alt: "Öpücük", caption: "Her öpücükte bir dünya güzel, her gülüşünde bir cennet..." },
    { src: "assets/photos/foto25.jpg", alt: "Gece selfie", caption: "Gecemizin en güzel çizimi — ikimiz, bir hikaye..." },
    { src: "assets/photos/foto26.jpg", alt: "Kedimizle", caption: "Üçümüzün huzuru — sen, ben ve minik dostumuz..." },
    { src: "assets/photos/foto27.jpg", alt: "Ayna selfie", caption: "Aynadaki en güzel yansımamız — gülüşünle parlıyoruz" },
    { src: "assets/photos/foto28.jpg", alt: "Yaz günü", caption: "Yaz güneşinde, yanaklarından öptüm — mutluluğun bulaşıcı..." },
    { src: "assets/photos/foto29.jpg", alt: "Yatakta", caption: "Yastıkların arasında kaybolmak istediğim anlar..." },
    { src: "assets/photos/foto30.jpg", alt: "Kafede", caption: "Deli dolu anlarımız — dilimizi çıkardığımız her karede aşk..." },
    { src: "assets/photos/foto31.jpg", alt: "Hastanede", caption: "Zor günlerde de yanındayım. Gülümsediğin her an, her şeye değer..." },
    { src: "assets/photos/foto32.jpg", alt: "Evde", caption: "Evde, ayaklarımız birbirine değerken — en sade haliyle mutluyuz" },
    { src: "assets/photos/foto33.jpg", alt: "Çocukluk", caption: "Belki küçükken de böyle sarılmalıydık... Kader bizi buldu" },
    { src: "assets/photos/foto34.jpg", alt: "Bahçede", caption: "Bahçede, gülüşünle aydınlandım — en sevdiğim manzara sensin" },
  ],

  muzik: {
    otomatikBaslat: true,
    otomatikSarkiIndex: 0,
    otomatikSes: 15,
  },

  sarkilar: [
    {
      youtubeId: "89D3sqHZnWY",
      not: "İki deli bir araya gelmeliymişiz :) <3",
    },
    {
      youtubeId: "q2IMrkhSjSA",
      not: "Güldüğünde yaşadığım tarifsiz duygulara ithafen",
    },
    {
      youtubeId: "IwBS6QGsH_4",
      not: "UNUTMADIM SEVDİKLERİNDEN DEVAMMM EDELİM",
    },
    {
      youtubeId: "UQUA5rrGt48",
      not: "YÜREKTEN SEVİYORUM SENİ",
    },
    {
      youtubeId: "jWh-7JGuxTo",
      not: "ARAMA BENİ BULDUM SENİ",
    },
  ],

  hikaye: {
    baslik: "Hikayemiz",
    metin: `Sana attığım videoyu hatırlıyor musun? Bazen aslında tanışmadan ruhlar eşleşirmiş ve en uygun anda karşıya çıkarırmış. O kadar ince bir detaymış ki — her şey kusursuz olmadan kader onları karşılaştırmazmış.

Bizi karşılaştırdı. Hızlı zannettiğimiz şeyler aslında bizim için geç bile kalınmış şeyler. Bizim hikayemiz de böyle başladı.

Seni seviyorum sevgilim <3`,
  },

  notlar: [
    "Seni seviyorum. Ne zaman bir sorunla karşılaşırsak birbirimize göğüs açalım.",
    "Hiçbir şey gülümsemenden önemli değil.",
    "Işıksız odaların içerisinde güneşe açılan bir kapı gibisin <3",
  ],

  onemliTarihler: [
    {
      tarih: "1 Haziran 2026",
      baslik: "İlk Tanışma",
      aciklama: "Her şeyin başladığı o gün...",
    },
    {
      tarih: "26 Haziran 2026",
      baslik: "İlk Kahve İçtiğimiz Gün",
      aciklama: "İlk kahvemiz, ilk sohbetimiz, ilk gülüşümüz...",
    },
    {
      tarih: "7 Temmuz 2026",
      baslik: "Kalplerimizin Birleşimi",
      aciklama: "Kalplerimizin birleşimini sözlerimizle mühürlediğimiz gün.",
    },
  ],

  sesliMesaj: {
    baslik: "Sana Sesli Bir Mesajım Var",
    altBaslik: "Kulaklığını tak ve dinle...",
    dosya: "assets/audio/sesli-mesaj.m4a",
    not: "Bu ses senin için... <3",
  },

  finalMesaj: {
    baslik: "Sana Bir Sözüm Var...",
    metin: "Bu siteyi senin için yaptım. Çünkü sen benim için dünyadaki en özel insansın. Seninle geçirdiğim her an, hayatımın en güzel hediyesi. Seni çok seviyorum.",
    imza: "∞",
  },
};
