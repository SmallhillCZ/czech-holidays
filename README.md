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

Each holiday has its day (`d`), month (`m`) and official name (`name`) in Czech (`cs`) and English (`en`).

```json
[
  {"d": 1, "m": 1, "name": {"cs": "Den obnovy samostatného českého státu a Nový rok", "en": "Restoration Day of the Independent Czech State and New Year's Day"}},
  {"d": 10, "m": 4, "name": {"cs": "Velký pátek", "en": "Good Friday"}},
  {"d": 13, "m": 4, "name": {"cs": "Velikonoční pondělí", "en": "Easter Monday"}},
  {"d": 1, "m": 5, "name": {"cs": "Svátek práce", "en": "Labour Day"}},
  {"d": 8, "m": 5, "name": {"cs": "Den vítězství", "en": "Victory Day"}},
  {"d": 5, "m": 7, "name": {"cs": "Den slovanských věrozvěstů Cyrila a Metoděje", "en": "Saints Cyril and Methodius Day"}},
  {"d": 6, "m": 7, "name": {"cs": "Den upálení mistra Jana Husa", "en": "Jan Hus Day"}},
  {"d": 28, "m": 9, "name": {"cs": "Den české státnosti", "en": "Czech Statehood Day"}},
  {"d": 28, "m": 10, "name": {"cs": "Den vzniku samostatného československého státu", "en": "Independent Czechoslovak State Day"}},
  {"d": 17, "m": 11, "name": {"cs": "Den boje za svobodu a demokracii a Mezinárodní den studentstva", "en": "Struggle for Freedom and Democracy Day and International Students' Day"}},
  {"d": 24, "m": 12, "name": {"cs": "Štědrý den", "en": "Christmas Eve"}},
  {"d": 25, "m": 12, "name": {"cs": "1. svátek vánoční", "en": "Christmas Day"}},
  {"d": 26, "m": 12, "name": {"cs": "2. svátek vánoční", "en": "St. Stephen's Day"}}
]
```
