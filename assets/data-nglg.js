/* National Grand Lodge of Greece — temples, leadership and lookup tables.
   Temples: Greek title as registered, city key, reference text from the NGLG
   lodge-buildings directory (https://nglgreece.org/el/lodge-buildings/),
   and an optional photo path (leave "" until a photo is added to assets/photos/). */

window.NGLG_TEMPLES = [
  { gr: "ΤΕΚΤΟΝΙΚΟ ΜΕΓΑΡΟ ΑΘΗΝΩΝ",        city: "athens",       ref: "13", photo: "" },
  { gr: "ΤΕΚΤΟΝΙΚΟ ΜΕΓΑΡΟ ΑΘΗΝΩΝ 2",      city: "athens2",      ref: "",   photo: "" },
  { gr: "ΤΕΚΤΟΝΙΚΟ ΜΕΓΑΡΟ ΠΕΙΡΑΙΑ",       city: "piraeus",      ref: "2",  photo: "" },
  { gr: "ΤΕΚΤΟΝΙΚΟ ΜΕΓΑΡΟ ΘΕΣΣΑΛΟΝΙΚΗΣ",  city: "thessaloniki", ref: "",   photo: "" },
  { gr: "ΤΕΚΤΟΝΙΚΟ ΜΕΓΑΡΟ ΠΑΤΡΑΣ",        city: "patras",       ref: "",   photo: "" },
  { gr: "ΤΕΚΤΟΝΙΚΟ ΜΕΓΑΡΟ 1 ΚΕΡΚΥΡΑΣ",    city: "corfu1",       ref: "2",  photo: "" },
  { gr: "ΤΕΚΤΟΝΙΚΟ ΜΕΓΑΡΟ 2 ΚΕΡΚΥΡΑΣ",    city: "corfu2",       ref: "1",  photo: "" },
  { gr: "ΤΕΚΤΟΝΙΚΟ ΜΕΓΑΡΟ 3 ΚΕΡΚΥΡΑΣ",    city: "corfu3",       ref: "3",  photo: "" },
  { gr: "ΤΕΚΤΟΝΙΚΟ ΜΕΓΑΡΟ ΡΟΔΟΥ",         city: "rhodes",       ref: "1",  photo: "" },
  { gr: "ΤΕΚΤΟΝΙΚΟ ΜΕΓΑΡΟ ΖΑΚΥΝΘΟΥ",      city: "zakynthos",    ref: "16", photo: "" },
  { gr: "ΤΕΚΤΟΝΙΚΟ ΜΕΓΑΡΟ ΚΑΛΑΜΑΤΑΣ",     city: "kalamata",     ref: "16", photo: "" },
  { gr: "ΤΕΚΤΟΝΙΚΟ ΜΕΓΑΡΟ ΛΑΜΙΑΣ",        city: "lamia",        ref: "2",  photo: "" },
  { gr: "ΤΕΚΤΟΝΙΚΟ ΜΕΓΑΡΟ ΛΑΡΙΣΑΣ",       city: "larissa",      ref: "4",  photo: "" },
  { gr: "ΤΕΚΤΟΝΙΚΟ ΜΕΓΑΡΟ ΣΑΝΤΟΡΙΝΗΣ",    city: "santorini",    ref: "6",  photo: "" },
  { gr: "ΤΕΚΤΟΝΙΚΟ ΜΕΓΑΡΟ ΛΕΥΚΑΔΑΣ",      city: "lefkada",      ref: "5",  photo: "" },
  { gr: "ΤΕΚΤΟΝΙΚΟ ΜΕΓΑΡΟ ΚΑΒΑΛΑΣ",       city: "kavala",       ref: "4",  photo: "" },
  { gr: "ΤΕΚΤΟΝΙΚΟ ΜΕΓΑΡΟ ΙΩΑΝΝΙΝΩΝ",     city: "ioannina",     ref: "13", photo: "" },
  { gr: "ΤΕΚΤΟΝΙΚΟ ΜΕΓΑΡΟ ΣΥΡΟΥ",         city: "syros",        ref: "",   photo: "" },
  { gr: "ΤΕΚΤΟΝΙΚΟ ΜΕΓΑΡΟ ΜΥΚΟΝΟΥ",       city: "mykonos",      ref: "",   photo: "" },
  { gr: "ΤΕΚΤΟΝΙΚΟ ΜΕΓΑΡΟ ΚΥΠΡΟΥ",        city: "cyprus",       ref: "",   photo: "" }
];

/* City names per language: [en, es, pt] */
window.NGLG_CITIES = {
  athens:       ["Athens", "Atenas", "Atenas"],
  athens2:      ["Athens II", "Atenas II", "Atenas II"],
  piraeus:      ["Piraeus", "El Pireo", "Pireu"],
  thessaloniki: ["Thessaloniki", "Tesalónica", "Tessalônica"],
  patras:       ["Patras", "Patras", "Patras"],
  corfu1:       ["Corfu I", "Corfú I", "Corfu I"],
  corfu2:       ["Corfu II", "Corfú II", "Corfu II"],
  corfu3:       ["Corfu III", "Corfú III", "Corfu III"],
  rhodes:       ["Rhodes", "Rodas", "Rodes"],
  zakynthos:    ["Zakynthos", "Zante", "Zacinto"],
  kalamata:     ["Kalamata", "Kalamata", "Kalamata"],
  lamia:        ["Lamia", "Lamía", "Lâmia"],
  larissa:      ["Larissa", "Larisa", "Larissa"],
  santorini:    ["Santorini", "Santorini", "Santorini"],
  lefkada:      ["Lefkada", "Léucade", "Lêucade"],
  kavala:       ["Kavala", "Kavala", "Kavala"],
  ioannina:     ["Ioannina", "Ioánina", "Ioânina"],
  syros:        ["Syros", "Siros", "Siros"],
  mykonos:      ["Mykonos", "Míconos", "Míconos"],
  cyprus:       ["Cyprus", "Chipre", "Chipre"]
};

