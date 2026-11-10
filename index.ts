export type HolidayDate = { d: number, m: number, name: string, nameEn: string };

const holidayDates: HolidayDate[] = [
  { d: 1, m: 1, name: "Den obnovy samostatného českého státu a Nový rok", nameEn: "Restoration Day of the Independent Czech State and New Year's Day" },
  { d: 1, m: 5, name: "Svátek práce", nameEn: "Labour Day" },
  { d: 8, m: 5, name: "Den vítězství", nameEn: "Victory Day" },
  { d: 5, m: 7, name: "Den slovanských věrozvěstů Cyrila a Metoděje", nameEn: "Saints Cyril and Methodius Day" },
  { d: 6, m: 7, name: "Den upálení mistra Jana Husa", nameEn: "Jan Hus Day" },
  { d: 28, m: 9, name: "Den české státnosti", nameEn: "Czech Statehood Day" },
  { d: 28, m: 10, name: "Den vzniku samostatného československého státu", nameEn: "Independent Czechoslovak State Day" },
  { d: 17, m: 11, name: "Den boje za svobodu a demokracii a Mezinárodní den studentstva", nameEn: "Struggle for Freedom and Democracy Day and International Students' Day" },
  { d: 24, m: 12, name: "Štědrý den", nameEn: "Christmas Eve" },
  { d: 25, m: 12, name: "1. svátek vánoční", nameEn: "Christmas Day" },
  { d: 26, m: 12, name: "2. svátek vánoční", nameEn: "St. Stephen's Day" }
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

  holidays.push({ d: easterFridayDate.getDate(), m: easterFridayDate.getMonth() + 1, name: "Velký pátek", nameEn: "Good Friday" });
  holidays.push({ d: easterMondayDate.getDate(), m: easterMondayDate.getMonth() + 1, name: "Velikonoční pondělí", nameEn: "Easter Monday" });

  holidays.sort((a, b) => a.m - b.m || a.d - b.d);

  return holidays;
}