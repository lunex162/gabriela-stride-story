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
    "nav.socials": "Sociálne siete",
    "nav.ranking": "Rebríček",
    "ranking.eyebrow": "World Athletics · 800 m ženy",
    "ranking.title.line1": "SVETOVÝ",
    "ranking.title.line2": "rebríček",
    "ranking.points": "bodov",
    "ranking.full": "Celý rebríček",
    "ranking.col.rank": "#",
    "ranking.col.athlete": "Atlétka",
    "ranking.col.nat": "Štát",
    "ranking.col.score": "Body",
    "ranking.unavailable": "Rebríček sa teraz nepodarilo načítať. Aktuálne poradie nájdete na stránke World Athletics.",
    "socials.title.line1": "SOCIÁLNE SIETE",
    "nav.discoverStory": "Objavte môj príbeh",

    "loader.tagline": "Olympionička · 800 m",

    "hero.eyebrow": "Olympijská atlétka",
    "hero.firstName": "GABRIELA",
    "hero.lastName": "GAJANOVÁ",
    "hero.subhead":
      "OLYMPIONIČKA",
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
      "Pochádzam z Bobrovca na Liptove, kde ma formovala príroda, rodina aj život na rodinnom salaši. Beh si ma získal už v jedenástich rokoch a odvtedy je mojou najväčšou vášňou.",
    "about.p3":
      "Dnes reprezentujem Slovensko na medzinárodnej úrovni a som členkou VŠC Dukla Banská Bystrica. Od roku 2021 trénujem v medzinárodnej tréningovej skupine ELLE8 pod vedením švajčiarskeho trénera Louisa Heyera.",
    "ranking.label": "Svetový rebríček · 800 m",
    "ranking.updated": "Aktualizované",
    "ranking.cta": "Svetový rebríček World Athletics",
    "about.quote": "Najväčšou motiváciou je pre mňa vedomie, že som každý deň urobila maximum.",

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
    "management.title": "Manažment",
    "partners.lead":
      "Za každým úspechom stojí tím ľudí a partnerov, ktorí mi pomáhajú posúvať hranice. Ďakujem, že ste súčasťou mojej cesty.",

    "press.eyebrow": "",
    "press.title.line1": "Napísali",
    "press.title.line2": "o mne",
    "press.lead":
      "\n",
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
    "press.date7": "September 2026",
    "press.title7": "Víťazstvo v Roverete a druhý najlepší čas kariéry",
    "press.excerpt7":
      "Na mítingu v talianskom Roverete zvíťazila v čase 1:58.37 a na vlastný slovenský rekord jej chýbalo iba 15 stotín.",
    "press.date8": "Júl 2026",
    "press.title8": "P-T-S Banská Bystrica: Blízko pódia na domácom mítingu",
    "press.excerpt8":
      "Na mítingu P-T-S v Banskej Bystrici sa držala v strede poľa, v závere zabrala a skončila štvrtá.",
    "press.date4": "August 2026",
    "press.title4": "ME Birmingham: Skvelý finiš a postup do semifinále",
    "press.excerpt4":
      "V rozbehu na 800 metrov obsadila druhé postupové miesto, keď nestačila iba na hviezdnu Femke Bolovú. V semifinále zabehla 1:59.32.",
    "press.date5": "Marec 2026",
    "press.title5": "Halové MS v Toruni: Semifinále na 800 m",
    "press.excerpt5":
      "Na halových majstrovstvách sveta v poľskej Toruni sa prebojovala medzi semifinalistky a zabehla 2:00.49.",
    "press.date6": "September 2025",
    "press.title6": "MS v Tokiu: Postup do semifinále",
    "press.excerpt6":
      "Na majstrovstvách sveta v Tokiu postúpila z rozbehu ako tretia v čase 2:00.44 a v semifinále zabehla 1:59.16.",

    "spn1.role": "Technický partner",
    "spn1.body": "Tréningová a pretekárska obuv pre 800 m — od Montegorda po Paríž.",
    "spn2.role": "Národný zväz",
    "spn2.body": "Reprezentácia, podpora a profesionálne zázemie slovenskej atletiky.",
    "spn3.role": "Tréningové centrum",
    "spn4.role": "Manažment",
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
    "footer.madeBy": "Web vytvorila callora.sk",
    "contact.admin": "Administratíva & spolupráce",

    "lang.sk": "SK",
    "lang.en": "EN",
  },

  en: {
    "nav.about": "About",
    "nav.achievements": "Honours",
    "nav.journey": "Journey",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "nav.socials": "Socials",
    "nav.ranking": "Ranking",
    "ranking.eyebrow": "World Athletics · 800 m women",
    "ranking.title.line1": "WORLD",
    "ranking.title.line2": "ranking",
    "ranking.points": "points",
    "ranking.full": "Full ranking",
    "ranking.col.rank": "#",
    "ranking.col.athlete": "Athlete",
    "ranking.col.nat": "Nat",
    "ranking.col.score": "Score",
    "ranking.unavailable": "The ranking could not be loaded right now. See World Athletics for the current standings.",
    "socials.title.line1": "SOCIALS",
    "nav.discoverStory": "Discover My Story",

    "loader.tagline": "Olympian · 800 metres",

    "hero.eyebrow": "Olympic Athlete",
    "hero.firstName": "GABRIELA",
    "hero.lastName": "GAJANOVÁ",
    "hero.subhead":
      "OLYMPIAN",
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
      "My name is Gabriela Gajanová and running has been a huge part of my life for many years. I am two-time Olympian, silver European medalist and represent Slovakia internationally on 800 metres.",
    "about.p2":
      "I come from a small village Bobrovec in Liptov region, where I was shaped by nature, family and life on our farm. I started running at the age of eleven at primary school and it has been my passion ever since.",
    "about.p3":
      "Today I am part of international running group ELLE8 based in Switzerland coached by Louis Heyer. I am also member of Slovak sport centre VŠC Dukla Banská Bystrica.",
    "ranking.label": "World ranking · 800 m",
    "ranking.updated": "Updated",
    "ranking.cta": "World Athletics world ranking",
    "about.quote": "The greatest motivation for me is knowing that I have given my best every day.",

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
    "contact.title.line2": "me",
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
    "management.title": "Management",
    

    "spn1.role": "Technical partner",
    "spn1.body": "Training and racing footwear for the 800 m — from Montegordo to Paris.",
    "spn2.role": "National federation",
    "spn2.body": "Representation, support and the professional backbone of Slovak athletics.",
    "spn3.role": "Training centre",
    "spn4.role": "Management",
    "spn3.body": "Home base and elite-sport support from Banská Bystrica.",
    "partners.lead":
      "Behind every success there is a team of people and partners who help me push my limits. Thank you for being part of my journey.",

    "press.eyebrow": "",
    "press.title.line1": "Featured",
    "press.title.line2": "in press",
    "press.lead":
      "\n",
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
    "press.date7": "September 2026",
    "press.title7": "A win in Rovereto and the second-fastest time of her career",
    "press.excerpt7":
      "She won the meeting in Rovereto, Italy, in 1:58.37, just 15 hundredths of a second outside her own Slovak record.",
    "press.date8": "July 2026",
    "press.title8": "P-T-S Banská Bystrica: Close to the podium at home",
    "press.excerpt8":
      "At the P-T-S meeting in Banská Bystrica she sat mid-pack, pushed in the closing stretch and finished fourth.",
    "press.date4": "August 2026",
    "press.title4": "European Championships Birmingham: A strong finish into the semis",
    "press.excerpt4":
      "She took the second automatic qualifying spot in her 800 m heat, beaten only by star Femke Bol, and ran 1:59.32 in the semifinal.",
    "press.date5": "March 2026",
    "press.title5": "World Indoors in Toruń: 800 m semifinal",
    "press.excerpt5":
      "At the World Indoor Championships in Toruń, Poland, she reached the 800 m semifinals and clocked 2:00.49.",
    "press.date6": "September 2025",
    "press.title6": "World Championships Tokyo: Through to the semis",
    "press.excerpt6":
      "At the World Championships in Tokyo she advanced from her heat in third place in 2:00.44 and ran 1:59.16 in the semifinal.",

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
    "footer.madeBy": "Website by callora.sk",
    "contact.admin": "Administration & collaborations",

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
