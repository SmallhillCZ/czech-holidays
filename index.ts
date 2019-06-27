export type HolidayDate = { d: number, m: number };

const holidayDates: HolidayDate[] = [{ d: 1, m: 1 }, { d: 1, m: 5 }, { d: 8, m: 5 }, { d: 5, m: 7 }, { d: 6, m: 7 }, { d: 28, m: 9 }, { d: 28, m: 10 }, { d: 17, m: 11 }, { d: 24, m: 12 }, { d: 25, m: 12 }, { d: 26, m: 12 }];

// https://gist.github.com/johndyer/0dffbdd98c2046f41180c051f378f343
function getEaster(year: number): HolidayDate {
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

  holidays.push({ m: easterFridayDate.getMonth() + 1, d: easterFridayDate.getDate() });
  holidays.push({ m: easterMondayDate.getMonth() + 1, d: easterMondayDate.getDate() });

  holidays.sort((a, b) => a.m - b.m || a.d - b.d);

  return holidays;
}