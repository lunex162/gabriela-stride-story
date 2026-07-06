export type Locale = "sk" | "en";

export const LOCALES: Locale[] = ["sk", "en"];

type Dict = Record<string, string | string[]>;

export const translations: Record<Locale, Dict> = {
  sk: {
    "nav.about": "O mne",
    "nav.achievements": "Úspechy",
    "nav.journey": "Cesta",
    "nav.gallery": "Galéria",
    "nav.contact": "Kontakt",
    "nav.discoverStory": "Objavte môj príbeh",

    "loader.tagline": "Olympionička · 800 m",

    "hero.eyebrow": "Olympijská atlétka",
    "hero.firstName": "GABRIELA",
    "hero.lastName": "GAJANOVÁ",
    "hero.subhead":
      "Olympijská reprezentantka v behu na 800 metrov",
    "hero.cta.story": "O mne",
    "hero.cta.contact": "Kontakt",
    "hero.scroll": "\n",
    "hero.meta.route": "\n",
    "hero.meta.discipline": "\n",

    "about.eyebrow": "O mne",
    "about.name": "Gabriela Gajanová",
    "about.stats.olympics": "Olympijská účastníčka",
    "about.stats.record": "Osobný rekord na 800 m",
    "about.stats.silver": "Majstrovstvá Európy · Rím 2024",
    "about.stats.athlete": "Slovenska",
    "about.stats.silver.value": "Striebro",
    "about.stats.athlete.value": "Atlétka roka",
    "about.p1":
      "Volám sa Gabriela Gajanová a beh je už dlhé roky neoddeliteľnou súčasťou môjho života. Som slovenská reprezentantka v behu na 800 metrov, dvojnásobná olympionička a strieborná medailistka z Majstrovstiev Európy 2024 v Ríme.",
    "about.p2":
      "Pochádzam z Bobrovca na Liptove, kde ma formovala príroda, rodina aj život na rodinnom salaši. Skôr než som objavila atletiku, hrala som futbal. Beh si ma však získal už v jedenástich rokoch a odvtedy je mojou najväčšou vášňou.",
    "about.p3":
      "Dnes reprezentujem klub AK ZŤS Martin a od roku 2021 trénujem v medzinárodnej tréningovej skupine TeamLouis pod vedením švajčiarskeho trénera Louisa Heyera.",

    "about.stat1.value": "800 m",
    "about.stat1.label": "Hlavná disciplína",
    "about.stat2.value": "2×",
    "about.stat2.label": "Olympijské hry",
    "about.stat3.value": "1:58.22",
    "about.stat3.label": "Slovenský rekord",
    "about.stat4.value": "Striebro",
    "about.stat4.label": "ME 2024 Rím",

    "achievements.eyebrow": "\n",
    "achievements.title": "Najväčšie úspechy",
    "achievements.title.line1": "NAJVÄČŠIE",
    "achievements.title.line2": "úspechy",
    "achievements.lead": "\n",

    "med1.title": "Majstrovstvá Európy",
    "med1.place": "Rím · Taliansko",
    "med1.result": "Striebro · 1:58.79",
    "med2.title": "Slovenský rekord",
    "med2.place": "Paríž · Olympijské hry",
    "med2.result": "1:58.22 · semifinále",
    "med3.title": "Atlétka roka SR",
    "med3.place": "Bratislava · SAZ",
    "med3.result": "Voľba prvýkrát v kariére",
    "med4.title": "Európske hry",
    "med4.place": "Chorzów · Poľsko",
    "med4.result": "Bronz · 1:59.92",
    "med5.title": "Halový rekord SR",
    "med5.place": "Istanbul · ME indoor",
    "med5.result": "2:01.70 · semifinále",
    "med6.title": "ME do 20 rokov",
    "med6.place": "Grosseto · Taliansko",
    "med6.result": "Bronz · 2:07.15",

    "contact.title.line1": "NAPÍŠTE",
    "contact.title.line2": "mi",
    "quote.eyebrow": "",
    "footer.follow": "SLEDUJTE MA",
    "footer.contact": "Kontakt",
    "footer.location": "\n",
    "form.placeholder.name": "Vaše meno",
    "form.placeholder.message": "O čom by ste sa chceli porozprávať...",

    "ach1.year": "2024",
    "ach1.title": "Striebro · ME Rím",
    "ach1.body": "800 m · 1:58.79 — prvá slovenská medaila z dospelých ME na tejto trati po desaťročiach.",
    "ach2.year": "2024",
    "ach2.title": "Slovenský rekord · Paríž",
    "ach2.body": "1:58.22 v olympijskom semifinále — nový slovenský rekord na 800 m pod 1:58.",
    "ach3.year": "2024",
    "ach3.title": "Atlétka roka SR",
    "ach3.body": "Prvýkrát v kariére zvolená za slovenskú atlétku roka.",
    "ach4.year": "2023",
    "ach4.title": "Bronz · Európske hry",
    "ach4.body": "800 m v Chorzówe · 1:59.92 — prvá medaila zo seniorskej európskej akcie.",
    "ach5.year": "2021",
    "ach5.title": "Olympijské hry Tokio",
    "ach5.body": "Olympijský debut na 800 m — prvá z dvoch olympijských štartov.",
    "ach6.year": "2017",
    "ach6.title": "Bronz · ME do 20 rokov",
    "ach6.body": "Grosseto · 2:07.15 — prvá medzinárodná medaila v juniorskej kategórii.",

    "journey.eyebrow": "Cesta",
    "journey.title": "Moja cesta",
    "journey.title.line1": "MOJA",
    "journey.title.line2": "cesta",
    "journey.chapter": "Kapitola",
    "journey.next": "Ďalej",
    "journey.lead":
      "Skrolujte. Bežím s vami 800 metrov. Každých 100 metrov je míľnik — miesto, kde sa môj príbeh posunul vpred.",
    "journey.distanceLabel": "vzdialenosť",
    "journey.metersShort": "m",

    "m0.title": "Začiatky",
    "m0.place": "Bobrovec · Liptov",
    "m0.year": "~2010",
    "m0.body":
      "Futbal, prvé behy do kopcov...",

    "m1.title": "Prvá medaila",
    "m1.place": "Tbilisi · ME junioriek",
    "m1.year": "2016",
    "m1.body":
      "Bronz na Majstrovstvách Európy do 18 rokov — prvý raz na medzinárodnom pódiu. Čas 2:09.43.",

    "m2.title": "Bronz juniorov",
    "m2.place": "Grosseto · ME do 20 rokov",
    "m2.year": "2017",
    "m2.body":
      "Druhá juniorská medaila v rade. 2:07.15 — signál, že 800 m sa stáva mojím svetom.",

    "m3.title": "MS",
    "m3.place": "Tampere · MS juniorov",
    "m3.year": "2018",
    "m3.body":
      "Štvrté miesto na MS do 20 rokov v čase 2:01.90. Olympijský sen prestáva byť abstraktný.",

    "m4.title": "Prvá olympiáda",
    "m4.place": "Tokio · Olympijské hry",
    "m4.year": "2021",
    "m4.body":
      "Tokio.",

    "m5.title": "Bronz Európskych hier",
    "m5.place": "Chorzów · Európske hry",
    "m5.year": "2023",
    "m5.body":
      "Prvá medaila zo seniorskej európskej akcie — 1:59.92. ",

    "m6.title": "Striebro z ME",
    "m6.place": "Rím · Majstrovstvá Európy",
    "m6.year": "2024",
    "m6.body":
      "Strieborná medaila na 800 m časom 1:58.79. Najväčší moment kariéry — historický úspech pre slovenskú atletiku.",

    "m7.title": "Slovenský rekord",
    "m7.place": "Paríž · Olympijské hry",
    "m7.year": "2024",
    "m7.body":
      "1:58.22 v olympijskom semifinále — nový slovenský rekord, ktorý prvý raz zlomil 37 rokov starý čas spod limitu 1:58.",

    "m8.title": "Cesta pokračuje",
    "m8.place": "Tokio 2025 · Los Angeles 2028",
    "m8.year": "→",
    "m8.body":
      "Čo ma čaká",

    "gallery.eyebrow": "Galéria",
    "gallery.title": "Momenty z trate",
    "gallery.lead":
      "Štart. Posledná zákruta. Cieľová páska. Pohľady, ktoré rozprávajú beh bez slov.",
    "gallery.cat.race": "Pretek",
    "gallery.cat.start": "Štart",
    "gallery.cat.finish": "Cieľ",
    "gallery.cat.detail": "Detail",

    "eight.title": "800 METROV",
    "eight.line1": "Dva kruhy.",
    "eight.line2": "Jedna stratégia.",
    "eight.line3": "Posledných sto metrov, kde sa rozhoduje o všetkom.",

    "partners.eyebrow": "",
    "partners.title": "Partneri mojej cesty",
    "partners.title.line1": "Partneri",
    "partners.title.line2": "mojej cesty",
    "partners.lead":
      "Za každým úspechom stojí tím ľudí a partnerov, ktorí mi pomáhajú posúvať hranice. Ďakujem, že ste súčasťou mojej cesty.",

    "press.eyebrow": "",
    "press.title.line1": "Napísali",
    "press.title.line2": "o mne",
    "press.lead":
      "Výber článkov z prestížnych slovenských médií, ktoré priblížili moju cestu, úspechy a míľniky.",
    "press.cta": "Prečítať článok",
    "press.date1": "Máj 2025",
    "press.title1": "Gabriela Gajanová medzi Forbes 30 pod 30",
    "press.excerpt1":
      "Vicemajsterka Európy sa zaradila medzi najvýraznejšie mladé osobnosti Slovenska v prestížnom rebríčku Forbes 30 pod 30.",
    "press.date2": "7. november 2024",
    "press.title2": "Atlétka roka 2024: Prvýkrát na tróne",
    "press.excerpt2":
      "Po životnej sezóne, striebre z Majstrovstiev Európy a slovenskom rekorde získala Gabriela Gajanová premiérovo titul Atlétka roka Slovenska.",
    "press.date3": "13. február 2025",
    "press.title3": "Slovenský rekord opäť posunutý",
    "press.excerpt3":
      "Na mítingu vo francúzskom Liévine prekonala vlastný slovenský rekord na 800 metrov a opäť potvrdila svoje miesto medzi európskou elitou.",

    "spn1.role": "Technický partner",
    "spn1.body": "Tréningová a pretekárska obuv pre 800 m — od Montegorda po Paríž.",
    "spn2.role": "Národný zväz",
    "spn2.body": "Reprezentácia, podpora a profesionálne zázemie slovenskej atletiky.",
    "spn3.role": "Tréningové centrum",
    "spn3.body": "Domáce zázemie a podpora vrcholového športu od Banskej Bystrice.",

    "social.eyebrow": "Sociálne siete",
    "social.title": "Sledujte moju cestu",
    "social.lead":
      "Tréningy, preteky, momenty zo zákulisia. Najbližšie ku mne sa dostanete cez Instagram.",

    "quote.text": "Každý štart je nová príležitosť prekonať samu seba.",
    "quote.author": "Gabriela Gajanová",

    "contact.eyebrow": "\n",
    "contact.title": "Pre médiá, partnerstvá a spolupráce",
    "contact.lead": "\n",
    "contact.emailLabel": "E-mail",
    "contact.form.name": "Meno",
    "contact.form.email": "E-mail",
    "contact.form.message": "Správa",
    "contact.form.send": "",
    "footer.tagline": "\n",
    "footer.rights": "Všetky práva vyhradené.",

    "lang.sk": "SK",
    "lang.en": "EN",
  },

  en: {
    "nav.about": "About",
    "nav.achievements": "Honours",
    "nav.journey": "Journey",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "nav.discoverStory": "Discover My Story",

    "loader.tagline": "Olympian · 800 metres",

    "hero.eyebrow": "Olympic Athlete",
    "hero.firstName": "GABRIELA",
    "hero.lastName": "GAJANOVÁ",
    "hero.subhead":
      "Olympic representative · 800 metres",
    "hero.cta.story": "About",
    "hero.cta.contact": "Contact",
    "hero.scroll": "\n",
    "hero.meta.route": "\n",
    "hero.meta.discipline": "\n",

    "about.eyebrow": "About me",
    "about.name": "Gabriela Gajanová",
    "about.stats.olympics": "Olympian",
    "about.stats.record": "Personal best · 800 m",
    "about.stats.silver": "European Championships · Rome 2024",
    "about.stats.athlete": "of Slovakia",
    "about.stats.silver.value": "Silver",
    "about.stats.athlete.value": "Athlete of the Year",
    "about.p1":
      "My name is Gabriela Gajanová and running has been an inseparable part of my life for many years. I am a Slovak representative in the 800 metres, a two-time Olympian and a silver medalist from the 2024 European Championships in Rome.",
    "about.p2":
      "I come from Bobrovec in Liptov, where I was shaped by nature, family and life on our sheep farm. Before I discovered athletics, I played football. Running won me over at the age of eleven and has been my greatest passion ever since.",
    "about.p3":
      "Today I represent AK ZŤS Martin and since 2021 I have trained in the international TeamLouis group under the guidance of Swiss coach Louis Heyer.",

    "about.stat1.value": "800 m",
    "about.stat1.label": "Main discipline",
    "about.stat2.value": "2×",
    "about.stat2.label": "Olympic Games",
    "about.stat3.value": "1:58.22",
    "about.stat3.label": "Slovak record",
    "about.stat4.value": "Silver",
    "about.stat4.label": "2024 Euros · Rome",

    "achievements.eyebrow": "\n",
    "achievements.title": "Greatest honours",
    "achievements.title.line1": "GREATEST",
    "achievements.title.line2": "honours",
    "med1.title": "European Championships",
    "med1.place": "Rome · Italy",
    "med1.result": "Silver · 1:58.79",
    "med2.title": "Slovak record",
    "med2.place": "Paris · Olympic Games",
    "med2.result": "1:58.22 · semifinal",
    "med3.title": "SVK Athlete of the Year",
    "med3.place": "Bratislava · SAZ",
    "med3.result": "First win of her career",
    "med4.title": "European Games",
    "med4.place": "Chorzów · Poland",
    "med4.result": "Bronze · 1:59.92",
    "med5.title": "Slovak indoor record",
    "med5.place": "Istanbul · European Indoors",
    "med5.result": "2:01.70 · semifinal",
    "med6.title": "European U20",
    "med6.place": "Grosseto · Italy",
    "med6.result": "Bronze · 2:07.15",
    "contact.title.line1": "WRITE",
    "contact.title.line2": "to me",
    "quote.eyebrow": "",
    "footer.follow": "FOLLOW ME",
    "footer.contact": "Contact",
    "footer.location": "\n",
    "form.placeholder.name": "Your name",
    "form.placeholder.message": "What would you like to talk about...",
    "achievements.lead": "\n",

    "ach1.year": "2024",
    "ach1.title": "European Silver · Rome",
    "ach1.body": "800 m · 1:58.79 — Slovakia's first senior European medal on this distance in decades.",
    "ach2.year": "2024",
    "ach2.title": "Slovak Record · Paris",
    "ach2.body": "1:58.22 in the Olympic semifinal — a new Slovak record, dipping under 1:58 for the first time.",
    "ach3.year": "2024",
    "ach3.title": "Slovak Athlete of the Year",
    "ach3.body": "Voted Slovak Athlete of the Year for the first time.",
    "ach4.year": "2023",
    "ach4.title": "Bronze · European Games",
    "ach4.body": "800 m in Chorzów · 1:59.92 — first medal at a senior European championship.",
    "ach5.year": "2021",
    "ach5.title": "Olympic Games · Tokyo",
    "ach5.body": "Olympic debut over 800 m — the first of two Olympic appearances.",
    "ach6.year": "2017",
    "ach6.title": "Bronze · European U20",
    "ach6.body": "Grosseto · 2:07.15 — first international medal at junior level.",

    "journey.eyebrow": "The journey",
    "journey.title": "My journey",
    "journey.title.line1": "MY",
    "journey.title.line2": "journey",
    "journey.chapter": "Chapter",
    "journey.next": "Next",
    "journey.lead":
      "Scroll. Run with me for 800 metres. Every 100 metres is a milestone — a moment when the story moved forward.",
    "journey.distanceLabel": "distance",
    "journey.metersShort": "m",

    "m0.title": "The beginning",
    "m0.place": "Bobrovec · Liptov",
    "m0.year": "~2010",
    "m0.body":
      "A sheep farm in the Bobrovec valley, football with the boys and the first runs up the hills. I was eleven when I traded football for athletics.",

    "m1.title": "First medal",
    "m1.place": "Tbilisi · European Youth",
    "m1.year": "2016",
    "m1.body":
      "Bronze at the European U18 Championships — my first international podium. Time: 2:09.43.",

    "m2.title": "Junior bronze",
    "m2.place": "Grosseto · European U20",
    "m2.year": "2017",
    "m2.body":
      "Second junior medal in a row. 2:07.15 — the signal that the 800 m was becoming my world.",

    "m3.title": "World stage",
    "m3.place": "Tampere · World U20",
    "m3.year": "2018",
    "m3.body":
      "Fourth place at the World U20 Championships in 2:01.90. The Olympic dream stopped feeling abstract.",

    "m4.title": "First Olympics",
    "m4.place": "Tokyo · Olympic Games",
    "m4.year": "2021",
    "m4.body":
      "My Olympic debut. The same year I left my Martin training base and joined Louis Heyer's TeamLouis.",

    "m5.title": "European bronze",
    "m5.place": "Chorzów · European Games",
    "m5.year": "2023",
    "m5.body":
      "First senior European medal — 1:59.92. The first time I broke the two-minute barrier.",

    "m6.title": "European silver",
    "m6.place": "Rome · European Championships",
    "m6.year": "2024",
    "m6.body":
      "Silver over 800 m in 1:58.79. The biggest moment of my career and a historic result for Slovak athletics.",

    "m7.title": "Slovak record",
    "m7.place": "Paris · Olympic Games",
    "m7.year": "2024",
    "m7.body":
      "1:58.22 in the Olympic semifinal — a new Slovak record, breaking under 1:58 for the first time after 37 years.",

    "m8.title": "The journey continues",
    "m8.place": "Tokyo 2025 · Los Angeles 2028",
    "m8.year": "→",
    "m8.body":
      "Worlds in Tokyo 2025 and the Olympic cycle towards LA 2028 are ahead. The finish line is just another start.",

    "gallery.eyebrow": "Gallery",
    "gallery.title": "Moments from the track",
    "gallery.lead":
      "Start. Final bend. Finish line. Frames that tell the race without words.",
    "gallery.cat.race": "Race",
    "gallery.cat.start": "Start",
    "gallery.cat.finish": "Finish",
    "gallery.cat.detail": "Detail",

    "eight.title": "800 METRES",
    "eight.line1": "Two laps.",
    "eight.line2": "One strategy.",
    "eight.line3": "The final hundred metres, where everything is decided.",

    "partners.eyebrow": "",
    "partners.title": "Partners of my journey",
    "partners.title.line1": "Partners",
    "partners.title.line2": "of my journey",
    

    "spn1.role": "Technical partner",
    "spn1.body": "Training and racing footwear for the 800 m — from Montegordo to Paris.",
    "spn2.role": "National federation",
    "spn2.body": "Representation, support and the professional backbone of Slovak athletics.",
    "spn3.role": "Training centre",
    "spn3.body": "Home base and elite-sport support from Banská Bystrica.",
    "partners.lead":
      "Behind every success there is a team of people and partners who help me push my limits. Thank you for being part of my journey.",

    "press.eyebrow": "",
    "press.title.line1": "Featured",
    "press.title.line2": "in press",
    "press.lead":
      "A selection of pieces from leading Slovak outlets covering my journey, achievements and milestones.",
    "press.cta": "Read article",
    "press.date1": "May 2025",
    "press.title1": "Gabriela Gajanová among Forbes 30 Under 30",
    "press.excerpt1":
      "The European silver medallist joined the most prominent young Slovak personalities in the prestigious Forbes 30 Under 30 list.",
    "press.date2": "November 7, 2024",
    "press.title2": "Athlete of the Year 2024: First time on the throne",
    "press.excerpt2":
      "After a breakthrough season, European silver and a national record, Gabriela Gajanová won her first Slovak Athlete of the Year title.",
    "press.date3": "February 13, 2025",
    "press.title3": "Slovak record pushed once again",
    "press.excerpt3":
      "At the meeting in Liévin, France, she broke her own Slovak 800 m record and reaffirmed her place among Europe's elite.",

    "social.eyebrow": "Social",
    "social.title": "Follow my journey",
    "social.lead":
      "Training, races, behind-the-scenes moments. Instagram is where you get closest.",

    "quote.text": "Every start is a new chance to outrun yourself.",
    "quote.author": "Gabriela Gajanová",

    "contact.eyebrow": "\n",
    "contact.title": "For media, partnerships and collaborations",
    "contact.lead": "\n",
    "contact.emailLabel": "Email",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.send": "",
    "footer.tagline": "\n",
    "footer.rights": "All rights reserved.",

    "lang.sk": "SK",
    "lang.en": "EN",
  },
};

export function t(locale: Locale, key: string): string {
  const v = translations[locale][key];
  if (typeof v === "string") return v;
  if (import.meta.env.DEV && v === undefined) {
    console.warn(`[i18n] missing key: ${locale}.${key}`);
  }
  return key;
}