/* Country names per language: [en, es, pt] */
window.NGLG_COUNTRIES = {
  "IRELAND": ["Ireland", "Irlanda", "Irlanda"],
  "SCOTLAND": ["Scotland", "Escocia", "Escócia"],
  "ITALY": ["Italy", "Italia", "Itália"],
  "ESTONIA": ["Estonia", "Estonia", "Estônia"],
  "LATVIA": ["Latvia", "Letonia", "Letônia"],
  "MONACO": ["Monaco", "Mónaco", "Mônaco"],
  "ALBANIA": ["Albania", "Albania", "Albânia"],
  "GEORGIA": ["Georgia", "Georgia", "Geórgia"],
  "LIBERIA": ["Liberia", "Liberia", "Libéria"],
  "SOUTH AFRICA": ["South Africa", "Sudáfrica", "África do Sul"],
  "IVORY COAST": ["Côte d'Ivoire", "Costa de Marfil", "Costa do Marfim"],
  "CONGO": ["Congo", "Congo", "Congo"],
  "GHANA": ["Ghana", "Ghana", "Gana"],
  "NIGERIA": ["Nigeria", "Nigeria", "Nigéria"],
  "BURKINA FASO": ["Burkina Faso", "Burkina Faso", "Burkina Faso"],
  "MALI": ["Mali", "Malí", "Mali"],
  "NIGER": ["Niger", "Níger", "Níger"],
  "BENIN": ["Benin", "Benín", "Benin"],
  "GUINEA": ["Guinea", "Guinea", "Guiné"],
  "GABON": ["Gabon", "Gabón", "Gabão"],
  "TOGOLESE REPUBLIC": ["Togo", "Togo", "Togo"],
  "KAZAKHSTAN": ["Kazakhstan", "Kazajistán", "Cazaquistão"],
  "PHILIPPINES": ["Philippines", "Filipinas", "Filipinas"],
  "CANADA": ["Canada", "Canadá", "Canadá"],
  "USA": ["United States", "Estados Unidos", "Estados Unidos"],
  "BELIZE": ["Belize", "Belice", "Belize"],
  "GUATEMALA": ["Guatemala", "Guatemala", "Guatemala"],
  "EL SALVADOR": ["El Salvador", "El Salvador", "El Salvador"],
  "NICARAGUA": ["Nicaragua", "Nicaragua", "Nicarágua"],
  "HONDURAS": ["Honduras", "Honduras", "Honduras"],
  "MEXICO": ["Mexico", "México", "México"],
  "BARBADOS": ["Barbados", "Barbados", "Barbados"],
  "PUERTO RICO": ["Puerto Rico", "Puerto Rico", "Porto Rico"],
  "DOMINICAN REPUBLIC": ["Dominican Republic", "República Dominicana", "República Dominicana"],
  "BRAZIL": ["Brazil", "Brasil", "Brasil"],
  "COLOMBIA": ["Colombia", "Colombia", "Colômbia"],
  "PERU": ["Peru", "Perú", "Peru"],
  "ECUADOR": ["Ecuador", "Ecuador", "Equador"],
  "VENEZUELA": ["Venezuela", "Venezuela", "Venezuela"],
  "BOLIVIA": ["Bolivia", "Bolivia", "Bolívia"]
};

/* Grand Masters since 1986: [term, name] */
window.NGLG_GRAND_MASTERS = [
  ["1986–1988", "Stephanos Paipetis"],
  ["1988–1991", "Efstathios Liakopoulos"],
  ["1991–1993", "George Vassiliou"],
  ["1993–1995", "Leonidas Logothetis"],
  ["1995–1997", "Orpheus-George Manos"],
  ["1997–1999", "Pavlos Kyriakongonas"],
  ["1999–2004", "George Kaminaris"],
  ["2004–2006", "Hermes Ioannides"],
  ["2006–2010", "Dimitrios Kontesis"],
  ["2010–2011", "Dimitrios Mamas"],
  ["2011–2014", "Justinian Corvessis"],
  ["2014–2018", "Stylianos Fassoulas"],
  ["2018–2024", "George Deligiorgis"],
  ["2024–", "Ioannis Benetatos"]
];

/* The six founding Lodges of 7 June 1986: [no, name, city key or label] */
window.NGLG_FOUNDERS = [
  [1, "Palaion Patron Germanos", "patras"],
  [2, "Acropolis", "athens"],
  [3, "Parthenon", "athens"],
  [4, "Miaoulis", "piraeus"],
  [5, "Pistis", "piraeus"],
  [6, "Omonia", "chios"]
];
window.NGLG_CITIES.chios = ["Chios Island", "Isla de Quíos", "Ilha de Quios"];
