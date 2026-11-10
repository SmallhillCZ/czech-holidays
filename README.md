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

Each holiday has its day (`d`), month (`m`) and official Czech name (`name`).

```json
[
  {"d": 1, "m": 1, "name": "Den obnovy samostatného českého státu a Nový rok"},
  {"d": 10, "m": 4, "name": "Velký pátek"},
  {"d": 13, "m": 4, "name": "Velikonoční pondělí"},
  {"d": 1, "m": 5, "name": "Svátek práce"},
  {"d": 8, "m": 5, "name": "Den vítězství"},
  {"d": 5, "m": 7, "name": "Den slovanských věrozvěstů Cyrila a Metoděje"},
  {"d": 6, "m": 7, "name": "Den upálení mistra Jana Husa"},
  {"d": 28, "m": 9, "name": "Den české státnosti"},
  {"d": 28, "m": 10, "name": "Den vzniku samostatného československého státu"},
  {"d": 17, "m": 11, "name": "Den boje za svobodu a demokracii a Mezinárodní den studentstva"},
  {"d": 24, "m": 12, "name": "Štědrý den"},
  {"d": 25, "m": 12, "name": "1. svátek vánoční"},
  {"d": 26, "m": 12, "name": "2. svátek vánoční"}
]
```
