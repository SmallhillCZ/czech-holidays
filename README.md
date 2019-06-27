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

```json
[
  {"d": 1, "m": 1},
  {"d": 10, "m": 4},
  {"d": 13, "m": 4},
  {"d": 1, "m": 5},
  {"d": 8, "m": 5},
  {"d": 5, "m": 7},
  {"d": 6, "m": 7},
  {"d": 28, "m": 9},
  {"d": 28, "m": 10},
  {"d": 17, "m": 11},
  {"d": 24, "m": 12},
  {"d": 25, "m": 12},
  {"d": 26, "m": 12}
]
```
