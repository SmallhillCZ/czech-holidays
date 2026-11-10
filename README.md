# Czech Holidays

A function that lists public holidays in the Czech Republic in the specified year.

The package ships both ES module and CommonJS builds, so it works with modern
bundlers (Angular, Vite, webpack, esbuild) without CommonJS optimization
bailouts, as well as with `require()`.

## Usage

ES modules / TypeScript
```typescript
import { CzechHolidays, HolidayDate } from "czech-holidays";

const holidays2020: HolidayDate[] = CzechHolidays(2020);
```

CommonJS
```javascript
const { CzechHolidays } = require("czech-holidays");

const holidays2020 = CzechHolidays(2020);
```

## Output

Each holiday has its day (`d`), month (`m`) and official name (`name`) in Czech (`cs`), English (`en`), German (`de`) and French (`fr`).

Translations follow Wikipedia: [en](https://en.wikipedia.org/wiki/Public_holidays_in_the_Czech_Republic), [de](https://de.wikipedia.org/wiki/Feiertage_in_Tschechien), [fr](https://fr.wikipedia.org/wiki/Jour_f%C3%A9ri%C3%A9#R%C3%A9publique_tch%C3%A8que).

```json
[
  {"d": 1, "m": 1, "name": {"cs": "Den obnovy samostatného českého státu; Nový rok", "en": "Restoration Day of the Independent Czech State; New Year's Day", "de": "Tag der Erneuerung des selbständigen tschechischen Staates; Neujahr", "fr": "Jour du renouvellement de l'indépendance de l'État tchèque; Jour de l'an"}},
  {"d": 10, "m": 4, "name": {"cs": "Velký pátek", "en": "Good Friday", "de": "Karfreitag", "fr": "Vendredi saint"}},
  {"d": 13, "m": 4, "name": {"cs": "Velikonoční pondělí", "en": "Easter Monday", "de": "Ostermontag", "fr": "Lundi de Pâques"}},
  {"d": 1, "m": 5, "name": {"cs": "Svátek práce", "en": "Labour Day", "de": "Tag der Arbeit", "fr": "Fête du Travail"}},
  {"d": 8, "m": 5, "name": {"cs": "Den vítězství", "en": "Victory Day", "de": "Tag der Befreiung", "fr": "Jour de la victoire"}},
  {"d": 5, "m": 7, "name": {"cs": "Den slovanských věrozvěstů Cyrila a Metoděje", "en": "Saints Cyril and Methodius Day", "de": "Tag der Slawenapostel Kyrill und Method", "fr": "Jour des apôtres des Slaves Cyrille et Méthode"}},
  {"d": 6, "m": 7, "name": {"cs": "Den upálení mistra Jana Husa", "en": "Jan Hus Day", "de": "Tag der Verbrennung von Jan Hus", "fr": "Jour de la mort sur le bûcher de Jan Hus"}},
  {"d": 28, "m": 9, "name": {"cs": "Den české státnosti", "en": "Statehood Day", "de": "Tag der Tschechischen Staatlichkeit", "fr": "Jour de l'État tchèque"}},
  {"d": 28, "m": 10, "name": {"cs": "Den vzniku samostatného československého státu", "en": "Independent Czechoslovak State Day", "de": "Tag der Entstehung eines selbstständigen tschechoslowakischen Staates", "fr": "Jour de la naissance de la Tchécoslovaquie"}},
  {"d": 17, "m": 11, "name": {"cs": "Den boje za svobodu a demokracii a Mezinárodní den studentstva", "en": "Struggle for Freedom and Democracy Day", "de": "Tag des Kampfes für Freiheit und Demokratie und Internationaler Studententag", "fr": "Jour commémoratif de la Révolution de velours"}},
  {"d": 24, "m": 12, "name": {"cs": "Štědrý den", "en": "Christmas Eve", "de": "Heiliger Abend", "fr": "Jour généreux"}},
  {"d": 25, "m": 12, "name": {"cs": "1. svátek vánoční", "en": "Christmas Day", "de": "1. Weihnachtsfeiertag", "fr": "Premier jour férié de Noël"}},
  {"d": 26, "m": 12, "name": {"cs": "2. svátek vánoční", "en": "Second Day of Christmas", "de": "2. Weihnachtsfeiertag", "fr": "Second jour férié de Noël"}}
]
```
