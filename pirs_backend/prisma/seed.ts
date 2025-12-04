import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Dane tên çandin...");

  // Kategorileri oluştur
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { name: "Giştî" },
      update: { nameKu: "Giştî", icon: "🌍", color: "#3B82F6", description: "Zanistiya giştî" },
      create: { name: "Giştî", nameKu: "Giştî", icon: "🌍", color: "#3B82F6", description: "Zanistiya giştî" },
    }),
    prisma.category.upsert({
      where: { name: "Dîrok" },
      update: { nameKu: "Dîrok", icon: "📜", color: "#8B5CF6", description: "Dîroka cîhanê" },
      create: { name: "Dîrok", nameKu: "Dîrok", icon: "📜", color: "#8B5CF6", description: "Dîroka cîhanê" },
    }),
    prisma.category.upsert({
      where: { name: "Erdnîgarî" },
      update: { nameKu: "Erdnîgarî", icon: "🗺️", color: "#10B981", description: "Erdnîgarî" },
      create: { name: "Erdnîgarî", nameKu: "Erdnîgarî", icon: "🗺️", color: "#10B981", description: "Erdnîgarî" },
    }),
    prisma.category.upsert({
      where: { name: "Zanist" },
      update: { nameKu: "Zanist", icon: "🔬", color: "#EF4444", description: "Zanist û teknolojî" },
      create: { name: "Zanist", nameKu: "Zanist", icon: "🔬", color: "#EF4444", description: "Zanist û teknolojî" },
    }),
    prisma.category.upsert({
      where: { name: "Wêje" },
      update: { nameKu: "Wêje û Huner", icon: "🎭", color: "#F59E0B", description: "Wêje û huner" },
      create: { name: "Wêje", nameKu: "Wêje û Huner", icon: "🎭", color: "#F59E0B", description: "Wêje û huner" },
    }),
    prisma.category.upsert({
      where: { name: "Ziman" },
      update: { nameKu: "Ziman", icon: "📖", color: "#06B6D4", description: "Zimanê Kurdî" },
      create: { name: "Ziman", nameKu: "Ziman", icon: "📖", color: "#06B6D4", description: "Zimanê Kurdî" },
    }),
    prisma.category.upsert({
      where: { name: "Werzîş" },
      update: { nameKu: "Werzîş", icon: "⚽", color: "#84CC16", description: "Werzîş û lîstik" },
      create: { name: "Werzîş", nameKu: "Werzîş", icon: "⚽", color: "#84CC16", description: "Werzîş û lîstik" },
    }),
    prisma.category.upsert({
      where: { name: "Mûzîk" },
      update: { nameKu: "Mûzîk", icon: "🎵", color: "#EC4899", description: "Mûzîk û stranbêj" },
      create: { name: "Mûzîk", nameKu: "Mûzîk", icon: "🎵", color: "#EC4899", description: "Mûzîk û stranbêj" },
    }),
  ]);

  const [gisti, dirok, erdnigari, zanist, weje, ziman, werzis, muzik] = categories;
  console.log("✅ 8 kategorî hatin afirandin");

  // Rozetler
  const badges = [
    { name: "Destpêker", nameKu: "Destpêker", description: "Yekem lîstik", icon: "🌟", color: "#FFD700", requirement: '{"games":1}' },
    { name: "Zana", nameKu: "Zana", description: "100 rast", icon: "🧠", color: "#2196F3", requirement: '{"correct":100}' },
    { name: "Şampîyon", nameKu: "Şampîyon", description: "10 serket", icon: "🏆", color: "#FF9800", requirement: '{"wins":10}' },
  ];

  for (const b of badges) {
    await prisma.badge.upsert({ where: { name: b.name }, update: b, create: b });
  }
  console.log("✅ Rozet hatin afirandin");

  // SORULAR
  const questions = [
    // GİŞTÎ - Easy
    { text: "Navê paytexta Fransa çi ye?", optionA: "Londra", optionB: "Berlin", optionC: "Parîs", optionD: "Roma", correctOption: "C", difficulty: "easy", categoryId: gisti.id },
    { text: "Di salekê de çend meh hene?", optionA: "10", optionB: "11", optionC: "12", optionD: "13", correctOption: "C", difficulty: "easy", categoryId: gisti.id },
    { text: "Kîjan heywan bi baskên xwe difirin?", optionA: "Masî", optionB: "Mar", optionC: "Teyr", optionD: "Kêzik", correctOption: "C", difficulty: "easy", categoryId: gisti.id },
    // GİŞTÎ - Medium  
    { text: "Teoriya Relativîteyê ji aliyê kê ve hat pêşxistin?", optionA: "Newton", optionB: "Bohr", optionC: "Einstein", optionD: "Hawking", correctOption: "C", difficulty: "medium", categoryId: gisti.id },
    { text: "Kîjan element sembola 'Au' ye?", optionA: "Zîv", optionB: "Aluminyûm", optionC: "Zêr", optionD: "Bakir", correctOption: "C", difficulty: "medium", categoryId: gisti.id },
    { text: "DNA di laşê mirovan de çi ye?", optionA: "Proteîn", optionB: "Maddeya genetîkî", optionC: "Vîtamîn", optionD: "Mîneral", correctOption: "B", difficulty: "medium", categoryId: gisti.id },
    // GİŞTÎ - Hard
    { text: "Antibiyotîkên yekem di kîjan salê de hatin keşfkirin?", optionA: "1918", optionB: "1928", optionC: "1938", optionD: "1948", correctOption: "B", difficulty: "hard", categoryId: gisti.id },
    { text: "Rêjeya zêrîn (Golden Ratio) çend e?", optionA: "1.414", optionB: "1.618", optionC: "2.718", optionD: "3.141", correctOption: "B", difficulty: "hard", categoryId: gisti.id },

    // DÎROK - Easy
    { text: "Komara Tirkiyê di kîjan salê de hat damezrandin?", optionA: "1920", optionB: "1921", optionC: "1922", optionD: "1923", correctOption: "D", difficulty: "easy", categoryId: dirok.id },
    { text: "Şerê Cîhanê yê Yekem kengî dest pê kir?", optionA: "1912", optionB: "1914", optionC: "1916", optionD: "1918", correctOption: "B", difficulty: "easy", categoryId: dirok.id },
    // DÎROK - Medium
    { text: "Dîwara Berlînê kengî hat hilweşandin?", optionA: "1987", optionB: "1989", optionC: "1991", optionD: "1993", correctOption: "B", difficulty: "medium", categoryId: dirok.id },
    { text: "Înqîlaba Fransa kengî qewimî?", optionA: "1776", optionB: "1789", optionC: "1799", optionD: "1815", correctOption: "B", difficulty: "medium", categoryId: dirok.id },
    // DÎROK - Hard
    { text: "Kî yekem împaratorê Romayê bû?", optionA: "Julius Caesar", optionB: "Augustus", optionC: "Nero", optionD: "Tiberius", correctOption: "B", difficulty: "hard", categoryId: dirok.id },

    // ERDNÎGARÎ - Easy
    { text: "Kîjan okyanûs herî mezin e?", optionA: "Atlantîk", optionB: "Hîndî", optionC: "Arktîk", optionD: "Pasîfîk", correctOption: "D", difficulty: "easy", categoryId: erdnigari.id },
    { text: "Çiyayê herî bilind li cîhanê kîjan e?", optionA: "K2", optionB: "Everest", optionC: "Kilimanjaro", optionD: "Mont Blanc", correctOption: "B", difficulty: "easy", categoryId: erdnigari.id },
    // ERDNÎGARÎ - Medium
    { text: "Kîjan welat herî zêde nifûs heye?", optionA: "Amerîka", optionB: "Hindistan", optionC: "Çîn", optionD: "Indonezya", correctOption: "C", difficulty: "medium", categoryId: erdnigari.id },
    { text: "Çemê herî dirêj li cîhanê kîjan e?", optionA: "Nîl", optionB: "Amazon", optionC: "Ferat", optionD: "Missîsîpî", correctOption: "A", difficulty: "medium", categoryId: erdnigari.id },
    // ERDNÎGARÎ - Hard
    { text: "Kîjan welat li 2 parzemînan e?", optionA: "Misir", optionB: "Tirkiye", optionC: "Rûsya", optionD: "Hemû", correctOption: "D", difficulty: "hard", categoryId: erdnigari.id },

    // ZANIST - Easy
    { text: "Kîjan gerstêrk ji Rojê re herî nêzîk e?", optionA: "Venûs", optionB: "Mars", optionC: "Merkur", optionD: "Jûpîter", correctOption: "C", difficulty: "easy", categoryId: zanist.id },
    { text: "Av ji kîjan elementan pêk tê?", optionA: "O2", optionB: "H2O", optionC: "CO2", optionD: "NaCl", correctOption: "B", difficulty: "easy", categoryId: zanist.id },
    // ZANIST - Medium
    { text: "Kîjan proteîn di xwînê de oksîjenê diguhêze?", optionA: "Hemoglobîn", optionB: "Keratin", optionC: "Kollajen", optionD: "Însulin", correctOption: "A", difficulty: "medium", categoryId: zanist.id },
    { text: "Leza ronahiyê di saniyekê de çend km ye?", optionA: "150,000 km", optionB: "300,000 km", optionC: "450,000 km", optionD: "600,000 km", correctOption: "B", difficulty: "medium", categoryId: zanist.id },
    // ZANIST - Hard
    { text: "Kîjan parçik di atomê de negatîf e?", optionA: "Proton", optionB: "Nêwtron", optionC: "Elektron", optionD: "Foton", correctOption: "C", difficulty: "hard", categoryId: zanist.id },

    // ZIMAN - Easy
    { text: "'Silav' di Kurmancî de çi ye?", optionA: "Xatir", optionB: "Merheba", optionC: "Sipas", optionD: "Bibore", correctOption: "B", difficulty: "easy", categoryId: ziman.id },
    { text: "'Spas' çi wateyê dide?", optionA: "Merheba", optionB: "Teşekkür", optionC: "Xatir", optionD: "Bibore", correctOption: "B", difficulty: "easy", categoryId: ziman.id },
    { text: "Di Kurmancî de 'pênc' çend e?", optionA: "3", optionB: "4", optionC: "5", optionD: "6", correctOption: "C", difficulty: "easy", categoryId: ziman.id },
    // ZIMAN - Medium
    { text: "'Ez te hez dikim' çi wateyê dide?", optionA: "Seni seviyorum", optionB: "Seni tanıyorum", optionC: "Seni arıyorum", optionD: "Seni bekliyorum", correctOption: "A", difficulty: "medium", categoryId: ziman.id },
    { text: "'Roj baş' çi wateyê dide?", optionA: "İyi geceler", optionB: "Günaydın", optionC: "Hoşça kal", optionD: "Nasılsın", correctOption: "B", difficulty: "medium", categoryId: ziman.id },

    // WERZÎŞ - Easy
    { text: "Di futbolê de her tîmek çend lîstikvan hene?", optionA: "9", optionB: "10", optionC: "11", optionD: "12", correctOption: "C", difficulty: "easy", categoryId: werzis.id },
    { text: "Kîjan welat herî zêde Kûpaya Cîhanê bi dest xistiye?", optionA: "Almanya", optionB: "Arjentîn", optionC: "Brezîlya", optionD: "Îtalya", correctOption: "C", difficulty: "easy", categoryId: werzis.id },
    // WERZÎŞ - Medium
    { text: "Lîstikên Olîmpîk çend salan carekê têne lidarxistin?", optionA: "2 sal", optionB: "3 sal", optionC: "4 sal", optionD: "5 sal", correctOption: "C", difficulty: "medium", categoryId: werzis.id },
    { text: "Kî herî zêde Topa Zêrîn wergirtiye?", optionA: "Ronaldo", optionB: "Messi", optionC: "Pelé", optionD: "Maradona", correctOption: "B", difficulty: "medium", categoryId: werzis.id },

    // MÛZÎK - Easy
    { text: "Kî stranbêjê navdar ê Kurd e?", optionA: "Tarkan", optionB: "Şivan Perwer", optionC: "Sezen Aksu", optionD: "Barış Manço", correctOption: "B", difficulty: "easy", categoryId: muzik.id },
    { text: "Kîjan amûr bi têlan tê lîstin?", optionA: "Dahol", optionB: "Bilûr", optionC: "Saz", optionD: "Def", correctOption: "C", difficulty: "easy", categoryId: muzik.id },
    // MÛZÎK - Medium
    { text: "Beethoven ji kîjan welêt bû?", optionA: "Avusturya", optionB: "Almanya", optionC: "Fransa", optionD: "Îtalya", correctOption: "B", difficulty: "medium", categoryId: muzik.id },
    { text: "Di mûzîka klasîk de 'Symphony' çi ye?", optionA: "Dansa", optionB: "Strana", optionC: "Berhema orkestrayê", optionD: "Amûr", correctOption: "C", difficulty: "medium", categoryId: muzik.id },

    // WÊJE - Easy
    { text: "Kî romana 'Mem û Zîn' nivîsî?", optionA: "Cegerxwîn", optionB: "Ehmedê Xanî", optionC: "Pîremêrd", optionD: "Qedrî Can", correctOption: "B", difficulty: "easy", categoryId: weje.id },
    { text: "Newroz di kîjan rojê de tê pîrozkirin?", optionA: "21ê Adarê", optionB: "23ê Nîsanê", optionC: "1ê Gulanê", optionD: "15ê Tebaxê", correctOption: "A", difficulty: "easy", categoryId: weje.id },
    // WÊJE - Medium
    { text: "Kî nivîskarê 'Hamlet' e?", optionA: "Dickens", optionB: "Shakespeare", optionC: "Tolstoy", optionD: "Dostoevsky", correctOption: "B", difficulty: "medium", categoryId: weje.id },
    { text: "Kî helbestvanê navdar ê Kurd e ku bi navê 'Cegerxwîn' tê nasîn?", optionA: "Şêx Seîd", optionB: "Şêxmûs Hesen", optionC: "Qedrî Can", optionD: "Pîremêrd", correctOption: "B", difficulty: "medium", categoryId: weje.id },

    // NEW SET - richer mix, some with visuals
    // GİŞTÎ
    { text: "Rengê bayraqa Kurdistanê çi hene?", optionA: "Sor, spî, kesk, zêr", optionB: "Sor, reş, spî", optionC: "Sor, kesk, zêr", optionD: "Reş, spî, kesk", correctOption: "A", difficulty: "easy", categoryId: gisti.id, imageUrl: "https://i.imgur.com/8fK8e7B.png" },
    { text: "NASA yekem car li ser çî ye hate damezrandin?", optionA: "Arastakirinê derve avêtin", optionB: "Lîstinê navkî", optionC: "Araştina astengî", optionD: "Programên hêlîkoptera", correctOption: "A", difficulty: "medium", categoryId: gisti.id },
    { text: "Kîjan têkiliyê li binpêjê heye?", optionA: "Sînorên DNA", optionB: "Grafên blockchain", optionC: "API Gateway", optionD: "Protokola HTTP", correctOption: "D", difficulty: "hard", categoryId: gisti.id },

    // DÎROK
    { text: "Çapemenîya 'Hawar' ji aliyê kê ve hate destpêkirin?", optionA: "Celadet Bedirxan", optionB: "Ehmedê Xanî", optionC: "Said Nursî", optionD: "Abdullah Cevdet", correctOption: "A", difficulty: "medium", categoryId: dirok.id, imageUrl: "https://i.imgur.com/Q2KX7wq.png" },
    { text: "Navê fermî ya serpersta Navneteweyî ya Kurdî çi ye?", optionA: "ENKS", optionB: "KNK", optionC: "KOMA", optionD: "UNPO", correctOption: "B", difficulty: "hard", categoryId: dirok.id },
    { text: "Dîrokê Navîn de li Mezopotamyayê kîjan çem herî gelek navdar e?", optionA: "Dîcle", optionB: "Ferat", optionC: "Nîl", optionD: "Amazon", correctOption: "B", difficulty: "easy", categoryId: dirok.id },

    // ERDNÎGARÎ
    { text: "Li Çiyayê Nemrutê çi monument heye?", optionA: "Heykelên kommagên derbar", optionB: "Qesra Romayê", optionC: "Piramîd", optionD: "Colosseum", correctOption: "A", difficulty: "medium", categoryId: erdnigari.id, imageUrl: "https://i.imgur.com/2QJXvZ4.jpeg" },
    { text: "Li kîjan bajarê Kurdistanê 'Bajarê Gulên' tê gotin?", optionA: "Silemanî", optionB: "Hewlêr", optionC: "Duhok", optionD: "Amed", correctOption: "A", difficulty: "easy", categoryId: erdnigari.id },
    { text: "Parîs di çend arrondissementan tê parçe kirin?", optionA: "12", optionB: "16", optionC: "20", optionD: "24", correctOption: "C", difficulty: "hard", categoryId: erdnigari.id },

    // ZANIST
    { text: "Teleskopa JWST di kîjan spektrumê de pir carî dixebite?", optionA: "Gamma", optionB: "Ultraviyole", optionC: "Nêzikî infirared", optionD: "Radyoyî", correctOption: "C", difficulty: "medium", categoryId: zanist.id, imageUrl: "https://i.imgur.com/vGf6cPM.jpeg" },
    { text: "CRISPR çi dikare biguherîne?", optionA: "Temperaturên hava", optionB: "Genan", optionC: "Rengên li şev", optionD: "Qada xwê", correctOption: "B", difficulty: "medium", categoryId: zanist.id },
    { text: "Superconductivity li kîjan hewayê diyar dibe?", optionA: "Jorra germ", optionB: "Jorra sar", optionC: "Seredana kuştî", optionD: "Vêneya proton", correctOption: "B", difficulty: "hard", categoryId: zanist.id },

    // ZIMAN
    { text: "'Ez ji te re sipas dikim' çi wateyê dide?", optionA: "Benim için çalış", optionB: "Senin için teşekkür ederim", optionC: "Senden özür dilerim", optionD: "Seni beklerim", correctOption: "B", difficulty: "easy", categoryId: ziman.id },
    { text: "'Gava ku' destpêka çi tiştan e?", optionA: "Sebê", optionB: "Hejmara", optionC: "Zemana", optionD: "Poste", correctOption: "C", difficulty: "medium", categoryId: ziman.id },
    { text: "Li kurmancî navdêrên hevber (conjunction) bi awayekî rast kîjan e?", optionA: "Heke ... gelek", optionB: "Û ... û", optionC: "Û ... an jî", optionD: "An ... an", correctOption: "C", difficulty: "hard", categoryId: ziman.id },

    // WERZÎŞ
    { text: "Li kîjan timê basketbolê 'Triangle Offense' hat populer kirin?", optionA: "Chicago Bulls", optionB: "Lakers", optionC: "Celtics", optionD: "Spurs", correctOption: "A", difficulty: "medium", categoryId: werzis.id },
    { text: "VAR di futbola nêzîk da çi ye?", optionA: "Video Assistant Referee", optionB: "Virtual Attack Rank", optionC: "Value Added Run", optionD: "Visual Analyzer Referee", correctOption: "A", difficulty: "easy", categoryId: werzis.id },
    { text: "Maraton çend kilometre ye?", optionA: "21.1", optionB: "30", optionC: "36", optionD: "42.195", correctOption: "D", difficulty: "easy", categoryId: werzis.id },

    // MÛZÎK
    { text: "'Kilam' di muzîka Kurdî de çi dibe?", optionA: "Stran bê deng", optionB: "Helbestê bê nav", optionC: "Stran bi gotin", optionD: "Stran bê temam", correctOption: "C", difficulty: "easy", categoryId: muzik.id },
    { text: "Dengbêjî gelemperî kîjan amûr bi rê kirin?", optionA: "Tembûr", optionB: "Bilûr", optionC: "Bi bêamûrî (dengê xwe)", optionD: "Def", correctOption: "C", difficulty: "medium", categoryId: muzik.id },
    { text: "Kîjan genre di nav muzîka dijîtal de ji 2010'an pêş ket?", optionA: "Synthwave", optionB: "Barok", optionC: "Grunge", optionD: "Polka", correctOption: "A", difficulty: "medium", categoryId: muzik.id },

    // WÊJE / ÇÎROK / KÛLTÛR
    { text: "Edebiyata Kurdî de 'çîrokbêj' kî ye?", optionA: "Yek ku dengê bilûr lêdixebite", optionB: "Yek ku stranan dengdixwîne", optionC: "Yek ku çîrokê bi dengê xwe dibêje", optionD: "Yek ku deng û saz bi hev re dixebite", correctOption: "C", difficulty: "easy", categoryId: weje.id },
    { text: "Motîfa 'govendê dengbêjî' di çi kesîtî da hebûnê zêde dike?", optionA: "Saz", optionB: "Helftina daneyî", optionC: "Çarper", optionD: "Deng û gov", correctOption: "D", difficulty: "medium", categoryId: weje.id },
    { text: "'Modernizm' di edebiyatê de di berçehiya çi tiştan de tê zanîn?", optionA: "Sêwirî û raqameyên klîşeyî", optionB: "Qeydbûna pergalên kevn", optionC: "Şikandina form û şûna xwe bigre", optionD: "Rêzê heftiyê", correctOption: "C", difficulty: "hard", categoryId: weje.id },
  ];

  for (const q of questions) {
    const exists = await prisma.question.findFirst({ where: { text: q.text } });
    if (!exists) await prisma.question.create({ data: q });
  }

  console.log(`✅ ${questions.length} pirs hatin afirandin`);
  console.log("🎉 Seed bi serfirazî qediya!");
}

main()
  .catch((e) => { console.error("❌ Çewtî:", e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
