export type HolidayLanguage = "cs" | "en" | "de" | "fr";

export type HolidayDate = { d: number, m: number, name: Record<HolidayLanguage, string> };

const holidayDates: HolidayDate[] = [
  { d: 1, m: 1, name: { cs: "Den obnovy samostatného českého státu; Nový rok", en: "Restoration Day of the Independent Czech State; New Year's Day", de: "Tag der Erneuerung des selbständigen tschechischen Staates; Neujahr", fr: "Jour du renouvellement de l'indépendance de l'État tchèque; Jour de l'an" } },
  { d: 1, m: 5, name: { cs: "Svátek práce", en: "Labour Day", de: "Tag der Arbeit", fr: "Fête du Travail" } },
  { d: 8, m: 5, name: { cs: "Den vítězství", en: "Victory Day", de: "Tag der Befreiung", fr: "Jour de la victoire" } },
  { d: 5, m: 7, name: { cs: "Den slovanských věrozvěstů Cyrila a Metoděje", en: "Saints Cyril and Methodius Day", de: "Tag der Slawenapostel Kyrill und Method", fr: "Jour des apôtres des Slaves Cyrille et Méthode" } },
  { d: 6, m: 7, name: { cs: "Den upálení mistra Jana Husa", en: "Jan Hus Day", de: "Tag der Verbrennung von Jan Hus", fr: "Jour de la mort sur le bûcher de Jan Hus" } },
  { d: 28, m: 9, name: { cs: "Den české státnosti", en: "Statehood Day", de: "Tag der Tschechischen Staatlichkeit", fr: "Jour de l'État tchèque" } },
  { d: 28, m: 10, name: { cs: "Den vzniku samostatného československého státu", en: "Independent Czechoslovak State Day", de: "Tag der Entstehung eines selbstständigen tschechoslowakischen Staates", fr: "Jour de la naissance de la Tchécoslovaquie" } },
  { d: 17, m: 11, name: { cs: "Den boje za svobodu a demokracii a Mezinárodní den studentstva", en: "Struggle for Freedom and Democracy Day", de: "Tag des Kampfes für Freiheit und Demokratie und Internationaler Studententag", fr: "Jour commémoratif de la Révolution de velours" } },
  { d: 24, m: 12, name: { cs: "Štědrý den", en: "Christmas Eve", de: "Heiliger Abend", fr: "Jour généreux" } },
  { d: 25, m: 12, name: { cs: "1. svátek vánoční", en: "Christmas Day", de: "1. Weihnachtsfeiertag", fr: "Premier jour férié de Noël" } },
  { d: 26, m: 12, name: { cs: "2. svátek vánoční", en: "Second Day of Christmas", de: "2. Weihnachtsfeiertag", fr: "Second jour férié de Noël" } }
];

// https://gist.github.com/johndyer/0dffbdd98c2046f41180c051f378f343
function getEaster(year: number): { d: number, m: number } {
  var f = Math.floor,
    // Golden Number - 1
    G = year % 19,
    C = f(year / 100),
    // related to Epact
    H = (C - f(C / 4) - f((8 * C + 13) / 25) + 19 * G + 15) % 30,
    // number of days from 21 March to the Paschal full moon
    I = H - f(H / 28) * (1 - f(29 / (H + 1)) * f((21 - G) / 11)),
    // weekday for the Paschal full moon
    J = (year + f(year / 4) + I + 2 - C + f(C / 4)) % 7,
    // number of days from 21 March to the Sunday on or before the Paschal full moon
    L = I - J,
    month = 3 + f((L + 40) / 44),
    day = L + 28 - 31 * f(month / 4);

  return { m: month, d: day };
}

export function CzechHolidays(year: number): HolidayDate[] {
  const holidays: HolidayDate[] = JSON.parse(JSON.stringify(holidayDates));

  const easterSunday = getEaster(year);
  const easterFridayDate = new Date(year, easterSunday.m - 1, easterSunday.d);
  easterFridayDate.setDate(easterFridayDate.getDate() - 2);
  const easterMondayDate = new Date(year, easterSunday.m - 1, easterSunday.d);
  easterMondayDate.setDate(easterMondayDate.getDate() + 1);

  holidays.push({ d: easterFridayDate.getDate(), m: easterFridayDate.getMonth() + 1, name: { cs: "Velký pátek", en: "Good Friday", de: "Karfreitag", fr: "Vendredi saint" } });
  holidays.push({ d: easterMondayDate.getDate(), m: easterMondayDate.getMonth() + 1, name: { cs: "Velikonoční pondělí", en: "Easter Monday", de: "Ostermontag", fr: "Lundi de Pâques" } });

  holidays.sort((a, b) => a.m - b.m || a.d - b.d);

  return holidays;
}