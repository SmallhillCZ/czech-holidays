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

Each holiday has its day (`d`), month (`m`) and official name (`name`) in Czech (`cs`), English (`en`), German (`de`) and French (`fr`).

```json
[
  {"d": 1, "m": 1, "name": {"cs": "Den obnovy samostatného českého státu a Nový rok", "en": "Restoration Day of the Independent Czech State and New Year's Day", "de": "Tag der Erneuerung des selbständigen tschechischen Staates und Neujahr", "fr": "Jour de la restauration de l'État tchèque indépendant et Jour de l'An"}},
  {"d": 10, "m": 4, "name": {"cs": "Velký pátek", "en": "Good Friday", "de": "Karfreitag", "fr": "Vendredi saint"}},
  {"d": 13, "m": 4, "name": {"cs": "Velikonoční pondělí", "en": "Easter Monday", "de": "Ostermontag", "fr": "Lundi de Pâques"}},
  {"d": 1, "m": 5, "name": {"cs": "Svátek práce", "en": "Labour Day", "de": "Tag der Arbeit", "fr": "Fête du Travail"}},
  {"d": 8, "m": 5, "name": {"cs": "Den vítězství", "en": "Victory Day", "de": "Tag des Sieges", "fr": "Jour de la Victoire"}},
  {"d": 5, "m": 7, "name": {"cs": "Den slovanských věrozvěstů Cyrila a Metoděje", "en": "Saints Cyril and Methodius Day", "de": "Tag der Slawenapostel Kyrill und Method", "fr": "Fête des saints Cyrille et Méthode"}},
  {"d": 6, "m": 7, "name": {"cs": "Den upálení mistra Jana Husa", "en": "Jan Hus Day", "de": "Jan-Hus-Tag", "fr": "Jour de Jan Hus"}},
  {"d": 28, "m": 9, "name": {"cs": "Den české státnosti", "en": "Czech Statehood Day", "de": "Tag der tschechischen Staatlichkeit", "fr": "Jour de l'État tchèque"}},
  {"d": 28, "m": 10, "name": {"cs": "Den vzniku samostatného československého státu", "en": "Independent Czechoslovak State Day", "de": "Tag der Gründung des selbständigen tschechoslowakischen Staates", "fr": "Jour de la fondation de l'État tchécoslovaque indépendant"}},
  {"d": 17, "m": 11, "name": {"cs": "Den boje za svobodu a demokracii a Mezinárodní den studentstva", "en": "Struggle for Freedom and Democracy Day and International Students' Day", "de": "Tag des Kampfes für Freiheit und Demokratie und Internationaler Studententag", "fr": "Journée de la lutte pour la liberté et la démocratie et Journée internationale des étudiants"}},
  {"d": 24, "m": 12, "name": {"cs": "Štědrý den", "en": "Christmas Eve", "de": "Heiligabend", "fr": "Veille de Noël"}},
  {"d": 25, "m": 12, "name": {"cs": "1. svátek vánoční", "en": "Christmas Day", "de": "Erster Weihnachtsfeiertag", "fr": "Noël"}},
  {"d": 26, "m": 12, "name": {"cs": "2. svátek vánoční", "en": "St. Stephen's Day", "de": "Zweiter Weihnachtsfeiertag", "fr": "Saint-Étienne"}}
]
```
