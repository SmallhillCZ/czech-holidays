# Czech Holidays

A function that lists public holidays in the Czech Republic in the specified year.

## Usage

JavaScript
```javascript
const { CzechHolidays } = require("czech-holidays");

const holidays2020 = CzechHolidays(2020);

```

TypeScript
```typescript

import { CzechHolidays, HolidayDate } from "czech-holidays";

const holidays2020: HolidayDate[] = CzechHolidays(2020);
```

## Output

Each holiday has its day (`d`), month (`m`) and official name in Czech (`name`) and English (`nameEn`).

```json
[
  {"d": 1, "m": 1, "name": "Den obnovy samostatného českého státu a Nový rok", "nameEn": "Restoration Day of the Independent Czech State and New Year's Day"},
  {"d": 10, "m": 4, "name": "Velký pátek", "nameEn": "Good Friday"},
  {"d": 13, "m": 4, "name": "Velikonoční pondělí", "nameEn": "Easter Monday"},
  {"d": 1, "m": 5, "name": "Svátek práce", "nameEn": "Labour Day"},
  {"d": 8, "m": 5, "name": "Den vítězství", "nameEn": "Victory Day"},
  {"d": 5, "m": 7, "name": "Den slovanských věrozvěstů Cyrila a Metoděje", "nameEn": "Saints Cyril and Methodius Day"},
  {"d": 6, "m": 7, "name": "Den upálení mistra Jana Husa", "nameEn": "Jan Hus Day"},
  {"d": 28, "m": 9, "name": "Den české státnosti", "nameEn": "Czech Statehood Day"},
  {"d": 28, "m": 10, "name": "Den vzniku samostatného československého státu", "nameEn": "Independent Czechoslovak State Day"},
  {"d": 17, "m": 11, "name": "Den boje za svobodu a demokracii a Mezinárodní den studentstva", "nameEn": "Struggle for Freedom and Democracy Day and International Students' Day"},
  {"d": 24, "m": 12, "name": "Štědrý den", "nameEn": "Christmas Eve"},
  {"d": 25, "m": 12, "name": "1. svátek vánoční", "nameEn": "Christmas Day"},
  {"d": 26, "m": 12, "name": "2. svátek vánoční", "nameEn": "St. Stephen's Day"}
]
```
